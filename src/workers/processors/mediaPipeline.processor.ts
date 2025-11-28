export async function mediaPipelineProcessor(job: any) {
    console.log("[media_pipeline] Processando mídia:", job.data);

    // FUTURO:
    // 1. Baixar mídia (áudio, imagem, pdf)
    // 2. Converter para formato correto
    // 3. Enviar para ferramenta do agente
    // 4. Enfileirar para orchestrator
}
