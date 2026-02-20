"use client";

export default function FloatingButton() {
  return (
    <a
      href="#contato"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3.5 rounded-full font-bold text-sm uppercase tracking-widest transition-transform duration-300 hover:scale-105 hover:-translate-y-0.5"
      style={{
        background: "#ffa5da",
        color: "#191919",
        fontFamily: "var(--font-space-grotesk)",
        animation: "floatPulse 3s ease-in-out infinite",
      }}
      aria-label="Solicitar orçamento"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
      Orçamento
    </a>
  );
}
