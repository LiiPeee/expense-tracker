export abstract class IConsumer {
  abstract consumer(nameQueue: string, callback: (data: any) => Promise<void>): any;
}
