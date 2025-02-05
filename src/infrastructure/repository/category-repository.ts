import { PrismaClient } from "@prisma/client";

export class CategoryRespository {


    constructor(private readonly prisma: PrismaClient) { }

    public static createClient(prismaClient: PrismaClient) {
        return new CategoryRespository(prismaClient);
    }

    async create(data: any) {
        await this.prisma.category.create(data);
    }

    async get() {
        return await this.prisma.category.findMany();
    }
    async update(id: number, data: any) {
        return await this.prisma.category.update({ where: { id: id }, data: data });
    }
    async delete(id: number) {

    }

}