export default function About() {
  const skills = [
    { label: "Roteiro & Copywriting", color: "#ffa5da" },
    { label: "Identidade Visual", color: "#90e5e6" },
    { label: "Design Gráfico", color: "#a95ae6" },
    { label: "Gestão de Social Media", color: "#66cb35" },
    { label: "Estratégia de Conteúdo", color: "#c6c82e" },
    { label: "Edição de Vídeo", color: "#ff0196" },
  ];

  return (
    <section id="sobre" className="px-6 md:px-12 lg:px-20 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div className="space-y-8">
            <div>
              <p
                className="text-xs uppercase tracking-[0.4em] mb-4"
                style={{ color: "#90e5e6" }}
              >
                Sobre mim
              </p>
              <h2
                className="text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.95]"
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  color: "#e9e8e9",
                }}
              >
                Quem está
                <br />
                <span style={{ color: "#ffa5da" }}>por trás</span>
                <br />
                do conteúdo
              </h2>
            </div>

            <p className="text-base leading-relaxed" style={{ color: "#888" }}>
              Sou Kamilla Freitas, especialista em comunicação criativa e
              estratégia digital. Com formação em Design e anos de experiência
              gerenciando redes sociais de marcas nacionais e internacionais,
              crio conteúdo que conecta, engaja e converte.
            </p>

            <p className="text-base leading-relaxed" style={{ color: "#888" }}>
              Acredito que cada marca tem uma história única para contar, e meu
              trabalho é encontrar a melhor forma de contá-la — visualmente,
              estrategicamente e com personalidade.
            </p>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill.label}
                  className="text-xs uppercase tracking-wider px-3 py-1.5 rounded-full"
                  style={{
                    background: `${skill.color}18`,
                    color: skill.color,
                    border: `1px solid ${skill.color}40`,
                  }}
                >
                  {skill.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: photo placeholder */}
          <div className="relative">
            <div
              className="aspect-[4/5] rounded-2xl overflow-hidden flex items-center justify-center"
              style={{ background: "#222" }}
            >
              {/* Photo placeholder — swap for real Image */}
              <div className="text-center space-y-3">
                <div
                  className="w-20 h-20 rounded-full mx-auto flex items-center justify-center text-3xl"
                  style={{ background: "#ffa5da20" }}
                >
                  📸
                </div>
                <p className="text-sm" style={{ color: "#555" }}>
                  Foto da Kamilla
                </p>
              </div>
            </div>

            {/* Decorative badge */}
            <div
              className="absolute -bottom-4 -left-4 px-5 py-3 rounded-xl text-sm font-medium"
              style={{
                background: "#ffa5da",
                color: "#191919",
                fontFamily: "var(--font-space-grotesk)",
              }}
            >
              +5 anos de experiência
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
