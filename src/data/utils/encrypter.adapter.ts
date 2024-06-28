import crypto, { createDecipheriv } from "crypto";
import { Encrypter } from "../../domain/dto/encrypter";
export class EncrypterAdapter implements Encrypter {
  encrypt(pass: string): string {
    const size = crypto.randomBytes(16);
    const encrypt = crypto.createCipheriv(
      "aes-256-cbc",
      crypto.randomBytes(32),
      size
    );
    let encrypted = encrypt.update(pass, "utf8", "hex");
    encrypted += encrypt.final("hex");
    return encrypted;
  }

  decrypt(pass: string): string {
    const length = crypto.randomBytes(16);
    const deciphter = createDecipheriv(
      "aes-256-cbc",
      crypto.randomBytes(32),
      length
    );
    let decrypted = deciphter.update(pass, "hex", "utf8");
    decrypted += deciphter.final("utf8");
    return decrypted;
  }
}
