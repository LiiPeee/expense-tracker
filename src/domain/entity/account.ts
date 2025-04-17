import { IEntityBase } from './entity'
import { ITransaction } from './transaction'

export interface IAccount extends IEntityBase {
    name: string
    email: string
    token?: string
    balance?: number
    password: string
    transaction?: ITransaction
}

export interface IAccountBehavior {
    setName(name: string): IAccountBehavior
    setEmail(email: string): IAccountBehavior
    setToken(token?: string): IAccountBehavior
    setBalance(balance?: number): IAccountBehavior
    setPassword(password: string): IAccountBehavior
}
