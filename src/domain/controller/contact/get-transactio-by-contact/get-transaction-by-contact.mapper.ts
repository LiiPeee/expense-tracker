import { GetTransactionByContactDto } from './get-transaction-by-contact';

export class GetTransactionByContactByMapper {
  mapDto(output: any) {
    return new GetTransactionByContactDto(output);
  }
}
