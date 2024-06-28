import { AccountDto, IAccountDto } from "../../../domain/dto/account-dto";
import { Encrypter } from "../../../domain/dto/encrypter";

import { InputCreateAccount } from "../../../domain/inputAndOutput";
import { UseCase } from "../../../domain/use-case/usecase";
import { AccountRepository } from "../../../infrastructure/repository/account-repository";

export class AccountUseCase
  implements UseCase<InputCreateAccount, IAccountDto>
{
  constructor(
    private readonly _accountRespository: AccountRepository,
    private readonly encrypter: Encrypter
  ) {}
  async execute(input: InputCreateAccount): Promise<IAccountDto> {
    const { name, email, password, balance } = input;

    const hashPassword = this.encrypter.encrypt(password);

    await this._accountRespository.createAccount({
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

  // async findAccountByEmail(input: string): Promise<AccountDto> {
  //   const result = await this._accountRespository.findByEmail(input);
  //   const accountDto = {
  //     name: result?.name,
  //     email: result?.email,
  //     balance: result?.balance,
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
