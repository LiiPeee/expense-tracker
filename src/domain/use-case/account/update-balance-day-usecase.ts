export interface UpdateBalanceInput {
  categoryId: string;
  accountId: string;
  value: number;
  type: string;
  paid: boolean;
  recurrence: string;
  id: string;
}

export abstract class IUpdateBalanceDayAcountUseCase {
  abstract execute(): Promise<void>;
  abstract update(transaction: UpdateBalanceInput): Promise<void>;
}
