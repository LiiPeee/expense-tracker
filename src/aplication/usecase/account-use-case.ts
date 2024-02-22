import bcrypt from "bcrypt";
import { AccountDto, IAccountDto } from "../../domain/dto/account-dto";
import { AccountRepository } from "../../domain/repository/account-repository";

export class AccountUseCase {
  public accountRespository: AccountRepository;
  constructor(accountRespository: AccountRepository) {
    this.accountRespository = accountRespository;
  }

  async createAccount(data: any): Promise<IAccountDto> {
    const { name, email, password, balance } = data;
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
  // async findAccountById(input: any): Promise<any> {
  //   if (!mongoose.Types.ObjectId.isValid(input)) {
  //     throw new Error("falha na consulta");
  //   }
  //   const result = await this.accountRespository.findById(input);
  //   const accountDto: IAccountDto = {
  //     name: result.name,
  //     email: result.email,
  //     balance: result.balance,
  //   };
  //   return new AccountDto(accountDto);
  // }

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
