export interface InputCreateAccount {
  name: string;
  email: string;
  password: string;
  balance: number;
}

export interface InputFindAccount {
  email: string;
}
