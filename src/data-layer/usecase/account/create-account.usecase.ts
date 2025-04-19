import { CreateAccountInput, CreateAccountOutPut, ICreateAccountUseCase } from "src/domain/use-case/account/create-account-usecase";
import { NotFoundError } from "../../../data-layer/errors/not-found-error";
import { IEncrypter } from "../../../domain/entity/encrypter";
import { Account } from "../../../domain/models/entities/account";
import { IAccountRepository } from "../../../domain/repository/IAcountRepository";

export class CreateAccountUseCase implements ICreateAccountUseCase {
  constructor(private readonly _accountRespository: IAccountRepository, private readonly _encrypter: IEncrypter) {}
  async execute(input: CreateAccountInput): Promise<CreateAccountOutPut> {
    const hashPassword = this._encrypter.encrypt(input.password);

    const account: Account = new Account().setBalance(0).setEmail(input.email).setName(input.name).setPassword(hashPassword);

    const accountCreated = await this._accountRespository.create(account);

    if (accountCreated) throw new NotFoundError("cannt find your account");

    return { account: accountCreated };
  }
}
