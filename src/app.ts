import Fastify from "fastify";
import { env } from "./config/env";

export async function createApp() {
  const app = Fastify({
    logger: env.NODE_ENV === "development",
  });

  app.get("/health", () => ({ status: "ok" }));

  // ROTAS DO WHATSAPP
  await app.register(import("./modules/whatsapp/whatsapp.routes"));

  // ROTAS DE TESTE (EVOLUTION API)
  await app.register(import("./routes/testEvolution"));

  return app;
}
