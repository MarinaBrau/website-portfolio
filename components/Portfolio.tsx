"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import type { PortfolioClient } from "@/types";

const mockData: PortfolioClient[] = [
  {
    cliente: "Regional Vise Perj",
    servico: "Social Media",
    cor: "#ffa5da",
    imagens: [],
    descricao: "Gestão completa das redes sociais com crescimento orgânico.",
  },
  {
    cliente: "Greenbet.io",
    servico: "Identidade Visual",
    cor: "#66cb35",
    imagens: [],
    descricao: "Identidade visual moderna para plataforma de apostas.",
  },
  {
    cliente: "Cliente 3",
    servico: "Design Gráfico",
    cor: "#90e5e6",
    imagens: [],
    descricao: "Materiais gráficos para campanhas digitais.",
  },
  {
    cliente: "Cliente 4",
    servico: "Roteiro",
    cor: "#a95ae6",
    imagens: [],
    descricao: "Roteiros criativos para Reels e YouTube.",
  },
];

export default function Portfolio() {
  const [clients, setClients] = useState<PortfolioClient[]>(mockData);
  const [selected, setSelected] = useState<PortfolioClient | null>(null);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/portfolio")
      .then((r) => r.json())
      .then((data: PortfolioClient[]) => {
        if (data && data.length > 0) setClients(data);
      })
      .catch(() => {
        // keep mock data on error
      });
  }, []);

  return (
    <section id="portfolio" className="px-6 md:px-12 lg:px-20 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p
            className="text-xs uppercase tracking-[0.4em] mb-4"
            style={{ color: "#90e5e6" }}
          >
            Trabalhos
          </p>
          <h2
            className="text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.95]"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              color: "#e9e8e9",
            }}
          >
            Portfolio
          </h2>
        </div>

        {/* Client grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {clients.map((client) => (
            <button
              key={client.cliente}
              onClick={() =>
                setSelected(selected?.cliente === client.cliente ? null : client)
              }
              className="group text-left p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] focus:outline-none"
              style={{
                background: `${client.cor}10`,
                borderColor:
                  selected?.cliente === client.cliente
                    ? client.cor
                    : `${client.cor}30`,
              }}
            >
              <div className="flex justify-between items-start mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm"
                  style={{ background: client.cor, color: "#191919" }}
                >
                  {client.cliente.charAt(0)}
                </div>
                <span
                  className="text-xs uppercase tracking-wider px-2.5 py-1 rounded-full"
                  style={{
                    background: `${client.cor}20`,
                    color: client.cor,
                  }}
                >
                  {client.servico}
                </span>
              </div>

              <h3
                className="text-xl font-bold uppercase tracking-tight mb-2"
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  color: "#e9e8e9",
                }}
              >
                {client.cliente}
              </h3>

              {client.descricao && (
                <p className="text-xs leading-relaxed" style={{ color: "#777" }}>
                  {client.descricao}
                </p>
              )}

              <div className="mt-4 flex items-center gap-1.5">
                <span className="text-xs" style={{ color: client.cor }}>
                  {selected?.cliente === client.cliente
                    ? "↑ Fechar"
                    : "↓ Ver trabalhos"}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Expanded gallery */}
        {selected && (
          <div
            className="mt-6 p-6 rounded-2xl border"
            style={{
              background: `${selected.cor}08`,
              borderColor: `${selected.cor}40`,
            }}
          >
            <div className="flex justify-between items-center mb-4">
              <h4
                className="text-lg font-bold uppercase tracking-tight"
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  color: selected.cor,
                }}
              >
                {selected.cliente}
              </h4>
              <button
                onClick={() => setSelected(null)}
                className="text-sm hover:opacity-70 transition-opacity"
                style={{ color: "#666" }}
              >
                ✕ Fechar
              </button>
            </div>

            {selected.imagens.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {selected.imagens.map((url, i) => (
                  <button
                    key={i}
                    onClick={() => setLightboxImg(url)}
                    className="aspect-square rounded-xl overflow-hidden relative hover:opacity-90 transition-opacity"
                    style={{ background: "#222" }}
                  >
                    <Image
                      src={url}
                      alt={`${selected.cliente} — imagem ${i + 1}`}
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
                style={{ background: "#1e1e1e" }}
              >
                <p className="text-sm" style={{ color: "#555" }}>
                  Imagens em breve
                </p>
              </div>
            )}
          </div>
        )}

        {/* Lightbox */}
        {lightboxImg && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.95)" }}
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
