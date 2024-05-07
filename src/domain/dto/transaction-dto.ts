
export interface ITransatcionDto {
  value?: number;
  formatPayment?: string;
  paid?: boolean;
  comment?: string | null;
  category: Category;
}
export enum Category{
  RECEIVE , 
  EXPENSE 
}
export class TransctionDto implements ITransatcionDto {
  value?: number;
  formatPayment?: string;
  paid?: boolean;
  category: Category;
  comment?: string | null;

  constructor(transaction: ITransatcionDto) {
    this.value = transaction.value;
    this.formatPayment = transaction.formatPayment;
    this.comment = transaction.comment;
    this.paid = transaction.paid;
    this.category = transaction.category;
  }
}
