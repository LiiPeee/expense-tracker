import { ITransaction } from "../../entity/transaction";
import { EntityBase } from "./entity-base";


export class Account extends EntityBase{

  name: string;
  email: string;
  token?: string | null;
  balance?: number | null;
  password: string;
  transaction?: ITransaction | null;



  constructor(props: Account) {
    super();
    this.name = props.name;
    this.email = props.email;
    this.token = props.token;
    this.balance = props.balance;
    this.transaction = props.transaction;
    this.password = props.password;
  }


}
