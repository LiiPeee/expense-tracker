import { PrismaClient } from "@prisma/client";
import { IContactRepository } from "../../domain/repository/IContactRepository";

export class ContactRepository implements IContactRepository {


    constructor(private readonly prisma: PrismaClient) { }
    get(id: number): Promise<any> {
        throw new Error("Method not implemented.");
    }

    public static createClient(prismaClient: PrismaClient) {
        return new ContactRepository(prismaClient);
    }

    async create(data: any) {
        await this.prisma.contact.create(data);
    }

    async getMany() {
        return await this.prisma.contact.findMany();
    }
    async update(email: string, data: any) {
        return await this.prisma.contact.update({ where: { email: email }, data: data });
    }
    async delete(id: number) {
        return await this.prisma.contact.delete({
            where: {
                id: id
            }
        })

    }

}