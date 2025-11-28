import { createApp } from "./app";
import { env } from "./config/env";

async function bootstrap() {
    const app = await createApp();

    try {
        await app.listen({ port: Number(env.PORT), host: "0.0.0.0" });
        console.log(`🚀 Server rodando na porta ${env.PORT}`);
    } catch (error) {
        console.error("Erro ao iniciar servidor:", error);
        process.exit(1);
    }
}

bootstrap();

