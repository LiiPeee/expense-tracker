import { IOrganization } from '../../entity/organization';
import { EntityBase } from './entity-base';

export class Organization extends EntityBase implements IOrganization {
  name: string;
  email: string;

  constructor(param: IOrganization) {
    super();
    this.name = param.name;
    this.email = param.email;
  }
}
