
import { Chance } from 'chance';
import { UniqueId } from './unique-id';

export type PropOrFactory<T> = T | ((index: number) => T);

export abstract class FakeBuilder<TBuild> {
  protected _chance: Chance.Chance;

  protected _countObjs: number;
  private static idCounter = 0;
  
  protected _id: PropOrFactory<string> | undefined = () => UniqueId();
  protected _createdAt: PropOrFactory<Date> = () => new Date();
  protected _updatedAt: PropOrFactory<Date> = () => new Date();

  constructor(countObjs: number = 1) {
    this._countObjs = countObjs;
    this._chance = Chance();

  }


  protected _callFactory<Result>(factoryOrValue: PropOrFactory<any>): Result {
    if (typeof factoryOrValue === 'function') return factoryOrValue();
    return factoryOrValue;
  }

  withId(id: string): this {
    this._id = id;
    return this;
  }

  withCreatedAt(date: Date ): this {
    this._createdAt = date;
    return this;
  }

  withUpdatedAt(date: Date ): this {
    this._updatedAt = date;
    return this;
  }

  abstract build(): TBuild;
}