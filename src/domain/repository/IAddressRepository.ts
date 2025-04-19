import { IAddress } from "../entity/address";

export interface InputCategory {
  name: string;
}

export abstract class IAddressRepository {
  abstract update(id: number, input: any): Promise<any>;

  abstract get(id?: number): Promise<any>;

  abstract create(input: IAddress): Promise<IAddress>;

  abstract getMany(input: any): Promise<any>;

  abstract delete(input: any): Promise<any>;
}
