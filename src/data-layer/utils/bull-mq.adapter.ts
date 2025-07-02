import { Queue, Worker } from "bullmq";
import { MQ } from "../../domain/framework/MQ";

export class BullMQAdapter implements MQ {
  async createQueue(queueName: string, nameJob: string, payload: any) {
    const queue: Queue = new Queue(queueName, {
      connection: {
        host: process.env.SCHEDULER_URL,
        port: Number(process.env.PORT_SCHEDULER),
      },
    });

    try {
      await queue.add(
        nameJob,
        {
          payload: payload,
        },
        {
          repeat: {
            every: 10000,
            jobId: nameJob,
          },
        }
      );

      console.log("Job Created");
    } catch (error) {
      console.log("somenthing wrong");
    }
  }

  async consumer(nameQueue: string, data: any) {
    const worker: Worker = new Worker(
      nameQueue,
      async (job) => {
        data = job.data;
        return data;
      },
      {
        connection: {
          host: "127.0.0.1",
          port: 6379,
        },

        concurrency: 1,
      }
    );
    return worker;
  }
}
