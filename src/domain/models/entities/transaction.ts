import { IAccount } from "@/domain/entity/account";
import { IContact } from "@/domain/entity/contact";
import { ICategory } from "../../entity/category";
import { ITransaction, Recurrence } from "../../entity/transaction";
import { EntityBase } from './entity-base';


export class Transaction extends EntityBase implements ITransaction {
  account: IAccount;
  value: number;
  paymentName: string;
  paid: boolean;
  comment?: string | undefined;
  recurrence: Recurrence;
  category: ICategory;
  contact: IContact;
  number_of_installments?: number;
  installments_date?: Date;

  constructor(props: ITransaction) {
    super();
    this.account = props.account;
    this.value = props.value;
    this.paymentName = props.paymentName;
    this.paid = props.paid;
    this.comment = props.comment;
    this.recurrence = props.recurrence;
    this.category = props.category;
    this.contact = props.contact;
    this.number_of_installments = props.number_of_installments;
    this.installments_date = props.installments_date;
  }

}
