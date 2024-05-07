import { PrismaClient } from "@prisma/client";
import { Category, TransctionDto } from "../../domain/dto/transaction-dto";
import { CreateTransactionInput } from "../../domain/inputAndOutput";


export class TransactionRepository {
  private prisma = new PrismaClient();

  async createTransaction(email: string,data: CreateTransactionInput): Promise<TransctionDto | null> {
    const seekAccount = await this.prisma.account.findUnique({
      where: {
        email: email,
      },
    });
    if(seekAccount && seekAccount.balance !== null && seekAccount.balance !== undefined){
      // if(data.value > seekAccount.balance){
      //   throw new DataBaseError('you couldnt make that transaction')
      // }
      if(data.category === 'RECEIVE'){
        
          const newBalance = seekAccount.balance + data.value;
  
          const updateAccount = await this.prisma.account.update({
            where:{ id: seekAccount.id},
            data: {balance: newBalance}
          })
  
          const newTransaction = await this.prisma.transaction.create({
            data: {
            ...data,
              account: {
                connect: { id: updateAccount?.id },
              },
              contacts: {
                create: data.contacts.map((contact) => ({
                  name: contact.name,
                  phone: contact.phone,
                })),
              },
            } ,
          })
          const result = {
            value: newTransaction?.value,
            formatPayment: newTransaction?.formatPayment,
            paid:newTransaction?.paid,
            category: newTransaction.category as unknown as Category,
          }
          return new TransctionDto(result);
      } if(data.category === 'EXPENSE'){

        const newBalance = seekAccount.balance - data.value;
  
        const updateAccount = await this.prisma.account.update({
          where:{ id: seekAccount.id},
          data: {balance: newBalance}
        })

        const newTransaction = await this.prisma.transaction.create({
          data: {
          ...data,
            account: {
              connect: { id: updateAccount?.id },
            },
            contacts: {
              create: data.contacts.map((contact) => ({
                name: contact.name,
                phone: contact.phone,
              })),
            },
          } ,
        })
        const result = {
          value: newTransaction?.value,
          formatPayment: newTransaction?.formatPayment,
          paid:newTransaction?.paid,
          category: newTransaction.category as unknown as Category,
        }
        return new TransctionDto(result);
      }
      
      
    }
    return null;
    
  }
}
