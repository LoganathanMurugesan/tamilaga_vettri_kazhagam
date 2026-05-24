"use client";

import Link from "next/link";
import Image from "next/image";
import {
  AlertCircle, Search, Phone, Users,
  Droplets, Route, Waves, Lightbulb, Trash2, Zap, Shield, HeartPulse,
  CheckCircle, MapPin, ArrowRight, Mic, MessageCircle, BookOpen, BarChart2, QrCode,
  ChevronRight, FileText, Activity, CalendarDays, TimerIcon,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { UPDATES } from "@/lib/mock-data";
import { StatusBadge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import ComplaintFormCompact from "@/components/sections/ComplaintFormCompact";

const issueIcons = [
  { key: "waterSupply",  Icon: Droplets,   color: "#2677d9", bg: "#dceeff" },
  { key: "roads",        Icon: Route,       color: "#8f0d0d", bg: "#ffe8e8" },
  { key: "drainage",     Icon: Waves,       color: "#6f38c5", bg: "#ede5ff" },
  { key: "streetLights", Icon: Lightbulb,   color: "#c78b00", bg: "#fff3cc" },
  { key: "garbage",      Icon: Trash2,      color: "#2d8a41", bg: "#d8f5e0" },
  { key: "ebIssues",     Icon: Zap,         color: "#b87000", bg: "#fff0d0" },
  { key: "womenSafety",  Icon: Shield,      color: "#b51217", bg: "#ffe0e0" },
  { key: "medicalHelp",  Icon: HeartPulse,  color: "#b51217", bg: "#ffe8e8" },
] as const;

const metricCards = [
  { label: "Total Complaints", value: "2,458",    Icon: FileText,    color: "#8f0d0d" },
  { label: "Resolved",         value: "1,879",    Icon: CheckCircle, color: "#2d8a41" },
  { label: "In Progress",      value: "458",      Icon: Activity,    color: "#c78b00" },
  { label: "Today's Reports",  value: "32",       Icon: CalendarDays,color: "#2677d9" },
  { label: "Avg. Resolution",  value: "2.4 Days", Icon: TimerIcon,   color: "#6f38c5" },
] as const;

const shortcuts = [
  { label: "Voice\nComplaint",    Icon: Mic,           color: "#8f0d0d", bg: "#fff0f0", href: "/services/complaints"          },
  { label: "WhatsApp\nComplaint", Icon: MessageCircle, color: "#2d8a41", bg: "#d8f5e0", href: "https://wa.me/919876543210"   },
  { label: "Govt.\nSchemes",      Icon: BookOpen,      color: "#2677d9", bg: "#dceeff", href: "/services/government-schemes" },
  { label: "Public\nPolls",       Icon: BarChart2,     color: "#6f38c5", bg: "#ede5ff", href: "/services/public-polls"       },
  { label: "Become\nVolunteer",   Icon: Users,         color: "#c78b00", bg: "#fff3cc", href: "/volunteer/join"              },
  { label: "Scan &\nComplain",    Icon: QrCode,        color: "#b51217", bg: "#ffe0e0", href: "/scan"                        },
] as const;

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="bg-white">

      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #fdf3ee 0%, #fef8f3 50%, #fdf0e8 100%)",
        }}
      >
        {/* Subtle dot grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#8f0d0d 1.2px, transparent 1.2px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Warm glow behind image — desktop only */}
        <div
          className="absolute hidden lg:block pointer-events-none"
          style={{
            top: "10%", left: "28%", width: "42%", height: "90%",
            background: "radial-gradient(ellipse at 50% 80%, rgba(243,179,22,0.13) 0%, rgba(143,13,13,0.07) 45%, transparent 70%)",
          }}
        />

        {/* ── Left deco panel (2xl+ only) ── */}
        <div
          className="absolute left-0 top-0 bottom-0 hidden 2xl:flex flex-col items-center justify-center gap-5 pointer-events-none z-0"
          style={{ width: "calc((100% - 1536px) / 2)" }}
        >
          <div
            className="flex flex-col items-center justify-center font-black rounded-full select-none"
            style={{ width: 96, height: 96, border: "2.5px solid rgba(143,13,13,0.10)", color: "rgba(143,13,13,0.09)" }}
          >
            <div style={{ fontSize: 20, lineHeight: 1 }}>TVK</div>
            <div style={{ fontSize: 7, letterSpacing: 2, marginTop: 3 }}>SHOLLINGANALLUR</div>
          </div>
          <div className="rounded-full" style={{ width: 1, height: 48, background: "rgba(243,179,22,0.30)" }} />
          <div className="flex flex-col gap-1.5 items-center">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="flex gap-1.5">
                {Array.from({ length: 3 }).map((_, j) => (
                  <div key={j} className="w-1 h-1 rounded-full" style={{ background: "rgba(143,13,13,0.10)" }} />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ── Right deco panel (2xl+ only) ── */}
        <div
          className="absolute right-0 top-0 bottom-0 hidden 2xl:flex flex-col items-center justify-center gap-5 pointer-events-none z-0"
          style={{ width: "calc((100% - 1536px) / 2)" }}
        >
          <div className="rounded-full" style={{ width: 1, height: 48, background: "rgba(243,179,22,0.30)" }} />
          <div
            className="select-none"
            style={{
              writingMode: "vertical-rl", transform: "rotate(180deg)",
              fontSize: 10, fontWeight: 900, letterSpacing: "0.30em",
              color: "rgba(143,13,13,0.14)", textTransform: "uppercase", whiteSpace: "nowrap",
            }}
          >
            TVK · Shollinganallur ECR · People First · Always
          </div>
          <div className="flex flex-col gap-1.5 items-center">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="flex gap-1.5">
                {Array.from({ length: 3 }).map((_, j) => (
                  <div key={j} className="w-1 h-1 rounded-full" style={{ background: "rgba(143,13,13,0.10)" }} />
                ))}
              </div>
            ))}
          </div>
          <div className="rounded-full" style={{ width: 1, height: 48, background: "rgba(243,179,22,0.30)" }} />
        </div>

        {/* ── Hero content grid ── */}
        <div className="relative max-w-screen-2xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="grid grid-cols-12 items-stretch" style={{ minHeight: "54vh" }}>

            {/* Col A — Headline + Image (mobile) + Buttons */}
            <div className="col-span-12 lg:col-span-4 flex flex-col justify-center py-8 lg:py-0 lg:pr-6 z-10">

              {/* Live-status pill */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4 w-fit"
                style={{ background: "#fff0f0", color: "#8f0d0d", border: "1px solid #f5c6c6" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Shollinganallur ECR Constituency
              </div>

              {/* Split-colour headline */}
              <h1 className="font-black leading-[1.05] tracking-tight mb-2">
                <span className="block" style={{ fontSize: "clamp(2.4rem, 6vw, 3.6rem)", color: "#1a1a1a" }}>
                  Ungal Kural.
                </span>
                <span className="block" style={{ fontSize: "clamp(2.4rem, 6vw, 3.6rem)", color: "#8f0d0d" }}>
                  Engal Poruppu.
                </span>
              </h1>

              {/* ── Mobile-only hero image (desktop image lives in Col B) ── */}
              <div className="block lg:hidden relative w-full rounded-2xl overflow-hidden my-3"
                style={{ height: 260, background: "#faeae0" }}>
                <Image
                  src="/hero.jpg"
                  alt="ECR Saravanan – MLA Shollinganallur TVK"
                  fill
                  className="object-contain object-center"
                  priority
                  sizes="100vw"
                />
              </div>

              {/* Gold accent rule */}
              <div className="w-14 h-1 rounded-full mb-3" style={{ background: "#f3b316" }} />

              <p className="text-sm leading-relaxed mb-5" style={{ color: "#6b6b6b", maxWidth: 320 }}>
                Your Voice. Our Responsibility. Together we build a better
                Shollinganallur ECR — complaint by complaint.
              </p>

              {/* 2 × 2 action grid */}
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { label: "Raise Complaint", sub: "Report an issue",  href: "/complaints/new",          Icon: AlertCircle, bg: "#8f0d0d", fg: "white"    },
                  { label: "Track Status",    sub: "Check complaint",  href: "/complaints/track",        Icon: Search,      bg: "#f3b316", fg: "#1d1d1d"  },
                  { label: "Emergency Help",  sub: "Quick assistance", href: "/services/emergency-help", Icon: Phone,       bg: "#2d8a41", fg: "white"    },
                  { label: "Join Us",         sub: "Become volunteer", href: "/volunteer/join",          Icon: Users,       bg: "#6f38c5", fg: "white"    },
                ].map(({ label, sub, href, Icon, bg, fg }) => (
                  <Link
                    key={href}
                    href={href}
                    className="flex items-center gap-2.5 px-3 py-3 rounded-2xl font-bold hover:opacity-90 hover:scale-[1.02] transition-all shadow-sm"
                    style={{ background: bg, color: fg }}
                  >
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "rgba(255,255,255,0.22)" }}>
                      <Icon size={14} />
                    </div>
                    <div>
                      <div className="text-xs font-black leading-none">{label}</div>
                      <div className="text-[10px] opacity-75 mt-0.5 font-normal">{sub}</div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* ── Mobile leader strip (replaces full card hidden on mobile) ── */}
              <div
                className="flex items-center gap-3 mt-4 p-3 rounded-2xl lg:hidden"
                style={{ background: "#fff8f0", border: "1.5px solid #f0e4db" }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[9px] font-black shrink-0"
                  style={{ background: "#8f0d0d", color: "#f3b316" }}
                >
                  TVK
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-black text-sm leading-tight" style={{ color: "#8f0d0d" }}>
                    ECR Saravanan
                  </div>
                  <div className="text-xs" style={{ color: "#888" }}>MLA – Shollinganallur ECR</div>
                </div>
                <div className="text-[10px] font-bold text-right" style={{ color: "#8f0d0d" }}>
                  People First.<br />Always.
                </div>
              </div>
            </div>

            {/* Col B — Politician photo (desktop only) */}
            <div className="hidden lg:flex col-span-5 items-end justify-center relative">
              <div className="relative w-full flex items-end justify-center" style={{ height: "60vh", maxHeight: 540 }}>
                <Image
                  src="/hero.jpg"
                  alt="ECR Saravanan – MLA Shollinganallur TVK"
                  fill
                  className="object-contain object-bottom drop-shadow-xl"
                  priority
                  sizes="40vw"
                />
              </div>
            </div>

            {/* Col C — Leader card (desktop only) */}
            <div className="hidden lg:flex col-span-3 flex-col justify-center lg:pl-4 z-10">
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: "1.5px solid #e8d9d0", boxShadow: "0 8px 28px rgba(143,13,13,0.10)" }}
              >
                <div className="px-5 py-4"
                  style={{ background: "linear-gradient(135deg, #8f0d0d 0%, #a81515 100%)" }}>
                  <div className="font-black text-base leading-tight text-white tracking-wide">ECR SARAVANAN</div>
                  <div className="text-xs mt-0.5 text-white/70 font-medium">MLA – Shollinganallur ECR</div>
                  <div className="w-10 h-0.5 rounded-full mt-2" style={{ background: "#f3b316" }} />
                </div>
                <div className="px-5 py-4" style={{ background: "#fffbf8" }}>
                  <div className="text-3xl font-black leading-none mb-2" style={{ color: "#f3b316" }}>&ldquo;</div>
                  <p className="text-sm leading-relaxed font-semibold" style={{ color: "#2a2a2a" }}>
                    உங்கள் நம்பிக்கை,<br />
                    எனக்கு பொறுப்பு.<br />
                    உங்கள் வளர்ச்சி,<br />
                    என்னுடைய கடமை.
                  </p>
                  <div className="text-right text-2xl font-black leading-none mt-2" style={{ color: "#f3b316" }}>&rdquo;</div>
                </div>
                <div className="px-5 py-3 flex items-center gap-2"
                  style={{ background: "#fff8f0", borderTop: "1px solid #f0e4db" }}>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-black shrink-0"
                    style={{ background: "#8f0d0d", color: "#f3b316" }}>
                    TVK
                  </div>
                  <span className="text-xs font-bold" style={{ color: "#8f0d0d" }}>Tamilaga Vettri Kazhagam</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          METRICS STRIP — maroon, 2-col on mobile / 5-col on desktop
          gap-px trick: grid background shows through as dividers
      ══════════════════════════════════════════════ */}
      <section style={{ background: "#8f0d0d" }}>
        <div className="max-w-screen-2xl mx-auto">
          <div
            className="grid grid-cols-2 sm:grid-cols-5 gap-px"
            style={{ background: "rgba(255,255,255,0.10)" }}
          >
            {metricCards.map(({ label, value, Icon }, i) => (
              <div
                key={label}
                className={`flex items-center gap-3 px-4 py-4 sm:px-5 ${
                  i === 4 ? "col-span-2 sm:col-span-1" : ""
                }`}
                style={{ background: "#8f0d0d" }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(255,255,255,0.12)" }}
                >
                  <Icon size={17} color="white" />
                </div>
                <div>
                  <div className="font-black text-lg leading-none text-white">{value}</div>
                  <div className="text-[11px] mt-0.5" style={{ color: "#fde68a" }}>{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          MAIN CONTENT — form + issues + track/map
      ══════════════════════════════════════════════ */}
      <section className="py-6 sm:py-7" style={{ background: "#faf7f5" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

            {/* Complaint form */}
            <div className="lg:col-span-4">
              <ComplaintFormCompact />
            </div>

            {/* Issues + Track + Map */}
            <div className="lg:col-span-8 flex flex-col gap-4">

              {/* Common Issues panel */}
              <div className="bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid #e8ddd8" }}>
                <div className="flex items-center justify-between px-4 sm:px-5 py-3"
                  style={{ borderBottom: "1px solid #f0e8e3" }}>
                  <div>
                    <span className="font-black text-sm" style={{ color: "#8f0d0d" }}>{t("commonIssues")}</span>
                    <span className="hidden sm:inline text-xs ml-2" style={{ color: "#aaa" }}>
                      Tap to raise a complaint instantly
                    </span>
                  </div>
                  <Link href="/complaints/new" className="text-xs font-bold flex items-center gap-0.5 hover:underline"
                    style={{ color: "#8f0d0d" }}>
                    View All <ChevronRight size={11} />
                  </Link>
                </div>
                {/* 4 cols on mobile → 8 cols on sm+ */}
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-0 p-2 sm:p-3">
                  {issueIcons.map(({ key, Icon, color, bg }) => (
                    <Link
                      key={key}
                      href={`/complaints/new?category=${key}`}
                      className="flex flex-col items-center gap-1 sm:gap-1.5 py-3 px-1 rounded-xl hover:scale-105 transition-all mx-0.5"
                      style={{ background: bg }}
                    >
                      <Icon size={20} style={{ color }} />
                      <span className="text-[8px] sm:text-[9px] font-bold text-center leading-tight" style={{ color }}>
                        {t(key as Parameters<typeof t>[0])}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Track + Map — stacked on mobile, side-by-side on sm+ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* Track Complaint */}
                <div className="bg-white rounded-2xl p-4" style={{ border: "1px solid #e8ddd8" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "#fff0f0" }}>
                      <Search size={14} style={{ color: "#8f0d0d" }} />
                    </div>
                    <div>
                      <div className="font-black text-sm leading-none" style={{ color: "#8f0d0d" }}>
                        {t("trackYourComplaint")}
                      </div>
                      <div className="text-[10px] mt-0.5" style={{ color: "#aaa" }}>
                        Enter your complaint ID below
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 mb-4">
                    <input
                      type="text"
                      placeholder="e.g. TVK-20240001"
                      className="flex-1 text-xs rounded-lg px-3 py-2 outline-none"
                      style={{ border: "1.5px solid #e8ddd8", fontSize: 12 }}
                    />
                    <Link
                      href="/complaints/track"
                      className="px-3 py-2 rounded-lg text-xs font-bold whitespace-nowrap hover:opacity-90 transition-all"
                      style={{ background: "#8f0d0d", color: "white" }}
                    >
                      Track
                    </Link>
                  </div>
                  {/* Progress steps */}
                  <div className="flex items-center gap-1">
                    {[
                      { emoji: "📋", label: "Received",    active: true  },
                      { emoji: "⚙️",  label: "In Progress", active: true  },
                      { emoji: "✅", label: "Resolved",    active: false },
                    ].map(({ emoji, label, active }, i) => (
                      <div key={label} className="flex items-center flex-1">
                        <div className="flex flex-col items-center flex-1">
                          <div
                            className="w-9 h-9 rounded-xl flex items-center justify-center text-sm"
                            style={{
                              background: active ? "#fff8e0" : "#f5f5f5",
                              border: `1.5px solid ${active ? "#f3b316" : "#e8e8e8"}`,
                            }}
                          >
                            {emoji}
                          </div>
                          <span className="text-[9px] font-semibold mt-1"
                            style={{ color: active ? "#1a1a1a" : "#c0c0c0" }}>
                            {label}
                          </span>
                        </div>
                        {i < 2 && (
                          <div className="flex gap-0.5 -mt-4 mx-0.5">
                            {[0, 1, 2, 3].map((d) => (
                              <div key={d} className="w-1 h-0.5 rounded-full" style={{ background: "#e0d8d4" }} />
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Area Map */}
                <div className="bg-white rounded-2xl p-4" style={{ border: "1px solid #e8ddd8" }}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: "#fff0f0" }}>
                        <MapPin size={14} style={{ color: "#8f0d0d" }} />
                      </div>
                      <div>
                        <div className="font-black text-sm leading-none" style={{ color: "#8f0d0d" }}>
                          Area Wise Status
                        </div>
                        <div className="text-[10px] mt-0.5" style={{ color: "#aaa" }}>
                          Issues &amp; resolutions by locality
                        </div>
                      </div>
                    </div>
                    <Link href="/map" className="text-[10px] font-bold hover:underline" style={{ color: "#8f0d0d" }}>
                      Full Map →
                    </Link>
                  </div>
                  <div className="rounded-xl relative overflow-hidden"
                    style={{ height: 118, background: "linear-gradient(145deg, #c3d9ed 0%, #b4c8d9 40%, #c0d4ba 100%)" }}>
                    {[
                      { name: "Perungudi",      top: "14%", left: "13%", red: false },
                      { name: "Sholinganallur", top: "38%", left: "44%", red: true  },
                      { name: "Karapakkam",     top: "15%", left: "70%", red: false },
                      { name: "Semmencheri",    top: "64%", left: "20%", red: true  },
                      { name: "ECR Zone",       top: "62%", left: "62%", red: false },
                    ].map(({ name, top, left, red }) => (
                      <div key={name} className="absolute flex flex-col items-center" style={{ top, left }}>
                        <div
                          className="px-1.5 py-0.5 rounded text-[8px] font-black text-white shadow-sm whitespace-nowrap"
                          style={{ background: red ? "#8f0d0d" : "#1a6b2a" }}
                        >
                          {name}
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full mt-0.5"
                          style={{ background: red ? "#8f0d0d" : "#39a852" }} />
                      </div>
                    ))}
                    <div className="absolute bottom-2 right-2 bg-white/90 rounded-lg px-2 py-1.5 backdrop-blur-sm"
                      style={{ border: "1px solid rgba(255,255,255,0.8)" }}>
                      <div className="flex items-center gap-1 text-[8px] mb-0.5">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#8f0d0d" }} />
                        <span style={{ color: "#555" }}>Pending</span>
                      </div>
                      <div className="flex items-center gap-1 text-[8px]">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#39a852" }} />
                        <span style={{ color: "#555" }}>Resolved</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          QUICK SERVICES — 3 cols mobile / 6 cols desktop
      ══════════════════════════════════════════════ */}
      <section className="py-6 bg-white" style={{ borderTop: "1px solid #f0e8e3" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-5 rounded-full" style={{ background: "#8f0d0d" }} />
            <h2 className="font-black text-sm tracking-wide" style={{ color: "#8f0d0d" }}>QUICK SERVICES</h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
            {shortcuts.map(({ label, Icon, color, bg, href }) => (
              <Link
                key={href}
                href={href}
                className="flex flex-col items-center gap-1.5 sm:gap-2 py-3 sm:py-4 px-1 sm:px-2 rounded-2xl hover:scale-[1.04] hover:shadow-md transition-all text-center"
                style={{ background: bg }}
              >
                <div
                  className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.7)" }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <span className="text-[9px] sm:text-[10px] font-bold leading-tight whitespace-pre-line" style={{ color }}>
                  {label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          RECENT UPDATES — 2 cols mobile / 4 cols desktop
      ══════════════════════════════════════════════ */}
      <section className="py-7 sm:py-8" style={{ background: "#faf7f5", borderTop: "1px solid #f0e8e3" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between mb-4 sm:mb-5">
            <div className="flex items-center gap-2">
              <div className="w-1 h-6 rounded-full" style={{ background: "#8f0d0d" }} />
              <div>
                <h2 className="font-black text-base sm:text-lg leading-tight" style={{ color: "#8f0d0d" }}>
                  {t("recentUpdates")}
                </h2>
                <p className="text-xs" style={{ color: "#888" }}>
                  What&rsquo;s happening across Shollinganallur ECR
                </p>
              </div>
            </div>
            <Link
              href="/updates"
              className="flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-lg hover:opacity-80 transition-all"
              style={{ background: "#fff0f0", color: "#8f0d0d" }}
            >
              View All <ArrowRight size={12} />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {UPDATES.map((update) => (
              <Link
                key={update.id}
                href={`/updates/${update.slug}`}
                className="bg-white rounded-2xl overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all group"
                style={{ border: "1px solid #e8ddd8" }}
              >
                <div className="h-24 sm:h-28 overflow-hidden bg-gray-100 relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={update.image}
                    alt={update.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <StatusBadge status={update.status} />
                  </div>
                </div>
                <div className="p-2.5 sm:p-3">
                  <h3 className="font-bold text-xs mb-1 sm:mb-1.5 leading-tight line-clamp-2" style={{ color: "#1a1a1a" }}>
                    {update.title}
                  </h3>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[10px]" style={{ color: "#888" }}>
                    <span className="flex items-center gap-0.5">
                      <MapPin size={9} style={{ color: "#8f0d0d" }} />
                      {update.area}
                    </span>
                    <span>·</span>
                    <span>{formatDate(update.date)}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
