import { IContact } from '../../entity/contact';
import { IUseCase } from '../usecase';

export type GetContactOutPut = { contact: IContact };

export abstract class IGetAllContactUseCase implements IUseCase<any, GetContactOutPut> {
  abstract execute(): Promise<GetContactOutPut>;
}
