const accounts = [
  {
    handle: "@regionalviseperj",
    plataforma: "Instagram",
    seguidores: "12.4K",
    nicho: "Institucional / Jurídico",
    cor: "#ffa5da",
  },
  {
    handle: "@greenbet.io",
    plataforma: "Instagram",
    seguidores: "8.7K",
    nicho: "Apostas & Games",
    cor: "#66cb35",
  },
  {
    handle: "@kahmo.ag",
    plataforma: "Instagram",
    seguidores: "3.2K",
    nicho: "Agência & Portfolio",
    cor: "#90e5e6",
  },
  {
    handle: "Cliente 4",
    plataforma: "TikTok",
    seguidores: "21K",
    nicho: "Lifestyle & Moda",
    cor: "#a95ae6",
  },
];

export default function SocialMedia() {
  return (
    <section
      id="social"
      className="px-6 md:px-12 lg:px-20 py-24 md:py-32"
      style={{ borderTop: "1px solid #2a2a2a" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p
            className="text-xs uppercase tracking-[0.4em] mb-4"
            style={{ color: "#90e5e6" }}
          >
            Contas gerenciadas
          </p>
          <h2
            className="text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.95]"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              color: "#e9e8e9",
            }}
          >
            Social
            <br />
            <span style={{ color: "#ffa5da" }}>Media</span>
          </h2>
        </div>

        {/* Marquee-style accounts row */}
        <div className="space-y-4">
          {accounts.map((account, i) => (
            <div
              key={account.handle}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.005] group"
              style={{
                background: `${account.cor}08`,
                borderColor: `${account.cor}25`,
              }}
            >
              {/* Left: handle */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-base shrink-0"
                  style={{ background: account.cor, color: "#191919" }}
                >
                  {i + 1}
                </div>
                <div>
                  <p
                    className="text-xl font-bold uppercase tracking-tight"
                    style={{
                      fontFamily: "var(--font-space-grotesk)",
                      color: account.cor,
                    }}
                  >
                    {account.handle}
                  </p>
                  <p className="text-xs uppercase tracking-wider" style={{ color: "#666" }}>
                    {account.nicho}
                  </p>
                </div>
              </div>

              {/* Right: stats */}
              <div className="flex items-center gap-6 sm:gap-10">
                <div>
                  <p
                    className="text-2xl font-bold"
                    style={{
                      fontFamily: "var(--font-space-grotesk)",
                      color: "#e9e8e9",
                    }}
                  >
                    {account.seguidores}
                  </p>
                  <p className="text-xs uppercase tracking-wider" style={{ color: "#555" }}>
                    seguidores
                  </p>
                </div>
                <div
                  className="text-xs uppercase tracking-widest px-3 py-1.5 rounded-full shrink-0"
                  style={{
                    background: `${account.cor}20`,
                    color: account.cor,
                    border: `1px solid ${account.cor}40`,
                  }}
                >
                  {account.plataforma}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
