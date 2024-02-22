import { ITransaction } from "../transaction/transaction";

export interface IAccount {
  id: number;
  endDate?: Date;
  createDate: Date;
  name: string;
  email: string;
  balance?: number;
  password: string;
  token?: string | null;
  transaction?: ITransaction;
}
