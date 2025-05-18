import { BadRequestError } from '../../../infrastructure/errors/bad-request-error';
import { IAccount, IAccountBehavior } from '../../entity/account';
import { EntityBase } from './entity-base';

export class Account extends EntityBase implements IAccount, IAccountBehavior {
  name!: string;
  email!: string;
  token!: string;
  balance!: number;
  password!: string;
  organizationId!: string;

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

  setOrganization(organizationId: string): Account {
    if (!organizationId) throw new BadRequestError('You didnt send organization');
    this.organizationId = organizationId;

    return this;
  }

  updateBalance(value: number, typeTransaction: string) {
    if (typeTransaction === 'expense') {
      this.balance -= value;
      return this.balance;
    }
    this.balance += value;
    return this.balance;
  }
}
