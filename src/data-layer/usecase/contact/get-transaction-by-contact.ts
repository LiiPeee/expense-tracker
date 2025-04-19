import { IContactRepository } from "../../../domain/repository/IContactRepository";
import {
  GetTransactionByContactInput,
  IGetTransactionByContactUseCase,
} from "../../../domain/use-case/transaction/get-transaction-usecase";

export class GetTransactionByContact implements IGetTransactionByContactUseCase {
  constructor(private readonly _contactRepository: IContactRepository) {}

  async execute(input: GetTransactionByContactInput): Promise<any> {
    const contact = await this._contactRepository.getByName(input.contactName);

    return contact;
  }
}
