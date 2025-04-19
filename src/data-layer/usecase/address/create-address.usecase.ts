import { Address } from "../../../domain/models/entities/address";
import { IAddressRepository } from "../../../domain/repository/IAddressRepository";
import { CreateAddressInput, CreateAddressOutPut, ICreateAddressUseCase } from "../../../domain/use-case/address/address.usecase";
import { NotFoundError } from "../../errors/not-found-error";

export class CreateAddressUseCase implements ICreateAddressUseCase {
  constructor(private readonly _addressRepository: IAddressRepository) {}

  async execute(input: CreateAddressInput): Promise<CreateAddressOutPut> {
    const address: Address = new Address()
      .setCity(input.city)
      .setComplement(input.complement)
      .setStreet(input.street)
      .setState(input.state)
      .setPostalCode(input.postalCode)
      .setComplement(input.complement)
      .setCountry(input.country)
      .setNumber(input.number)
      .setIsPrimary(input.isPrimary);

    const accountCreated = await this._addressRepository.create(address);

    if (accountCreated) throw new NotFoundError("cannt find your account");

    return accountCreated;
  }
}
