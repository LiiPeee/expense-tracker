// src/users/testing/user-fake-builder.ts

import { ICategory } from '../../src/domain/dto/category';
import { Recurrence } from '../../src/domain/dto/transaction';
import { Transaction } from "../../src/domain/models/entities/transaction";
import { CategoryFakeBuilder } from './category.fake';
import { FakeBuilder, PropOrFactory } from './fake-builder';


type UserRole = 'admin' | 'user' | 'guest';


export class TransactionFakeBuilder<TBuild = Transaction | Transaction[]> extends FakeBuilder<TBuild> {
    
  
  private _value: PropOrFactory<number> = (index) => Math.floor(Math.random() * 50) + 18;
  private _paymentName: PropOrFactory<string> = (index) => `${index + 1}`;
  private _paid: PropOrFactory<boolean> = () => false;
  private _comment: PropOrFactory<string> = (index) =>  `${index + 1}`;
  private _recurrence: PropOrFactory<Recurrence> = () => Recurrence.D
  private _category: PropOrFactory<ICategory> = () => CategoryFakeBuilder.aCategory().build()
    
  
 

  

  private constructor(countObjs: number = 1) {
    super(countObjs);
  }

  static aTransaction(): TransactionFakeBuilder<Transaction> {
    return new TransactionFakeBuilder<Transaction>();
  }

  static theTransactions(count: number): TransactionFakeBuilder<Transaction[]> {
    return new TransactionFakeBuilder<Transaction[]>(count);
  }



  withValue(value: number): TransactionFakeBuilder<TBuild>  {
    this._value = value;
    return this;
  }

  withPaymentName(paymentName: string): TransactionFakeBuilder<TBuild> {
    this._paymentName = paymentName;
    return this;
  }

  withPaid(paid: boolean): TransactionFakeBuilder<TBuild>  {
    this._paid = paid;
    return this;
  }

  withComment(comment: string): TransactionFakeBuilder<TBuild> {
    this._comment = comment;
    return this;
  }

  withRecurrence(recurrence: Recurrence): TransactionFakeBuilder<TBuild>  {
    this._recurrence = recurrence;
    return this;
  }
  withCategory(category: ICategory): TransactionFakeBuilder<TBuild> {
    this._category = category;
    return this;
  }
 
 

  protected generateMock(index: number): Transaction {
    return {
      value: this._callFactory(this._value, index) as number,
      paymentName: this._callFactory(this._paymentName, index) as string,
      paid: this._callFactory(this._paid, index) as boolean,
      comment: this._callFactory(this._comment, index) as string,
      recurrence: this._callFactory(this._recurrence, index)  as Recurrence,
      category: this._callFactory(this._category, index)  as ICategory,

    };
  }

  build(): TBuild {
    if (this._countObjs === 1) {
      return this.generateMock(0) as TBuild;
    }

    const items = Array.from({ length: this._countObjs }, (_, i) => this.generateMock(i));
    return items as TBuild;
  }
}