import { ITransaction } from "./transaction";

export interface IAccount {
  id: number;
  endDate?: Date | null;
  createDate: Date;
  name: string;
  email: string;
  balance?: number;
  password: string;
  token?: string;
  transaction?: ITransaction;
}
