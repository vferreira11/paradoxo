# Estrutura do Google Drive

## Objetivo

Criar uma arquitetura simples de pastas para arquivos comerciais, projetos e ativos da Paradoxo.

## Principios

1. Cada cliente tem uma pasta unica.
2. Propostas finais e contratos precisam ser encontradas em menos de 30 segundos.
3. O Drive guarda arquivos finais e materiais de suporte; status continua no Notion.
4. Nao usar o Drive como CRM improvisado.

## Estrutura raiz recomendada

```text
Paradoxo/
  00_Admin/
  01_Sales/
  02_Clients/
  03_Marketing/
  04_Assets/
  99_Archive/
```

## Pasta 00_Admin

Uso:

1. Contratos-padrao.
2. Financeiro.
3. Documentos legais.
4. Identidade e materiais institucionais.

## Pasta 01_Sales

Uso:

1. Propostas enviadas.
2. Modelos de proposta.
3. Materiais de discovery.
4. One-pagers comerciais.

### Subestrutura sugerida

```text
01_Sales/
  Templates/
  Proposals/
  Discovery/
  Archived/
```

## Pasta 02_Clients

Uso:

Uma pasta por cliente ganho.

### Nome recomendado

`AAAA-MM Cliente - Tipo de Projeto`

### Estrutura interna padrao

```text
02_Clients/
  AAAA-MM Cliente - Diagnostico/
    01_Kickoff/
    02_Research/
    03_Interviews/
    04_Analysis/
    05_Deliverables/
    06_Admin/
```

### Conteudo por pasta

#### 01_Kickoff

- Agenda.
- Escopo aprovado.
- Confirmacao de participantes.

#### 02_Research

- Materiais do cliente.
- Referencias externas.
- Documentos de contexto.

#### 03_Interviews

- Roteiros.
- Notas.
- Gravacoes, se houver autorizacao.

#### 04_Analysis

- Sinteses.
- Matrizes de priorizacao.
- Hipoteses de impacto.

#### 05_Deliverables

- Versoes finais de readout.
- Roadmap.
- Materiais compartilhados.

#### 06_Admin

- Contrato.
- Nota fiscal.
- Comprovantes.

## Pasta 03_Marketing

Uso:

1. Conteudo publicado.
2. Artes simples.
3. Rascunhos exportados.
4. Materiais do site.

## Pasta 04_Assets

Uso:

1. Templates reutilizaveis.
2. Frameworks proprios.
3. Mini-cases anonimizados.
4. Biblioteca de prompts limpos.

## Pasta 99_Archive

Uso:

1. Projetos encerrados ha muito tempo.
2. Materiais obsoletos.
3. Versoes antigas que nao devem poluir a operacao atual.

## Regras de nomeacao

1. Usar nomes curtos e orientados a busca.
2. Comecar por data quando fizer sentido.
3. Evitar versao final final revisado 2.
4. Arquivos finais devem indicar status com clareza.

## Padrrao de nome de arquivo

`AAAA-MM-DD Cliente - Tipo - Descricao`

Exemplos:

- `2026-05-03 Paradoxo - Proposal - Diagnostico Acme`
- `2026-05-10 Acme - Deliverable - Roadmap Executivo`

## Regra de limpeza

Ao encerrar um projeto, mover materiais irrelevantes, consolidar entregaveis finais e registrar no Notion o link da pasta definitiva.