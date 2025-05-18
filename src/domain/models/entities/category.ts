import { BadRequestError } from '../../../infrastructure/errors/bad-request-error';
import { ICategory, ICategoryBehavior, TypeCategory } from '../../entity/category';
import { EntityBase } from './entity-base';

export class Category extends EntityBase implements ICategory, ICategoryBehavior {
  name!: string;
  type!: TypeCategory;
  isActive!: boolean;

  constructor() {
    super();
  }

  setName(name: string): Category {
    if (!name) throw new BadRequestError('You dont send name');
    this.name = name;

    return this;
  }

  setType(type: TypeCategory): Category {
    if (!type) throw new BadRequestError('You dont send type');
    this.type = type;

    return this;
  }

  setIsActive(isActive: boolean): Category {
    if (!isActive) throw new BadRequestError('You dont send if isActive');
    this.isActive = isActive;

    return this;
  }
}
