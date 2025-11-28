import { env } from './env';

export const config = {
    server: {
        port: parseInt(env.PORT),
        env: env.NODE_ENV,
    },

    supabase: {
        url: env.SUPABASE_URL,
        anonKey: env.SUPABASE_ANON_KEY,
        serviceRoleKey: env.SUPABASE_SERVICE_ROLE_KEY,
    },

    redis: {
        host: env.REDIS_HOST,
        port: parseInt(env.REDIS_PORT),
        password: env.REDIS_PASSWORD,
    },

    openai: {
        apiKey: env.OPENAI_API_KEY,
    },

    evolution: {
        apiUrl: env.EVOLUTION_API_URL,
        apiKey: env.EVOLUTION_API_KEY,
        instanceName: env.EVOLUTION_INSTANCE_NAME,
    },

    perfectpay: {
        apiUrl: env.PERFECTPAY_API_URL,
        apiKey: env.PERFECTPAY_API_KEY,
        webhookSecret: env.PERFECTPAY_WEBHOOK_SECRET,
    },

    asaas: {
        apiUrl: env.ASAAS_API_URL,
        apiKey: env.ASAAS_API_KEY,
        webhookSecret: env.ASAAS_WEBHOOK_SECRET,
    },

    intent: {
        ttlSeconds: parseInt(env.INTENT_TTL_SECONDS),
    },

    worker: {
        concurrency: parseInt(env.WORKER_CONCURRENCY),
    },
};
