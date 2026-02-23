'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { portfolioItems, type CategorySlug } from '@/lib/portfolio-data';

type Filter = 'all' | CategorySlug;

const CATEGORY_KEYS: { slug: Filter; tKey: string }[] = [
  { slug: 'all', tKey: 'catAll' },
  { slug: 'social-media', tKey: 'catSocialMedia' },
  { slug: 'identidade-visual', tKey: 'catIdentidadeVisual' },
  { slug: 'design-grafico', tKey: 'catDesignGrafico' },
  { slug: 'roteiro', tKey: 'catRoteiro' },
];

export default function Portfolio() {
  const t = useTranslations('portfolio');
  const locale = useLocale();
  const [activeFilter, setActiveFilter] = useState<Filter>('all');
  const [selected, setSelected] = useState<string | null>(null);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const filtered =
    activeFilter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.categoria === activeFilter);

  const selectedItem = portfolioItems.find((i) => i.slug === selected) ?? null;

  function handleCardClick(slug: string) {
    setSelected(selected === slug ? null : slug);
    setLightboxImg(null);
  }

  function handleFilterChange(f: Filter) {
    setActiveFilter(f);
    setSelected(null);
    setLightboxImg(null);
  }

  return (
    <section id="portfolio" className="px-6 md:px-12 lg:px-20 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p
            className="text-xs uppercase tracking-[0.4em] mb-4"
            style={{ color: '#90e5e6' }}
          >
            {t('eyebrow')}
          </p>
          <h2
            className="text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.95]"
            style={{ fontFamily: 'var(--font-space-grotesk)', color: '#e9e8e9' }}
          >
            {t('heading')}
          </h2>
        </div>

        {/* Category filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORY_KEYS.map(({ slug, tKey }) => {
            const active = activeFilter === slug;
            return (
              <button
                key={slug}
                onClick={() => handleFilterChange(slug)}
                className="text-xs uppercase tracking-widest px-4 py-2 rounded-full border transition-all duration-200"
                style={{
                  background: active ? '#ffa5da' : 'transparent',
                  borderColor: active ? '#ffa5da' : 'rgba(255,165,218,0.25)',
                  color: active ? '#191919' : 'rgba(255,165,218,0.6)',
                  fontWeight: active ? 700 : 400,
                }}
              >
                {t(tKey)}
              </button>
            );
          })}
        </div>

        {/* Client grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item) => {
            const isSelected = selected === item.slug;
            return (
              <button
                key={item.slug}
                onClick={() => handleCardClick(item.slug)}
                className="group text-left p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] focus:outline-none"
                style={{
                  background: `${item.cor}10`,
                  borderColor: isSelected ? item.cor : `${item.cor}30`,
                }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm"
                    style={{ background: item.cor, color: '#191919' }}
                  >
                    {item.cliente.charAt(0)}
                  </div>
                  <span
                    className="text-xs uppercase tracking-wider px-2.5 py-1 rounded-full"
                    style={{ background: `${item.cor}20`, color: item.cor }}
                  >
                    {t(CATEGORY_KEYS.find((c) => c.slug === item.categoria)!.tKey)}
                  </span>
                </div>

                <h3
                  className="text-xl font-bold uppercase tracking-tight mb-2"
                  style={{ fontFamily: 'var(--font-space-grotesk)', color: '#e9e8e9' }}
                >
                  {item.cliente}
                </h3>

                <p className="text-xs leading-relaxed" style={{ color: '#777' }}>
                  {item.descricao[locale as 'pt' | 'en'] ?? item.descricao.pt}
                </p>

                <div className="mt-4 flex items-center gap-1.5">
                  <span className="text-xs" style={{ color: item.cor }}>
                    {isSelected ? t('toggleClose') : t('toggleOpen')}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Expanded gallery */}
        {selectedItem && (
          <div
            className="mt-6 p-6 rounded-2xl border"
            style={{
              background: `${selectedItem.cor}08`,
              borderColor: `${selectedItem.cor}40`,
            }}
          >
            <div className="flex justify-between items-center mb-4">
              <h4
                className="text-lg font-bold uppercase tracking-tight"
                style={{ fontFamily: 'var(--font-space-grotesk)', color: selectedItem.cor }}
              >
                {selectedItem.cliente}
              </h4>
              <button
                onClick={() => setSelected(null)}
                className="text-sm hover:opacity-70 transition-opacity"
                style={{ color: '#666' }}
              >
                {t('closeButton')}
              </button>
            </div>

            {selectedItem.imagens.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {selectedItem.imagens.map((url, i) => (
                  <button
                    key={i}
                    onClick={() => setLightboxImg(url)}
                    className="aspect-square rounded-xl overflow-hidden relative hover:opacity-90 transition-opacity"
                    style={{ background: '#222' }}
                  >
                    <Image
                      src={url}
                      alt={`${selectedItem.cliente} — ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, 33vw"
                    />
                  </button>
                ))}
              </div>
            ) : (
              <div
                className="py-12 text-center rounded-xl"
                style={{ background: '#1e1e1e' }}
              >
                <p className="text-sm" style={{ color: '#555' }}>
                  {t('noImages')}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Lightbox */}
        {lightboxImg && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.95)' }}
            onClick={() => setLightboxImg(null)}
          >
            <button
              className="absolute top-4 right-4 text-white text-2xl hover:opacity-70"
              onClick={() => setLightboxImg(null)}
            >
              ✕
            </button>
            <div className="relative max-w-3xl max-h-[90vh] w-full h-full">
              <Image
                src={lightboxImg}
                alt="Imagem ampliada"
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
