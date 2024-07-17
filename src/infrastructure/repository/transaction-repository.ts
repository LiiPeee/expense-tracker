import { PrismaClient } from "@prisma/client";
import { Category, TransctionDto } from "../../domain/dto/transaction-dto";
import { CreateTransactionInput } from "../../domain/inputAndOutput";
import { ITransactionRepository } from "../../domain/repository/ITransactionRepository";

export class TransactionRepository implements ITransactionRepository {
  constructor(private readonly prisma: PrismaClient) { }


  update(email: string, data: any): Promise<any> {
    throw new Error("Method not implemented.");
  }

  get(input: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
  getMany(input: any): Promise<any> {
    throw new Error("Method not implemented.");
  }


  public static createClient(prismaClient: PrismaClient) {
    return new TransactionRepository(prismaClient);
  }
  async create(email: string, data: CreateTransactionInput): Promise<TransctionDto> {
    const newTransaction = await this.prisma.transaction.create({
      data: {
        ...data,
        account: {
          connect: { email: email },
        },
        contacts: {
          create: data.contacts.map((contact) => ({
            name: contact.name,
            phone: contact.phone,
          })),
        },
      },
    });
    const transactionDto = {
      recurrence: newTransaction.recurrence,
      value: newTransaction?.value,
      formatPayment: newTransaction?.formatPayment,
      paid: newTransaction?.paid,
      category: newTransaction.category as any as Category,
      number_of_installments: newTransaction?.number_of_installments as any,
    };
    return new TransctionDto(transactionDto);
  }

  async getByMonth(id: number, month: number, year: number): Promise<any> {
    const start = new Date(year, month - 1, 1)
    const end = new Date(year, month, 0, 23, 59, 59, 999)
    const transaction = await this.prisma.transaction.findMany({
      where: {
        accountId: id,
        installments_date: {
          gte: start,
          lt: end
        }

      }
    })
    return transaction;
  }
}
