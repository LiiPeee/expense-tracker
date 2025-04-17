import { IContact } from "../entity/contact";

export interface CreateContactInput {
    name: string;
    phone: string;
    email: string;
}
export interface GetAccountInput {
    email: string;
    data: any;
}


export abstract class IContactRepository {
    abstract update(email: string, data: any): Promise<any>;

    abstract get(id?: number): Promise<any>;

    abstract getMany(): Promise<any>;

    abstract create(contact: IContact): Promise<any>;

    abstract delete(id: number): Promise<any>;


}
