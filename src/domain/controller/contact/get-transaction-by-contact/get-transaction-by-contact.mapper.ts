import { GetTransactionByContactDto } from '../../../../presentation/controllers/contact/get-transaction-by-contact/get-transaction-by-contact.dto';
import { GetTransactionOutPut } from '../../../use-case/contact/get-transaction-by-contact-usecase';

export abstract class IGetTransactionByContactMapper {
  abstract mapDto(output: GetTransactionOutPut): Promise<GetTransactionByContactDto>;
}
