export interface IRepositoryBase<T> {
  create(data: any): Promise<any>;
  get(data: any): Promise<any>;
  getMany(input: any): Promise<any>;
  update(input: any): Promise<any>;
  delete(input: any): Promise<any>;
}
