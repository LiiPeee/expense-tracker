// import { ITransaction } from "../entity/transaction/transaction";

// export class TransactionRepository {
//   constructor() {}
//   async createTransaction(data: any): Promise<ITransaction | any> {
//     const account: any = await AccountModel.findOne({
//       email: data.email,
//     });
//     if (!account) {
//       throw new Error("Você não pode fazer uma transação ser ter conta");
//     }
//     const {
//       contact: [{ name, phone }],
//       category: [{ typeTransaction, recurrence }],
//     } = data;
//     const contact = await ContactModel.create({ name, phone });
//     const category = await CategoryModel.create({
//       typeTransaction,
//       recurrence,
//     });
//     const transactionData = {
//       ...data,
//       contact: contact._id,
//       category: category._id,
//       account: account._id,
//     };

//     const criandoTransacao = this.transaction.create(transactionData);

//     return criandoTransacao;
//   }
//   //   async getTransactionById(input: any) {
//   //     const { id } = input;
//   //     const pegarTransacao = await prisma.transaction.findFirst({
//   //       where: {
//   //         id: parseInt(id),
//   //       },
//   //       include: { category: true },
//   //     });
//   //     return pegarTransacao;
//   //   }
//   //   async getAllTransaction() {
//   //     const pegarTodasTransacoes = await prisma.transaction.findMany();
//   //     return pegarTodasTransacoes;
//   //   }
//   //   async updateTransaction(inputId: any, input: any) {
//   //     const { id } = inputId;
//   //     const pegarTransacao = await prisma.transaction.findFirst({
//   //       where: {
//   //         id: parseInt(id),
//   //       },
//   //     });
//   //     if (pegarTransacao) {
//   //       const atualizarTransacao = await prisma.transaction.update({
//   //         where: {
//   //           id: parseInt(id),
//   //         },
//   //         data: {
//   //           value: input?.value,
//   //           paid: input?.paid,
//   //           comment: input?.comment,
//   //           formatPayment: input?.formatPayment,
//   //         },
//   //       });
//   //       return atualizarTransacao;
//   //     }
//   //   }
//   //   async deleteTransaction(input: any): Promise<any> {
//   //     const { id } = input;
//   //     const deletar = await prisma.transaction.delete({
//   //       where: {
//   //         id: parseInt(id),
//   //       },
//   //       include: {
//   //         category: true,
//   //         contact: true,
//   //       },
//   //     });
//   //     return deletar;
//   //   }
// }
