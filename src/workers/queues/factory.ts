import { Worker } from "bullmq";
import { redis } from "../../config/redis";

export function createWorker(
    queueName: string,
    processor: (job: any) => Promise<any>,
    concurrency = 5
) {
    const worker = new Worker(
        queueName,
        async (job) => {
            return processor(job);
        },
        {
            connection: redis,
            concurrency,
        }
    );

    worker.on("completed", (job) => {
        console.log(`[Worker:${queueName}] ✔ Job ${job.id} concluído`);
    });

    worker.on("failed", (job, err) => {
        console.error(`[Worker:${queueName}] ✖ Job ${job?.id} falhou:`, err);
    });

    return worker;
}
