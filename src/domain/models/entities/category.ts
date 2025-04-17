import { ICategory } from "../../entity/category";
import { EntityBase } from './entity-base';


export class Category extends EntityBase implements ICategory {
  name: string;

  constructor(props: ICategory) {
    super();
    this.name = props.name;
  }
}
