import { Contact } from '../../../domain/models/entities/contact';
import { IAddressRepository } from '../../../domain/repository/IAddressRepository';
import { IContactRepository } from '../../../domain/repository/IContactRepository';
import {
  CreateContactInput,
  CreateContactOutPut,
  ICreateContactUseCase,
} from '../../../domain/use-case/contact/create-contact-usecase';
import { DataBaseError } from '../../errors/data-base-error';

export class CreateContactUseCase implements ICreateContactUseCase {
  constructor(
    private readonly _contactRepository: IContactRepository,
    private readonly _addressRepository: IAddressRepository
  ) {}
  async execute(data: CreateContactInput): Promise<CreateContactOutPut> {
    const address = await this._addressRepository.get(data.street);

    if (!address) throw new DataBaseError('you need create a Address');

    const contact = new Contact({
      email: data.email,
      name: data.name,
      phone: data.phone,
      address: address,
      document: data.document,
      type: data.type,
      is_active: data.is_active,
    });

    const contactCreated = await this._contactRepository.create(contact);

    if (!contactCreated) throw new DataBaseError('cannt find your account');

    return { contact: contactCreated };
  }
}
