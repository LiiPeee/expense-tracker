import { PrismaClient } from "@prisma/client";

export class ContactRespository {


    constructor(private readonly prisma: PrismaClient) { }

    public static createClient(prismaClient: PrismaClient) {
        return new ContactRespository(prismaClient);
    }

    async create(data: any) {
        await this.prisma.contact.create(data);
    }

    async get() {
        return await this.prisma.contact.findMany();
    }
    async update(id: number, data: any) {
        return await this.prisma.contact.update({ where: { id: id }, data: data });

    }

}