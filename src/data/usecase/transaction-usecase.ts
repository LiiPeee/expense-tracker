import { TransctionDto } from "../../domain/dto/transaction-dto";
import { CreateTransactionInput } from "../../domain/inputAndOutput";
import { ITransactionUseCase } from "../../domain/use-case/transaction.usecase";
import { AccountRepository } from "../../presentation/repositorie/account-repository";
import { TransactionRepository } from "../../presentation/repositorie/transaction-repository";
import { BadRequestError, NotFoundError } from "../middlaware/api-error";

export class TransactionUseCase implements ITransactionUseCase{
  constructor(private readonly transactionRepository: TransactionRepository, 
    private readonly accountRepository: AccountRepository) {
  }
  async createTransaction(email: string,input: CreateTransactionInput): Promise<TransctionDto> {

    const findAccount = await this.accountRepository.findByEmail(email);
    
    if(!findAccount)  throw new NotFoundError('cannt find your account');

    if(input.category === 'RECEIVE'){
      if(input.paid === true){
        const balance: number =  findAccount.balance + input.value;
        await this.accountRepository.updateBalance(findAccount.email, balance)
      }
    } 
    
    else if( input.category === 'EXPENSE'){
      if(findAccount.balance < input.value) throw new BadRequestError('you cannt make this transaction because value is bigger than balance');

      if(input.paid === true){
        const balance:number =  findAccount.balance - input.value;
        balance.toFixed(2)
        await this.accountRepository.updateBalance(findAccount.email, balance)
      }
    }
    
    const createTransaction = await this.transactionRepository.createTransaction(findAccount.email,input)
    
    return createTransaction;
  }
}
