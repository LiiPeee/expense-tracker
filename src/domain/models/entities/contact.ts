import { IContact } from "../../entity/contact";
import { EntityBase } from "./entity-base";

export class Contact extends EntityBase implements IContact {
  name: string;
  phone: string;
  email: string;

  constructor(contact: IContact) {
    super();
    this.name = contact.name;
    this.phone = contact.phone;
    this.email = contact.email;
  }
}
