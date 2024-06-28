import { PrismaClient } from "@prisma/client";
import { Category, TransctionDto } from "../../domain/dto/transaction-dto";
import { CreateTransactionInput } from "../../domain/inputAndOutput";


export class TransactionRepository {
  private prisma = new PrismaClient();

  async createTransaction(email: string,data: CreateTransactionInput): Promise<TransctionDto> {        
      const newTransaction = await this.prisma.transaction.create({
            data: {
            ...data,
              account: {
                connect: { email: email},
              },
              contacts: {
                create: data.contacts.map((contact) => ({
                  name: contact.name,
                  phone: contact.phone,
                })),
              },
            } ,
          });
          const result = {
            value: newTransaction?.value,
            formatPayment: newTransaction?.formatPayment,
            paid:newTransaction?.paid,
            category: newTransaction.category as any as Category,
          }
          return new TransctionDto(result);
    }
  }