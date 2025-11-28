import 'dotenv/config';

export const config = {
    server: {
        port: parseInt(process.env.PORT || '3000'),
        env: process.env.NODE_ENV || 'development',
    },

    supabase: {
        url: process.env.SUPABASE_URL!,
        anonKey: process.env.SUPABASE_ANON_KEY!,
        serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY!,
    },

    redis: {
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT || '6379'),
        password: process.env.REDIS_PASSWORD || undefined,
    },

    openai: {
        apiKey: process.env.OPENAI_API_KEY!,
    },

    evolution: {
        apiUrl: process.env.EVOLUTION_API_URL!,
        apiKey: process.env.EVOLUTION_API_KEY!,
        instanceName: process.env.EVOLUTION_INSTANCE_NAME!,
    },

    perfectpay: {
        apiUrl: process.env.PERFECTPAY_API_URL!,
        apiKey: process.env.PERFECTPAY_API_KEY!,
        webhookSecret: process.env.PERFECTPAY_WEBHOOK_SECRET!,
    },

    asaas: {
        apiUrl: process.env.ASAAS_API_URL!,
        apiKey: process.env.ASAAS_API_KEY!,
        webhookSecret: process.env.ASAAS_WEBHOOK_SECRET!,
    },

    intent: {
        ttlSeconds: parseInt(process.env.INTENT_TTL_SECONDS || '300'),
    },

    worker: {
        concurrency: parseInt(process.env.WORKER_CONCURRENCY || '5'),
    },
};
