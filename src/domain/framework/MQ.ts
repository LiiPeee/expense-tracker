export abstract class MQ {
  abstract createQueue(queueName: string, nameJob: string, payload: any): void;
  abstract consumer(nameQueue: string, data: any): any;
}
