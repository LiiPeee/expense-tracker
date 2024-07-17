export interface IAccountDto {
  name?: string;
  email?: string;
}

export class AccountDto implements IAccountDto {
  name?: string;
  email?: string;

  constructor(account: IAccountDto) {
    this.name = account.name;
    this.email = account.email;
  }
}
