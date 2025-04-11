import { IContactRepository } from "../../../domain/repository/IContactRepository";
import { UseCase } from "../../../domain/use-case/usecase";

export class CreateContactUseCase implements UseCase<number, any> {

    constructor(private readonly _contactRepository: IContactRepository) {
    }
    async execute(data: any): Promise<any> {
        const account = await this._contactRepository.create(data);

        return account;

    }

}