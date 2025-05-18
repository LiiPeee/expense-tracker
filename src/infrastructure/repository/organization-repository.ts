import { PrismaClient } from '@prisma/client';
import { IOrganization } from '../../domain/entity/organization';
import { IOrganizationRepository } from '../../domain/repository/IOrganizationRepository';

export class OrganizationRepository implements IOrganizationRepository {
  constructor(private readonly prisma: PrismaClient) {}

  public static createClient(prismaClient: PrismaClient) {
    return new OrganizationRepository(prismaClient);
  }

  async create(data: IOrganization): Promise<any> {
    return await this.prisma.organization.create({ data: data });
  }
  get(data: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  getMany(input: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  update(input: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  delete(input: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
