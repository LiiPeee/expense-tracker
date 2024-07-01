import { ITransaction } from "./transaction";

export type IAccountProps = {
  endDate?: Date;
  createDate?: Date;
  name: string;
  email: string;
  balance?: number;
  password: string;
  transaction: ITransaction;
};

export class Account {
  constructor(props: IAccountProps) {
    Object.assign(this, props);
  }

  public static create(props: IAccountProps) {
    return this;
  }
}
