import { GetTransactionByAccountDto } from '../../../../presentation/controllers/account/get-all-transaction/get-transaction-by-account.dto';
import { GetAllTransactionAccountOutPut } from '../../../use-case/account/get-all-transaction-by-account-usecase';

export abstract class IGetTransactionByAccountMapper {
  abstract mapDto(output: GetAllTransactionAccountOutPut): Promise<GetTransactionByAccountDto>;
}
