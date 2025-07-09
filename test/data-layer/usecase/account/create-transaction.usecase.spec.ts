import { CreateTransactionUseCase } from '@/data-layer/usecase/transaction/create-transaction.usecase';
import { Recurrence } from '@/domain/entity/transaction';
import { IAccountRepository } from '@/domain/repository/IAcountRepository';
import { ICategoryRepository } from '@/domain/repository/ICategoryRepository';
import { IContactRepository } from '@/domain/repository/IContactRepository';
import { ITransactionRepository } from '@/domain/repository/ITransactionRepository';

import { CreateTransactionInput } from '@/domain/use-case/transaction/create-transaction-usecase';
import { AccountFakeBuilder } from "@test/mocks/account-fake";
import { TransactionFakeBuilder } from '@test/mocks/transaction-fake';

describe('CreateTransactionUseCase', () => {
  let sut: CreateTransactionUseCase;
  let transactionRepository: jest.Mocked<ITransactionRepository>;
  let accountRepository: jest.Mocked<IAccountRepository>;
  let contactRepository: jest.Mocked<IContactRepository>;
  let categoryRepository: jest.Mocked<ICategoryRepository>;

  let transactionFake = TransactionFakeBuilder.aTransaction()
    .withComment('paga')
    .withPaid(true)
    .withPaymentName('xpto');

  let accountFake = AccountFakeBuilder.aAccount()
    .withBalance(0)
    .withEmail('luiz')
    .withName('xpto')
    .withPassword('xpto')
    .build();

  const input: CreateTransactionInput = {
    email: 'example@gmail.com',
    installments_date: new Date(),
    recurrence: Recurrence.D,
    number_of_installments: 1,
    value: 10,
    category: {
      name: '1',
    },
    account: { name: '1' },
    paymentName: 'xpto',
    paid: true,
    contact: {
      email: 'xpto',
    },
  };

  beforeEach(() => {
    transactionRepository = {
      create: jest.fn().mockResolvedValue(transactionFake),
    } as unknown as jest.Mocked<ITransactionRepository>;

    accountRepository = {
      getUnique: jest.fn().mockResolvedValue(accountFake),
    } as unknown as jest.Mocked<IAccountRepository>;
    contactRepository = {
      getByEmail: jest.fn().mockResolvedValue(),
    } as unknown as jest.Mocked<IAccountRepository>;


    categoryRepository = {
      getByName: jest.fn().mockResolvedValue(),
    } as jest.Mocked<IAccountRepository>;

    sut = new CreateTransactionUseCase(transactionRepository, accountRepository, contactRepository, categoryRepository);
  });

  test('should be return success ', async () => {
    await sut.execute(input);

    expect(accountRepository.getUnique).toHaveBeenCalledTimes(1);
  });
});
