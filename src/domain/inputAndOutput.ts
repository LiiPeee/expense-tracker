export type InputCreateAccount = {
  name: string;
  email: string;
  password: string;
  balance: number;
};

export type InputSignAccount = {
  email: string;
  password: string;
};

export interface GetTransactionByMonthInput {
  skip: number;
  take: number;
  id: number;
  year: number;
  month: number;
}
