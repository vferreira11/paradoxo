# Stack V1 Recomendada

## Objetivo

Escolher uma stack simples o suficiente para operar rapido e robusta o suficiente para crescer sem retrabalho absurdo.

## Principios de escolha

1. Poucas ferramentas, cada uma com papel claro.
2. Fonte unica de verdade para conhecimento e status.
3. Baixa manutencao antes de alta sofisticacao.
4. Automacao apenas em pontos repetitivos e previsiveis.

## Stack recomendada para a V1

### 1. Hub operacional e conhecimento

**Recomendacao:** Notion.

**Uso:** base de conhecimento, CRM leve, wiki de projeto, templates, backlog comercial e operating review.

### 2. Arquivos e ativos

**Recomendacao:** Google Drive.

**Uso:** contratos, propostas finais, materiais de cliente, documentos compartilhados e historico de entregaveis.

### 3. Intake e formulários

**Recomendacao:** Tally.

**Uso:** formulario de aplicacao para diagnostico e intake inicial do cliente.

### 4. Agenda

**Recomendacao:** Calendly.

**Uso:** agendamento de discovery e checkpoints, com perguntas de pre-qualificacao simples.

### 5. Automacoes

**Recomendacao:** Make.

**Uso:** mover dados entre formulario, CRM, agenda, email e agentes.

### 6. Comunicacao com cliente

**Recomendacao:** Gmail + WhatsApp, com regras claras de uso.

**Uso:** email para contexto formal e WhatsApp apenas para alinhamentos leves e rapidez operacional.

### 7. Assinatura e formalizacao

**Recomendacao:** ferramenta de assinatura eletronica compativel com o Brasil.

**Uso:** propostas aprovadas, contratos e aceite formal.

### 8. Camada de IA

**Recomendacao:** um provedor principal de LLM via interface e API.

**Uso:** pesquisa, sintese, rascunho, QA editorial e automacoes controladas.

## Arquitetura minima de dados

### CRM

- Empresa.
- Contato.
- Segmento.
- Dor principal.
- Estagio.
- Proxima acao.
- Valor potencial.

### Projetos

- Cliente.
- Sponsor.
- Objetivo.
- Status.
- Proxima entrega.
- Riscos.

### Ativos reutilizaveis

- Template.
- Tipo.
- Contexto de uso.
- Ultima revisao.

## Sequencia de implementacao da stack

1. Notion com CRM, wiki e templates.
2. Google Drive com pastas padrao.
3. Calendly para discovery.
4. Tally para intake.
5. Make para automacoes simples.
6. Agentes conectados aos artefatos mais repetitivos.

## Automacoes iniciais recomendadas

1. Novo formulario preenche CRM e cria pagina do lead.
2. Reuniao agendada dispara template de preparo de discovery.
3. Proposta aprovada cria projeto e checklist de kickoff.
4. Encerramento de projeto move aprendizados para biblioteca de ativos.

## O que evitar na V1

1. Montar integrações complexas antes de validar o processo.
2. Ter duas fontes de verdade para pipeline.
3. Criar agente para tarefa rara.
4. Assumir custo fixo alto de stack sem receita recorrente.