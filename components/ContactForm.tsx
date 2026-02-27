'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/navigation';
import { contactSchema, type ContactSchema } from '@/lib/validators';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const inputClass =
  'w-full border rounded-xl px-5 py-4 text-sm outline-none transition-all duration-200 placeholder:text-[#666] bg-[#242424] text-[#e9e8e9] border-[#3a3a3a] focus:border-[#ffa5da] aria-invalid:border-[#ff0196] focus:aria-invalid:border-[#ff0196]';

export default function ContactForm() {
  const t = useTranslations('contact');
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [generalError, setGeneralError] = useState('');

  const form = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactSchema) {
    setLoading(true);
    setGeneralError('');
    try {
      const res = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, mensagem: data.mensagem || undefined }),
      });
      if (res.ok) {
        router.push('/obrigado');
      } else {
        const json = await res.json();
        setGeneralError(json.message ?? t('errorGeneral'));
      }
    } catch {
      setGeneralError(t('errorConnection'));
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contato" className="px-6 md:px-12 lg:px-20 py-24 md:py-32">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <p
            className="text-xs uppercase tracking-[0.4em] mb-4"
            style={{ color: '#90e5e6' }}
          >
            {t('eyebrow')}
          </p>
          <h2
            className="text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.95] mb-4"
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              color: '#e9e8e9',
            }}
          >
            {t('heading1')}
            <br />
            <span style={{ color: '#ffa5da' }}>{t('heading2')}</span>
            {' '}:)
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: '#666' }}>
            {t('description')}
          </p>
        </div>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" noValidate>
            {/* Nome */}
            <FormField
              control={form.control}
              name="nome"
              render={({ field }) => (
                <FormItem className="gap-1">
                  <FormLabel className="sr-only">{t('placeholderName')}</FormLabel>
                  <FormControl>
                    <input
                      type="text"
                      placeholder={t('placeholderName')}
                      className={inputClass}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs ml-1" style={{ color: '#ff0196' }} />
                </FormItem>
              )}
            />

            {/* WhatsApp */}
            <FormField
              control={form.control}
              name="whatsapp"
              render={({ field }) => (
                <FormItem className="gap-1">
                  <FormLabel className="sr-only">{t('placeholderWhatsapp')}</FormLabel>
                  <FormControl>
                    <input
                      type="tel"
                      placeholder={t('placeholderWhatsapp')}
                      className={inputClass}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs ml-1" style={{ color: '#ff0196' }} />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="gap-1">
                  <FormLabel className="sr-only">{t('placeholderEmail')}</FormLabel>
                  <FormControl>
                    <input
                      type="email"
                      placeholder={t('placeholderEmail')}
                      className={inputClass}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs ml-1" style={{ color: '#ff0196' }} />
                </FormItem>
              )}
            />

            {/* Mensagem (opcional) */}
            <FormField
              control={form.control}
              name="mensagem"
              render={({ field }) => (
                <FormItem className="gap-1">
                  <FormLabel className="sr-only">{t('placeholderMessage')}</FormLabel>
                  <FormControl>
                    <textarea
                      placeholder={t('placeholderMessage')}
                      rows={4}
                      className={`${inputClass} resize-none`}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs ml-1" style={{ color: '#ff0196' }} />
                </FormItem>
              )}
            />

            {/* General error */}
            {generalError && (
              <div
                className="p-4 rounded-xl text-sm text-center"
                style={{ background: '#ff019620', color: '#ff0196' }}
              >
                {generalError}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:opacity-90 hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: '#ffa5da',
                color: '#191919',
                fontFamily: 'var(--font-space-grotesk)',
              }}
            >
              {loading ? t('sending') : t('submit')}
            </button>
          </form>
        </Form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px" style={{ background: '#2a2a2a' }} />
          <span className="text-xs uppercase tracking-[0.3em]" style={{ color: '#444' }}>
            {t('divider')}
          </span>
          <div className="flex-1 h-px" style={{ background: '#2a2a2a' }} />
        </div>

        {/* Google Calendar booking */}
        <a
          href={process.env.NEXT_PUBLIC_BOOKING_URL ?? '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:opacity-90 hover:scale-[1.01]"
          style={{
            background: 'transparent',
            border: '1.5px solid #90e5e6',
            color: '#90e5e6',
            fontFamily: 'var(--font-space-grotesk)',
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          {t('booking')}
        </a>
        <p className="text-xs text-center mt-3" style={{ color: '#444' }}>
          {t('bookingHint')}
        </p>
      </div>
    </section>
  );
}
