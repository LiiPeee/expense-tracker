export interface IAccountDto {
  name: string;
  email: string;
  balance?: number;
}

export class AccountDto implements IAccountDto {
  name: string;
  email: string;
  balance?: number;

  constructor(account: IAccountDto) {
    this.name = account.name;
    this.email = account.email;
    this.balance = account.balance;
  }
}
