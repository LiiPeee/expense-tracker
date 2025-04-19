import { IContact } from "../entity/contact";
import { Account } from "../models/entities/account";
import { Contact } from "../models/entities/contact";

export interface CreateContactInput {
  name: string;
  phone: string;
  email: string;
}
export interface GetAccountInput {
  email: string;
  data: any;
}

export abstract class IContactRepository {
  abstract update(email: string, data: any): Promise<any>;

  abstract get(id?: number): Promise<Account>;

  abstract getByName(name: string): Promise<Contact | null>;

  abstract getMany(): Promise<any>;

  abstract create(contact: IContact): Promise<any>;

  abstract delete(id: number): Promise<any>;
}
