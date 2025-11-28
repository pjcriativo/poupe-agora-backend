import { FastifyInstance } from "fastify";
import { queues } from "../../workers/queues";
import { env } from "../../config/env";

export default async function whatsappRoutes(app: FastifyInstance) {

    app.post("/webhook/evolution", async (request, reply) => {
        const body = request.body as any;

        console.log("📩 [Evolution Webhook] Recebido:", body);

        // Estrutura esperada do Evolution API
        const normalized = {
            instance: env.EVOLUTION_INSTANCE_NAME,
            from: body?.data?.key?.remoteJid || null,
            message: body?.data?.message?.conversation
                || body?.data?.message?.extendedTextMessage?.text
                || null,
            messageId: body?.data?.key?.id || null,
            type: body?.type || "message",
            raw: body,
        };

        // Enfileirar para processamento
        await queues.incomingMessage.add("incoming", normalized);

        return reply.code(200).send({ status: "ok" });
    });

}
