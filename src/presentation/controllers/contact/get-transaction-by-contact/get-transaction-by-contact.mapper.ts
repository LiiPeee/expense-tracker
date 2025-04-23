import { IGetTransactionByContactMapper } from '../../../../domain/controller/contact/get-transaction-by-contact/get-transaction-by-contact.mapper';
import { GetTransactionOutPut } from '../../../../domain/use-case/contact/get-transaction-by-contact-usecase';
import { GetTransactionByContactDto } from './get-transaction-by-contact.dto';

export class GetTransactionByContactByMapper implements IGetTransactionByContactMapper {
  async mapDto(output: GetTransactionOutPut): Promise<GetTransactionByContactDto> {
    return new GetTransactionByContactDto(output.contact);
  }
}
