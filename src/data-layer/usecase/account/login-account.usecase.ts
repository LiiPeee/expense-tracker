import { IAccount } from "src/domain/entity/account";
import { IUseCase } from "src/domain/use-case/usecase";
import { IBcrypter } from "../../../domain/entity/bcrypter";
import { InputSignAccount } from "../../../domain/inputAndOutput";
import { IAccountRepository } from "../../../domain/repository/IAcountRepository";

export class SingUpAccountUseCase implements IUseCase<InputSignAccount, IAccount> {
  constructor(private readonly _repository: IAccountRepository, private readonly _bcrypt: IBcrypter) {}

  async execute({ email, password }: InputSignAccount): Promise<any> {
    const account = await this._repository.getUnique(email);

    if (!this._bcrypt.compare(password, account?.password)) {
      return new Error("password invalid");
    }

    const token = this._bcrypt.hash(process.env.SECRET);

    const accoutUpdate = await this._repository.update(email, token);

    return accoutUpdate;
  }
}
