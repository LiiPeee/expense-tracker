import { ICategory } from "./category";

export interface ITransatcion {
  value: number;
  paymentName: string;
  paid: boolean;
  comment?: string;
  recurrence: Recurrence;
  category: ICategory;
}

export enum Recurrence {
    M = "M",
    w = "W",
    D = "D",
    B = "B"
  }

