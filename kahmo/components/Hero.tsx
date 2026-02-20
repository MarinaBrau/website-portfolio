"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between px-6 md:px-12 lg:px-20 py-10 overflow-hidden">
      {/* Background decorative elements */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "#ffa5da" }}
      />
      <div
        className="absolute bottom-20 left-10 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "#90e5e6" }}
      />

      {/* Nav */}
      <nav className="relative z-10 flex justify-between items-center">
        <span
          className="text-2xl font-bold tracking-tight uppercase"
          style={{ fontFamily: "var(--font-space-grotesk)", color: "#ffa5da" }}
        >
          kahmo
        </span>
        <Link
          href="#contato"
          className="text-sm uppercase tracking-widest px-5 py-2.5 rounded-full border transition-all duration-300 hover:scale-105"
          style={{
            borderColor: "#ffa5da",
            color: "#ffa5da",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#ffa5da";
            (e.currentTarget as HTMLElement).style.color = "#191919";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "transparent";
            (e.currentTarget as HTMLElement).style.color = "#ffa5da";
          }}
        >
          Orçamento
        </Link>
      </nav>

      {/* Main heading */}
      <div className="relative z-10 flex-1 flex flex-col justify-center pt-10">
        <div className="space-y-2">
          <p
            className="text-sm uppercase tracking-[0.4em] mb-6"
            style={{ color: "#90e5e6" }}
          >
            Criativo Portfólio
          </p>
          <h1
            className="text-[clamp(3rem,12vw,10rem)] font-bold uppercase leading-[0.9] tracking-tighter"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              color: "#e9e8e9",
            }}
          >
            KAMILLA
            <br />
            <span style={{ color: "#ffa5da" }}>FREITAS</span>
          </h1>
          <div className="flex flex-wrap gap-3 mt-8">
            {["Social Media", "Design", "Identidade Visual"].map((tag) => (
              <span
                key={tag}
                className="text-xs uppercase tracking-widest px-4 py-1.5 rounded-full"
                style={{
                  background: "rgba(255, 165, 218, 0.1)",
                  color: "#ffa5da",
                  border: "1px solid rgba(255, 165, 218, 0.3)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 pt-10">
        <p
          className="text-sm max-w-xs leading-relaxed"
          style={{ color: "#888" }}
        >
          Transformo marcas em experiências digitais únicas com criatividade e
          estratégia.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm uppercase tracking-widest transition-all duration-300 hover:opacity-70"
          style={{ color: "#e9e8e9" }}
        >
          <svg
            width="18"
            height="18"
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

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs uppercase tracking-widest" style={{ color: "#888" }}>
          scroll
        </span>
        <div className="w-px h-12 animate-pulse" style={{ background: "#ffa5da" }} />
      </div>
    </section>
  );
}
