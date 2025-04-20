import { IAddress } from "../entity/address";

export interface InputCategory {
  name: string;
}

export abstract class IAddressRepository {
  abstract create(data: IAddress): Promise<IAddress | null>;

  abstract get(data: string): Promise<IAddress | null>;
}
