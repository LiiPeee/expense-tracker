import { ICreateContactUseCase } from "@/domain/controller/contact/create-contact.usecase";
import { DataBaseError } from "@/domain/helper/errors/api-error";
import { Contact } from "@/domain/models/entities/contact";
import { CreateContactOutPut } from "@/domain/use-case/contact/create-contact-usecase";
import { CreateContactInput, IContactRepository } from "../../../domain/repository/IContactRepository";

export class CreateContactUseCase implements ICreateContactUseCase {

    constructor(private readonly _contactRepository: IContactRepository) {
    }
    async execute(data: CreateContactInput): Promise<CreateContactOutPut> {
        const contact = new Contact({email: data.email, name: data.name, phone: data.phone})

        const contactCreated = await this._contactRepository.create(contact);

        if(!contactCreated) throw new DataBaseError("cannt find your account");

        return {contact: contactCreated
        };

    }

}