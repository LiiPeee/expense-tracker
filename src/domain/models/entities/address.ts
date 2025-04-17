import { IAddress, IAddressBehavior } from '@/domain/entity/address';
import { BadRequestError } from '@/domain/helper/errors/api-error';
import { EntityBase } from './entity-base';

export class Address extends EntityBase implements IAddress, IAddressBehavior {
    street!: string;
    number!: string;
    neighborhood!: string;
    city!: string;
    state!: string;
    postalCode!: string;
    country!: string;
    complement!: string;
    isPrimary!: boolean;
    constructor() {
        super();
    }
    setStreet(street: string): IAddressBehavior {
        if (!street) throw new BadRequestError('You dont send street');
        this.street = street;

        return this;
    }
    setNumber(number: string): Address {
        if (!number) this.number = '';

        this.number = number;

        return this;
    }
    setNeighborhood(neighborhood: string): Address {
        if (!neighborhood) this.neighborhood = '';
        this.neighborhood = neighborhood;

        return this;
    }
    setCity(city: string): Address {
        if (!city) throw new BadRequestError('You dont send city');
        this.city = city;

        return this;
    }
    setState(state: string): Address {
        if (!state) throw new BadRequestError('You dont send state');
        this.state = state;

        return this;
    }
    setPostalCode(postal: string): Address {
        if (!postal) throw new BadRequestError('You dont send postal');
        this.postalCode = postal;

        return this;
    }
    setCountry(country: string): Address {
        if (!country) throw new BadRequestError('You dont send country');
        this.country = country;

        return this;
    }
    setComplement(complement: string): Address {
        if (!complement) this.complement = '';
        this.complement = complement;

        return this;
    }
    setIsPrimary(is_primary: boolean): Address {
        if (!is_primary) this.isPrimary = true;
        this.isPrimary = is_primary;

        return this;
    }
}
