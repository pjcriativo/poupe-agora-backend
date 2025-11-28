# 🚀 Poupe Agora - Backend

Backend do sistema financeiro Poupe Agora via WhatsApp com IA.

## 📋 Pré-requisitos

- Node.js >= 18 (recomendado: v24.11.1 LTS)
- Redis (via Docker ou instalação local)
- Conta Supabase
- Chaves de API: OpenAI, Evolution API, PerfectPay/Asaas

## 🛠️ Setup

### 1. Instalar dependências

```bash
npm install
```

### 2. Configurar variáveis de ambiente

Copie o arquivo `.env.example` para `.env` e preencha com suas credenciais:

```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas chaves reais.

### 3. Iniciar Redis (Docker)

```bash
docker run -d --name redis -p 6379:6379 redis
```

### 4. Compilar TypeScript

```bash
npm run build
```

## 🚀 Executar

### Modo Desenvolvimento

```bash
# Servidor HTTP
npm run dev

# Workers (em outro terminal)
npm run dev:worker
```

### Modo Produção

```bash
# Compilar
npm run build

# Servidor HTTP
npm start

# Workers (em outro terminal)
npm run start:worker
```

## 📁 Estrutura do Projeto

```
src/
├── config/          # Configurações e variáveis de ambiente
├── database/        # Clientes Supabase e Redis
├── modules/         # Módulos principais
│   ├── auth/        # Autenticação e usuários
│   ├── billing/     # Pagamentos e planos
│   ├── whatsapp/    # Gateway WhatsApp
│   ├── media/       # Processamento de mídia
│   ├── intent/      # Engine de intenção
│   ├── orchestrator/# Orquestrador de agentes
│   ├── agents/      # Agentes de IA
│   ├── tools/       # Tools para IA
│   ├── finance/     # Core financeiro
│   ├── reminders/   # Lembretes
│   ├── automations/ # Automações
│   └── observability/# Logs e métricas
├── workers/         # Workers e filas BullMQ
│   ├── queues/      # Definições de filas
│   └── processors/  # Processadores de jobs
├── utils/           # Utilitários
└── server.ts        # Servidor HTTP principal
```

## 🔌 Endpoints

### Health Check
```
GET /health
```

### Webhooks
```
POST /webhooks/whatsapp    # Evolution API
POST /webhooks/perfectpay  # PerfectPay
POST /webhooks/asaas       # Asaas
```

## 📝 Status do Desenvolvimento

### ✅ Concluído
- [x] Estrutura base do projeto
- [x] Configuração TypeScript
- [x] Cliente Supabase
- [x] Cliente Redis
- [x] Logger estruturado
- [x] Servidor Fastify
- [x] Endpoints de webhook (estrutura)

### 🚧 Em Desenvolvimento
- [ ] Workers BullMQ
- [ ] Intent Engine
- [ ] Orchestrator
- [ ] Agentes de IA
- [ ] Tools Supabase
- [ ] Processamento de mídia

## 📚 Documentação

Para mais informações, consulte o Knowledge Base v1 do projeto.

## 🤝 Contribuindo

Este é um projeto privado. Contate o administrador para mais informações.

## 📄 Licença

ISC
