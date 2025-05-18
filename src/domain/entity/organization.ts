import { IEntityBase } from 'src/domain/entity/entity';

export interface IOrganization extends IEntityBase {
  name: string;
  email: string;
}
