import { Encrypter } from "../../../domain/dto/encrypter";
import { AccountDto, IAccountDto } from "../../../domain/models/dto/account-dto";

import { InputCreateAccount } from "../../../domain/inputAndOutput";
import { Account } from "../../../domain/models/account";
import { IAccountRepository } from "../../../domain/repository/IAcountRepository";
import { UseCase } from "../../../domain/use-case/usecase";
import { validateEmail } from "../../helper/email-validator";

export class CreateAccountUseCase implements UseCase<InputCreateAccount, IAccountDto> {
  constructor(
    private readonly _accountRespository: IAccountRepository,
    private readonly _encrypter: Encrypter,

  ) { }
  async execute(input: InputCreateAccount): Promise<IAccountDto> {

    await validateEmail(input.email)

    const hashPassword = this._encrypter.encrypt(input.password);

    const account = new Account({ email: input.email, name: input.name, password: hashPassword, balance: 0 });

    await this._accountRespository.create(account);

    const accountData: IAccountDto = {
      name: input.name,
      email: input.email,
    };
    return new AccountDto(accountData);
  }


}
