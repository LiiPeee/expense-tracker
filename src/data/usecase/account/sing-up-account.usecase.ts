import { IAccountDto } from "../../../domain/dto/account-dto";
import { IBcrypter } from "../../../domain/dto/bcrypter";
import { Jwt } from "../../../domain/dto/jwt";
import { InputSignAccount } from "../../../domain/inputAndOutput";
import { IAccountRepository } from "../../../domain/repository/IAcountRepository";
import { UseCase } from "../../../domain/use-case/usecase";

export class SingUpAccountUseCase
  implements UseCase<InputSignAccount, IAccountDto>
{
  constructor(
    private readonly _repository: IAccountRepository,
    private readonly _bcrypt: IBcrypter,
    private readonly _jwt: Jwt
  ) {}

  async execute({ email, password }: InputSignAccount): Promise<any> {
    const account = await this._repository.getUnique(email);

    if (!this._bcrypt.compare(password, account.password)) {
      return new Error("password invalid");
    }

    const token = this._jwt.sign(account.id, process.env.JWT_SECRET);

    const accoutUpdate = await this._repository.update(email, token);

    return accoutUpdate;
  }
}
