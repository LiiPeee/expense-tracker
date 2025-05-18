import { IUseCase } from 'src/domain/use-case/usecase';

export interface CreateOrganizationInput {
  name: string;
  email: string;
}

export abstract class ICreateOrganizationUseCase implements IUseCase<CreateOrganizationInput, void> {
  abstract execute(input: CreateOrganizationInput): Promise<void>;
}
