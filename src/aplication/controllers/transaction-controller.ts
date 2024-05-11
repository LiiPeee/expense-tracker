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
}
