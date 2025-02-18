
export interface CreateContactInput {
    name: String;
    phone: String;
    email: String;
}
export interface GetAccountInput {
    email: string;
    data: any;
}


export abstract class IContactRepository {
    abstract update(email: string, data: any): Promise<any>;

    abstract get(id: number): Promise<any>;

    abstract getMany(): Promise<any>;

    abstract create(input: CreateContactInput): Promise<any>;

    abstract delete(id: number): Promise<any>;


}
