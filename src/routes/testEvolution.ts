import { FastifyInstance } from "fastify";
import { evolutionService } from "../services/evolution/evolutionService";

export default async function testEvolutionRoutes(app: FastifyInstance) {

    app.get("/test/evolution/status", async (_request, reply) => {
        try {
            const status = await evolutionService.getStatus();
            return reply.send({ success: true, data: status });
        } catch (error: any) {
            return reply.status(500).send({
                success: false,
                error: error.message
            });
        }
    });

    app.get("/test/evolution/qrcode", async (_request, reply) => {
        try {
            const qrcode = await evolutionService.getQRCode();
            return reply.send({ success: true, data: qrcode });
        } catch (error: any) {
            return reply.status(500).send({
                success: false,
                error: error.message
            });
        }
    });

    app.post("/test/evolution/send-text", async (request, reply) => {
        try {
            const { number, text } = request.body as { number: string; text: string };

            if (!number || !text) {
                return reply.status(400).send({
                    success: false,
                    error: "number e text são obrigatórios"
                });
            }

            const result = await evolutionService.sendText({ number, text });
            return reply.send({ success: true, data: result });
        } catch (error: any) {
            return reply.status(500).send({
                success: false,
                error: error.message
            });
        }
    });

    app.post("/test/evolution/restart", async (_request, reply) => {
        try {
            const result = await evolutionService.restartInstance();
            return reply.send({ success: true, data: result });
        } catch (error: any) {
            return reply.status(500).send({
                success: false,
                error: error.message
            });
        }
    });

}
