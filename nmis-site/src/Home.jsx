import React from "react";
import SiteHeader from "./SiteHeader.jsx";
import {
  COLORS,
  SUMMIT,
  INVESTORS,
  KEY_THEMES,
  STATS,
  WHO_SHOULD_ATTEND,
  SPONSORSHIP_TIERS,
  CONTACT,
} from "./theme.js";

export default function Home({ onNavigate }) {
  return (
    <div style={{ background: COLORS.forestDeep, fontFamily: "'Inter', sans-serif" }} className="min-h-screen">
      <SiteHeader page="home" onNavigate={onNavigate} />

      {/* HERO */}
      <div className="relative overflow-hidden px-6 pt-12 pb-14 md:px-16">
        <div
          className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-20"
          style={{ background: COLORS.gold, filter: "blur(60px)" }}
        />
        <p className="uppercase tracking-widest text-xs mb-4" style={{ color: COLORS.goldLight, letterSpacing: "0.2em" }}>
          {SUMMIT.dates} · {SUMMIT.venue}
        </p>
        <h1
          style={{ fontFamily: "'Fraunces', serif", color: "#fff", fontSize: "clamp(30px,5vw,50px)", lineHeight: 1.08 }}
          className="max-w-3xl mb-5"
        >
          Nigeria Microfinance Investors' Summit 2026
        </h1>
        <p className="max-w-2xl text-base mb-3" style={{ color: "#cdd8d0" }}>
          "{SUMMIT.theme}"
        </p>
        <p className="max-w-2xl text-sm mb-8" style={{ color: "#9db3a8" }}>
          Organized by {SUMMIT.organizers}
        </p>
        <button
          onClick={() => onNavigate("register")}
          className="rounded-md px-6 py-3 text-sm font-semibold"
          style={{ background: COLORS.gold, color: COLORS.forestDeep }}
        >
          Register for Premium Online Access — ₦100,000
        </button>
      </div>

      {/* STATS */}
      <div className="px-6 md:px-16 pb-14">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {STATS.map(([num, label], i) => (
            <div key={i} className="rounded-xl p-4 text-center" style={{ background: COLORS.forest, border: `1px solid ${COLORS.forestMid}` }}>
              <p style={{ fontFamily: "'Fraunces', serif", color: COLORS.goldLight, fontSize: 26 }}>{num}</p>
              <p className="text-xs mt-1" style={{ color: "#b9c4bc" }}>{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* WHY NOW */}
      <Section title="Why This Summit, Why Now">
        <p className="text-sm mb-3" style={{ color: "#dbe4de" }}>
          Nigeria's microfinance sector is at an inflection point that's structural, not cyclical. With over{" "}
          <strong style={{ color: "#fff" }}>₦5 trillion</strong> in sector assets,{" "}
          <strong style={{ color: "#fff" }}>10,000+ nonbank institutions</strong>, and financial inclusion climbing to{" "}
          <strong style={{ color: "#fff" }}>64%</strong>, the industry is being reshaped at once by recapitalisation
          pressure, digital disruption, tightening CBN regulation, and investor-led M&A.
        </p>
        <p className="text-sm" style={{ color: "#dbe4de" }}>
          This summit exists to bring capital and institutions into the same room while that restructuring is
          actively happening — connecting investors to a pipeline of deals, and MFIs to the capital and readiness
          support they need to survive consolidation.
        </p>
      </Section>

      {/* KEY THEMES */}
      <Section title="Key Themes">
        <div className="grid sm:grid-cols-2 gap-3">
          {KEY_THEMES.map(([theme, sub], i) => (
            <div key={i} className="rounded-lg p-4" style={{ background: COLORS.forest, border: `1px solid ${COLORS.forestMid}` }}>
              <p className="text-sm font-semibold mb-1" style={{ color: COLORS.goldLight }}>{theme}</p>
              <p className="text-xs" style={{ color: "#b9c4bc" }}>{sub}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PRE-SUMMIT */}
      <Section title="Pre-Summit: Investment Readiness Dialogue">
        <p className="text-sm" style={{ color: "#dbe4de" }}>
          A closed, deal-focused session ahead of the main summit — covering governance & compliance, financial
          modelling, investment pitch preparation, risk management, M&A readiness, and impact measurement. This
          pre-qualifies MFIs as genuinely investment-ready before they're put in front of capital.
        </p>
      </Section>

      {/* WHO SHOULD ATTEND */}
      <Section title="Who Should Attend">
        <div className="flex flex-wrap gap-2">
          {WHO_SHOULD_ATTEND.map((w, i) => (
            <span key={i} className="text-xs px-3 py-2 rounded-full" style={{ background: COLORS.forest, color: "#dbe4de", border: `1px solid ${COLORS.forestMid}` }}>
              {w}
            </span>
          ))}
        </div>
      </Section>

      {/* INVESTORS & FUNDERS */}
      <Section title="Confirmed Investors & Funders">
        <p className="text-sm mb-4" style={{ color: "#9db3a8" }}>
          A mix of impact-first funders, commercial private capital, and blended-finance players already confirmed
          for the summit.
        </p>
        <div className="flex flex-wrap gap-2">
          {INVESTORS.map((inv, i) => (
            <span key={i} className="text-xs px-3 py-2 rounded-full font-medium" style={{ background: COLORS.goldLight, color: COLORS.forestDeep }}>
              {inv}
            </span>
          ))}
        </div>
      </Section>

      {/* SPONSORSHIP */}
      <Section title="Sponsorship Packages">
        <div className="overflow-x-auto">
          <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: COLORS.forest }}>
                <th className="text-left p-3" style={{ color: COLORS.goldLight }}>Tier</th>
                <th className="text-left p-3" style={{ color: COLORS.goldLight }}>Cost</th>
                <th className="text-left p-3" style={{ color: COLORS.goldLight }}>Cap</th>
                <th className="text-left p-3" style={{ color: COLORS.goldLight }}>Core benefit</th>
              </tr>
            </thead>
            <tbody>
              {SPONSORSHIP_TIERS.map(([tier, cost, cap, benefit], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "transparent" }}>
                  <td className="p-3 font-semibold" style={{ color: "#fff" }}>{tier}</td>
                  <td className="p-3" style={{ color: "#dbe4de" }}>{cost}</td>
                  <td className="p-3" style={{ color: "#dbe4de" }}>{cap}</td>
                  <td className="p-3" style={{ color: "#b9c4bc" }}>{benefit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* PREMIUM ONLINE CTA */}
      <div className="px-6 md:px-16 pb-14">
        <div
          className="rounded-2xl p-7 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          style={{ background: `linear-gradient(135deg, ${COLORS.forest}, ${COLORS.forestMid})`, border: `1px solid ${COLORS.gold}` }}
        >
          <div>
            <p className="text-xs uppercase tracking-widest mb-2" style={{ color: COLORS.goldLight }}>Can't be in Abuja?</p>
            <p style={{ fontFamily: "'Fraunces', serif", color: "#fff", fontSize: 24 }} className="mb-2">
              Join as a Premium Online Viewer
            </p>
            <p className="text-sm" style={{ color: "#cdd8d0" }}>
              Full 2-day livestream, investment readiness session access, and a 30-day replay. Limited to 40 seats.
            </p>
          </div>
          <button
            onClick={() => onNavigate("register")}
            className="shrink-0 rounded-md px-6 py-3 text-sm font-semibold"
            style={{ background: COLORS.gold, color: COLORS.forestDeep }}
          >
            Register — ₦100,000
          </button>
        </div>
      </div>

      {/* CONTACT */}
      <Section title="Contact">
        <p className="text-sm mb-1" style={{ color: "#dbe4de" }}>{CONTACT.person}</p>
        <p className="text-sm mb-1" style={{ color: "#dbe4de" }}>Phone: {CONTACT.phone}</p>
        <p className="text-sm" style={{ color: "#dbe4de" }}>Email: {CONTACT.emails}</p>
      </Section>

      <footer className="px-6 md:px-16 py-8 text-center">
        <p className="text-xs" style={{ color: "#6c8478" }}>
          Nigeria Microfinance Investors' Summit 2026 · ANMFIN · FIAC · Nigeria Microfinance Platform
        </p>
      </footer>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="px-6 md:px-16 pb-14">
      <h2
        style={{ fontFamily: "'Fraunces', serif", color: "#fff", fontSize: 24 }}
        className="mb-1 pb-3"
      >
        {title}
      </h2>
      <div style={{ borderTop: `1px solid ${COLORS.forestMid}` }} className="pt-5">
        {children}
      </div>
    </div>
  );
}
