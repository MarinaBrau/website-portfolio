export type CategorySlug =
  | 'social-media'
  | 'identidade-visual'
  | 'design-grafico'
  | 'roteiro';

export interface PortfolioItem {
  slug: string;
  cliente: string;
  categoria: CategorySlug;
  cor: string;
  descricao: { pt: string; en: string };
  /**
   * Paths relativas a /public — ex: /images/portfolio/greenbet/01.jpg
   * Para adicionar um cliente novo: crie a pasta e liste os arquivos aqui.
   */
  imagens: string[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    slug: 'regional-vise-perj',
    cliente: 'Regional Vise Perj',
    categoria: 'social-media',
    cor: '#ffa5da',
    descricao: {
      pt: 'Gestão completa das redes sociais com crescimento orgânico.',
      en: 'Full social media management with organic growth.',
    },
    imagens: [
      // ex: '/images/portfolio/regional-vise-perj/01.jpg',
    ],
  },
  {
    slug: 'greenbet',
    cliente: 'Greenbet.io',
    categoria: 'identidade-visual',
    cor: '#66cb35',
    descricao: {
      pt: 'Identidade visual moderna para plataforma de apostas.',
      en: 'Modern visual identity for a betting platform.',
    },
    imagens: [
      // ex: '/images/portfolio/greenbet/01.jpg',
    ],
  },
  {
    slug: 'cliente-3',
    cliente: 'Cliente 3',
    categoria: 'design-grafico',
    cor: '#90e5e6',
    descricao: {
      pt: 'Materiais gráficos para campanhas digitais.',
      en: 'Graphic materials for digital campaigns.',
    },
    imagens: [],
  },
  {
    slug: 'cliente-4',
    cliente: 'Cliente 4',
    categoria: 'roteiro',
    cor: '#a95ae6',
    descricao: {
      pt: 'Roteiros criativos para Reels e YouTube.',
      en: 'Creative scripts for Reels and YouTube.',
    },
    imagens: [],
  },
];
