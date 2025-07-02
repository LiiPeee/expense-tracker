import { IOrganization } from "domain/entity/organization";
import { IRepositoryBase } from "./IRepositoryBase";


export abstract class IOrganizationRepository implements IRepositoryBase<IOrganization> {
  abstract create(data: IOrganization): Promise<any>;
  abstract get(data: any): Promise<any>;
  abstract getMany(input: any): Promise<any>;
  abstract update(input: any): Promise<any>;
  abstract delete(input: any): Promise<any>;
  abstract getAccountWithTransaction():Promise<any>;
}
