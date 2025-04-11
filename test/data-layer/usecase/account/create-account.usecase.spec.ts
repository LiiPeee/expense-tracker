import { CreateTransactionUseCase } from '../../../../src/data-layer/usecase/transaction/create-transaction.usecase';
import { Recurrence } from '../../../../src/domain/dto/transaction';
import { IAccountRepository } from '../../../../src/domain/repository/IAcountRepository';
import { ITransactionRepository } from '../../../../src/domain/repository/ITransactionRepository';
import { CreateTransactionInput } from '../../../../src/domain/use-case/create-transaction-usecase';
import { AccountFakeBuilder } from '../../../mocks/account-fake';
import { TransactionFakeBuilder } from '../../../mocks/transaction-fake';


describe('CreateTransactionUseCase', () => {
  let sut: CreateTransactionUseCase;
  let transactionRepository: jest.Mocked<ITransactionRepository>;
  let accountRepository: jest.Mocked<IAccountRepository>;


  let transactionFake = TransactionFakeBuilder.aTransaction().withComment("paga").withPaid(true).withPaymentName("xpto");

  let accountFake = AccountFakeBuilder.aAccount().withBalance(0).withEmail("luiz").withName("xpto").withPassword("xpto").build();

  const input: CreateTransactionInput = {
    email: "example@gmail.com",
    installments_date: new Date(),
    recurrence: Recurrence.D,
    number_of_installments: 1,
    value: 10,
    category: { name: "sei la", transactions: [] },
    paymentName: "xpto",
    paid: true,
    contact: {
      name: "xpto",
      phone: "31988414880",
      email: "example@gmail.com",
      id: 0,
      creatDate: new Date()
    }
  }

  beforeEach(() => {
    transactionRepository = {
      create: jest.fn().mockResolvedValue(transactionFake),

    } as unknown as jest.Mocked<ITransactionRepository>;

    accountRepository = {
      getUnique: jest.fn().mockResolvedValue(accountFake),

    } as unknown as jest.Mocked<IAccountRepository>;
    sut = new CreateTransactionUseCase(transactionRepository, accountRepository);
  });


  test('should be return success ', async () => {
    await sut.execute(input);

    expect(accountRepository.getUnique).toHaveBeenCalledTimes(1);
  });
});