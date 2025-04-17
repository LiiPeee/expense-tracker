import { CreateTransactionInput } from "@/domain/use-case/transaction/create-transaction-usecase";
import { PrismaClient } from "@prisma/client";
import { NotFoundError } from "../../domain/helper/errors/api-error";
import { GetTransactionInput } from "../../domain/inputAndOutput";
import { GetTransactionDto } from "../../domain/models/dto/get-transaction-dto";
import { ITransactionRepository } from "../../domain/repository/ITransactionRepository";

export class TransactionRepository implements ITransactionRepository {
  constructor(private readonly prisma: PrismaClient) { }

  public static createClient(prismaClient: PrismaClient) {
    return new TransactionRepository(prismaClient);
  }
  async create(input: CreateTransactionInput): Promise<any> {

    const newTransaction = await this.prisma.transaction.create({
      data: {
        ...input,
        account: {
          connect: { email: input.email },
        },
        contact: {
          connect: { id: input.contact.id }
        },
        category: {
          connect: { id: input.category.id }
        }
      }
    });
    // const transactionDto = {
    //   recurrence: newTransaction?.recurrence as any,
    //   value: newTransaction?.value,
    //   formatPayment: newTransaction?.paymentName,
    //   paid: newTransaction?.paid,
    //   category: newTransaction.categoryId,
    //   number_of_installments: newTransaction?.number_of_installments as any,
    //   contact: newTransaction.contactId
    // };
    return newTransaction;

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
        formatPayment: res.paymentName,
        paid: res.paid,
        comment: res.comment ? res.comment : null,
        recurrence: res.recurrence,
        number_of_installments: res.number_of_installments as any,
        category: res.categoryId,
      })
    })
    return response;
  }
  async getTransactionByContact(input: any): Promise<any> {

    const contact = await this.prisma.contact.findFirst({
      where: { email: input }, include: {
        transactions: true,
      }
    });
    return contact;
  }
}
