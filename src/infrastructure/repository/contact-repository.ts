import { PrismaClient } from '@prisma/client';
import { Account } from '../../domain/models/entities/account';
import { IContactRepository } from '../../domain/repository/IContactRepository';

export class ContactRepository implements IContactRepository {
  constructor(private readonly prisma: PrismaClient) {}

  public static createClient(prismaClient: PrismaClient) {
    return new ContactRepository(prismaClient);
  }

  get(id?: string | undefined): Promise<Account> {
    throw new Error('Method not implemented.');
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
  async delete(id: string) {
    return await this.prisma.contact.delete({
      where: {
        id: id,
      },
    });
  }
  async getByName(email: string): Promise<any> {
    const contact = await this.prisma.contact.findFirst({
      where: {
        email: email,
      },
    });

    return contact;
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
