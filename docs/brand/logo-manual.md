# Brand Book: O Padrão Ouro do Logotipo Paradoxo

## Objetivo

Este manual define a identidade visual definitiva da marca Paradoxo. Ele estabelece as regras de tipografia, construção geométrica, paletas de cores e uso do "enxoval" de logotipos vetoriais. A identidade repousa sobre a ideia de uma IA refinada, que dispensa clichês futuristas em favor de elegância, peso editorial e geometria enigmática.

## Tese do Logotipo

O logotipo da Paradoxo comunica quatro ideias indissociáveis:
1. **Paradoxo como tensão inteligente entre opostos.**
2. **IA feita a mão**, com rigor de alfaiataria em código.
3. **Rigor, clareza e sofisticação editorial**, sem neon, sem roxo, sem gradientes digitais.
4. **Arquitetura clássica**, onde a tipografia se equilibra como uma fundação contraponto ao ícone de alto peso visual.

O símbolo (Triângulo de Penrose) representa essa tensão geométrica — uma impossibilidade elegante, esculpida como metal dobrado.

## O Enxoval de Assinaturas (Arquivos SVG)

Foram gerados e polidos algoritmicamente cinco ativos principais na pasta raiz `site/`:

1. **`logo-slogan.svg` (Horizontal Padrão Ouro)**
   - **Uso:** Header do site, papel timbrado, propostas executivas no topo.
   - **Estrutura:** Ícone à esquerda, marca (Paradoxo) centralizada no seu próprio eixo de leitura, slogan "IA FEITA À MÃO" funcionando como pedestal.
   - **Engenharia de Alinhamento:** O slogan possui ancoragem matemática (`text-anchor="end"`) cravada milimetricamente embaixo do limite direito da letra "o" de Paradoxo, criando uma moldura invisível e estável de contra-peso.

2. **`logo-vertical.svg` (Assinatura Empilhada)**
   - **Uso:** Capas de documentos premium, telas de celular (mobile), avatares, perfis sociais.
   - **Estrutura:** Ícone ao topo, Marca no meio, Slogan abaixo.
   - **Tracking Específico:** Para que o slogan atue como base sem desaparecer sob a marca de 140px, seu tracking acompanha rigorosamente o original (`0.15em`). Tudo é estritamente centralizado.

3. **`logo-mono-dark.svg` & `logo-mono-light.svg`**
   - **Uso:** Sobreposições em fotos complexas, fundos escuros e parcerias em marcas d'água.
   - **Materialidade Automática (Glassmorfismo):** A ilusão 3D monocromática NÃO usa contornos vulgares. O SVG opera com controle de opacidade chumbo ou branca: 100% de opacidade no braço inferior direito, 55% no braço esquerdo, e 15% de transparência no braço do topo. Isso gela e absorve as cores do fundo.

4. **`logo-extenso.svg` e `logo.svg`**
   - Versões avulsas utilitárias para quando o slogan não precisa ser lido (como o favicon e marcações do footer).

## A Tipografia Oficial da Marca

Ambos Marca e Slogan compartilham a mesma família editorial clássica, provando que é possível ser luxuoso sem múltiplos corpos de fonte.

**A Marca (Paradoxo)**
- **Família:** `Spectral`, serif
- **Peso:** 500 (Medium) — traz contundência sem exagero "bold".
- **Tracking:** `-0.04em` — aproxima as letras, criando um bloco de leitura sólido (Wordmark).
- **Cor:** Ink (`#172225`) ou Branco Puro (`#ffffff`).

**O Slogan (IA Feita à Mão)**
- **Família:** `Spectral`, serif
- **Peso:** 400 (Regular)
- **Tracking:** `0.15em` (Uso Horizontal) . As letras "respiram", servindo como chão da casa arquitetônica da marca.
- **Transformação:** Todas em maiúsculas (`uppercase`).
- **Cor:** Ink Soft (`#324247`) para rebaixar o volume do subtexto em relação à marca.

## Estrutura do Símbolo (Triângulo de Penrose)

O símbolo original tricolor rompe as convenções web usando paletas quentes terrosas. 
- **Braço 1 (Esquerda ascendente):** Rose/Soft Copper (`#ebd2c1`)
- **Braço 2 (Base à direita):** Dark Copper/Bronze (`#b96c48`)
- **Braço 3 (Topo cruzando para a esquerda):** White (`#ffffff`) proporcionando o alto contraste respirável.

## Diretrizes de Uso e Limites

1. **Nunca modifique o tracking do slogan horizontal.** O recuo de 0.15em foi projetado junto da âncora final à direita (ponta alinhada milimetricamente à letra "o" superior).
2. **Espaço Seguro:** Nunca cole elementos ao redor do logotipo. O espaçamento inerente do SVG (ViewBox de `1200x360`) atua como a área de respiro (Airspace) necessária. No CSS, não alterne tamanhos sem invocar `width` / `height` que respeitem a proporção (`10:3`).
3. **Restrições de Cor Proibidas:** Sem azul elétrico, nem roxo vibrante das marcas genéricas de SaaS. Sem "gradiente" simulado — deixe flat e preserve as arestas duras do Vetor.
4. **Quando usar Monocromático:** Se a leitura do Cobre (`#b96c48`) do ícone conflitar fortemente contra um papel escuro de fundo (ex: por cima de #172225), abandone a versão multicor imediatamente e puxe a versão `logo-mono-light`.

---
*Atualizado em: MAIO/2026 — Identidade Golden Standard Paradoxo Consolidada*

