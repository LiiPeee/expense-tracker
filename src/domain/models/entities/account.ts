import { BadRequestError } from '../../../data-layer/errors/bad-request-error';
import { IAccount, IAccountBehavior } from '../../entity/account';
import { EntityBase } from './entity-base';

export class Account extends EntityBase implements IAccount, IAccountBehavior {
  name!: string;
  email!: string;
  token!: string;
  balance!: number;
  password!: string;

  constructor() {
    super();
  }
  setName(name: string): Account {
    if (!name) throw new BadRequestError('You dont send name');
    this.name = name;

    return this;
  }
  setEmail(email: string): Account {
    if (!email) throw new BadRequestError('You dont send email');
    this.email = email;

    return this;
  }
  setToken(token: string): Account {
    if (!token) throw new BadRequestError('You dont send token');
    this.token = token;

    return this;
  }
  setBalance(balance: number): Account {
    this.balance = balance;

    return this;
  }
  setPassword(password: string): Account {
    if (!password) throw new BadRequestError('You dont send password');
    this.password = password;

    return this;
  }
}
