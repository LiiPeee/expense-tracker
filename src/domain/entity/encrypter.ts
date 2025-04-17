export interface IEncrypter {
    encrypt(pass: string): string
    decrypt(pass: string): string
}
