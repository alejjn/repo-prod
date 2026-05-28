/* ════════════════════════════════════════════════════════════════════
   FALA KIDS — Main Application (Hero + Skills sections)
   React components with dynamic tweaks, decorative SVGs, and product cards
   ════════════════════════════════════════════════════════════════════ */

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

/* ────────── Palette & Copy Variants ────────── */
const PALETTES = [
  ["#7751CF", "#ffb6d9"], // indigo / pink (default)
  ["#2a1380", "#ffd166"], // deep grape / sunny
  ["#0e7d6a", "#ffc7e8"], // forest teal / blossom
  ["#e85d75", "#fff1a8"], // tomato / cream
];

const COPY = {
  default: {
    script1: "Fala",
    script2: "Kids",
    superLabel: "kit",
    headline: "Seu filho alfabetizado até 5x mais rápido.",
    lede: "Seu pequeno lendo frases inteiras em 15 dias sem pressão, sem choro e brincando.",
    cta: "Quero meu pequeno lendo agora",
  },
  short: {
    script1: "Fala",
    script2: "Kids",
    superLabel: "kit",
    headline: "Seu filho lendo em semanas, não meses",
    lede: "Kit completo com 170+ atividades, volumes 1 e 2, fichas silábicas, pôster gigante e bônus. Método fonético comprovado por pedagogas.",
    cta: "Quero meu filho lendo",
  },
  professional: {
    script1: "Fala",
    script2: "Kids",
    superLabel: "pro",
    headline: "Alfabetize sua turma com o método que funciona",
    lede: "170+ atividades de grafismo fonético. Resultados comprovados em semanas. Funciona com crianças de 2 a 12 anos e para dificuldades de aprendizado.",
    cta: "Quero meu filho lendo",
  },
};

/* ────────── Decorative SVGs & Logo ────────── */
function FalaKidsLogo() {
  return (
    <img
      src="assets/images/fala-kids-new-logo-white.webp"
      alt="Fala Kids Logo"
      style={{ maxWidth: "280px", height: "auto", display: "block" }}
    />
  );
}

function StarOutline({ size = 44, color = "#ffb6d9", stroke = 3, ...p }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} {...p}>
      <path
        d="M32 4 L40 24 L60 28 L44 42 L48 60 L32 51 L16 60 L20 42 L4 28 L24 24 Z"
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarSolid({ size = 36, color = "#fff", ...p }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} {...p}>
      <path
        d="M32 4 L40 24 L60 28 L44 42 L48 60 L32 51 L16 60 L20 42 L4 28 L24 24 Z"
        fill={color}
      />
    </svg>
  );
}

function Sparkle({ size = 32, color = "#7feaff" }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size}>
      <path
        d="M32 4 C 34 22 42 30 60 32 C 42 34 34 42 32 60 C 30 42 22 34 4 32 C 22 30 30 22 32 4 Z"
        fill={color}
      />
    </svg>
  );
}

function CheckCircle({ size = 22, bg = "#7751CF" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="11" cy="11" r="11" fill={bg} />
      <polyline
        points="6 11.5 9.5 15 16 8"
        stroke="#F77D1A"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SquiggleArrow({ color = "#F77D1A" }) {
  return (
    <svg viewBox="0 0 220 220" width="220" height="220" fill="none">
      <path
        d="M30 30 C 90 0, 200 20, 200 90 C 200 140, 130 160, 90 130"
        stroke={color}
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M82 116 L 90 132 L 106 124"
        stroke={color}
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ────────── Book Cover Components ────────── */
function CoverPhoto({ accent = "#ff7eb0" }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: `linear-gradient(160deg, ${accent} 0%, #c84a86 100%)`,
        position: "relative",
        padding: "18px 16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          color: "#fff",
          opacity: 0.95,
        }}
      >
        <div
          style={{
            width: 22,
            height: 22,
            borderRadius: 7,
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: accent,
            fontWeight: 900,
            fontSize: 13,
          }}
        >
          F
        </div>
        <div className="small" style={{ color: "#fff", opacity: 0.85 }}>
          FALA KIDS
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          inset: "35% 14% 18% 12%",
          background: "rgba(255,255,255,.12)",
          borderRadius: "50% 60% 40% 50% / 50%",
          filter: "blur(2px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "22%",
          top: "38%",
          width: "55%",
          height: "38%",
          background: "rgba(255,255,255,.18)",
          borderRadius: "50% 40% 60% 50%",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "34%",
          top: "48%",
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#1c0f3f",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "52%",
          top: "48%",
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#1c0f3f",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "40%",
          top: "58%",
          width: 20,
          height: 10,
          borderRadius: "0 0 14px 14px",
          border: "2.5px solid #1c0f3f",
          borderTop: 0,
        }}
      />
      <div style={{ position: "relative", zIndex: 2 }}>
        <div
          className="small"
          style={{
            color: "rgba(255,255,255,.85)",
            fontSize: 9,
            marginBottom: 6,
          }}
        >
          Caderno de atividades
        </div>
        <div
          className="label"
          style={{
            color: "#fff",
            fontSize: 24,
            lineHeight: 1,
            fontStyle: "italic",
            fontWeight: 900,
            letterSpacing: ".01em",
          }}
        >
          FALANDO
          <br />
          <span style={{ color: "#ffd166" }}>EM CASA</span>
        </div>
      </div>
    </div>
  );
}

function CoverDark() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(180deg,#1a1430,#0c0822)",
        position: "relative",
        padding: "22px 18px",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      <svg
        viewBox="0 0 200 280"
        preserveAspectRatio="xMidYMid slice"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.16,
        }}
      >
        <g stroke="#a78bfa" strokeWidth="1" fill="none">
          <path d="M10 40 L60 40 L60 80 L120 80 L120 130" />
          <path d="M180 20 L180 60 L140 60 L140 110" />
          <path d="M30 200 L80 200 L80 250 L160 250" />
          <circle cx="60" cy="40" r="3" fill="#a78bfa" />
          <circle cx="120" cy="130" r="3" fill="#a78bfa" />
          <circle cx="80" cy="200" r="3" fill="#a78bfa" />
          <circle cx="180" cy="20" r="3" fill="#a78bfa" />
        </g>
      </svg>
      <div style={{ display: "flex", alignItems: "center", gap: 8, position: "relative" }}>
        <div
          style={{
            width: 18,
            height: 18,
            borderRadius: 6,
            background: "#a78bfa",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#1a1430",
            fontWeight: 900,
            fontSize: 11,
          }}
        >
          F
        </div>
        <div className="small" style={{ color: "#cfc1ff" }}>
          FALA KIDS
        </div>
      </div>
      <div style={{ position: "absolute", left: 18, right: 18, bottom: 22 }}>
        <div
          className="small"
          style={{ color: "#ffd166", fontSize: 11, marginBottom: 8 }}
        >
          GUIA COMPLETO
        </div>
        <div
          className="label"
          style={{ fontSize: 15, lineHeight: 1.15, fontWeight: 900 }}
        >
          Como estimular a fala em segundos com inteligência aplicada.
        </div>
      </div>
    </div>
  );
}

