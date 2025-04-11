import { ICategory } from "../../dto/category";
import { EntityBase } from './entity-base';
import { Transaction } from "./transaction";


export class Category extends EntityBase implements ICategory {
  name: string;
  transactions: Transaction[];

  constructor(props: ICategory) {
    super();
    this.name = props.name;
    this.transactions = props.transactions;
  }
}
