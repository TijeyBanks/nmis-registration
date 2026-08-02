import React, { useState } from "react";
import SiteHeader from "./SiteHeader.jsx";
import { COLORS, ORGANIZER_WHATSAPP, BANK_DETAILS } from "./theme.js";

const BENEFITS = [
  "Live full-access stream — both days, 3rd–4th August 2026",
  "Real-time access to Investment Readiness Dialogue sessions",
  "Digital delegate pack: speaker decks, investor directory, summit briefing",
  "Priority Q&A submission to panel sessions",
  "Post-summit recording access for 30 days",
  "Certificate of virtual participation",
];

const CODE_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

function genRef() {
  let s = "";
  for (let i = 0; i < 6; i++) s += CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)];
  return s;
}

function waLink(message) {
  return "https://wa.me/" + ORGANIZER_WHATSAPP + "?text=" + encodeURIComponent(message);
}

export default function Registration({ onNavigate }) {
  const [step, setStep] = useState("form"); // form | payment | done
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    role: "",
    country: "Nigeria",
  });
  const [errors, setErrors] = useState({});
  const [refCode, setRefCode] = useState("");
  const [copied, setCopied] = useState(false);

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Enter your full name";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.phone.trim()) e.phone = "Enter a phone number";
    if (!form.organization.trim()) e.organization = "Enter your organization";
    if (!form.role.trim()) e.role = "Enter your role or title";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleRegister() {
    if (!validate()) return;
    const ref = genRef();
    setRefCode(ref);
    setStep("payment");
  }

  function handlePaymentMade() {
    const msg =
      "PREMIUM VIEWER — PAYMENT MADE — NMIS 2026, " +
      "Reference: " + refCode + ", " +
      "Name: " + form.name + ", " +
      "Email: " + form.email + ", " +
      "Phone: " + form.phone + ", " +
      "Organization: " + form.organization + ", " +
      "Role: " + form.role + ", " +
      "Country: " + form.country + ", " +
      "Status: Payment made — please verify and send access link";
    window.open(waLink(msg), "_blank");
    setStep("done");
  }

  function copyAccount() {
    const text = `${BANK_DETAILS.bank}\n${BANK_DETAILS.accountName}\n${BANK_DETAILS.accountNumber}`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  const inputStyle = { background: "#ffffff", border: "1px solid #d8d0ba", color: COLORS.ink };

  return (
    <div style={{ background: COLORS.forestDeep, fontFamily: "'Inter', sans-serif" }} className="min-h-screen">
      <SiteHeader page="register" onNavigate={onNavigate} />

      {/* HERO */}
      <div className="relative overflow-hidden px-6 pt-10 pb-10 md:px-16">
        <div
          className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-20"
          style={{ background: COLORS.gold, filter: "blur(60px)" }}
        />
        <p className="uppercase tracking-widest text-xs mb-4" style={{ color: COLORS.goldLight, letterSpacing: "0.2em" }}>
          Nigeria Microfinance Investors' Summit 2026 · Virtual Access
        </p>
        <h1
          style={{ fontFamily: "'Fraunces', serif", color: "#fff", fontSize: "clamp(28px,4.5vw,44px)", lineHeight: 1.08 }}
          className="max-w-2xl mb-4"
        >
          Watch the room where Nigeria's <span style={{ color: COLORS.goldLight }}>₦5 trillion</span> microfinance
          sector gets restructured.
        </h1>
        <p className="max-w-xl text-base mb-8" style={{ color: "#cdd8d0" }}>
          Chelsea Hotel, Abuja · 3rd–4th August 2026. Limited to 40 premium online seats.
        </p>

        <div
          className="relative max-w-md rounded-xl p-6"
          style={{ background: `linear-gradient(135deg, ${COLORS.forest}, ${COLORS.forestMid})`, border: `1px solid ${COLORS.gold}` }}
        >
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-xs uppercase tracking-widest" style={{ color: COLORS.goldLight }}>Online Viewer Pass</p>
              <p style={{ fontFamily: "'Fraunces', serif", color: "#fff", fontSize: 22 }}>Premium</p>
            </div>
            <div className="text-xs px-2 py-1 rounded-full uppercase tracking-wide" style={{ background: COLORS.gold, color: COLORS.forestDeep, fontWeight: 700 }}>
              40 seats only
            </div>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs" style={{ color: "#b9c4bc" }}>Per person</p>
              <p style={{ fontFamily: "'Fraunces', serif", color: COLORS.goldLight, fontSize: 34 }}>₦100,000</p>
            </div>
            <p className="text-xs text-right" style={{ color: "#b9c4bc" }}>2 days · live stream<br />+ 30-day replay</p>
          </div>
        </div>
      </div>

      {/* BENEFITS */}
      <div className="px-6 md:px-16 pb-10">
        <p className="text-xs uppercase tracking-widest mb-4" style={{ color: COLORS.goldLight, letterSpacing: "0.15em" }}>
          What's included
        </p>
        <div className="grid sm:grid-cols-2 gap-3 max-w-3xl">
          {BENEFITS.map((b, i) => (
            <div key={i} className="flex gap-3 items-start">
              <span style={{ color: COLORS.gold }} className="mt-0.5">●</span>
              <p className="text-sm" style={{ color: "#dbe4de" }}>{b}</p>
            </div>
          ))}
        </div>
      </div>

      {/* MAIN PANEL */}
      <div className="px-6 md:px-16 pb-16">
        <div className="max-w-2xl rounded-2xl p-7" style={{ background: COLORS.cream }}>

          {step === "form" && (
            <>
              <h2 style={{ fontFamily: "'Fraunces', serif", color: COLORS.forest, fontSize: 22 }} className="mb-1">
                Reserve your premium access
              </h2>
              <p className="text-sm mb-6" style={{ color: COLORS.grey }}>
                Fill in your details, then continue to payment. Nothing is sent yet.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full name" error={errors.name}>
                  <input style={inputStyle} className="w-full rounded-md px-3 py-2 text-sm outline-none" value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Jane Adeyemi" />
                </Field>
                <Field label="Email address" error={errors.email}>
                  <input style={inputStyle} className="w-full rounded-md px-3 py-2 text-sm outline-none" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="jane@company.com" />
                </Field>
                <Field label="Phone number (WhatsApp)" error={errors.phone}>
                  <input style={inputStyle} className="w-full rounded-md px-3 py-2 text-sm outline-none" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="0803 000 0000" />
                </Field>
                <Field label="Country">
                  <input style={inputStyle} className="w-full rounded-md px-3 py-2 text-sm outline-none" value={form.country} onChange={(e) => update("country", e.target.value)} />
                </Field>
                <Field label="Organization" error={errors.organization}>
                  <input style={inputStyle} className="w-full rounded-md px-3 py-2 text-sm outline-none" value={form.organization} onChange={(e) => update("organization", e.target.value)} placeholder="Company / institution" />
                </Field>
                <Field label="Role / title" error={errors.role}>
                  <input style={inputStyle} className="w-full rounded-md px-3 py-2 text-sm outline-none" value={form.role} onChange={(e) => update("role", e.target.value)} placeholder="Investment Analyst" />
                </Field>
              </div>

              <button onClick={handleRegister} className="w-full mt-6 rounded-md py-3 text-sm font-semibold" style={{ background: COLORS.forest, color: COLORS.goldLight }}>
                Continue to payment — ₦100,000
              </button>
              <p className="text-xs mt-3" style={{ color: COLORS.grey }}>
                Next, you'll see the account to pay into. WhatsApp only opens once, after you confirm payment.
              </p>
            </>
          )}

          {step === "payment" && (
            <>
              <h2 style={{ fontFamily: "'Fraunces', serif", color: COLORS.forest, fontSize: 22 }} className="mb-1">
                Complete your payment
              </h2>
              <p className="text-sm mb-5" style={{ color: COLORS.grey }}>
                Your reference code is <span style={{ color: COLORS.forest, fontWeight: 700 }}>{refCode}</span>.
                Pay ₦100,000 to the account below, then come back and tap the button underneath.
              </p>

              <div className="rounded-lg p-4 mb-5" style={{ background: COLORS.forest }}>
                <p style={{ color: COLORS.goldLight, fontWeight: 600 }} className="mb-2">Payment details</p>
                <p style={{ color: "#eee" }}>Bank: {BANK_DETAILS.bank}</p>
                <p style={{ color: "#eee" }}>Account name: {BANK_DETAILS.accountName}</p>
                <p style={{ color: "#eee" }}>Account number: {BANK_DETAILS.accountNumber}</p>
                <p style={{ color: "#eee" }}>Amount: ₦100,000</p>
                <button
                  onClick={copyAccount}
                  className="mt-3 text-xs px-3 py-1.5 rounded-full"
                  style={{ background: COLORS.gold, color: COLORS.forestDeep, fontWeight: 600 }}
                >
                  {copied ? "Copied ✓" : "Copy account details"}
                </button>
              </div>

              <button onClick={handlePaymentMade} className="w-full rounded-md py-3 text-sm font-semibold" style={{ background: COLORS.gold, color: COLORS.forestDeep }}>
                I've made payment
              </button>
              <p className="text-xs mt-3" style={{ color: COLORS.grey }}>
                This opens WhatsApp once, with all your details and reference code pre-filled — just tap send.
                Once verified, your access link will be sent to you directly on WhatsApp.
              </p>
            </>
          )}

          {step === "done" && (
            <div className="text-center py-4">
              <div className="mx-auto mb-4 w-14 h-14 rounded-full flex items-center justify-center" style={{ background: COLORS.forest }}>
                <span style={{ color: COLORS.goldLight, fontSize: 26 }}>✓</span>
              </div>
              <h2 style={{ fontFamily: "'Fraunces', serif", color: COLORS.forest, fontSize: 22 }} className="mb-2">
                Almost there
              </h2>
              <p className="text-sm mb-1" style={{ color: COLORS.grey }}>
                Reference code: <span style={{ color: COLORS.forest, fontWeight: 700 }}>{refCode}</span>
              </p>
              <p className="text-sm mb-5" style={{ color: COLORS.grey }}>
                Once we confirm your payment, your access link will be sent to{" "}
                <span style={{ color: COLORS.ink, fontWeight: 600 }}>{form.phone}</span> on WhatsApp.
              </p>
              <button
                onClick={() => {
                  setStep("form");
                  setForm({ name: "", email: "", phone: "", organization: "", role: "", country: "Nigeria" });
                }}
                className="text-sm underline"
                style={{ color: COLORS.forest }}
              >
                Register another viewer
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="text-xs font-medium block mb-1" style={{ color: "#3f3b30" }}>{label}</span>
      {children}
      {error && <span className="text-xs block mt-1" style={{ color: "#b3453d" }}>{error}</span>}
    </label>
  );
}
