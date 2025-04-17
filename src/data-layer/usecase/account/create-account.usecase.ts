import {
    CreateAccountInput,
    CreateAccountOutPut,
    ICreateAccountUseCase,
} from '@/domain/use-case/account/create-account-usecase'

import { IEncrypter } from '@/domain/entity/encrypter'
import { NotFoundError } from '@/domain/helper/errors/api-error'
import { Account } from '@/domain/models/entities/account'
import { IAccountRepository } from '../../../domain/repository/IAcountRepository'

export class CreateAccountUseCase implements ICreateAccountUseCase {
    constructor(private readonly _accountRespository: IAccountRepository, private readonly _encrypter: IEncrypter) {}
    async execute(input: CreateAccountInput): Promise<CreateAccountOutPut> {
        const hashPassword = this._encrypter.encrypt(input.password)

        const account = new Account({ email: input.email, name: input.name, password: hashPassword, balance: 0 })

        const accountCreated = await this._accountRespository.create(account)

        if (accountCreated) throw new NotFoundError('cannt find your account')

        return accountCreated
    }
}
