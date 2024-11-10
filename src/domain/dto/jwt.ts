export interface Jwt {
  sign(id?: string, secret?: string): any;
}
