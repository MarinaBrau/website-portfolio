import { getTranslations } from 'next-intl/server';

const skillColors = ['#ffa5da', '#90e5e6', '#a95ae6', '#66cb35', '#c6c82e', '#ff0196'];

export default async function About() {
  const t = await getTranslations('about');
  const skills = t.raw('skills') as string[];

  return (
    <section id="sobre" className="px-6 md:px-12 lg:px-20 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div className="space-y-8">
            <div>
              <p
                className="text-xs uppercase tracking-[0.4em] mb-4"
                style={{ color: '#90e5e6' }}
              >
                {t('eyebrow')}
              </p>
              <h2
                className="text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.95]"
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  color: '#e9e8e9',
                }}
              >
                {t('headingLine1')}
                <br />
                <span style={{ color: '#ffa5da' }}>{t('headingPink')}</span>
                <br />
                {t('headingLine3')}
              </h2>
            </div>

            <p className="text-base leading-relaxed" style={{ color: '#888' }}>
              {t('bio1')}
            </p>

            <p className="text-base leading-relaxed" style={{ color: '#888' }}>
              {t('bio2')}
            </p>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={skill}
                  className="text-xs uppercase tracking-wider px-3 py-1.5 rounded-full"
                  style={{
                    background: `${skillColors[i % skillColors.length]}18`,
                    color: skillColors[i % skillColors.length],
                    border: `1px solid ${skillColors[i % skillColors.length]}40`,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right: photo placeholder */}
          <div className="relative">
            <div
              className="aspect-[4/5] rounded-2xl overflow-hidden flex items-center justify-center"
              style={{ background: '#222' }}
            >
              <div className="text-center space-y-3">
                <div
                  className="w-20 h-20 rounded-full mx-auto flex items-center justify-center text-3xl"
                  style={{ background: '#ffa5da20' }}
                >
                  📸
                </div>
                <p className="text-sm" style={{ color: '#555' }}>
                  {t('photoPlaceholder')}
                </p>
              </div>
            </div>

            {/* Decorative badge */}
            <div
              className="absolute -bottom-4 -left-4 px-5 py-3 rounded-xl text-sm font-medium"
              style={{
                background: '#ffa5da',
                color: '#191919',
                fontFamily: 'var(--font-space-grotesk)',
              }}
            >
              {t('badge')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
