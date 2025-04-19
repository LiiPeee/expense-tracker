import { Contact } from "../../../domain/models/entities/contact";
import { CreateContactInput, IContactRepository } from "../../../domain/repository/IContactRepository";
import { CreateContactOutPut, ICreateContactUseCase } from "../../../domain/use-case/contact/create-contact-usecase";
import { DataBaseError } from "../../errors/data-base-error";

export class CreateContactUseCase implements ICreateContactUseCase {
  constructor(private readonly _contactRepository: IContactRepository) {}
  async execute(data: CreateContactInput): Promise<CreateContactOutPut> {
    const contact = new Contact({ email: data.email, name: data.name, phone: data.phone });

    const contactCreated = await this._contactRepository.create(contact);

    if (!contactCreated) throw new DataBaseError("cannt find your account");

    return { contact: contactCreated };
  }
}
