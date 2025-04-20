import { IContact, TypeContact } from '../../entity/contact';
import { IUseCase } from '../usecase';

export interface CreateContactInput {
  name: string;
  phone: string;
  email: string;
  street: string;
  type: TypeContact;
  document: string;
  is_active: boolean;
}
export type CreateContactOutPut = { contact: IContact };

export abstract class ICreateContactUseCase implements IUseCase<CreateContactInput, CreateContactOutPut> {
  abstract execute(input: CreateContactInput): Promise<CreateContactOutPut>;
}
