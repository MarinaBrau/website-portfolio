import { getTranslations } from 'next-intl/server';

export default async function Footer() {
  const t = await getTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer
      className="px-6 md:px-12 lg:px-20 py-12"
      style={{ borderTop: '1px solid #2a2a2a' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        {/* Logo */}
        <span
          className="text-2xl font-bold uppercase tracking-tight"
          style={{
            fontFamily: 'var(--font-space-grotesk)',
            color: '#ffa5da',
          }}
        >
          kahmo
        </span>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href={process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
            style={{ color: '#666' }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
            @kahmo.ag
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs" style={{ color: '#444' }}>
          {t('copyright', { year })}
        </p>
      </div>
    </footer>
  );
}
