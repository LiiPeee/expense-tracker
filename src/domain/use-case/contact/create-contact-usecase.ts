import { IContact } from '@/domain/entity/contact';
import { IUseCase } from '../usecase';

export interface CreateContactInput {
    name: string;
    phone: string;
    email: string;
}
export type CreateContactOutPut = { contact: IContact };

export abstract class ICreateContactUseCase implements IUseCase<CreateContactInput, CreateContactOutPut> {

    abstract execute(input: CreateContactInput): Promise<CreateContactOutPut>
}