import { IGetTransactionByAccountMapper } from '../../../../domain/controller/account/get-all-transaction-by-account/get-transaction-by-contact.mapper';
import { GetAllTransactionAccountOutPut } from '../../../../domain/use-case/account/get-all-transaction-by-account-usecase';
import { GetTransactionByAccountDto } from './get-transaction-by-account.dto';

export class GetTransactionByAccountByMapper implements IGetTransactionByAccountMapper {
  async mapDto(output: GetAllTransactionAccountOutPut): Promise<GetTransactionByAccountDto> {
    return new GetTransactionByAccountDto(output.account);
  }
}
