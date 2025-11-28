export async function incomingMessageProcessor(job: any) {
    console.log("[incoming_message] Recebido:", job.data);

    // FUTURO:
    // 1. Validar webhook
    // 2. Normalizar mensagem
    // 3. Detectar mídia
    // 4. Enfileirar para media_pipeline
}
