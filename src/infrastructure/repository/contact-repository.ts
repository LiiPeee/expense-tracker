import { PrismaClient } from '@prisma/client';
import { IContactRepository } from '../../domain/repository/IContactRepository';

export class ContactRepository implements IContactRepository {
  constructor(private readonly prisma: PrismaClient) {}

  public static createClient(prismaClient: PrismaClient) {
    return new ContactRepository(prismaClient);
  }

  async create(data: any): Promise<any> {
    const contact = await this.prisma.contact.create({
      data: { ...data, address: { connect: { id: data.address.id } } },
    });
    return contact;
  }

  async getMany(): Promise<any> {
    return await this.prisma.contact.findMany();
  }
  async update(email: string, data: any) {
    return await this.prisma.contact.update({ where: { email: email }, data: data });
  }
  async delete(id: number) {
    return await this.prisma.contact.delete({
      where: {
        id: id,
      },
    });
  }
  async getByName(name: string): Promise<any> {
    const contact = await this.prisma.contact.findFirst({
      where: {
        email: name,
      },
    });

    return contact;
  }
  get(id: number): Promise<any> {
    throw new Error('Method not implemented.');
  }

  async getTransactionByContact(input: any): Promise<any> {
    const contact = await this.prisma.contact.findFirst({
      where: { email: input },
      include: {
        transactions: true,
      },
    });
    return contact;
  }
}
