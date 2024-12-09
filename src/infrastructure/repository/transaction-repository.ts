import { PrismaClient } from "@prisma/client";
import { CreateTransactionInput, GetTransactionInput, Recurrence } from "../../domain/inputAndOutput";
import { Category, TransctionDto } from "../../domain/models/dto/create-transaction-dto";
import { GetTransactionDto } from "../../domain/models/dto/get-transaction-dto";
import { ITransactionRepository } from "../../domain/repository/ITransactionRepository";
import { NotFoundError } from "../../presentation/errors/api-error";

export class TransactionRepository implements ITransactionRepository {
  constructor(private readonly prisma: PrismaClient) { }

  public static createClient(prismaClient: PrismaClient) {
    return new TransactionRepository(prismaClient);
  }
  async create(email: string, data: CreateTransactionInput): Promise<TransctionDto> {
    const contacts = await this.prisma.contact.findFirst({ where: { email: data.transaction.contacts.email } })

    if (contacts) {
      const newTransaction = await this.prisma.transaction.create({
        data: {
          ...data.transaction,
          account: {
            connect: { email: email },
          },
          contacts: {
            create: {
              name: contacts.name,
              phone: contacts.phone,
              email: contacts.email
              ,
            },
          },
        }
      });
      const transactionDto = {
        recurrence: newTransaction?.recurrence as any as Recurrence,
        value: newTransaction?.value,
        formatPayment: newTransaction?.formatPayment,
        paid: newTransaction?.paid,
        category: newTransaction.category as any as Category,
        number_of_installments: newTransaction?.number_of_installments as any,
      };
      return new TransctionDto(transactionDto);

    }

    const newTransaction = await this.prisma.transaction.create({
      data: {
        ...data.transaction,
        account: {
          connect: { email: email },
        },
        contacts: {
          create: {
            name: data.transaction.contacts.name,
            phone: data.transaction.contacts.phone,
            email: data.transaction.contacts.email
          },
        },
      },
    });
    const transactionDto = {
      recurrence: newTransaction?.recurrence as any as Recurrence,
      value: newTransaction?.value,
      formatPayment: newTransaction?.formatPayment,
      paid: newTransaction?.paid,
      category: newTransaction.category as any as Category,
      number_of_installments: newTransaction?.number_of_installments as any,
    };
    return new TransctionDto(transactionDto);
  }

  async getByMonth(input: GetTransactionInput): Promise<GetTransactionDto[] | null> {
    const start = new Date(input.year, input.month - 1, 1)
    const end = new Date(input.year, input.month, 0, 23, 59, 59, 999)


    const transaction = await this.prisma.transaction.findMany({
      skip: input.skip,
      take: input.take,
      where: {
        accountId: input.id,
        createDate: {
          gte: start,
          lt: end
        }
      }
    })
    if (!transaction) throw new NotFoundError("don't have any transaction")

    const response = transaction.map((res) => {
      return new GetTransactionDto({
        createDate: res.createDate.toLocaleDateString("pt-BR"),
        value: res.value,
        formatPayment: res.formatPayment,
        paid: res.paid,
        comment: res.comment ? res.comment : null,
        recurrence: res.recurrence as any as Recurrence,
        number_of_installments: res.number_of_installments as any,
        category: res.category as any as Category,
      })
    })
    return response;
  }
}
