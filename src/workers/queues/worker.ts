import { createWorker } from "./factory";
import { incomingMessageProcessor } from "../processors/incomingMessage.processor";
import { mediaPipelineProcessor } from "../processors/mediaPipeline.processor";
import { orchestratorProcessor } from "../processors/orchestrator.processor";
import { sendMessageProcessor } from "../processors/sendMessage.processor";

export const workers = {
    incomingMessage: createWorker("incoming_message", incomingMessageProcessor),

    mediaPipeline: createWorker("media_pipeline", mediaPipelineProcessor),

    orchestrator: createWorker("orchestrator", orchestratorProcessor),

    sendMessage: createWorker("send_message", sendMessageProcessor),
};
