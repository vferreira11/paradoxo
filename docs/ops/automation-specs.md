# Especificacoes de Automacao

## Objetivo

Definir as automacoes da V1 da Paradoxo de maneira clara, auditavel e leve, para evitar cenarios em que o sistema faz mais ruido do que trabalho util.

## Principios

1. Automacao deve economizar tempo ou reduzir erro recorrente.
2. Todo fluxo precisa ter dono humano e passo de excecao.
3. Antes de automatizar, o processo manual precisa estar claro.
4. Se o volume nao justifica, nao automatizar ainda.

## Stack-alvo

- Tally para formulario.
- Calendly para agendamento.
- Notion para CRM e projetos.
- Gmail para comunicacao.
- Make para orquestracao.

## Fluxo 1: Aplicacao para diagnostico

### Objetivo

Transformar uma resposta de formulario em oportunidade organizada no CRM.

### Gatilho

Novo envio no formulario de diagnostico.

### Entradas minimas

1. Nome.
2. Email.
3. Empresa.
4. Cargo.
5. Segmento.
6. Desafio principal.
7. Urgencia.
8. Link do site.

### Passos

1. Criar ou atualizar contato no banco Contatos.
2. Criar oportunidade no CRM com estagio Lead qualificado ou Lista-alvo, dependendo do grau de aderencia.
3. Preencher dor principal com o texto do formulario.
4. Criar proxima acao padrao: revisar lead em ate 24 horas.
5. Enviar email de confirmacao de recebimento.

### Saidas

1. Novo lead estruturado.
2. Contato relacionado.
3. Confirmacao enviada.

### Excecoes

1. Se email ja existir, atualizar oportunidade existente em vez de criar duplicata.
2. Se faltar empresa ou desafio, marcar para revisao manual.

## Fluxo 2: Discovery agendado

### Objetivo

Atualizar o CRM e preparar a call sem depender de memoria manual.

### Gatilho

Novo agendamento no Calendly.

### Passos

1. Procurar oportunidade pelo email do participante.
2. Atualizar estagio para Discovery agendado.
3. Registrar data da reuniao e ultimo contato.
4. Criar bloco de preparo de reuniao na pagina da oportunidade.
5. Enviar email curto de confirmacao com agenda.

### Saidas

1. CRM atualizado.
2. Pagina pronta para discovery.
3. Participante confirmado.

### Excecoes

1. Se nao houver oportunidade associada, criar oportunidade nova e marcar origem como Calendly.
2. Se a reuniao for remarcada, sobrescrever a data e registrar observacao.

## Fluxo 3: Proposta enviada

### Objetivo

Garantir follow-up disciplinado depois do envio da proposta.

### Gatilho

Campo Estagio alterado para Proposta enviada no CRM.

### Passos

1. Registrar data da proposta.
2. Criar tarefa de follow-up para 3 dias uteis depois.
3. Criar tarefa de follow-up adicional para 7 dias corridos.
4. Sugerir email ou mensagem de follow-up a partir do playbook.

### Saidas

1. Cadencia de follow-up criada.
2. Risco de esquecimento reduzido.

## Fluxo 4: Projeto ganho

### Objetivo

Converter venda em operacao sem perder contexto.

### Gatilho

Estagio do CRM alterado para Ganha.

### Passos

1. Criar novo projeto no banco Projetos.
2. Vincular sponsor, cliente e oportunidade original.
3. Criar checklist de pre-kickoff.
4. Criar pasta do cliente no Drive usando estrutura padrao.
5. Enviar email de boas-vindas e alinhamento inicial.

### Saidas

1. Projeto criado.
2. Pasta criada.
3. Kickoff encaminhado.

### Excecoes

1. Se ja existir projeto para a mesma oportunidade, apenas atualizar status.
2. Se faltarem dados do sponsor, travar automacao e pedir revisao manual.

## Fluxo 5: Projeto encerrado

### Objetivo

Capturar aprendizado, prova e proximo passo comercial.

### Gatilho

Status do projeto alterado para Encerrado.

### Passos

1. Criar checklist de encerramento.
2. Solicitar depoimento quando apropriado.
3. Criar item no banco Ativos com licao aprendida.
4. Atualizar oportunidade ou conta para proximo passo de advisory ou nurture.

### Saidas

1. Aprendizado preservado.
2. Oportunidade de expansao registrada.
3. Biblioteca de ativos alimentada.

## Campos de controle recomendados no Make

1. Data de execucao.
2. Nome do fluxo.
3. ID do registro no Notion.
4. Status do fluxo.
5. Mensagem de erro.

## Ordem de implementacao

1. Aplicacao para diagnostico.
2. Discovery agendado.
3. Proposta enviada.
4. Projeto ganho.
5. Projeto encerrado.

## O que deixar manual na V1

1. Qualificacao final de lead.
2. Precificacao.
3. Diagnostico final do cliente.
4. Texto final de proposta.
5. Mensagens sensiveis de negociacao.