import { sign } from 'jsonwebtoken';
import { IJwt } from '../../domain/framework/jwt';

export class JwtAdapter implements IJwt {
  sign(id: string, secret: string): string {
    return sign(id, secret);
  }
}
