import { InputCreateAccount } from "../inputAndOutput";
export interface CreateAccountOutput {
  name: string;
  balance: number;
}

export interface IAccountRepository {
  createAccount(data: InputCreateAccount): Promise<CreateAccountOutput>;
}
