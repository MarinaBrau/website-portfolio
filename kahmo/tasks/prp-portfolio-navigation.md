# PRP: Portfolio com Navegação por Categorias

## Introduction

Reconstruir a seção de portfolio do site kahmo.com.br com navegação por categorias,
replicando a estrutura do site original (Canva). O usuário poderá filtrar trabalhos por
categoria tanto por um navbar fixo no topo quanto por tabs dentro da seção. As imagens
virão de links públicos do Google Drive. Zero custo, zero dependência nova.

## Goals

- Exibir o portfolio organizado em 4 categorias: Social Media, Identidade Visual, Design Gráfico, Roteiro e Produção
- Filtros client-side com `useState` (sem rota nova, sem servidor)
- Navbar fixo que aparece ao rolar a página, com links de categoria
- Cada item exibe: imagem (via Google Drive) + título + cliente + descrição
- Lightbox ao clicar na imagem
- Next.js Image component com domínio do Google Drive autorizado

## User Stories

### US-001: Estrutura de dados do portfolio
**Description:** Como dev, preciso de um arquivo de dados tipado com os 4 categorias e seus itens para que o componente possa renderizar e filtrar.

**Acceptance Criteria:**
- [ ] Criar `lib/portfolio-data.ts` com tipo `PortfolioItem` (id, categoria, titulo, cliente, descricao, imagens: string[])
- [ ] Criar tipo `PortfolioCategory`: `"social-media" | "identidade-visual" | "design-grafico" | "roteiro"`
- [ ] Exportar array `PORTFOLIO_ITEMS` com pelo menos 2 itens por categoria (dados mockados reais da Kamilla)
- [ ] Exportar array `CATEGORIAS` com label e valor de cada categoria
- [ ] Typecheck passa

### US-002: Autorizar domínio do Google Drive nas imagens
**Description:** Como dev, preciso que o Next.js Image component aceite URLs do Google Drive para que as imagens do portfolio carregem corretamente.

**Acceptance Criteria:**
- [ ] Adicionar `lh3.googleusercontent.com` em `remotePatterns` no `next.config.ts`
- [ ] Adicionar `drive.google.com` em `remotePatterns` no `next.config.ts`
- [ ] Build passa sem erro de domínio não autorizado
- [ ] Typecheck passa

### US-003: Seção Portfolio com filtros por categoria
**Description:** Como visitante, quero filtrar os trabalhos por categoria para ver só o que me interessa.

**Acceptance Criteria:**
- [ ] Tabs de filtro no topo da seção: "Todos | Social Media | Identidade Visual | Design Gráfico | Roteiro"
- [ ] Filtro ativo tem visual destacado (cor da paleta)
- [ ] Grid de cards atualiza imediatamente ao clicar no filtro (sem reload)
- [ ] Cada card mostra: imagem principal, título, nome do cliente, badge de categoria, descrição curta
- [ ] Clicar na imagem abre lightbox (fullscreen com botão fechar)
- [ ] Estado do filtro ativo salvo na URL hash (ex: `#social-media`) para compartilhamento
- [ ] Página lê o hash na montagem e aplica o filtro correspondente
- [ ] Typecheck passa

### US-004: Navbar fixo com links de categoria
**Description:** Como visitante, quero acessar qualquer categoria do portfolio a partir de qualquer ponto da página sem ter que rolar de volta ao topo.

**Acceptance Criteria:**
- [ ] Criar `components/Navbar.tsx` com `position: fixed`, `top: 0`, `z-50`
- [ ] Navbar oculto enquanto o usuário está no hero (primeiros 80% da viewport height)
- [ ] Navbar aparece com animação fade-in ao rolar para além do hero
- [ ] Links: logo "kahmo" (scroll para topo) + "Social Media" + "Identidade Visual" + "Design Gráfico" + "Roteiro" + botão "Orçamento" (scroll para #contato)
- [ ] Clicar em categoria: scroll suave para `#portfolio` + ativa o filtro via hash na URL
- [ ] Link da categoria ativa tem indicador visual (underline ou cor)
- [ ] Mobile: menu hamburger com as mesmas opções
- [ ] Typecheck passa

## Functional Requirements

- FR-1: Filtro client-side com `useState<PortfolioCategory | "all">` — sem fetch, sem API
- FR-2: URLs de imagem no formato `https://lh3.googleusercontent.com/d/FILE_ID` (conversão dos links do Drive)
- FR-3: Navbar usa `useEffect` + `scroll` listener para detectar posição e mostrar/ocultar
- FR-4: Hash da URL (`window.location.hash`) controla o filtro ativo — lido na montagem com `useEffect`
- FR-5: Clicar em categoria no navbar define o hash e faz scroll para `#portfolio`
- FR-6: Lightbox usa `position: fixed` com backdrop escuro — sem biblioteca externa

## Non-Goals

- Sem páginas separadas por categoria (`/social-media`, etc.)
- Sem CMS dinâmico (dados estáticos em `lib/portfolio-data.ts`)
- Sem animações de transição entre filtros (fade simples basta)
- Sem upload de imagens — apenas links do Google Drive

## Design Considerations

- Paleta existente: `#ffa5da` (pink), `#90e5e6` (cyan), `#191919` (bg), `#e9e8e9` (text)
- Filtro ativo: fundo `#ffa5da`, texto `#191919`
- Filtro inativo: borda `#333`, texto `#888`, hover com borda `#ffa5da`
- Navbar: mesmo estilo do hero nav — fundo `rgba(25,25,25,0.9)` com `backdrop-filter: blur`
- Cards: mesmo padrão visual dos cards atuais do Portfolio.tsx

## Technical Considerations

- Framer Motion já instalado — pode ser usado para fade do navbar (`motion.header` com `animate`)
- `next.config.ts` já existe — só adicionar `remotePatterns`
- `lib/portfolio-data.ts` substitui o `mockData` hardcoded no Portfolio.tsx atual
- Remover `mockData` do Portfolio.tsx ao migrar para o novo arquivo

## Como converter links do Google Drive

Link compartilhado:
`https://drive.google.com/file/d/FILE_ID/view?usp=sharing`

URL para usar no `<Image>`:
`https://lh3.googleusercontent.com/d/FILE_ID`

## Success Metrics

- Visitante acessa qualquer categoria em 1 clique a partir de qualquer ponto da página
- Filtro aplica em < 100ms (client-side, sem rede)
- Nenhuma imagem quebrada (domínios autorizados no next.config)

## Open Questions

- Quantos itens reais de portfolio a Kamilla quer incluir no lançamento?
- As imagens do Drive são públicas (compartilhamento "qualquer pessoa com o link")?
- Qual ordem preferida das categorias no menu?
