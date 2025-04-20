import { IAddress } from '../../entity/address';
import { IContact, TypeContact } from '../../entity/contact';
import { EntityBase } from './entity-base';

export class Contact extends EntityBase implements IContact {
  name: string;
  phone: string;
  email: string;
  address?: IAddress;
  type: TypeContact;
  document: string;
  is_active: boolean;

  constructor(contact: IContact) {
    super();
    this.type = contact.type;
    this.document = contact.document;
    this.is_active = contact.is_active;
    this.name = contact.name;
    this.phone = contact.phone;
    this.email = contact.email;
    this.address = contact.address;
  }
}
