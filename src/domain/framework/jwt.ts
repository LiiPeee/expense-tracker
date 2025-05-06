export interface IJwt {
  sign(id: string, secret?: string): string;
}
