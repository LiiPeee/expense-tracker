import { IEntityBase } from "./entity";

export interface IContact extends IEntityBase {
  name: string;
  phone: string;
  email: string;
  address?: IAddress
}
