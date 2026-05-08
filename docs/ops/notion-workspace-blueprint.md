# Blueprint do Workspace Notion

## Objetivo

Traduzir a V1 da Paradoxo em um workspace simples, operavel e consistente, com uma unica fonte de verdade para pipeline, projetos, ativos e rotina de gestao.

## Regra de desenho

Se uma informacao precisa ser consultada toda semana, ela deve morar em uma base estruturada. Se ela existe apenas para contexto ou referencia, deve morar em pagina de wiki. Nao duplicar status entre bancos.

## Estrutura principal do workspace

### 1. Home

Pagina inicial com links para as bases centrais e o operating review semanal.

**Blocos recomendados**

1. Painel da semana.
2. Proximas reunioes.
3. Oportunidades sem proxima acao.
4. Projetos em risco.
5. Atalhos para templates e SOPs.

### 2. CRM

Base mestre de oportunidades e contas.

### 3. Projetos

Base mestre dos clientes ativos e entregas em andamento.

### 4. Contatos

Base de pessoas relacionadas a leads, clientes e parceiros.

### 5. Ativos

Base de templates, frameworks, materiais reutilizaveis e aprendizados.

### 6. Conteudo

Base de ideias, rascunhos e publicacoes de autoridade.

### 7. SOPs

Wiki com procedimentos de venda, entrega, follow-up e revisao.

### 8. Operating Review

Base de revisoes semanais e mensais.

## Banco 1: CRM

### Objetivo

Controlar todas as oportunidades comerciais da Paradoxo.

### Propriedades obrigatorias

1. Empresa - titulo.
2. Estagio - select.
3. Contato principal - relation com Contatos.
4. Sponsor - relation com Contatos.
5. Segmento - select.
6. Origem - select.
7. Dor principal - text.
8. Oferta provavel - select.
9. Valor potencial - number.
10. Probabilidade - number.
11. Proxima acao - text.
12. Data da proxima acao - date.
13. Ultimo contato - date.
14. Motivo de perda - select.
15. Nurture ate - date.
16. Projeto relacionado - relation com Projetos.
17. Observacoes - text.

### Estagios padrao

1. Lista-alvo.
2. Lead abordado.
3. Lead qualificado.
4. Discovery agendado.
5. Oportunidade diagnosticada.
6. Proposta enviada.
7. Negociacao.
8. Ganha.
9. Perdida.
10. Nurture.

### Views recomendadas

1. Pipeline Kanban por estagio.
2. Hoje e atrasadas.
3. Propostas enviadas.
4. Nurture.
5. Ganhas no trimestre.

### Templates recomendados

#### Template: Novo lead

Campos pre-preenchidos:

- Estagio = Lista-alvo.
- Probabilidade = 10.
- Oferta provavel = Diagnostico.

Blocos internos:

1. Resumo da conta.
2. Hipotese de dor.
3. Mensagem de outreach.
4. Proxima acao.

#### Template: Discovery agendado

Blocos internos:

1. Participantes.
2. Hipotese de contexto.
3. Perguntas-chave.
4. Resultado esperado.
5. Notas da call.

## Banco 2: Contatos

### Objetivo

Centralizar as pessoas de cada conta e evitar informacao dispersa.

### Propriedades obrigatorias

1. Nome - titulo.
2. Empresa - relation com CRM.
3. Cargo - text.
4. Papel - select.
5. Email - email.
6. Telefone - phone.
7. LinkedIn - url.
8. Ultima interacao - date.
9. Relevancia - select.
10. Observacoes - text.

### Valores sugeridos para Papel

1. Sponsor.
2. Decisor.
3. Influenciador.
4. Operacao.
5. Parceiro.

## Banco 3: Projetos

### Objetivo

Controlar os clientes ativos e o estado das entregas.

### Propriedades obrigatorias

1. Projeto - titulo.
2. Cliente - relation com CRM.
3. Sponsor - relation com Contatos.
4. Tipo de projeto - select.
5. Status - select.
6. Objetivo do projeto - text.
7. Inicio - date.
8. Entrega principal - date.
9. Proximo checkpoint - date.
10. Risco atual - select.
11. Proxima entrega - text.
12. Link da pasta - url.
13. Link da proposta - url.
14. Lições aprendidas - relation com Ativos.
15. Observacoes - text.

