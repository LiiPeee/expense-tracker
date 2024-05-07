import { Request, Response } from "express";
import { BadRequestError, DataBaseError } from "../../data/middlaware/api-error";
import { TransactionUseCase } from "../../data/usecase/transaction-usecase";

export class TransactionController {
  public transactionUseCase: TransactionUseCase;
  constructor(transactionUseCase: TransactionUseCase) {
    this.transactionUseCase = transactionUseCase;
  }
  async createTransaction(req: Request, res: Response): Promise<any> {
    const { email} = req.body.email;
    const {  value,formatPayment,paid,contacts} = req.body.transaction 
    if(!email && !value && !formatPayment && !paid  && !contacts.name && contacts.phone) throw new BadRequestError('you dont send parameters necessary')
    let transaction = await this.transactionUseCase.createTransaction(
        req.body.email, req.body.transaction
      );
    if(!transaction) throw new DataBaseError('somenthing is wrong in Database')
    return res.json(transaction).status(201)
  
  }
  // async getTransactionById(req: Request, res: Response) {
  //   try {
  //     const getTransacao = await this.transactionUseCase.getTransactionById(
  //       req.params
  //     );
  //     res.json(getTransacao);
  //   } catch (err) {
  //     res.status(500).json({ err });
  //   }
  // }
  // async getAllTransaction(req: Request, res: Response) {
  //   try {
  //     const getTodasTransacoes =
  //       await this.transactionUseCase?.getAllTransaction();
  //     res.json(getTodasTransacoes);
  //   } catch (err: any) {
  //     res.status(500).json({ err });
  //   }
  // }
  // async updateTransaction(req: Request, res: Response) {
  //   try {
  //     const attTransacao = await this.transactionUseCase?.updateTransaction(
  //       req.params.id,
  //       req.body
  //     );
  //     res.json(attTransacao).status(200);
  //   } catch (err: any) {
  //     res.status(500).json({ err });
  //   }
  // }
  // async deleteTransactionById(req: Request, res: Response) {
  //   try {
  //     await this.transactionUseCase.deleteTransaction(req.params.id);
  //     res
  //       .json({
  //         resposta: {
  //           delete: "sucess",
  //         },
  //       })
  //       .status(200);
  //   } catch (err: any) {
  //     res.status(500).json({ err });
  //   }
  // }
}
