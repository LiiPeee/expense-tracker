import { sign } from "jsonwebtoken";
import { Jwt } from "../../domain/entity/jwt";

export class JwtAdapter implements Jwt {
  sign(id: string, secret: string) {
    return sign(id, secret);
  }
}
