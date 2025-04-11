export type PropOrFactory<T> = T | ((index: number) => T);

export abstract class FakeBuilder<TBuild> {
  protected _countObjs: number;
  private static idCounter = 0;
  
  protected _id: PropOrFactory<string> = () => this.generateId();
  protected _createdAt: PropOrFactory<Date> = () => new Date();
  protected _updatedAt: PropOrFactory<Date> = () => new Date();

  constructor(countObjs: number = 1) {
    this._countObjs = countObjs;
  }

  protected generateId(): string {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2, 6);
    return `id-${timestamp}-${random}-${FakeBuilder.idCounter++}`;
  }

  protected _callFactory<T>(factoryOrValue: PropOrFactory<T>, index: number): T | undefined {
    if (typeof factoryOrValue === 'function') {
      return (factoryOrValue as (index: number) => T | undefined)(index);
    }
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