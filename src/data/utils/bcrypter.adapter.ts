import { compare, hash } from "bcrypt";
import { IBcrypter } from "../../domain/dto/bcrypter";

export class Bcrypter implements IBcrypter {
  async hash(data: string): Promise<string> {
    return await hash(data, 16);
  }
  async compare(pass: string, pass_db: string): Promise<boolean> {
    return await compare(pass, pass_db);
  }
}
