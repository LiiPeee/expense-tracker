import { IAccount } from '../../../domain/entity/account';
import { IBcrypter } from '../../../domain/framework/bcrypter';
import { InputSignAccount } from '../../../domain/inputAndOutput';
import { IAccountRepository } from '../../../domain/repository/IAcountRepository';
import { IUseCase } from '../../../domain/use-case/usecase';

export class SingUpAccountUseCase implements IUseCase<InputSignAccount, IAccount> {
  constructor(private readonly _repository: IAccountRepository, private readonly _bcrypt: IBcrypter) {}

  async execute({ email, password }: InputSignAccount): Promise<any> {
    const account = await this._repository.getWithEmail(email);

    if (!this._bcrypt.compare(password, account?.password)) {
      return new Error('password invalid');
    }

    const token = this._bcrypt.hash(process.env.SECRET);

    const accoutUpdate = await this._repository.update(email, token);

    return accoutUpdate;
  }
}
