export async function orchestratorProcessor(job: any) {
    console.log("[orchestrator] Orquestrando IA:", job.data);

    // FUTURO:
    // 1. Detectar intenção
    // 2. Selecionar agente correto
    // 3. Chamar agente (OpenAI)
    // 4. Executar tools
    // 5. Gerar resposta final
    // 6. Enfileirar send_message
}
