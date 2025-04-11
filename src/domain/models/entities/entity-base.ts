import { IEntityBase } from "../../entity/entity";

export class EntityBase implements IEntityBase {
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(id?: number) {
    this.id = id;
  }

  static isEntity(value: any): boolean {
    return value instanceof EntityBase;
  }

  }
