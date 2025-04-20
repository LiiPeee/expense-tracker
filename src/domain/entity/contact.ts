import { IAddress } from './address';
import { IEntityBase } from './entity';

export interface IContact extends IEntityBase {
  name: string;
  phone: string;
  email: string;
  address?: IAddress;
  type: TypeContact;
  document: string;
  is_active: boolean;
}

export enum TypeContact {
  individual = 'individual',
  company = 'company',
}
