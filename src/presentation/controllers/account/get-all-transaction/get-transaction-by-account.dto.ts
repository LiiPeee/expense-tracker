import { IAccount } from '../../../../domain/entity/account';

export class TransatactionByAccountDto {
  constructor(public value: number, public paymentName: string, public recurrence: string, public paid: boolean) {}
}

export class GetTransactionByAccountDto {
  name: string;
  transactions?: TransatactionByAccountDto[];

  constructor(account: IAccount) {
    this.name = account.name;
    this.transactions = account.transaction?.map(
      (transaction) =>
        new TransatactionByAccountDto(
          transaction.value,
          transaction.paymentName,
          transaction.recurrence,
          transaction.paid
        )
    );
  }
}