function CoverFlashcards() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#f6f4ef",
        position: "relative",
        padding: "22px 18px",
        color: "#1c0f3f",
      }}
    >
      <div
        className="small"
        style={{ textAlign: "center", color: "#7e6cc9" }}
      >
        FALA KIDS · KIT
      </div>
      <div
        className="label"
        style={{ textAlign: "center", fontSize: 18, marginTop: 6, fontWeight: 900 }}
      >
        LETRA INTRUSA
      </div>
      <div
        style={{
          marginTop: 18,
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 8,
          padding: 8,
          border: "2px dashed #1c0f3f",
          borderRadius: 8,
        }}
      >
        {["B", "O", "L", "A", "X", "S"].map((c, i) => (
          <div
            key={i}
            style={{
              aspectRatio: "1/1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: i === 4 ? "#ffd6e7" : "#fff",
              border: "1.5px solid #1c0f3f",
              borderRadius: 6,
              fontFamily: "'Nunito',sans-serif",
              fontWeight: 900,
              fontSize: 22,
              color: i === 4 ? "#c63d6a" : "#1c0f3f",
              textDecoration: i === 4 ? "line-through" : "none",
            }}
          >
            {c}
          </div>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          left: 18,
          right: 18,
          bottom: 14,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="small" style={{ color: "#7e6cc9", fontSize: 9 }}>
          5+ ANOS
        </div>
        <div className="small" style={{ color: "#7e6cc9", fontSize: 9 }}>
          v.01
        </div>
      </div>
    </div>
  );
}

function CoverWordbuild() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#e8e4f5",
        position: "relative",
        padding: "20px 16px",
        color: "#1c0f3f",
      }}
    >
      <div
        className="label"
        style={{ fontSize: 12, textAlign: "center", letterSpacing: ".14em" }}
      >
        FORMANDO PALAVRAS
      </div>
      <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 10 }}>
        {[
          ["🎈", "BO", "+", "LA"],
          ["🐝", "CA", "+", "SA"],
          ["⚽", "BO", "+", "LA"],
        ].map((row, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "24px 1fr 14px 1fr",
              gap: 6,
              alignItems: "stretch",
            }}
          >
            <div
              style={{
                background: "#fff",
                border: "1.5px solid #1c0f3f",
                borderRadius: 5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 13,
              }}
            >
              {row[0]}
            </div>
            <div
              style={{
                background: "#fff",
                border: "1.5px solid #1c0f3f",
                borderRadius: 5,
                padding: "4px 0",
                textAlign: "center",
                fontWeight: 900,
                fontSize: 13,
              }}
            >
              {row[1]}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
              }}
            >
              +
            </div>
            <div
              style={{
                background: "#fff",
                border: "1.5px solid #1c0f3f",
                borderRadius: 5,
                padding: "4px 0",
                textAlign: "center",
                fontWeight: 900,
                fontSize: 13,
              }}
            >
              {row[2] && row[3]}
            </div>
          </div>
        ))}
      </div>
      <div
        className="small"
        style={{
          position: "absolute",
          bottom: 12,
          left: 0,
          right: 0,
          textAlign: "center",
          color: "#7e6cc9",
        }}
      >
        FALA KIDS
      </div>
    </div>
  );
}

function CoverIllustration() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#fff",
        position: "relative",
        padding: "16px 14px",
        color: "#1c0f3f",
        overflow: "hidden",
      }}
    >
      <div className="small" style={{ textAlign: "center", color: "#7e6cc9" }}>
        ATIVIDADES DE
      </div>
      <div
        className="label"
        style={{ textAlign: "center", fontSize: 16, marginTop: 4, fontWeight: 900, color: "#1c0f3f" }}
      >
        COMPREENSÃO
        <br />
        NA LEITURA
      </div>
      <div
        style={{
          margin: "10px auto 0",
          width: 130,
          height: 130,
          borderRadius: "50%",
          background: "radial-gradient(circle at 30% 30%, #ffd166, #F77D1A 70%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "35%",
            top: "22%",
            width: 42,
            height: 42,
            borderRadius: "50%",
            background: "#f4c69b",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "22%",
            top: "58%",
            width: 68,
            height: 46,
            background: "#7c3aed",
            borderRadius: "30px 30px 8px 8px",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "30%",
            top: "70%",
            width: 50,
            height: 24,
            background: "#fff",
            borderRadius: 4,
            border: "2px solid #1c0f3f",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 8,
            left: 14,
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#ff7eb0",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 22,
            right: 18,
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: "#7feaff",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 18,
            left: 18,
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: "#ffd166",
          }}
        />
      </div>
      <div
        className="small"
        style={{
          position: "absolute",
          bottom: 10,
          left: 0,
          right: 0,
          textAlign: "center",
          color: "#7e6cc9",
        }}
      >
        FALA KIDS
      </div>
    </div>
  );
}

function CoverLinguagem() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#fff",
        position: "relative",
        padding: "18px 14px",
        color: "#1c0f3f",
      }}
    >
      <div className="small" style={{ color: "#7e6cc9" }}>
        FALA KIDS
      </div>
      <div
        className="label"
        style={{ fontSize: 18, marginTop: 8, fontWeight: 900, lineHeight: 1 }}
      >
        Atividades
        <br />
        de Linguagem
      </div>
      <div className="small" style={{ marginTop: 4, color: "#7e6cc9", fontSize: 9 }}>
        EDUCAÇÃO INFANTIL
      </div>
      <div
        style={{
          position: "absolute",
          left: -20,
          bottom: -30,
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "#7751CF",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 14,
          left: 18,
          right: 14,
          color: "#fff",
        }}
      >
        <div
          style={{
            fontFamily: "'Caveat Brush', cursive",
            fontSize: 22,
            lineHeight: 1,
            color: "#ffd166",
          }}
        >
          Brincar
        </div>
        <div
          style={{
            fontFamily: "'Caveat Brush', cursive",
            fontSize: 22,
            lineHeight: 1,
            color: "#ffb6d9",
            marginTop: -2,
          }}
        >
          é falar!
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          right: 14,
          top: 80,
          width: 46,
          height: 34,
          background: "#ffd166",
          borderRadius: "14px 14px 14px 4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Caveat Brush',cursive",
          color: "#1c0f3f",
          fontSize: 18,
        }}
      >
        oi!
      </div>
    </div>
  );
}

