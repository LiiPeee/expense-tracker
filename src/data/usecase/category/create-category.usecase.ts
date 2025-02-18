import { ICategoryRepository, InputCategory } from "../../../domain/repository/ICategoryRepository";
import { UseCase } from "../../../domain/use-case/usecase";

export class CreateCategoryUseCase implements UseCase<InputCategory, any> {

    constructor(private readonly _categoryRepository: ICategoryRepository) {
    }
    async execute(input: any): Promise<any> {
        const account = await this._categoryRepository.create(input);
        return account;

    }

}