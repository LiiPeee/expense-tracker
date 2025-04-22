import { IAddress } from './address';
import { IEntityBase } from './entity';
import { ITransaction } from './transaction';

export interface IContact extends IEntityBase {
  name: string;
  phone: string;
  email: string;
  address?: IAddress;
  type: TypeContact;
  document: string;
  is_active: boolean;
  transactions?: ITransaction[];
}

export enum TypeContact {
  individual = 'individual',
  company = 'company',
}
