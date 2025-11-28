import Fastify from 'fastify';
import { config } from './config';
import { logger } from './utils/logger';
import redis from './database/redis';

const server = Fastify({
    logger: false,
});

// Health check
server.get('/health', async () => {
    return {
        status: 'ok',
        timestamp: new Date().toISOString(),
        redis: redis.status === 'ready' ? 'connected' : 'disconnected',
    };
});

// Webhook WhatsApp (Evolution API)
server.post('/webhooks/whatsapp', async (request) => {
    logger.info('Webhook WhatsApp recebido', { body: request.body });
    return { received: true };
});

// Webhook PerfectPay
server.post('/webhooks/perfectpay', async (request) => {
    logger.info('Webhook PerfectPay recebido', { body: request.body });
    return { received: true };
});

// Webhook Asaas
server.post('/webhooks/asaas', async (request) => {
    logger.info('Webhook Asaas recebido', { body: request.body });
    return { received: true };
});

// Iniciar servidor
const start = async () => {
    try {
        await server.listen({
            port: config.server.port,
            host: '0.0.0.0'
        });

        logger.info('🚀 Servidor iniciado', {
            port: config.server.port,
            env: config.server.env,
        });
    } catch (err) {
        logger.error('Erro ao iniciar servidor', { error: err });
        process.exit(1);
    }
};

// Graceful shutdown
process.on('SIGTERM', async () => {
    logger.info('SIGTERM recebido, encerrando servidor...');
    await server.close();
    await redis.quit();
    process.exit(0);
});

start();
