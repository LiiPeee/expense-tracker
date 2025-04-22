import { IContact } from '../entity/contact';
import { Account } from '../models/entities/account';

export abstract class IContactRepository {
  abstract update(email: string, data: any): Promise<any>;

  abstract get(id?: string): Promise<Account>;

  abstract getByEmail(name: string): Promise<any>;

  abstract getMany(): Promise<any>;

  abstract create(contact: IContact): Promise<any>;

  abstract delete(id: string): Promise<any>;

  abstract getTransactionByContact(email: string): Promise<any>;
}
