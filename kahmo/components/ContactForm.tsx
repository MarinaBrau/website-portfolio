"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface FormState {
  nome: string;
  whatsapp: string;
  email: string;
}

interface FormErrors {
  nome?: string;
  whatsapp?: string;
  email?: string;
  general?: string;
}

export default function ContactForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>({ nome: "", whatsapp: "", email: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  function validate(): boolean {
    const newErrors: FormErrors = {};
    if (!form.nome.trim() || form.nome.trim().length < 2) {
      newErrors.nome = "Nome deve ter pelo menos 2 caracteres";
    }
    if (!form.whatsapp.trim() || form.whatsapp.replace(/\D/g, "").length < 10) {
      newErrors.whatsapp = "WhatsApp inválido (inclua DDD)";
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Email inválido";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setErrors({});

    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        router.push("/obrigado");
      } else {
        const data = await res.json();
        setErrors({ general: data.message ?? "Erro ao enviar. Tente novamente." });
      }
    } catch {
      setErrors({ general: "Erro de conexão. Tente novamente." });
    } finally {
      setLoading(false);
    }
  }

  const inputClass = `
    w-full bg-transparent border rounded-xl px-5 py-4 text-sm outline-none transition-all duration-200
    placeholder:text-[#444]
  `;

  return (
    <section id="contato" className="px-6 md:px-12 lg:px-20 py-24 md:py-32">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <p
            className="text-xs uppercase tracking-[0.4em] mb-4"
            style={{ color: "#90e5e6" }}
          >
            Vamos trabalhar juntos
          </p>
          <h2
            className="text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.95] mb-4"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              color: "#e9e8e9",
            }}
          >
            Faça um
            <br />
            <span style={{ color: "#ffa5da" }}>orçamento</span>
            {" "}:)
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
            Preencha o formulário e entro em contato em até 24h.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {/* Nome */}
          <div>
            <input
              type="text"
              placeholder="Nome completo *"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              className={inputClass}
              style={{
                borderColor: errors.nome ? "#ff0196" : "#333",
                color: "#e9e8e9",
              }}
              onFocus={(e) => {
                if (!errors.nome)
                  (e.target as HTMLInputElement).style.borderColor = "#ffa5da";
              }}
              onBlur={(e) => {
                if (!errors.nome)
                  (e.target as HTMLInputElement).style.borderColor = "#333";
              }}
            />
            {errors.nome && (
              <p className="text-xs mt-1.5 ml-1" style={{ color: "#ff0196" }}>
                {errors.nome}
              </p>
            )}
          </div>

          {/* WhatsApp */}
          <div>
            <input
              type="tel"
              placeholder="WhatsApp (com DDD) *"
              value={form.whatsapp}
              onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
              className={inputClass}
              style={{
                borderColor: errors.whatsapp ? "#ff0196" : "#333",
                color: "#e9e8e9",
              }}
              onFocus={(e) => {
                if (!errors.whatsapp)
                  (e.target as HTMLInputElement).style.borderColor = "#ffa5da";
              }}
              onBlur={(e) => {
                if (!errors.whatsapp)
                  (e.target as HTMLInputElement).style.borderColor = "#333";
              }}
            />
            {errors.whatsapp && (
              <p className="text-xs mt-1.5 ml-1" style={{ color: "#ff0196" }}>
                {errors.whatsapp}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email *"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputClass}
              style={{
                borderColor: errors.email ? "#ff0196" : "#333",
                color: "#e9e8e9",
              }}
              onFocus={(e) => {
                if (!errors.email)
                  (e.target as HTMLInputElement).style.borderColor = "#ffa5da";
              }}
              onBlur={(e) => {
                if (!errors.email)
                  (e.target as HTMLInputElement).style.borderColor = "#333";
              }}
            />
            {errors.email && (
              <p className="text-xs mt-1.5 ml-1" style={{ color: "#ff0196" }}>
                {errors.email}
              </p>
            )}
          </div>

          {/* General error */}
          {errors.general && (
            <div
              className="p-4 rounded-xl text-sm text-center"
              style={{ background: "#ff019620", color: "#ff0196" }}
            >
              {errors.general}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:opacity-90 hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              background: "#ffa5da",
              color: "#191919",
              fontFamily: "var(--font-space-grotesk)",
            }}
          >
            {loading ? "Enviando..." : "Solicitar orçamento →"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px" style={{ background: "#2a2a2a" }} />
          <span className="text-xs uppercase tracking-[0.3em]" style={{ color: "#444" }}>
            ou
          </span>
          <div className="flex-1 h-px" style={{ background: "#2a2a2a" }} />
        </div>

        {/* Google Calendar booking */}
        <a
          href={process.env.NEXT_PUBLIC_BOOKING_URL ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:opacity-90 hover:scale-[1.01]"
          style={{
            background: "transparent",
            border: "1.5px solid #90e5e6",
            color: "#90e5e6",
            fontFamily: "var(--font-space-grotesk)",
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
          Agendar uma conversa
        </a>
        <p className="text-xs text-center mt-3" style={{ color: "#444" }}>
          Escolha o melhor dia e horário direto na agenda
        </p>
      </div>
    </section>
  );
}