/* ────────── Sticky Urgency Bar ────────── */
function useCountdown(targetDate) {
  const calc = () => {
    const diff = targetDate - Date.now();
    if (diff <= 0) return { h: 0, m: 0, s: 0 };
    return {
      h: Math.floor(diff / 3_600_000),
      m: Math.floor((diff % 3_600_000) / 60_000),
      s: Math.floor((diff % 60_000) / 1_000),
    };
  };
  const [time, setTime] = React.useState(calc);
  React.useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1_000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function StickyUrgencyBar() {
  const [visible, setVisible] = React.useState(false);
  // Oferta expira em 4h a partir do primeiro render
  const expiresAt = React.useRef(Date.now() + 10 * 60_000);
  const { h, m, s } = useCountdown(expiresAt.current);
  const pad = (n) => String(n).padStart(2, "0");

  // Aparece quando a Hero section sai do viewport
  React.useEffect(() => {
    const hero = document.querySelector(".hero");
    if (!hero) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  const Unit = ({ value, label }) => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: 36 }}>
      <span style={{
        fontFamily: "'Nunito', sans-serif",
        fontWeight: 900,
        fontSize: "clamp(18px, 2.2vw, 24px)",
        lineHeight: 1,
        color: "#fff",
        letterSpacing: "0.04em",
      }}>{pad(value)}</span>
      <span style={{
        fontFamily: "'Nunito', sans-serif",
        fontWeight: 600,
        fontSize: 9,
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        color: "rgba(255,255,255,0.65)",
        marginTop: 2,
      }}>{label}</span>
    </div>
  );

  const Colon = () => (
    <span style={{
      fontFamily: "'Nunito', sans-serif",
      fontWeight: 900,
      fontSize: "clamp(18px, 2.2vw, 24px)",
      color: "rgba(255,255,255,0.5)",
      lineHeight: 1,
      marginBottom: 10,
    }}>:</span>
  );

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 9990,
      transform: visible ? "translateY(0)" : "translateY(-110%)",
      transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
      background: "linear-gradient(90deg, #1c0f3f 0%, #7751CF 50%, #1c0f3f 100%)",
      boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
    }}>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "10px clamp(16px, 4vw, 48px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "clamp(12px, 3vw, 32px)",
        flexWrap: "wrap",
      }}>
        {/* Label */}
        <span style={{
          fontFamily: "'Nunito', sans-serif",
          fontWeight: 700,
          fontSize: "clamp(12px, 1.4vw, 14px)",
          color: "rgba(255,255,255,0.85)",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          whiteSpace: "nowrap",
        }}>
          🔥 Oferta expira em
        </span>

        {/* Timer */}
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <Unit value={h} label="horas" />
          <Colon />
          <Unit value={m} label="min" />
          <Colon />
          <Unit value={s} label="seg" />
        </div>

        {/* Divider */}
        <div style={{ width: 1, height: 28, background: "rgba(255,255,255,0.2)", flexShrink: 0 }} className="urgency-divider" />

        {/* CTA */}
        <button
          onClick={() => window.location.href = "https://pay.kiwify.com.br/qI0dhGA"}
          style={{
            background: "#F77D1A",
            color: "#fff",
            border: 0,
            borderRadius: 999,
            padding: "8px 22px",
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(12px, 1.4vw, 14px)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            cursor: "pointer",
            whiteSpace: "nowrap",
            transition: "transform 0.15s ease, box-shadow 0.15s ease",
            boxShadow: "0 4px 16px rgba(247,125,26,0.4)",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.05)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
        >
          Quero meu pequeno lendo — R$ 19,90 ›
        </button>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .urgency-divider { display: none; }
        }
      `}</style>
    </div>
  );
}

/* ────────── Hero Section ────────── */
function Hero() {
  const palette = PALETTES[0];
  const bg = palette[0];
  const accent = palette[1];
  const c = COPY.default;

  const density = "regular";
  const decoCount = { minimal: 0, regular: 1, lots: 2 }[density] ?? 1;

  return (
    <div className="hero" style={{ "--bg": bg }}>
      <div className="hero-inner">
        {/* LEFT */}
        <div className="left">
          <div style={{ marginBottom: 24 }} className="hero-logo">
            <FalaKidsLogo />
          </div>

          <h1 className="headline hero-headline">
            O método que ensina{" "}
            <span style={{ color: "#F77D1A" }}>qualquer criança</span>{" "}
            a ler 5x mais rápido.
          </h1>
          <ul style={{
            listStyle: "none",
            padding: 0,
            margin: "0 0 24px",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }} className="hero-lede">
            {[
              {
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F77D1A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
                text: "170+ atividades progressivas",
              },
              {
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F77D1A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
                text: "Jogos e fichas interativas",
              },
              {
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F77D1A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/><path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2a8 8 0 0 1-8-8v-3a2 2 0 1 1 4 0"/></svg>,
                text: "Estimulação sensorial com textura",
              },
              {
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F77D1A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>,
                text: "Imprime em casa, quantas vezes quiser",
              },
            ].map((item, i) => (
              <li key={i} style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 600,
                fontSize: "clamp(14px, 1.6vw, 16px)",
                color: "rgba(255,255,255,0.9)",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}>
                <span style={{ flexShrink: 0 }}>{item.icon}</span>
                {item.text}
              </li>
            ))}
          </ul>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }} className="hero-ctas">
            <button
              className="cta"
              onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}
            >
              {c.cta}
              <span className="arrow">›</span>
            </button>
          </div>

          <div className="avatar-stack hero-avatars">
            <div>
              {[
                "https://i.pravatar.cc/60?img=5",
                "https://i.pravatar.cc/60?img=26",
                "https://i.pravatar.cc/60?img=48",
                "https://i.pravatar.cc/60?img=17",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Família Fala Kids"
                  className="avatar"
                />
              ))}
            </div>
            <span>+ de 5.200 pais e educadores já usaram o método</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="stack-wrap hero-books">
          <style>{`
            .cta-secondary {
              display: inline-flex;
              align-items: center;
              gap: 10px;
              background: transparent;
              color: #fff;
              border: 2px solid rgba(255,255,255,0.6);
              border-radius: 999px;
              padding: 20px 36px;
              font-family: "Nunito", sans-serif;
              font-weight: 800;
              font-size: 15px;
              letter-spacing: 0.1em;
              text-transform: uppercase;
              cursor: pointer;
              text-decoration: none;
              transition: all 0.18s ease;
            }
            .cta-secondary:hover {
              background: rgba(255,255,255,0.12);
              border-color: #fff;
            }
          `}</style>

          {/* Hero image */}
          <img
            src="assets/images/hero_final.webp"
            alt="Kit Fala Kids"
            fetchpriority="high"
            style={{
              width: "100%",
              maxWidth: 860,
              height: "auto",
              display: "block",
              filter: "drop-shadow(0 24px 48px rgba(0, 0, 0, 0.25))",
            }}
          />
        </div>
      </div>

    </div>
  );
}

/* ────────── Skills Section ────────── */
const FK_SKILLS = [
  "Traçado correto das letras (bastão e cursiva)",
  "Consciência fonológica",
  "Separação de sílabas",
  "Coordenação motora fina",
  "Leitura de palavras simples e complexas",
  "Fluência leitora e leitura guiada",
  "Formação e montagem de palavras",
  "Treino silábico diário em poucos minutos",
];

/* Mini cover components */
function MiniVol({ vol, title, color, sub }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: `linear-gradient(165deg, ${color}, ${shade(color, -18)})`,
        padding: "16px 14px",
        color: "#fff",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div className="small" style={{ color: "rgba(255,255,255,.85)", fontSize: 9 }}>
        FALA KIDS · {sub}
      </div>
      <div
        style={{
          position: "absolute",
          right: 12,
          top: 14,
          width: 30,
          height: 30,
          borderRadius: 8,
          background: "rgba(255,255,255,.92)",
          color: color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 900,
          fontSize: 16,
          fontFamily: "'Nunito',sans-serif",
        }}
      >
        {vol}
      </div>
      <div>
        <div style={{ fontWeight: 900, fontSize: 22, lineHeight: 1, fontFamily: "'Nunito',sans-serif" }}>
          {title}
        </div>
        <div style={{ height: 4, width: 32, background: "#ffd166", borderRadius: 2, marginTop: 10 }} />
      </div>
    </div>
  );
}

function shade(hex, pct) {
  const f = parseInt(hex.slice(1), 16),
    t = pct < 0 ? 0 : 255,
    p = Math.abs(pct) / 100;
  const R = f >> 16,
    G = (f >> 8) & 0x00ff,
    B = f & 0x0000ff;
  const r = Math.round((t - R) * p) + R,
    g = Math.round((t - G) * p) + G,
    b = Math.round((t - B) * p) + B;
  return "#" + (0x1000000 + r * 0x10000 + g * 0x100 + b).toString(16).slice(1);
}

function MiniFichas() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#fff", padding: "14px 12px", color: "#1c0f3f" }}>
      <div className="small" style={{ textAlign: "center", color: "#7e6cc9", fontSize: 9 }}>
        JOGO DE FICHAS
      </div>
      <div style={{ textAlign: "center", fontWeight: 900, fontSize: 13, marginTop: 4 }}>
        SILÁBICAS
      </div>
      <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 4 }}>
        {["BO", "LA", "CA", "SA", "PA", "PI", "FA", "LA", "DO"].map((s, i) => (
          <div
            key={i}
            style={{
              aspectRatio: "1/1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: i % 3 === 0 ? "#ffe6a8" : "#e8e4f5",
              border: "1.5px solid #1c0f3f",
              borderRadius: 4,
              fontWeight: 900,
              fontSize: 11,
            }}
          >
            {s}
          </div>
        ))}
      </div>
      <div className="small" style={{ textAlign: "center", marginTop: 10, color: "#7e6cc9", fontSize: 8 }}>
        FALA KIDS
      </div>
    </div>
  );
}

function MiniPoster() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(180deg,#ffd166,#F77D1A)",
        padding: "14px 12px",
        color: "#1c0f3f",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="small" style={{ fontSize: 9, opacity: 0.85 }}>
        FALA KIDS · BÔNUS
      </div>
      <div style={{ fontWeight: 900, fontSize: 16, marginTop: 8, lineHeight: 1 }}>
        PÔSTER
        <br />
        GIGANTE
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 8,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {["#ff7eb0", "#7feaff", "#a5f3a3", "#fff", "#7c3aed"].map((col, i) => (
          <div
            key={i}
            style={{
              width: 18,
              height: 30,
              background: col,
              borderRadius: "50% 50% 14px 14px",
              border: "1.5px solid #1c0f3f",
            }}
          />
        ))}
      </div>
      <div className="small" style={{ fontSize: 8, position: "absolute", bottom: 54, left: 12, opacity: 0.7 }}>
        5 PERSONAGENS
      </div>
    </div>
  );
}

function MiniTiras() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#fff", padding: "14px 12px", color: "#1c0f3f" }}>
      <div className="small" style={{ color: "#7e6cc9", fontSize: 9 }}>
        FALA KIDS
      </div>
      <div style={{ fontWeight: 900, fontSize: 14, marginTop: 4, lineHeight: 1.1 }}>
        TIRAS DE
        <br />
        LEITURA
      </div>
      <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 6 }}>
        {[
          "O GATO PULOU.",
          "A BOLA É AZUL.",
          "PAPAI LÊ.",
          "VOVÓ AMA.",
          "O SOL BRILHA.",
        ].map((s, i) => (
          <div
            key={i}
            style={{
              background: i % 2 ? "#fdf2f8" : "#eef2ff",
              border: "1px solid #c7c2eb",
              borderRadius: 3,
              padding: "3px 6px",
              fontSize: 9,
              fontWeight: 700,
              fontFamily: "'Patrick Hand',cursive",
            }}
          >
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}

function MiniFluencia() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#ede4ff",
        padding: "14px 12px",
        color: "#1c0f3f",
        position: "relative",
      }}
    >
      <div className="small" style={{ color: "#7751CF", fontSize: 9 }}>
        FALA KIDS
      </div>
      <div style={{ fontWeight: 900, fontSize: 15, marginTop: 4, lineHeight: 1, color: "#3a1f8c" }}>
        FLUÊNCIA
        <br />
        LEITORA
      </div>
      <div className="small" style={{ fontSize: 9, marginTop: 4, color: "#7e6cc9" }}>
        50 TEXTOS FATIADOS
      </div>
      <div style={{ marginTop: 12 }}>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} style={{ display: "flex", gap: 4, marginBottom: 5 }}>
            <div style={{ width: `${30 + i * 8}%`, height: 6, background: "#7751CF", borderRadius: 3 }} />
            <div style={{ width: `${15 + i * 4}%`, height: 6, background: "#ffd166", borderRadius: 3 }} />
          </div>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 10,
          right: 10,
          fontFamily: "'Caveat Brush',cursive",
          color: "#7751CF",
          fontSize: 22,
          transform: "rotate(-8deg)",
        }}
      >
        lê!
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" style={{
      background: "#fff",
      padding: "100px clamp(24px, 6vw, 96px)",
    }}>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "clamp(40px, 6vw, 80px)",
        alignItems: "center",
      }} className="skills-layout">

        {/* LEFT — Video */}
        {(() => {
          const [playing, setPlaying] = React.useState(false);
          const videoRef = React.useRef(null);

          const handlePlay = () => {
            setPlaying(true);
            videoRef.current.play();
          };

          return (
            <div style={{
              borderRadius: 24,
              overflow: "hidden",
              boxShadow: "0 24px 60px rgba(0,0,0,0.12)",
              position: "relative",
              lineHeight: 0,
              cursor: playing ? "default" : "pointer",
            }} onClick={!playing ? handlePlay : undefined}>

              <video
                ref={videoRef}
                src="assets/videos/criativo_site.mp4"
                poster="assets/images/juba-do-leao.webp"
                playsInline
                controls={playing}
                style={{
                  width: "110%",
                  marginLeft: "-5%",
                  display: "block",
                  objectFit: "cover",
                }}
              />

              {/* Custom play button overlay */}
              {!playing && (
                <div style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(0,0,0,0.12)",
                }}>
                  <div className="play-btn-circle" style={{
                    width: 80,
                    height: 80,
                    minWidth: 80,
                    minHeight: 80,
                    borderRadius: "50%",
                    background: "#F77D1A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 8px 32px rgba(247,125,26,0.55)",
                    transition: "transform 0.18s ease, box-shadow 0.18s ease",
                    flexShrink: 0,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "scale(1.1)";
                    e.currentTarget.style.boxShadow = "0 12px 40px rgba(247,125,26,0.7)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "0 8px 32px rgba(247,125,26,0.55)";
                  }}>
                    {/* Triangle play icon */}
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              )}
            </div>
          );
        })()}

        {/* RIGHT — Text */}
        <div>
          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#F77D1A",
            margin: "0 0 12px",
          }}>
            O que seu pequeno aprende
          </p>

          <h2 style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 900,
            color: "#7751CF",
            fontSize: "clamp(32px, 3.6vw, 50px)",
            lineHeight: 1.08,
            margin: "0 0 16px",
          }}>
            Desenvolva habilidades
          </h2>

          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "clamp(15px, 1.6vw, 17px)",
            fontWeight: 500,
            color: "#6b6b8a",
            margin: "0 0 32px",
            lineHeight: 1.6,
          }}>
            Com o Kit Completo Fala Kids, seu pequeno vai trabalhar:
          </p>

          <ul style={{
            listStyle: "none",
            padding: 0,
            margin: "0 0 32px",
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}>
            {FK_SKILLS.map((s, i) => (
              <li key={i} style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                fontFamily: "'Nunito', sans-serif",
                fontSize: "clamp(14px, 1.5vw, 16px)",
                fontWeight: 600,
                color: "#1c0f3f",
              }}>
                <CheckCircle size={22} bg="#7751CF" />
                {s}
              </li>
            ))}
          </ul>

          <div style={{
            background: "#f4f0ff",
            borderLeft: "4px solid #7751CF",
            borderRadius: 10,
            padding: "18px 22px",
            fontFamily: "'Nunito', sans-serif",
            fontSize: "clamp(13px, 1.4vw, 15px)",
            fontWeight: 600,
            color: "#2a1d6e",
            lineHeight: 1.6,
          }}>
            Perfeito para crianças de <strong>2 a 12 anos</strong> — apenas <strong>20 minutos por dia</strong> é suficiente.
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* ────────── Kit Overview Section ────────── */
function KitOverview() {
  const items = [
    { label: "+170 Atividades com Grafismo Fonético", highlight: false },
    { label: "Leitura fluida em 15 dias", highlight: false },
    { label: "Método Fonético comprovado", highlight: false },
    { label: "Fala Kids — Volume 1 + Volume 2", highlight: false },
    { label: "Bônus 1: Jogo Ficha Silábica", bonus: true },
    { label: "Bônus 2: Separe as Sílabas", bonus: true },
    { label: "Bônus 3: Monte seu Pôster Gigante", bonus: true },
  ];

  return (
    <section style={{
      position: "relative",
      padding: "120px clamp(24px, 6vw, 96px)",
      overflow: "hidden",
      color: "#fff",
    }}>
      {/* Background image */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "url('assets/images/fala-kids-art.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "grayscale(100%)",
        zIndex: 0,
      }} />
      {/* Dark overlay for readability */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(135deg, rgba(30, 10, 80, 0.88) 0%, rgba(119, 81, 207, 0.75) 100%)",
        zIndex: 1,
      }} />

      {/* Content */}
      <div style={{
        position: "relative",
        zIndex: 2,
        maxWidth: 860,
        margin: "0 auto",
      }}>
        {/* Header */}
        <div style={{ marginBottom: 56, textAlign: "center" }}>
          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#F77D1A",
            margin: "0 0 12px",
          }}>
            Kit Completo
          </p>
          <h2 style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(36px, 5vw, 60px)",
            lineHeight: 1.08,
            margin: "0 0 20px",
            color: "#fff",
          }}>
            Sobre o kit
          </h2>
          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "clamp(16px, 1.8vw, 19px)",
            fontWeight: 500,
            color: "rgba(255,255,255,0.78)",
            maxWidth: 580,
            margin: "0 auto",
            lineHeight: 1.65,
          }}>
            Tudo que você precisa para alfabetizar seu pequeno com método, progressão e muito afeto.
          </p>
        </div>

        {/* Item list */}
        <ul style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}>
          {items.map((item, i) => (
            <li key={i} style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              background: "#fff",
              border: item.bonus
                ? "2px solid #F77D1A"
                : "2px solid transparent",
              borderRadius: 14,
              padding: "18px 24px",
              backdropFilter: "blur(6px)",
            }}>
              <CheckCircle size={28} bg={item.bonus ? "#F77D1A" : "#7751CF"} />
              <span style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "clamp(15px, 1.6vw, 17px)",
                fontWeight: item.bonus ? 700 : 600,
                color: item.bonus ? "#F77D1A" : "#1c0f3f",
                lineHeight: 1.4,
              }}>
                {item.label}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 56 }}>
          <button
            onClick={() => window.location.href = "https://pay.kiwify.com.br/qI0dhGA"}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              background: "#F77D1A",
              color: "#fff",
              border: 0,
              borderRadius: 999,
              padding: "20px 48px",
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 900,
              fontSize: 16,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              cursor: "pointer",
              boxShadow: "0 14px 32px -8px rgba(247, 125, 26, 0.5)",
              transition: "all 0.18s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 20px 40px -8px rgba(247, 125, 26, 0.6)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 14px 32px -8px rgba(247, 125, 26, 0.5)"; }}
          >
            Quero o kit completo ›
          </button>
        </div>
      </div>
    </section>
  );
}

/* ────────── Kit Carousel Section ────────── */
function KitCarousel() {
  const [current, setCurrent] = React.useState(0);
  const touchStartX = React.useRef(null);
  const images = [
    "assets/images/produto_amostra_2.webp",
    "assets/images/produto_amostra_1.webp",
    "assets/images/produto_amostra_4.webp",
    "assets/images/produto_amostra_5.png",
    "assets/images/pato.png",
    "assets/images/fada.webp",
  ];

  const prev = () => setCurrent(i => (i - 1 + images.length) % images.length);
  const next = () => setCurrent(i => (i + 1) % images.length);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) delta > 0 ? next() : prev();
    touchStartX.current = null;
  };

  const getPos = (i) => {
    const total = images.length;
    let offset = i - current;
    if (offset > Math.floor(total / 2)) offset -= total;
    if (offset < -Math.floor(total / 2)) offset += total;
    return offset;
  };

  return (
    <section style={{ background: "#f9f7ff", padding: "80px clamp(24px, 6vw, 96px)", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#F77D1A",
            margin: "0 0 10px",
          }}>Amostras do material</p>
          <h2 style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 900,
            color: "#7751CF",
            fontSize: "clamp(28px, 3.2vw, 42px)",
            margin: 0,
            lineHeight: 1.1,
          }}>Veja o que está dentro do kit</h2>
        </div>

        {/* Carousel track */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{
            position: "relative",
            height: "clamp(360px, 50vw, 560px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          {images.map((src, i) => {
            const pos = getPos(i);
            const isCenter = pos === 0;
            const isAdjacent = Math.abs(pos) === 1;
            const isHidden = Math.abs(pos) > 1;

            return (
              <div
                key={i}
                onClick={() => !isCenter && setCurrent(i)}
                style={{
                  position: "absolute",
                  width: isCenter ? "clamp(240px, 32vw, 380px)" : "clamp(160px, 22vw, 260px)",
                  height: isCenter ? "clamp(320px, 44vw, 500px)" : "clamp(220px, 30vw, 360px)",
                  transform: `translateX(${pos * (isCenter ? 0 : 105)}%) scale(${isCenter ? 1 : 0.82})`,
                  zIndex: isCenter ? 3 : isAdjacent ? 2 : 1,
                  opacity: isHidden ? 0 : isAdjacent ? 0.55 : 1,
                  transition: "all 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  cursor: isCenter ? "default" : "pointer",
                  borderRadius: 20,
                  overflow: "hidden",
                  boxShadow: isCenter
                    ? "0 24px 64px rgba(119,81,207,0.18)"
                    : "0 8px 24px rgba(0,0,0,0.10)",
                  flexShrink: 0,
                }}
              >
                <img
                  src={src}
                  alt={`Amostra ${i + 1}`}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, marginTop: 40 }}>
          <button className="nav-btn-circle" onClick={prev} style={{
            width: 44, height: 44, minWidth: 44, minHeight: 44, borderRadius: "50%",
            background: "#fff", border: "2px solid #7751CF",
            color: "#7751CF", fontSize: 22, fontWeight: 900,
            cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0, transition: "all 0.18s ease", padding: 0,
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "#7751CF"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#7751CF"; }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>

          {/* Dots */}
          <div style={{ display: "flex", gap: 8 }}>
            {images.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} style={{
                width: current === i ? 28 : 10,
                height: 10, borderRadius: 5,
                background: current === i ? "#7751CF" : "#d4c6ff",
                border: "none", cursor: "pointer",
                transition: "all 0.3s ease", padding: 0,
              }} />
            ))}
          </div>

          <button className="nav-btn-circle" onClick={next} style={{
            width: 44, height: 44, minWidth: 44, minHeight: 44, borderRadius: "50%",
            background: "#fff", border: "2px solid #7751CF",
            color: "#7751CF", fontSize: 22, fontWeight: 900,
            cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0, transition: "all 0.18s ease", padding: 0,
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "#7751CF"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#7751CF"; }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>

      </div>
    </section>
  );
}

/* ────────── Why It Works Section ────────── */
function WhyItWorks() {
  const reasons = [
    {
      emoji: "🗣️",
      title: "Sua criança aprende falando",
      desc: "Não memoriza letras. Aprende o som real de cada letra. Quando sabe os sons, forma palavras sozinha.",
    },
    {
      emoji: "📈",
      title: "Progressão garantida",
      desc: "Começa do básico (reconhecer letras) até ler textos completos. Cada dia ela fica mais perto de conseguir.",
    },
    {
      emoji: "✨",
      title: "Resultados que você vê",
      desc: "Não é teoria. São 170+ atividades práticas, pronto para imprimir e usar hoje mesmo em casa.",
    },
  ];

  return (
    <section style={{ background: "#f8f5ff", padding: "100px clamp(24px, 6vw, 96px)" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <h2
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 900,
              color: "#7751CF",
              fontSize: "clamp(32px, 3.4vw, 48px)",
              lineHeight: 1.05,
              margin: "0 0 16px",
              maxWidth: 700,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Por que o Grafismo Fonético Funciona?
          </h2>
          <p
            style={{
              color: "#7e6cc9",
              fontSize: 18,
              fontWeight: 600,
              margin: 0,
              maxWidth: 600,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            A ciência por trás do método que alfabetiza em semanas
          </p>
        </div>

        {/* Cards Grid */}
        <div className="why-it-works-grid">
          {reasons.map((reason, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                padding: "40px 32px",
                borderRadius: 16,
                boxShadow: "0 4px 12px rgba(91, 59, 255, 0.08)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 12px 28px rgba(91, 59, 255, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(91, 59, 255, 0.08)";
              }}
            >
              {/* Icon */}
              <div style={{ fontSize: 56, marginBottom: 20 }}>{reason.emoji}</div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 900,
                  color: "#1c0f3f",
                  fontSize: 20,
                  lineHeight: 1.2,
                  margin: "0 0 14px",
                }}
              >
                {reason.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  color: "#666",
                  fontSize: 15,
                  lineHeight: 1.6,
                  margin: 0,
                  fontWeight: 500,
                }}
              >
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────── How to Apply Section ────────── */
function HowToApply() {
  const steps = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7751CF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
        </svg>
      ),
      num: "01",
      title: "Fácil de usar",
      desc: "Baixe e imprima em casa. Material pronto para usar — sem preparação, sem complicação.",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F77D1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      num: "02",
      title: "Sessões rápidas",
      desc: "Apenas 15–20 minutos por dia. Atividades leves, interativas e sem pressão.",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7751CF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
        </svg>
      ),
      num: "03",
      title: "Evolução garantida",
      desc: "Semana a semana, veja seu pequeno reconhecer letras, formar sílabas e ler palavras.",
    },
  ];

  return (
    <section style={{
      position: "relative",
      padding: "100px clamp(24px, 6vw, 96px)",
      overflow: "hidden",
    }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url('assets/images/como-alfabetizar-letrando.jpg')", backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(100%)", zIndex: 0 }} />
      <div style={{ position: "absolute", inset: 0, background: "rgba(244, 240, 255, 0.93)", zIndex: 1 }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#F77D1A",
            margin: "0 0 12px",
          }}>Como funciona</p>
          <h2 style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 900,
            color: "#7751CF",
            fontSize: "clamp(32px, 3.6vw, 50px)",
            lineHeight: 1.08,
            margin: "0 0 16px",
          }}>
            Simples de aplicar na rotina
          </h2>
          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "clamp(15px, 1.6vw, 18px)",
            fontWeight: 500,
            color: "#6b6b8a",
            margin: 0,
            maxWidth: 520,
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.65,
          }}>
            15 minutos por dia é tudo que você precisa para ver seu pequeno evoluir semana a semana.
          </p>
        </div>

        {/* Steps */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "clamp(24px, 4vw, 48px)",
        }} className="how-to-apply-grid">
          {steps.map((step, i) => (
            <div key={i} style={{
              background: "#fff",
              borderRadius: 20,
              padding: "36px 28px",
              boxShadow: "0 4px 20px rgba(119,81,207,0.08)",
              display: "flex",
              flexDirection: "column",
              gap: 20,
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(119,81,207,0.15)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(119,81,207,0.08)"; }}
            >
              {/* Step number + icon row */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 900,
                  fontSize: 48,
                  color: i % 2 === 0 ? "#ede6ff" : "#ffe8d6",
                  lineHeight: 1,
                }}>{step.num}</span>
                <div className="step-icon-box" style={{
                  width: 56,
                  height: 56,
                  minWidth: 56,
                  minHeight: 56,
                  borderRadius: 16,
                  flexShrink: 0,
                  background: i % 2 === 0 ? "#f4f0ff" : "#fff4ec",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>{step.icon}</div>
              </div>

              <div>
                <h3 style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 900,
                  color: "#1c0f3f",
                  fontSize: 20,
                  margin: "0 0 10px",
                  lineHeight: 1.2,
                }}>{step.title}</h3>
                <p style={{
                  fontFamily: "'Nunito', sans-serif",
                  color: "#6b6b8a",
                  fontSize: 15,
                  lineHeight: 1.65,
                  margin: 0,
                  fontWeight: 500,
                }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 64 }}>
          <button
            onClick={() => window.location.href = "https://pay.kiwify.com.br/qI0dhGA"}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              background: "#F77D1A",
              color: "#fff",
              border: 0,
              borderRadius: 999,
              padding: "20px 48px",
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 900,
              fontSize: 16,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              cursor: "pointer",
              boxShadow: "0 14px 32px -8px rgba(247,125,26,0.45)",
              transition: "all 0.18s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 20px 40px -8px rgba(247,125,26,0.6)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 14px 32px -8px rgba(247,125,26,0.45)"; }}
          >
            Quero o kit agora ›
          </button>
        </div>

      </div>
    </section>
  );
}

/* ────────── Testimonials Section ────────── */
function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const touchStartX = React.useRef(null);

  const testimonials = [
    { id: 1, image: "assets/images/testimonial1.jpg" },
    { id: 2, image: "assets/images/testimonial2.jpg" },
    { id: 3, image: "assets/images/testimonial3.jpg" },
    { id: 4, image: "assets/images/testimonial4.jpg" },
    { id: 5, image: "assets/images/testimonial5.jpg" },
  ];

  const goTo = (i) => { setFade(false); setTimeout(() => { setCurrent(i); setFade(true); }, 150); };
  const goToPrev = () => goTo((current - 1 + testimonials.length) % testimonials.length);
  const goToNext = () => goTo((current + 1) % testimonials.length);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) delta > 0 ? goToNext() : goToPrev();
    touchStartX.current = null;
  };

  const NavBtn = ({ onClick, children }) => (
    <button className="nav-btn-circle" onClick={onClick} style={{
      width: 44, height: 44, minWidth: 44, minHeight: 44, borderRadius: "50%",
      background: "#fff", border: "2px solid #7751CF", color: "#7751CF",
      cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0, transition: "all 0.2s ease", padding: 0,
    }}
      onMouseEnter={e => { e.currentTarget.style.background = "#7751CF"; e.currentTarget.style.color = "#fff"; }}
      onMouseLeave={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#7751CF"; }}
    >{children}</button>
  );

  return (
    <section style={{ background: "#fff", padding: "100px clamp(24px, 6vw, 96px)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase", color: "#F77D1A", margin: "0 0 12px" }}>Depoimentos</p>
          <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#7751CF", fontSize: "clamp(28px, 3.4vw, 44px)", lineHeight: 1.08, margin: "0 0 14px" }}>
            O que pais e educadores estão dizendo
          </h2>
          <p style={{ fontFamily: "'Nunito', sans-serif", color: "#6b6b8a", fontSize: "clamp(15px, 1.6vw, 17px)", fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
            Histórias reais de famílias que já viram a transformação acontecer.
          </p>
        </div>

        {/* Image carousel */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, maxWidth: 560, margin: "0 auto" }}>
          <NavBtn onClick={goToPrev}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </NavBtn>

          <div
            className="testimonials-image-wrap"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{
              flex: 1,
              height: 420,
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 12px 40px rgba(119,81,207,0.15)",
              background: "#f9f7ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <img
              src={testimonials[current].image}
              alt="Depoimento"
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                display: "block",
                opacity: fade ? 1 : 0,
                transition: "opacity 0.25s ease",
              }}
            />
          </div>

          <NavBtn onClick={goToNext}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </NavBtn>
        </div>

        {/* Dots + rating */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, marginTop: 36 }}>
          <div style={{ display: "flex", gap: 8 }}>
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => goTo(i)} style={{
                width: current === i ? 28 : 10, height: 10, borderRadius: 5, padding: 0,
                background: current === i ? "#7751CF" : "#d4c6ff", border: "none", cursor: "pointer",
                transition: "all 0.3s ease",
              }} />
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {"★★★★★".split("").map((s, i) => (
              <span key={i} style={{ fontSize: 20, color: "#ffd166" }}>{s}</span>
            ))}
            <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 14, color: "#6b6b8a" }}>4.9 de 5 · 342 avaliações</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────── Product Card / Pricing Section ────────── */
function ProductCard() {
  const features = [
    { text: "+170 Atividades com Grafismo Fonético", bonus: false },
    { text: "Leitura fluida em 15 dias", bonus: false },
    { text: "Método Fonético comprovado", bonus: false },
    { text: "Fala Kids — Volume 1 + Volume 2", bonus: false },
    { text: "Bônus 1: Jogo Ficha Silábica", bonus: true },
    { text: "Bônus 2: Separe as Sílabas", bonus: true },
    { text: "Bônus 3: Monte seu Pôster Gigante", bonus: true },
  ];

  return (
    <section style={{ background: "#f9f7ff", padding: "100px clamp(24px, 6vw, 96px)" }}>
      <style>{`
        @keyframes pulse-orange {
          0%, 100% { box-shadow: 0 14px 32px -8px rgba(247,125,26,0.45); }
          50%       { box-shadow: 0 14px 48px -4px rgba(247,125,26,0.7); }
        }
        .pulse-button { animation: pulse-orange 2s ease-in-out infinite; }
      `}</style>

      <div style={{ maxWidth: 760, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <p style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase", color: "#F77D1A", margin: "0 0 12px" }}>Oferta especial</p>
          <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#7751CF", fontSize: "clamp(32px, 3.6vw, 50px)", lineHeight: 1.08, margin: "0 0 14px" }}>Kit Completo Fala Kids</h2>
          <p style={{ fontFamily: "'Nunito', sans-serif", color: "#6b6b8a", fontSize: "clamp(15px, 1.6vw, 17px)", fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
            Tudo que você precisa para alfabetizar seu pequeno em semanas.
          </p>
        </div>

        {/* Card */}
        <div style={{ background: "#fff", borderRadius: 24, padding: "clamp(28px, 5vw, 48px)", boxShadow: "0 8px 40px rgba(119,81,207,0.10)" }}>

          {/* Features list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 36 }}>
            {features.map((f, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <CheckCircle size={22} bg={f.bonus ? "#F77D1A" : "#7751CF"} />
                <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: "clamp(14px, 1.5vw, 16px)", fontWeight: f.bonus ? 700 : 600, color: f.bonus ? "#F77D1A" : "#1c0f3f" }}>{f.text}</span>
              </div>
            ))}
          </div>

          {/* Price */}
          <div style={{ background: "#f9f7ff", borderRadius: 16, padding: "20px 24px", textAlign: "center", marginBottom: 24 }}>
            <p style={{ margin: "0 0 4px", fontFamily: "'Nunito', sans-serif", fontSize: 13, color: "#6b6b8a", fontWeight: 600 }}>
              De <span style={{ textDecoration: "line-through" }}>R$ 199</span> — Economize 87%
            </p>
            <p style={{ margin: 0, fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: "clamp(28px, 4vw, 40px)", color: "#F77D1A" }}>R$ 19,90</p>
          </div>

          {/* CTA */}
          <button
            className="pulse-button"
            onClick={() => window.location.href = "https://pay.kiwify.com.br/qI0dhGA"}
            style={{
              width: "100%", background: "#F77D1A", color: "#fff", border: 0,
              borderRadius: 999, padding: "20px 32px",
              fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 17,
              cursor: "pointer", textTransform: "uppercase", letterSpacing: "0.1em",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Quero meu pequeno lendo agora
          </button>

          <p style={{ textAlign: "center", marginTop: 16, fontFamily: "'Nunito', sans-serif", fontSize: 13, color: "#6b6b8a", fontWeight: 600 }}>
            ✅ Garantia 7 dias &nbsp;·&nbsp; ⚡ Acesso imediato
          </p>
        </div>
      </div>
    </section>
  );
}

/* ────────── FAQ Section ────────── */
function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "Quais são as formas de pagamento?", answer: "Você pode pagar com qualquer cartão de crédito, boleto bancário ou PIX." },
    { question: "Como acesso o material?", answer: "Após a confirmação do pagamento você recebe o acesso por e-mail imediatamente. Todo o conteúdo fica disponível para baixar em PDF quantas vezes quiser." },
    { question: "Preciso pagar mensalidade?", answer: "Não. É um pagamento único com acesso vitalício — pague uma vez e use para sempre." },
    { question: "Para quem é indicado?", answer: "Para crianças de 2 a 12 anos. Funciona tanto em casa com pais quanto em sala de aula com educadores." },
    { question: "Posso tirar dúvidas?", answer: "Sim! Nossa equipe está disponível pelo WhatsApp, Instagram e e-mail para te ajudar no que precisar." },
    { question: "Como o Grafismo Fonético ajuda na alfabetização?", answer: "Ele associa som e letra de forma natural, desenvolvendo consciência fonológica, coordenação motora e memória auditiva — acelerando o aprendizado da leitura de forma lúdica." },
  ];

  return (
    <section style={{ background: "#fff", padding: "100px clamp(24px, 6vw, 96px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <p style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase", color: "#F77D1A", margin: "0 0 12px" }}>Dúvidas</p>
          <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#7751CF", fontSize: "clamp(28px, 3.4vw, 44px)", lineHeight: 1.08, margin: 0 }}>Perguntas frequentes</h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ background: "#f9f7ff", borderRadius: 14, overflow: "hidden", border: openIndex === i ? "2px solid #7751CF" : "2px solid transparent", transition: "border 0.2s ease" }}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  width: "100%", padding: "18px 22px", background: "transparent", border: "none",
                  textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between",
                  alignItems: "center", gap: 16,
                }}
              >
                <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: "clamp(14px, 1.5vw, 16px)", color: "#1c0f3f", lineHeight: 1.4 }}>{faq.question}</span>
                <svg style={{ flexShrink: 0, transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease", color: "#7751CF" }}
                  width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              {openIndex === i && (
                <div style={{ padding: "0 22px 18px", fontFamily: "'Nunito', sans-serif", fontSize: "clamp(13px, 1.4vw, 15px)", color: "#6b6b8a", lineHeight: 1.65, fontWeight: 500 }}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────── WhatsApp Button ────────── */
function WhatsAppButton() {
  const [hovered, setHovered] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const hero = document.querySelector(".hero");
    if (!hero) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);
  const number = "5513978089429";
  const message = encodeURIComponent("Olá! Tenho uma dúvida sobre o Kit Fala Kids.");
  const url = `https://wa.me/${number}?text=${message}`;

  return (
    <div style={{
      position: "fixed",
      bottom: 20,
      right: 20,
      zIndex: 9989,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      width: "fit-content",
      opacity: visible ? 1 : 0,
      transition: "opacity 0.3s ease",
      pointerEvents: visible ? "auto" : "none",
    }}>
      {/* Popup */}
      <div style={{
        background: "#fff",
        borderRadius: 10,
        padding: "8px 14px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
        fontFamily: "'Nunito', sans-serif",
        fontWeight: 700,
        fontSize: 13,
        color: "#1c0f3f",
        whiteSpace: "nowrap",
        opacity: hovered ? 1 : 0,
        transform: hovered ? "translateX(0)" : "translateX(-8px)",
        transition: "opacity 0.2s ease, transform 0.2s ease",
        pointerEvents: "none",
      }}>
        Dúvidas? Fale Conosco 💬
      </div>

      {/* Button */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: "#25D366",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(37,211,102,0.45)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          transform: hovered ? "scale(1.1)" : "scale(1)",
          flexShrink: 0,
        }}
      >
        <svg width="28" height="28" viewBox="0 0 32 32" fill="#fff">
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.492.644 4.835 1.77 6.87L2 30l7.34-1.92A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.83-1.594l-.418-.248-4.355 1.14 1.16-4.24-.272-.435A11.46 11.46 0 0 1 4.5 16C4.5 9.596 9.596 4.5 16 4.5S27.5 9.596 27.5 16 22.404 27.5 16 27.5zm6.29-8.61c-.344-.172-2.036-1.004-2.352-1.118-.316-.115-.546-.172-.776.172-.23.344-.89 1.118-1.09 1.348-.2.23-.4.258-.744.086-.344-.172-1.452-.535-2.766-1.707-1.022-.912-1.712-2.038-1.912-2.382-.2-.344-.022-.53.15-.702.155-.155.344-.4.516-.602.172-.2.23-.344.344-.574.115-.23.058-.43-.028-.602-.086-.172-.776-1.87-1.062-2.56-.28-.672-.564-.58-.776-.59l-.66-.012c-.23 0-.602.086-.916.43s-1.204 1.176-1.204 2.868 1.232 3.328 1.404 3.558c.172.23 2.424 3.702 5.874 5.19.82.354 1.46.566 1.96.724.822.262 1.57.224 2.16.136.66-.098 2.036-.832 2.322-1.636.286-.804.286-1.492.2-1.636-.084-.144-.314-.23-.658-.4z"/>
        </svg>
      </a>
    </div>
  );
}

