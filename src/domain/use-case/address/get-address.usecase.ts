import { IAddress } from "../../entity/address";
import { IUseCase } from "../usecase";

export interface GetAddressInput {
  street: string;
}
export type GetAddressOutPut = { address: IAddress };

export abstract class IGetAddressUseCase implements IUseCase<GetAddressInput, GetAddressOutPut> {
  abstract execute(input: GetAddressInput): Promise<GetAddressOutPut>;
}
