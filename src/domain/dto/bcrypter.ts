export interface IBcrypter {
  hash(data: string): Promise<string>;
  compare(pass: string, pass_db?: string): Promise<boolean>;
}