/* ────────── Footer Section ────────── */
function Footer() {
  return (
    <footer style={{ background: "#1c0f3f", color: "#fff", padding: "56px clamp(24px, 6vw, 96px)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 32, marginBottom: 40 }}>
          {/* Brand */}
          <div>
            <img src="assets/images/fala-kids-new-logo-white.webp" alt="Fala Kids" style={{ height: 48, display: "block" }} />
          </div>
          {/* CTA */}
          <button
            onClick={() => window.location.href = "https://pay.kiwify.com.br/qI0dhGA"}
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "#F77D1A", color: "#fff", border: 0, borderRadius: 999,
              padding: "16px 36px", fontFamily: "'Nunito', sans-serif", fontWeight: 900,
              fontSize: 15, letterSpacing: "0.1em", textTransform: "uppercase",
              cursor: "pointer", transition: "all 0.18s ease",
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
          >
            Comprar agora ›
          </button>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 28, display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 12 }}>
          <p style={{ margin: 0, fontSize: 13, color: "rgba(255,255,255,0.5)", fontFamily: "'Nunito', sans-serif" }}>© 2026 Fala Kids. Todos os direitos reservados.</p>
          <p style={{ margin: 0, fontSize: 13, color: "rgba(255,255,255,0.5)", fontFamily: "'Nunito', sans-serif" }}>Método Fonético · Alfabetização Infantil</p>
        </div>
      </div>
    </footer>
  );
}

