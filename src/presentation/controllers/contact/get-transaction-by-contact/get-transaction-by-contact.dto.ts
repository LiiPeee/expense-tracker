import { IContact } from '../../../../domain/entity/contact';

export class TransatactionByContactDto {
  constructor(public value: number, public paymentName: string, public recurrence: string, public paid: boolean) {}
}

export class GetTransactionByContactDto {
  name: string;
  type: string;
  transactions?: TransatactionByContactDto[];

  constructor(contact: IContact) {
    this.name = contact.name;
    this.type = contact.type;
    this.transactions = contact.transactions?.map(
      (transaction) =>
        new TransatactionByContactDto(
          transaction.value,
          transaction.paymentName,
          transaction.recurrence,
          transaction.paid
        )
    );
  }
}
