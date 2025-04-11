import { ICategory } from "../../dto/category";
import { ITransatcion, Recurrence } from "../../dto/transaction";
import { EntityBase } from './entity-base';


export class Transaction extends EntityBase implements ITransatcion {

  value: number;
  paymentName: string;
  paid: boolean;
  comment?: string | undefined;
  recurrence: Recurrence;
  category: ICategory;
 
  constructor(props: ITransatcion) {
    super();
    this.value = props.value;
    this.paymentName = props.paymentName;
    this.paid = props.paid;
    this.comment = props.comment;
    this.recurrence = props.recurrence;
    this.category = props.category
  }
  
}
