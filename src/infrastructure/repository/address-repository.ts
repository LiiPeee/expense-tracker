import { PrismaClient } from "@prisma/client";
import { IAddress } from "../../domain/entity/address";
import { Address } from "../../domain/models/entities/address";
import { IAddressRepository } from "../../domain/repository/IAddressRepository";

export class AddressRepository implements IAddressRepository {
  constructor(private readonly prisma: PrismaClient) {}
  public static createClient(prismaClient: PrismaClient) {
    return new AddressRepository(prismaClient);
  }

  async get(data: string): Promise<any> {
    const address = await this.prisma.address.findFirst({
      where: {
        street: data,
      },
    });
    return address;
  }

  async create(data: Address): Promise<IAddress> {
    const address: any = await this.prisma.address.create({ data: data });
    return address;
  }
}
