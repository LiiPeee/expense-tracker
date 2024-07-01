export interface IRepositoryBase<T> {
  create(data: any): Promise<any>;
  get(input: string): Promise<any>;
  getMany(input: any): Promise<any>;
}
