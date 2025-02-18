import { ICategoryRepository } from "../../../domain/repository/ICategoryRepository";
import { UseCase } from "../../../domain/use-case/usecase";

export class GetCategoryUseCase implements UseCase<number, any> {

    constructor(private readonly _categoryRepository: ICategoryRepository) {
    }
    async execute(id: number): Promise<any> {
        const account = await this._categoryRepository.get(id);
        return account;

    }

}