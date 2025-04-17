import { IEntityBase } from './entity';

export interface IAddress extends IEntityBase {
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
export interface IAddressBehavior {
    setStreet(street: string): IAddressBehavior;
    setNumber(string: string): IAddressBehavior;
    setNeighborhood(neighborhood: string): IAddressBehavior;
    setCity(city: string): IAddressBehavior;
    setState(state: string): IAddressBehavior;
    setPostalCode(postal: string): IAddressBehavior;
    setCountry(country: string): IAddressBehavior;
    setComplement(complement: string): IAddressBehavior;
    setIsPrimary(is_primary: boolean): IAddressBehavior;
}
