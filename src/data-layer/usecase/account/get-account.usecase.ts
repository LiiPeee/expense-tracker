import { IAccountRepository } from "../../../domain/repository/IAcountRepository";
import { UseCase } from "../../../domain/use-case/usecase";

export class GetAccountUseCase implements UseCase<string, any> {

    constructor(private readonly _accountRepository: IAccountRepository) {
    }
    async execute(email: string): Promise<any> {
        const account = await this._accountRepository.getUnique(email);
        return account;

    }

}