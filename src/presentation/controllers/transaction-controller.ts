import { Request, Response } from "express";
import { CreateTransactionUseCase } from "../../data/usecase/create-transaction.usecase";
import { BadRequestError, DataBaseError } from "../errors/api-error";

export class TransactionController {
  constructor(private readonly transactionUseCase: CreateTransactionUseCase) {}
  async createTransaction(req: Request, res: Response): Promise<any> {
    const { email } = req.body.email;
    const { value, formatPayment, paid, contacts } = req.body.transaction;
    if (
      !email &&
      !value &&
      !formatPayment &&
      !paid &&
      !contacts.name &&
      contacts.phone
    )
      throw new BadRequestError("you dont send parameters necessary");
    let transaction = await this.transactionUseCase.createTransaction(
      req.body.email,
      req.body.transaction
    );
    if (!transaction)
      throw new DataBaseError("somenthing is wrong in Database");
    return res.json(transaction).status(201);
  }
}
