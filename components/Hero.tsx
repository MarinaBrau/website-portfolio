'use client';

import { useMotionValue, useSpring, useTransform, motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const pathname = usePathname();
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? '#';

  const skills = t.raw('skills') as string[];

  // Mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Blob 1 (pink, top-right)
  const blob1X = useSpring(useTransform(mouseX, (v) => v / 14), { stiffness: 40, damping: 20 });
  const blob1Y = useSpring(useTransform(mouseY, (v) => v / 14), { stiffness: 40, damping: 20 });

  // Blob 2 (cyan, bottom-left)
  const blob2X = useSpring(useTransform(mouseX, (v) => -v / 22), { stiffness: 30, damping: 25 });
  const blob2Y = useSpring(useTransform(mouseY, (v) => -v / 22), { stiffness: 30, damping: 25 });

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section
      className="relative min-h-screen flex flex-col px-6 md:px-12 lg:px-20 py-10 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background decorative blobs */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: '#ffa5da', x: blob1X, y: blob1Y }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: '#90e5e6', x: blob2X, y: blob2Y }}
      />

      {/* Nav */}
      <nav className="relative z-10 flex justify-between items-center hero-animate" style={{ animationDelay: '0ms' }}>
        <span
          className="text-2xl font-bold tracking-tight uppercase"
          style={{ fontFamily: 'var(--font-space-grotesk)', color: '#ffa5da' }}
        >
          kahmo
        </span>

        {/* Center: locale switcher */}
        <div className="flex items-center gap-1 text-sm font-medium tracking-widest uppercase" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
          <Link
            href={pathname}
            locale="pt"
            style={{ color: locale === 'pt' ? '#ffa5da' : 'rgba(255,165,218,0.4)' }}
            className="transition-colors duration-200 hover:opacity-80"
          >
            PT
          </Link>
          <span style={{ color: 'rgba(255,165,218,0.3)' }}>|</span>
          <Link
            href={pathname}
            locale="en"
            style={{ color: locale === 'en' ? '#ffa5da' : 'rgba(255,165,218,0.4)' }}
            className="transition-colors duration-200 hover:opacity-80"
          >
            EN
          </Link>
        </div>

        {/* Right: budget button */}
        <a
          href="#contato"
          className="text-sm uppercase tracking-widest px-5 py-2.5 rounded-full border transition-all duration-300 hover:scale-105"
          style={{ borderColor: '#ffa5da', color: '#ffa5da' }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = '#ffa5da';
            (e.currentTarget as HTMLElement).style.color = '#191919';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = 'transparent';
            (e.currentTarget as HTMLElement).style.color = '#ffa5da';
          }}
        >
          {t('nav.budget')}
        </a>
      </nav>

      {/* Center content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center gap-6">

        {/* Label */}
        <p
          className="text-xs uppercase tracking-[0.4em] hero-animate"
          style={{ color: '#90e5e6', animationDelay: '80ms' }}
        >
          {t('label')}
        </p>

        {/* Main heading */}
        <h1
          className="font-bold uppercase leading-[0.9] tracking-tighter hero-animate"
          style={{
            fontSize: 'clamp(3.5rem, 14vw, 11rem)',
            fontFamily: '"TT Ramillas", var(--font-space-grotesk), sans-serif',
            color: '#e9e8e9',
            animationDelay: '160ms',
          }}
        >
          KAMILLA
          <br />
          <span style={{ color: '#ffa5da' }}>FREITAS</span>
        </h1>

        {/* Skill tags */}
        <div className="flex flex-wrap justify-center gap-3 hero-animate" style={{ animationDelay: '240ms' }}>
          {skills.map((tag) => (
            <span
              key={tag}
              className="text-xs uppercase tracking-widest px-4 py-1.5 rounded-full"
              style={{
                background: 'rgba(255, 165, 218, 0.1)',
                color: '#ffa5da',
                border: '1px solid rgba(255, 165, 218, 0.3)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Subtitle */}
        <p
          className="text-base md:text-lg max-w-sm leading-relaxed hero-animate"
          style={{ color: '#c8c8c8', animationDelay: '320ms' }}
        >
          {t('subtitle')}
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-8 hero-animate" style={{ animationDelay: '400ms' }}>
          {/* Instagram */}
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2.5 group"
            aria-label="Instagram @kahmo.ag"
          >
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
              style={{ background: '#ffa5da' }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#191919"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="#191919" />
              </svg>
            </div>
            <span className="text-[10px] uppercase tracking-widest" style={{ color: '#666' }}>
              @kahmo.ag
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/kamillafreitas"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2.5 group"
            aria-label="LinkedIn Kamilla Freitas"
          >
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
              style={{ background: '#ffa5da' }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="#191919"
                aria-hidden="true"
              >
                <path d="M20.447 20.452H17.21v-5.569c0-1.328-.025-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.989V9h3.105v1.561h.043c.433-.82 1.49-1.684 3.066-1.684 3.276 0 3.88 2.156 3.88 4.963v6.612zM5.337 7.433a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zm1.555 13.019H3.78V9h3.112v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <span className="text-[10px] uppercase tracking-widest" style={{ color: '#666' }}>
              LinkedIn
            </span>
          </a>
        </div>
      </div>

    </section>
  );
}
