import { TransctionDto } from "../../domain/dto/transaction-dto";
import { CreateTransactionInput } from "../../domain/inputAndOutput";
import { TransactionRepository } from "../../presentation/repositorie/transaction-repository";

export class TransactionUseCase {
  public transactionRepository: TransactionRepository;
  constructor(transactionRepository: TransactionRepository) {
    this.transactionRepository = transactionRepository;
  }
  async createTransaction(email: string,input: CreateTransactionInput): Promise<TransctionDto | null> {
    const createTransaction = await this.transactionRepository.createTransaction(email, input)
    

    return createTransaction;
    
  }
}
