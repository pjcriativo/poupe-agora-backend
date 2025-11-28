import { Queue } from "bullmq";
import { redis } from "../../config/redis";

export const queues = {
    incomingMessage: new Queue("incoming_message", { connection: redis }),
    mediaPipeline: new Queue("media_pipeline", { connection: redis }),
    orchestrator: new Queue("orchestrator", { connection: redis }),
    sendMessage: new Queue("send_message", { connection: redis }),
};
