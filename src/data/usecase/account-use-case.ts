import bcrypt from "bcrypt";
import { AccountDto, IAccountDto } from "../../domain/dto/account-dto";
import {
  InputCreateAccount,
  InputFindAccount,
} from "../../domain/repository/interface/inputs";
import { AccountRepository } from "../../presentation/repositorie/account-repository";

export class AccountUseCase {
  public accountRespository: AccountRepository;
  constructor(accountRespository: AccountRepository) {
    this.accountRespository = accountRespository;
  }

  async createAccount(input: InputCreateAccount): Promise<IAccountDto> {
    const { name, email, password, balance } = input;
    const hashPassword = await bcrypt.hash(password, 10);

    await this.accountRespository.createAccout({
      name,
      email,
      password: hashPassword,
      balance,
    });
    const accountData: IAccountDto = {
      name,
      email,
      balance,
    };
    return new AccountDto(accountData);
  }
  async findAccountById(input: InputFindAccount): Promise<AccountDto> {
    const result = await this.accountRespository.findByEmail(input);
    const accountDto = {
      name: result?.name,
      email: result?.email,
      balance: result?.balance,
    };
    return new AccountDto(accountDto);
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
