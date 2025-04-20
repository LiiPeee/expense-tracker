import { GetAddressUseCase } from "../../../data-layer/usecase/address/get-address.usecase";
import { AddressRepository } from "../../../infrastructure/repository/address-repository";
import { GetAddressController } from "../../../presentation/controllers/address/get-address-controller";
import { Controller } from "../../../presentation/protocols/controller";
import { validatePrisma } from "../../package/prisma";

export const makeGetAddressFactory = async (): Promise<Controller> => {
  const prisma = await validatePrisma();
  const addressRepository = AddressRepository.createClient(prisma);
  const useCase = new GetAddressUseCase(addressRepository);
  const controller = new GetAddressController(useCase);

  return controller;
};
