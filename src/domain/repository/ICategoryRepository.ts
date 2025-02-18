
export interface InputCategory {
    name: string
}

export abstract class ICategoryRepository {
    abstract update(id: number, input: any): Promise<any>;

    abstract get(id: number): Promise<any>;

    abstract create(input: InputCategory): Promise<any>;

    abstract getMany(input: any): Promise<any>;

    abstract delete(input: any): Promise<any>;

}