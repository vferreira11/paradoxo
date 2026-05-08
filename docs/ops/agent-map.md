# Mapa de Agentes

## Objetivo

Definir uma camada agentic enxuta para aumentar velocidade e consistencia sem perder controle humano.

## Regras gerais

1. Agente nao decide sozinho sobre escopo, preco ou recomendacao critica.
2. Todo agente precisa de gatilho claro, entrada minima, saida esperada e checkpoint humano.
3. Agente sem metrica de qualidade vira ruído.
4. Comecar com poucos agentes de alto valor e baixa ambiguidade.

## Contrato padrao de agente

### Entrada

- Fonte do dado.
- Contexto do cliente ou da conta.
- Objetivo da tarefa.

### Processo esperado

- Instrucoes de sintese, priorizacao ou geracao.

### Saida

- Formato padrao.
- Campo de confianca.
- Pendencias ou pontos a validar.

### Checkpoint humano

- Momento em que voce revisa, corrige e aprova.

## Agentes recomendados para a V1

### 1. Agente de pesquisa de conta

**Funcao**

Preparar um dossie curto sobre empresa-alvo antes da abordagem ou do discovery.

**Entrada**

- Site da empresa.
- LinkedIn.
- Noticias publicas.

**Saida**

- Resumo do negocio.
- Hipoteses de dor.
- Gatilhos de abordagem.
- Lista de perguntas de discovery.

**Checkpoint humano**

Revisar hipoteses antes de enviar qualquer mensagem.

### 2. Agente de preparo de reuniao

**Funcao**

Converter contexto da conta em pauta, tese e objetivos da call.

**Saida**

- Agenda sugerida.
- Resultado esperado.
- Riscos da conversa.

### 3. Agente de sintese de discovery

**Funcao**

Transformar notas da reuniao em diagnostico bruto.

**Saida**

- Dor principal em uma frase.
- Objetivos do cliente.
- Sinais de aderencia.
- Riscos e proximos passos.

**Checkpoint humano**

Voce valida se a leitura faz sentido antes de propor qualquer trabalho.

### 4. Agente de priorizacao diagnostica

**Funcao**

Agrupar oportunidades, friccoes e ideias de caso de uso em backlog inicial.

**Saida**

- Lista estruturada de oportunidades.
- Hipotese de impacto.
- Dependencias e riscos.

### 5. Agente de rascunho de proposta

**Funcao**

Gerar primeira versao de proposta a partir das notas validadas.

**Saida**

- Resumo executivo.
- Escopo.
- Cronograma.
- Critério de sucesso.

**Checkpoint humano**

Preco e framing final sempre aprovados manualmente.

### 6. Agente de acompanhamento de projeto

**Funcao**

Organizar status, proximos passos, riscos e pendencias apos cada bloco de trabalho.

**Saida**

- Atualizacao semanal.
- Lista de bloqueios.
- Checklist de proxima etapa.

### 7. Agente de QA editorial

**Funcao**

Revisar clareza, consistencia e promessas exageradas em propostas, diagnosticos e conteudo.

**Saida**

- Ajustes de linguagem.
- Alertas de ambiguidade.
- Alertas de excesso de jargao.

### 8. Agente de follow-up comercial

**Funcao**

Sugerir follow-ups curtos e contextualizados conforme o estagio da oportunidade.

**Saida**

- Mensagem sugerida.
- CTA.
- Melhor timing de envio.

## Ordem recomendada de implementacao

1. Pesquisa de conta.
2. Preparo de reuniao.
3. Sintese de discovery.
4. Rascunho de proposta.
5. QA editorial.

## O que nao automatizar cedo demais

1. Precificacao.
2. Diagnostico final sem revisao.
3. Promessas de impacto.
4. Comunicacao delicada com cliente sem leitura humana.