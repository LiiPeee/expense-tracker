import { Worker } from "bullmq";
import { IConsumer } from "@/domain/framework/consumer";

export class ConsumerQueueAdapter implements IConsumer {
  private worker: Map<string, Worker> = new Map();
  async startConsumer(nameQueue: string, callback: (data: any) => Promise<void>): Promise<any> {
    const consumer: Worker = new Worker(
      nameQueue,
      async (job) => {
        try {
          await callback(job.data);
        } catch (error){
          console.log("somenthing wrong in bullMQ");
          throw  error;
        }
      },
      {
        connection: {
          host: process.env.SCHEDULER_URL,
          port: Number(process.env.PORT_SCHEDULER),
        },
        concurrency: 1,
      }
    );

    this.worker.set(nameQueue, consumer);
    return consumer;
  }

  private consumer(woker:Worker, queueName: string){
    woker.on('completed', job =>{
      console.log(`compleeted job with name ${job.id}`)
    })


    woker.on('failed', job =>{
      console.log(`failed job with name ${job?.name} in queue ${queueName}`)
    })
  }

  async stopConsumer(): Promise<void>{
    await Promise.all(Array.from(this.worker.values()).map(worker => worker.close()))
    this.worker.clear()
  }
}
