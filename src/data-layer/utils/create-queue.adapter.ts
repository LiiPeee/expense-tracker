import { Queue } from "bullmq";
import { IQueue, Options } from "@/domain/framework/queue";

export class BullMQAdapter implements IQueue {
  private queues: Map<string, Queue> = new Map();
  constructor() {}
  async addJob(queueName: string, nameJob: string, payload: any, options: Options) {
    try {
      if (!this.queues.has(queueName)) {

        this.queues.set(
            queueName,
            new Queue(queueName, {
              connection: {
                host: process.env.SCHEDULER_URL,
                port: Number(process.env.PORT_SCHEDULER),
              },
            })
        );
      }

      const queue:Queue | undefined = this.queues.get(queueName);

      await queue?.add(nameJob, payload, options);

      console.log("Job Created");
    } catch (error) {
      console.log("somenthing wrong");
    }
  }
}
