import { PrismaClient } from "@prisma/client";
import { ITransaction } from "../../domain/entity/transaction";
import { GetTransactionDto } from "../../domain/models/dto/get-transaction-dto";
import { ITransactionRepository } from "../../domain/repository/ITransactionRepository";
import { GetTransactionByMonthInput } from "../../domain/use-case/transaction/get-transaction-by-month-usecase";
import { NotFoundError } from "../errors/not-found-error";

export class TransactionRepository implements ITransactionRepository {
  constructor(private readonly prisma: PrismaClient) {}

  public static createClient(prismaClient: PrismaClient): TransactionRepository {
    return new TransactionRepository(prismaClient);
  }
  async create(input: ITransaction): Promise<any> {
    const response = await this.prisma.transaction.create({
      data: {
        ...input,
        account: {
          connect: { email: input.account.email },
        },
        contact: {
          connect: { email: input.contact.email },
        },
        category: {
          connect: { name: input.category.name },
        },
      },
    });

    return response;
  }

  async paidTransaction(id: string): Promise<void> {
    await this.prisma.transaction.update({
      where: {
        id: id,
      },
      data: {
        paid: true,
      },
    });
  }

  async getByMonth(input: GetTransactionByMonthInput): Promise<GetTransactionDto[] | null> {
    const start = new Date(input.year, input.month - 1, 1);
    const end = new Date(input.year, input.month, 0, 23, 59, 59, 999);

    const reponseDB = await this.prisma.transaction.findMany({
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
    if (!reponseDB) throw new NotFoundError("don't have any transaction");

    const response = reponseDB.map((res: any) => {
      return new GetTransactionDto({
        createDate: res.createDate.toLocaleDateString("pt-BR"),
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

  async getMany(accountId: string): Promise<any> {
    const response = await this.prisma.transaction.findMany({
      where: {
        account: {
          id: accountId,
        },
      },
    });
    return response;
  }
}
