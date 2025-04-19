import { GetAccountInput, IContactRepository } from "../../../domain/repository/IContactRepository";
import { IUseCase } from "../../../domain/use-case/usecase";

export class UpdateContactUseCase implements IUseCase<GetAccountInput, any> {
  constructor(private readonly _contactRepository: IContactRepository) {}
  async execute(input: GetAccountInput): Promise<any> {
    const account = await this._contactRepository.update(input.email, input.data);

    return account;
  }
}
