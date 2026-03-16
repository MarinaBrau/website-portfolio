import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  return {
    title: t('obrigadoTitle'),
    description: t('obrigadoDescription'),
    robots: { index: false, follow: false },
  };
}

export default async function Obrigado({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('obrigado');

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ background: '#191919' }}
    >
      {/* Animated check */}
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-8"
        style={{ background: '#ffa5da20', border: '2px solid #ffa5da40' }}
      >
        ✓
      </div>

      <p
        className="text-xs uppercase tracking-[0.4em] mb-4"
        style={{ color: '#90e5e6' }}
      >
        {t('eyebrow')}
      </p>

      <h1
        className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.95] mb-6"
        style={{
          fontFamily: 'var(--font-space-grotesk)',
          color: '#e9e8e9',
        }}
      >
        {t('heading1')}
        <br />
        <span style={{ color: '#ffa5da' }}>{t('heading2')}</span>
        {' '}:)
      </h1>

      <p className="text-base max-w-sm leading-relaxed mb-10" style={{ color: '#666' }}>
        {t('body')}
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="px-8 py-3.5 rounded-full text-sm uppercase tracking-widest font-medium transition-all duration-300 hover:opacity-90"
          style={{ background: '#ffa5da', color: '#191919' }}
        >
          {t('backHome')}
        </Link>
        <a
          href={process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3.5 rounded-full text-sm uppercase tracking-widest font-medium border transition-all duration-300 hover:opacity-70"
          style={{ borderColor: '#ffa5da40', color: '#ffa5da' }}
        >
          {t('instagram')}
        </a>
      </div>
    </main>
  );
}
