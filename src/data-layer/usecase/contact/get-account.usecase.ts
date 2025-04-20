import { IContactRepository } from '../../../domain/repository/IContactRepository';
import { IUseCase } from '../../../domain/use-case/usecase';

export class GetAllContactUseCase implements IUseCase<number, any> {
  constructor(private readonly _contactRepository: IContactRepository) {}
  async execute(): Promise<any> {
    const account = await this._contactRepository.getMany();

    return account;
  }
}
