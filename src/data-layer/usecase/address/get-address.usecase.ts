import { IAddressRepository } from "../../../domain/repository/IAddressRepository";
import { GetAddressInput, GetAddressOutPut, IGetAddressUseCase } from "../../../domain/use-case/address/get-address.usecase";
import { NotFoundError } from "../../errors/not-found-error";

export class GetAddressUseCase implements IGetAddressUseCase {
  constructor(private readonly _addressRepository: IAddressRepository) {}

  async execute(input: GetAddressInput): Promise<GetAddressOutPut> {
    const address = await this._addressRepository.get(input.street);

    if (!address) throw new NotFoundError("cannt find your address");

    return { address: address };
  }
}
