import { IAddress } from '@/domain/entity/address';
import { IUseCase } from '../usecase';

export interface CreateAddressInput {
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    complement: string;
    isPrimary: boolean;
}
export type CreateAddressOutPut = { address: IAddress };

export abstract class ICreateAddressUseCase implements IUseCase<CreateAddressInput, CreateAddressOutPut> {
    abstract execute(input: CreateAddressInput): Promise<CreateAddressOutPut>;
}
