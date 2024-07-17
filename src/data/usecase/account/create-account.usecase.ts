import { AccountDto, IAccountDto } from "../../../domain/dto/account-dto";
import { Encrypter } from "../../../domain/dto/encrypter";
import { Jwt } from "../../../domain/dto/jwt";

import { InputCreateAccount } from "../../../domain/inputAndOutput";
import { IAccountRepository } from "../../../domain/repository/IAcountRepository";
import { UseCase } from "../../../domain/use-case/usecase";
import { DataBaseError } from "../../../presentation/errors/api-error";

export class CreateAccountUseCase implements UseCase<InputCreateAccount, IAccountDto> {
  constructor(
    private readonly _accountRespository: IAccountRepository,
    private readonly _encrypter: Encrypter,
    private readonly _jwt: Jwt

  ) { }
  async execute(input: InputCreateAccount): Promise<IAccountDto> {
    const { name, email, password, balance } = input;

    const hashPassword = this._encrypter.encrypt(password);

    const account = await this._accountRespository.create({
      name,
      email,
      password: hashPassword,
      balance,
    });
    if (!account) throw new DataBaseError("Something is wrong in DB");

    const getAccount = await this._accountRespository.getUnique(input.email)

    const token = this._jwt.sign(getAccount.id, process.env.JWT_SECRET);

    await this._accountRespository.update(email, token)

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
