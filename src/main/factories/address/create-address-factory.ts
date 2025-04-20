import { CreateAddressUseCase } from "../../../data-layer/usecase/address/create-address.usecase";
import { AddressRepository } from "../../../infrastructure/repository/address-repository";
import { CreateAddressController } from "../../../presentation/controllers/address/create-address-controller";
import { Controller } from "../../../presentation/protocols/controller";
import { validatePrisma } from "../../package/prisma";

export const makeCreateAddressFactory = async (): Promise<Controller> => {
  const prisma = await validatePrisma();
  const addressRepository = AddressRepository.createClient(prisma);
  const useCase = new CreateAddressUseCase(addressRepository);
  const controller = new CreateAddressController(useCase);

  return controller;
};
