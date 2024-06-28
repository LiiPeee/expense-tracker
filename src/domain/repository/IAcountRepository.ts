import { InputCreateAccount } from "../inputAndOutput";

export interface CreateAccountOutput {
  name: string;
  balance: number;
}

export abstract class IAccountRepository extends IRespositoryBase {
  abstract create(data: InputCreateAccount): Promise<CreateAccountOutput>;
}
