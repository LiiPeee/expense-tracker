export interface Options {
  repeat: {
    every: number | undefined;
  };
  delay: number;
  jobId: string;
  priority: number;
}

export abstract class IQueue {
  abstract addJob(queueName: string, nameJob: string, payload: any, options: Options): void;
}
