import { PrismaClient } from '@prisma/client';
import { NotFoundError } from '../../data-layer/errors/not-found-error';
import { ITransaction } from '../../domain/entity/transaction';
import { GetTransactionDto } from '../../domain/models/dto/get-transaction-dto';
import { ITransactionRepository } from '../../domain/repository/ITransactionRepository';
import { GetTransactionByMonthInput } from '../../domain/use-case/transaction/get-transaction-by-month-usecase';

export class TransactionRepository implements ITransactionRepository {
  constructor(private readonly prisma: PrismaClient) {}

  public static createClient(prismaClient: PrismaClient) {
    return new TransactionRepository(prismaClient);
  }
  async create(input: ITransaction): Promise<any> {
    const newTransaction = await this.prisma.transaction.create({
      data: {
        ...input,
        account: {
          connect: { email: input.account.email },
        },
        contact: {
          connect: { email: input.contact.email },
        },
        category: {
          connect: { id: input.category.id },
        },
      },
    });

    return newTransaction;
  }

  async getByMonth(input: GetTransactionByMonthInput): Promise<GetTransactionDto[] | null> {
    const start = new Date(input.year, input.month - 1, 1);
    const end = new Date(input.year, input.month, 0, 23, 59, 59, 999);

    const transaction = await this.prisma.transaction.findMany({
      skip: input.skip,
      take: input.take,
      where: {
        accountId: input.id,
        createDate: {
          gte: start,
          lt: end,
        },
      },
    });
    if (!transaction) throw new NotFoundError("don't have any transaction");

    const response = transaction.map((res) => {
      return new GetTransactionDto({
        createDate: res.createDate.toLocaleDateString('pt-BR'),
        value: res.value,
        formatPayment: res.paymentName,
        paid: res.paid,
        comment: res.comment ? res.comment : null,
        recurrence: res.recurrence as any,
        number_of_installments: res.number_of_installments as any,
        category: res.categoryId as any,
      });
    });
    return response;
  }

  async getMany(input: any): Promise<any> {
    const transaction = await this.prisma.transaction.findMany({
      where: {
        accountId: input.id,
      },
    });

    return transaction;
  }
}
