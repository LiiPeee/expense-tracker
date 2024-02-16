import bcrypt from "bcrypt";
import { IAccount } from "../model/account";
import { AccountRepository } from "../repository/account-repository";

export class AccountUseCase {
  public accountRespository: AccountRepository;
  constructor(accountRespository: AccountRepository) {
    this.accountRespository = accountRespository;
  }

  async createAccount(data: any): Promise<IAccount> {
    const { name, email, password, balance } = data;
    const hashPassword = await bcrypt.hash(password, 10);
    const account = await this.accountRespository.createAccout({
      name,
      email,
      password: hashPassword,
      balance,
    });

    const { password: _, ...user } = account;

    return user;
  }
  //   async login(data: any): Promise<IAccount | any> {
  //     const { name, password } = data;

  //     const getUser = await this.accountRespository.findById({ name, password });

  //     const verifyPass = bcrypt.compare(password, getUser.password);
  //     if (!verifyPass) {
  //       throw new Error("Invalid password");
  //     }
  //     await jwt.sign({ id: getUser.id, name: getUser.name }, "seilatest");

  //     return getUser;
  //   }
}
