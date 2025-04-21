import { IContact } from '../entity/contact';
import { Account } from '../models/entities/account';
import { Contact } from '../models/entities/contact';

export abstract class IContactRepository {
  abstract update(email: string, data: any): Promise<any>;

  abstract get(id?: string): Promise<Account>;

  abstract getByName(name: string): Promise<Contact | null>;

  abstract getMany(): Promise<any>;

  abstract create(contact: IContact): Promise<any>;

  abstract delete(id: string): Promise<any>;
}
