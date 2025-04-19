import { BadRequestError } from "../../../data-layer/errors/bad-request-error";
import { ICategory, ICategoryBehavior, TypeCategory } from "../../entity/category";
import { EntityBase } from "./entity-base";

export class Category extends EntityBase implements ICategory, ICategoryBehavior {
  name!: string;
  type!: TypeCategory;
  is_active!: boolean;

  constructor() {
    super();
  }

  setName(name: string): Category {
    if (!name) throw new BadRequestError("You dont send email");
    this.name = name;

    return this;
  }

  setType(type: TypeCategory): Category {
    if (!type) throw new BadRequestError("You dont send email");
    this.type = type;

    return this;
  }

  setIsActive(isActive: boolean): Category {
    if (!isActive) throw new BadRequestError("You dont send email");
    this.is_active = isActive;

    return this;
  }
}
