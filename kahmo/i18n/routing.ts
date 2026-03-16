import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['pt', 'en'],
  defaultLocale: 'pt',
  pathnames: {
    '/': '/',
    '/obrigado': {
      pt: '/obrigado',
      en: '/thank-you',
    },
  },
});
