import {
  CreateAccountInput,
  CreateAccountOutPut,
  ICreateAccountUseCase,
} from 'src/domain/use-case/account/create-account-usecase';
import { IEncrypter } from '../../../domain/framework/encrypter';
import { IJwt } from '../../../domain/framework/jwt';
import { Account } from '../../../domain/models/entities/account';
import { IAccountRepository } from '../../../domain/repository/IAcountRepository';
import { BadRequestError } from '../../errors/bad-request-error';

export class CreateAccountUseCase implements ICreateAccountUseCase {
  constructor(
    private readonly _accountRespository: IAccountRepository,
    private readonly _encrypter: IEncrypter,
    private readonly jwtToken: IJwt
  ) {}

  async execute(input: CreateAccountInput): Promise<CreateAccountOutPut> {
    const hashPassword = this._encrypter.encrypt(input.password);

    const token = this.jwtToken.sign(hashPassword, process.env.JWT_SECRET);

    const accountFound = await this._accountRespository.getWithEmail(input.email);

    if (accountFound) throw new BadRequestError('Already exists this email');

    const account: Account = new Account()
      .setBalance(0)
      .setEmail(input.email)
      .setName(input.name)
      .setPassword(hashPassword)
      .setToken(token);

    const accountCreated = await this._accountRespository.create({ ...account, token: account.token });

    return { account: accountCreated };
  }
}
