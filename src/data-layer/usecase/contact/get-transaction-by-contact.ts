import { IContactRepository } from '../../../domain/repository/IContactRepository';
import {
  GetTransactionByContactInput,
  GetTransactionOutPut,
  IGetTransactionByContactUseCase,
} from '../../../domain/use-case/contact/get-transaction-by-contact-usecase';

export class GetTransactionByContact implements IGetTransactionByContactUseCase {
  constructor(private readonly _contactRepository: IContactRepository) {}

  async execute(input: GetTransactionByContactInput): Promise<GetTransactionOutPut> {
    const contact = await this._contactRepository.getTransactionByContact(input.emailContact);

    return { contact: contact };
  }
}
