/* eslint-disable @typescript-eslint/naming-convention */
import { v4 } from 'uuid';

export const UniqueId = (): string => v4();

// export const MongoId = (): string => new Types.ObjectId().toString();
