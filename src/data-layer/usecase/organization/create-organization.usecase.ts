import { Organization } from '../../../domain/models/entities/organization';
import { IOrganizationRepository } from '../../../domain/repository/IOrganizationRepository';
import { CreateOrganizationInput, ICreateOrganizationUseCase } from '../../../domain/use-case/organization/create-organization-usecase';

export class CreateOrganizationUseCase implements ICreateOrganizationUseCase {
  constructor(private readonly _organizationRepository: IOrganizationRepository) {}
  async execute(input: CreateOrganizationInput): Promise<void> {
    const organization = new Organization({ email: input.email, name: input.name });

    await this._organizationRepository.create(organization);
  }
}
