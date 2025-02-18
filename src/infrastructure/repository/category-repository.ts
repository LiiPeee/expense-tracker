import { PrismaClient } from "@prisma/client";
import { ICategoryRepository } from "../../domain/repository/ICategoryRepository";

export class CategoryRepository implements ICategoryRepository {

    constructor(private readonly prisma: PrismaClient) { }
    get(id: number): Promise<any> {
        throw new Error("Method not implemented.");
    }

    public static createClient(prismaClient: PrismaClient) {
        return new CategoryRepository(prismaClient);
    }

    async create(data: any) {
        return await this.prisma.category.create({ data: data });
    }

    async getMany() {
        return await this.prisma.category.findMany();
    }
    async update(id: number, data: any) {
        return await this.prisma.category.update({ where: { id: id }, data: data });
    }
    async delete(id: number) {
        return await this.prisma.category.delete({
            where: {
                id: id
            }
        })

    }

}