### Status padrao

1. Pre-kickoff.
2. Kickoff.
3. Diagnostico.
4. Priorizacao.
5. Readout executivo.
6. Encerrado.
7. Em pausa.

### Views recomendadas

1. Projetos ativos.
2. Checkpoints desta semana.
3. Em risco.
4. Encerrados.

### Template: Novo diagnostico

1. Objetivo do projeto.
2. Sponsor.
3. Escopo acordado.
4. Cronograma.
5. Checklist de kickoff.
6. Riscos iniciais.

## Banco 4: Ativos

### Objetivo

Criar um repositorio vivo de templates, mini-cases, checklists e frameworks.

### Propriedades obrigatorias

1. Nome do ativo - titulo.
2. Tipo - select.
3. Area - select.
4. Status - select.
5. Fonte - select.
6. Ultima revisao - date.
7. Link - url.
8. Projeto de origem - relation com Projetos.
9. Observacoes - text.

### Tipos sugeridos

1. Template.
2. Checklist.
3. Framework.
4. Mini-case.
5. Script.
6. Prompt limpo.

### Areas sugeridas

1. Comercial.
2. Delivery.
3. Conteudo.
4. Operacao interna.

## Banco 5: Conteudo

### Objetivo

Gerenciar conteudo de autoridade sem virar maquina pesada demais.

### Propriedades obrigatorias

1. Titulo - titulo.
2. Pilar - select.
3. Formato - select.
4. Status - select.
5. CTA - select.
6. Data alvo - date.
7. Origem do insight - relation com CRM ou Projetos, quando aplicavel.
8. Rascunho - text.

### Status sugeridos

1. Ideia.
2. Priorizado.
3. Em rascunho.
4. Revisao.
5. Publicado.

## Banco 6: Operating Review

### Objetivo

Registrar revisoes semanais e mensais para manter clareza operacional.

### Propriedades obrigatorias

1. Revisao - titulo.
2. Tipo - select.
3. Data - date.
4. Receita pipeline - number.
5. Reunioes realizadas - number.
6. Propostas enviadas - number.
7. Projetos ativos - number.
8. Risco principal - text.
9. Foco da proxima semana - text.

### Tipos sugeridos

1. Semanal.
2. Mensal.

### Template: Revisao semanal

1. O que avancou.
2. Onde travou.
3. Qual oportunidade esta mais quente.
4. Qual projeto esta mais sensivel.
5. Quais ativos novos surgiram.
6. O que precisa acontecer na proxima semana.

## Wiki de SOPs

### Estrutura recomendada

1. Vendas.
2. Delivery.
3. Conteudo.
4. Rotina do fundador.
5. Operacao dos agentes.

### SOPs minimos para criar primeiro

1. Como qualificar um lead.
2. Como preparar um discovery.
3. Como gerar e revisar uma proposta.
4. Como abrir um novo projeto.
5. Como rodar a revisao semanal.

## Dashboard da Home

### Widgets recomendados

1. Oportunidades sem proxima acao.
2. Discoverys da semana.
3. Propostas aguardando retorno.
4. Projetos com checkpoint nos proximos 7 dias.
5. Conteudos em rascunho.
6. Link rapido para formulario de diagnostico.

## Ordem de implementacao no Notion

1. Criar CRM.
2. Criar Contatos.
3. Criar Projetos.
4. Criar Ativos.
5. Criar Operating Review.
6. Montar Home com linked views.
7. Criar Conteudo.
8. Montar wiki de SOPs.

## Regras de higiene do workspace

1. Nada entra em Ganha sem projeto criado ou kickoff programado.
2. Nada fica em Proposta enviada sem follow-up definido.
3. Toda revisao semanal precisa terminar com foco da proxima semana.
4. Ativo sem contexto de uso nao entra na biblioteca.
5. Cada informacao deve ter uma unica casa principal.