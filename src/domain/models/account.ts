import { ITransaction } from "../entity/transaction";

export type IAccountProps = {
  // id: string;
  endDate?: Date | null;
  createDate?: Date;
  name: string;
  email: string;
  token?: string | null;
  balance?: number | null;
  password: string;
  transaction?: ITransaction | null;
};

export class Account {
  // id: string;
  endDate?: Date | null;
  createDate?: Date;
  name: string;
  email: string;
  token?: string | null;
  balance?: number | null;
  password: string;
  transaction?: ITransaction | null;



  constructor(props: Account) {
    // this.id = props.id;
    this.endDate = props.endDate;
    this.createDate = props.createDate;
    this.name = props.name;
    this.email = props.email;
    this.token = props.token;
    this.balance = props.balance;
    this.transaction = props.transaction;
    this.password = props.password
  }


}
