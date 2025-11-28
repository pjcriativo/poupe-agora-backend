import "../config/env"; // Carregar variáveis de ambiente
import { createWorker } from "./queues/factory";

import { incomingMessageProcessor } from "./processors/incomingMessage.processor";
import { mediaPipelineProcessor } from "./processors/mediaPipeline.processor";
import { orchestratorProcessor } from "./processors/orchestrator.processor";
import { sendMessageProcessor } from "./processors/sendMessage.processor";

createWorker("incoming_message", incomingMessageProcessor);
createWorker("media_pipeline", mediaPipelineProcessor);
createWorker("orchestrator", orchestratorProcessor);
createWorker("send_message", sendMessageProcessor);

console.log("⚙️ Workers iniciados...");
