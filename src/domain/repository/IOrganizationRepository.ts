import { IOrganization } from 'src/domain/entity/organization';
import { IRepositoryBase } from 'src/domain/repository/IRepositoryBase';

export abstract class IOrganizationRepository implements IRepositoryBase<IOrganization> {
  abstract create(data: IOrganization): Promise<any>;
  abstract get(data: any): Promise<any>;
  abstract getMany(input: any): Promise<any>;
  abstract update(input: any): Promise<any>;
  abstract delete(input: any): Promise<any>;
}
