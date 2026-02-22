import { getTranslations } from 'next-intl/server';

const serviceColors = [
  { color: '#ffa5da', bg: '#ffa5da12' },
  { color: '#90e5e6', bg: '#90e5e612' },
  { color: '#a95ae6', bg: '#a95ae612' },
  { color: '#66cb35', bg: '#66cb3512' },
];

export default async function Services() {
  const t = await getTranslations('services');
  const items = t.raw('items') as Array<{
    number: string;
    title: string;
    description: string;
    items: string[];
  }>;

  return (
    <section id="servicos" className="px-6 md:px-12 lg:px-20 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
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
            {t('heading')}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((service, i) => {
            const { color, bg } = serviceColors[i % serviceColors.length];
            return (
              <div
                key={service.number}
                className="group p-8 rounded-2xl border transition-all duration-300 hover:scale-[1.01]"
                style={{
                  background: bg,
                  borderColor: `${color}30`,
                }}
              >
                <div className="flex justify-between items-start mb-6">
                  <span
                    className="text-5xl font-bold tabular-nums"
                    style={{
                      fontFamily: 'var(--font-space-grotesk)',
                      color: `${color}40`,
                    }}
                  >
                    {service.number}
                  </span>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{
                      background: color,
                      color: '#191919',
                    }}
                  >
                    ↗
                  </div>
                </div>

                <h3
                  className="text-3xl font-bold uppercase tracking-tight mb-3"
                  style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    color: color,
                  }}
                >
                  {service.title}
                </h3>

                <p className="text-sm leading-relaxed mb-6" style={{ color: '#999' }}>
                  {service.description}
                </p>

                <ul className="space-y-1.5">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="text-xs uppercase tracking-wider flex items-center gap-2"
                      style={{ color: '#777' }}
                    >
                      <span style={{ color: color }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
