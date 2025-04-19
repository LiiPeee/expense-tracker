import { IContactRepository } from "../../../domain/repository/IContactRepository";
import { IUseCase } from "../../../domain/use-case/usecase";

export class DeleteContactUseCase implements IUseCase<number, any> {
  constructor(private readonly _contactRepository: IContactRepository) {}
  async execute(id: number): Promise<any> {
    const account = await this._contactRepository.delete(id);

    return account;
  }
}
