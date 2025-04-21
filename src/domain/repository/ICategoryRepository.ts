export interface InputCategory {
  name: string;
}

export abstract class ICategoryRepository {
  abstract update(id: string, input: any): Promise<any>;

  abstract get(id?: string): Promise<any>;

  abstract getByName(name: string): Promise<any>;

  abstract create(input: InputCategory): Promise<any>;

  abstract getMany(input: any): Promise<any>;

  abstract delete(input: any): Promise<any>;
}
