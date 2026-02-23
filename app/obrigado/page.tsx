import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Obrigada! — kahmo",
  description: "Mensagem recebida. Entrarei em contato em breve.",
  robots: { index: false, follow: false },
};

export default function Obrigado() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ background: "#191919" }}
    >
      {/* Animated check */}
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-8"
        style={{ background: "#ffa5da20", border: "2px solid #ffa5da40" }}
      >
        ✓
      </div>

      <p
        className="text-xs uppercase tracking-[0.4em] mb-4"
        style={{ color: "#90e5e6" }}
      >
        Mensagem recebida!
      </p>

      <h1
        className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.95] mb-6"
        style={{
          fontFamily: "var(--font-space-grotesk)",
          color: "#e9e8e9",
        }}
      >
        Obrigada
        <br />
        <span style={{ color: "#ffa5da" }}>pelo contato</span>
        {" "}:)
      </h1>

      <p className="text-base max-w-sm leading-relaxed mb-10" style={{ color: "#666" }}>
        Recebi sua mensagem e entrarei em contato em até 24h pelo WhatsApp ou
        email que você informou.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="px-8 py-3.5 rounded-full text-sm uppercase tracking-widest font-medium transition-all duration-300 hover:opacity-90"
          style={{ background: "#ffa5da", color: "#191919" }}
        >
          Voltar ao início
        </Link>
        <a
          href={process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3.5 rounded-full text-sm uppercase tracking-widest font-medium border transition-all duration-300 hover:opacity-70"
          style={{ borderColor: "#ffa5da40", color: "#ffa5da" }}
        >
          Instagram →
        </a>
      </div>
    </main>
  );
}
