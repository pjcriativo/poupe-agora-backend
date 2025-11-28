import { z } from "zod";
import dotenv from "dotenv";

dotenv.config();

const envSchema = z.object({
  PORT: z.string().default("3000"),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),

  SUPABASE_URL: z.string(),
  SUPABASE_ANON_KEY: z.string(),
  SUPABASE_SERVICE_ROLE_KEY: z.string(),

  REDIS_HOST: z.string().default("localhost"),
  REDIS_PORT: z.string().default("6379"),
  REDIS_PASSWORD: z.string().optional(),

  OPENAI_API_KEY: z.string(),

  EVOLUTION_API_URL: z.string(),
  EVOLUTION_API_KEY: z.string(),
  EVOLUTION_INSTANCE_NAME: z.string(),

  PERFECTPAY_API_URL: z.string(),
  PERFECTPAY_API_KEY: z.string(),
  PERFECTPAY_WEBHOOK_SECRET: z.string(),

  ASAAS_API_URL: z.string(),
  ASAAS_API_KEY: z.string(),
  ASAAS_WEBHOOK_SECRET: z.string(),

  INTENT_TTL_SECONDS: z.string().default("300"),

  WORKER_CONCURRENCY: z.string().default("5"),
});

export const env = envSchema.parse(process.env);
