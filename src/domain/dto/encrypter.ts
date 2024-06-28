export interface Encrypter {
  encrypt(pass: string): string;
  decrypt(pass: string): string;
}
