import React from "react";
import { COLORS } from "./theme.js";

export default function SiteHeader({ page, onNavigate, transparent }) {
  return (
    <header
      className="sticky top-0 z-30 px-6 md:px-16 py-4 flex items-center justify-between"
      style={{
        background: transparent ? "transparent" : COLORS.forestDeep,
        borderBottom: transparent ? "none" : `1px solid ${COLORS.forestMid}`,
      }}
    >
      <button
        onClick={() => onNavigate("home")}
        className="flex items-center gap-3"
      >
        <img
          src="/anmfin-logo.png"
          alt="ANMFIN logo"
          className="w-10 h-10 rounded-full object-cover"
          style={{ border: `1px solid ${COLORS.gold}` }}
        />
        <div className="text-left">
          <p className="text-xs font-semibold tracking-wide" style={{ color: "#fff" }}>
            NMIS 2026
          </p>
          <p className="text-[10px]" style={{ color: "#9db3a8" }}>
            Organized by ANMFIN
          </p>
        </div>
      </button>

      <nav className="flex items-center gap-2">
        <button
          onClick={() => onNavigate("home")}
          className="text-xs px-3 py-2 rounded-full"
          style={{
            background: page === "home" ? COLORS.gold : "transparent",
            color: page === "home" ? COLORS.forestDeep : "#cdd8d0",
            fontWeight: page === "home" ? 700 : 500,
          }}
        >
          About
        </button>
        <button
          onClick={() => onNavigate("register")}
          className="text-xs px-3 py-2 rounded-full"
          style={{
            background: page === "register" ? COLORS.gold : "transparent",
            color: page === "register" ? COLORS.forestDeep : "#cdd8d0",
            fontWeight: page === "register" ? 700 : 500,
          }}
        >
          Premium Access
        </button>
      </nav>
    </header>
  );
}
