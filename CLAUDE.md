# Kahmo — Regras do Projeto

## O que é
Site de portfolio de Kahmilla: kahmo.com.br. Reconstruído do zero em Next.js.

## Stack
- Next.js 16 + TypeScript + Tailwind CSS 4
- Resend (envio de emails via formulário de contato)
- Google Sheets API (gerenciamento de dados do portfolio)
- Sem GitHub remoto configurado ainda

## Estrutura

```
app/
  [locale]/           # Rotas i18n
  api/                # API routes
components/           # Componentes: Hero, Portfolio, Services, ContactForm, etc.
i18n/                 # Internacionalização
lib/                  # Utilitários (Google Sheets, Resend)
public/
  images/portfolio/   # Imagens do portfolio (a popular com imagens reais)
types/                # TypeScript types
```

## Componentes principais

| Componente | Arquivo | Status |
|---|---|---|
| Hero | `components/Hero.tsx` | ✅ |
| Portfolio (com filtros) | `components/Portfolio.tsx` | ✅ |
| Services | `components/Services.tsx` | ✅ |
| ContactForm | `components/ContactForm.tsx` | ✅ (Resend) |
| Footer | `components/Footer.tsx` | ✅ |
| Navbar fixa | — | ⏳ Pendente (F1-T4) |

## Features pendentes

- **Imagens reais:** baixar do Google Drive → `public/images/portfolio/`
- **Suporte a vídeo:** embed de vídeos do Drive no portfolio
- **Dados reais dos clientes:** substituir mocks por dados reais
- **Navbar fixa:** implementar scroll behavior

## Comandos

```bash
npm run dev          # Dev server
npm run build        # Build (testar antes de commitar)
npm run lint         # ESLint
```

## Regras críticas

- **Testar `npm run build`** antes de qualquer commit
- Resend: usar variáveis de ambiente para API key (nunca hardcodar)
- Google Sheets API: credenciais via `.env.local` (nunca no código)
- Não criar GitHub remoto sem instrução explícita
