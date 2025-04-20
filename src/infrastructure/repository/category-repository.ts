import { PrismaClient } from "@prisma/client";
import { Category } from "../../domain/models/entities/category";
import { ICategoryRepository } from "../../domain/repository/ICategoryRepository";

export class CategoryRepository implements ICategoryRepository {
  constructor(private readonly prisma: PrismaClient) {}

  public static createClient(prismaClient: PrismaClient) {
    return new CategoryRepository(prismaClient);
  }

  async get(id: number): Promise<any> {
    const category = await this.prisma.category.findFirst({
      where: {
        id: id,
      },
    });

    return category;
  }

  async getByName(name: string): Promise<any> {
    const category = await this.prisma.category.findFirst({
      where: {
        name: name,
      },
    });
    return name;
  }

  async create(data: Category): Promise<any> {
    const category = await this.prisma.category.create({ data: data });
    return category;
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
        id: id,
      },
    });
  }
}
