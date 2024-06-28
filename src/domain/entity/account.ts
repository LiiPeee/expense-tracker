import { ITransaction } from "./transaction";

export type IAccountProps = {
  id: number;
  endDate?: Date | null;
  createDate: Date;
  name: string;
  email: string;
  balance?: number;
  password: string;
  transaction?: ITransaction;
};