/* ────────── Pain Validation Section ────────── */
function PainValidation() {
  return (
    <section style={{ background: "#fff", padding: "100px clamp(24px, 6vw, 96px)" }}>
      {/*
        Desktop: 2-column grid — left col has header (row 1) + body (row 2),
                                  right col has image spanning both rows.
        Mobile:  flex column   — header (order 1) → image (order 2) → body (order 3).
      */}
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "clamp(40px, 6vw, 80px)",
        alignItems: "start",
      }}
        className="pain-grid"
      >
        {/* Header — desktop: left col row 1 / mobile: order 1 */}
        <div className="pain-header">
          <h2
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 900,
              color: "#7751CF",
              fontSize: "clamp(32px, 4vw, 52px)",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Sem tempo?<br />A gente te ajuda!
          </h2>
        </div>

        {/* Image — desktop: right col spans rows 1+2 / mobile: order 2 */}
        <div className="pain-image" style={{ gridRow: "1 / 3" }}>
          <img
            src="assets/images/busy-mom2.webp"
            alt="Mãe ocupada com filho"
            loading="lazy"
            style={{
              width: "100%",
              height: "clamp(340px, 45vw, 520px)",
              objectFit: "cover",
              borderRadius: 24,
              display: "block",
            }}
          />
        </div>

        {/* Body text — desktop: left col row 2 / mobile: order 3 */}
        <div className="pain-body">
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "clamp(16px, 1.8vw, 19px)",
              lineHeight: 1.75,
              color: "#1c0f3f",
              margin: "0 0 28px",
              fontWeight: 500,
            }}
          >
            Na correria do dia a dia, muitos pais e educadores querem estimular mais a <strong>alfabetização das crianças</strong>, mas simplesmente não têm <strong>tempo</strong> ou o <strong>material certo</strong> para preparar atividades adequadas.
          </p>

          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "clamp(16px, 1.8vw, 19px)",
              lineHeight: 1.75,
              color: "#1c0f3f",
              margin: "0 0 32px",
              fontWeight: 500,
            }}
          >
            E o <strong>estímulo faz diferença</strong> no desenvolvimento infantil, principalmente porque a criança aprende <strong>no próprio ritmo, sem pressão e se divertindo</strong>.
          </p>

          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "clamp(24px, 3vw, 36px)",
            fontWeight: 900,
            color: "#F77D1A",
            margin: 0,
          }}>
            É aí que nós entramos!
          </p>
        </div>
      </div>
    </section>
  );
}


function Page() {
  React.useEffect(() => {
    // Meta Pixel Code
    window.fbq = window.fbq || function() { (window.fbq.q = window.fbq.q || []).push(arguments) };
    window.fbq('init', '1344729974214857');
    window.fbq('track', 'PageView');

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <StickyUrgencyBar />
      <WhatsAppButton />
      <Hero />
      <PainValidation />
      <KitOverview />
      <Skills />
      <KitCarousel />
      <HowToApply />
      <Testimonials />
      <ProductCard />
      <FAQ />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Page />);
