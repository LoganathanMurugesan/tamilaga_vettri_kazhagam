"use client";

import {
  FileText,
  Clock,
  Activity,
  Users,
  Eye,
  Handshake,
  TrendingUp,
  Phone,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { METRICS } from "@/lib/mock-data";

const benefits = [
  { key: "easyRegistration", Icon: FileText, color: "#8f0d0d" },
  { key: "fasterResolution", Icon: Clock, color: "#8f0d0d" },
  { key: "realTimeTracking", Icon: Activity, color: "#8f0d0d" },
  { key: "peopleParticipation", Icon: Users, color: "#8f0d0d" },
  { key: "transparentUpdates", Icon: Eye, color: "#8f0d0d" },
  { key: "strongerCommunity", Icon: Handshake, color: "#8f0d0d" },
] as const;

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">

      {/* ─── Main About Section — 3-column matching reference ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* Col 1: Text + Benefits */}
            <div className="lg:col-span-5">
              <h1 className="font-black text-4xl mb-2" style={{ color: "#8f0d0d" }}>
                {t("aboutTitle")}
              </h1>
              <h2 className="font-black text-2xl mb-4" style={{ color: "#1d1d1d" }}>
                {t("aboutSubtitle")}
              </h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#5f5f5f" }}>
                TVK – Sollinganallur ECR is a people-centric platform led by ECR Saravanan MLA, committed to solving people&rsquo;s issues with transparency, speed and responsibility.
              </p>

              {/* 2-col benefits grid */}
              <div className="grid grid-cols-2 gap-3">
                {benefits.map(({ key, Icon, color }) => (
                  <div key={key} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: "#faf7f5" }}>
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "#fff0f0" }}
                    >
                      <Icon size={17} style={{ color }} />
                    </div>
                    <span className="text-xs font-semibold leading-tight" style={{ color: "#1d1d1d" }}>
                      {t(key as Parameters<typeof t>[0])}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Col 2: Leader portrait */}
            <div className="lg:col-span-4 flex justify-center">
              <div
                className="w-full max-w-xs rounded-3xl overflow-hidden flex items-end justify-center"
                style={{
                  height: 400,
                  background: "linear-gradient(180deg, #fde8e8 0%, #f0b0b0 100%)",
                }}
              >
                <div className="text-center pb-8">
                  <div
                    className="w-36 h-36 rounded-full mx-auto mb-4 flex items-center justify-center text-5xl font-black"
                    style={{ background: "#8f0d0d", color: "#f3b316" }}
                  >
                    S
                  </div>
                  <div className="font-black text-lg" style={{ color: "#8f0d0d" }}>ECR Saravanan</div>
                  <div className="text-sm" style={{ color: "#5f5f5f" }}>MLA – Sollinganallur ECR</div>
                </div>
              </div>
            </div>

            {/* Col 3: Quote + Vision */}
            <div className="lg:col-span-3 space-y-5">
              {/* Tamil quote card */}
              <div
                className="rounded-2xl p-5"
                style={{ background: "#faf7f5", border: "1px solid #eadfda" }}
              >
                <div className="text-3xl leading-none mb-3" style={{ color: "#8f0d0d" }}>&ldquo;</div>
                <p className="font-black text-xl leading-snug mb-2" style={{ color: "#8f0d0d" }}>
                  உங்கள் குரல்<br />எங்கள் பொறுப்பு.
                </p>
                <p className="text-sm mb-4" style={{ color: "#5f5f5f" }}>
                  மக்களின் பிரச்சனைகளை கேட்டு,<br />
                  விரைவாக தீர்வு காண்பதே<br />
                  எங்கள் கடமை.
                </p>
                <div className="font-bold text-sm" style={{ color: "#8f0d0d" }}>
                  – ECR SARAVANAN
                </div>
                <div className="text-xs" style={{ color: "#5f5f5f" }}>MLA – Sollinganallur ECR</div>
              </div>

              {/* Vision card */}
              <div
                className="rounded-2xl p-5"
                style={{ background: "#8f0d0d", color: "white" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp size={18} color="#f3b316" />
                  <span className="font-black text-base">Our Vision</span>
                </div>
                <p className="text-sm leading-relaxed text-white/85">
                  To build a better Sollinganallur ECR where every voice is heard, every issue is addressed and every citizen lives with dignity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats strip ─── */}
      <section className="py-8 border-t" style={{ background: "#faf7f5", borderColor: "#eadfda" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { Icon: FileText, label: t("totalComplaints"), value: `${(METRICS.totalComplaints / 1000).toFixed(1)}K+`, color: "#8f0d0d" },
              { Icon: Activity, label: t("resolved"), value: `${(METRICS.resolved / 1000).toFixed(1)}K+`, color: "#39a852" },
              { Icon: TrendingUp, label: t("satisfactionRate"), value: METRICS.satisfactionRate, color: "#d99a0d" },
              { Icon: Users, label: t("activeVolunteers"), value: METRICS.activeVolunteers.toString(), color: "#6f38c5" },
              { Icon: Phone, label: "We are with you", value: "24×7", color: "#2677d9" },
            ].map(({ Icon, label, value, color }) => (
              <div key={label} className="bg-white rounded-2xl p-4 flex items-center gap-3" style={{ border: "1px solid #eadfda" }}>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${color}18` }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <div className="font-black text-xl leading-none" style={{ color }}>
                    {value}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: "#5f5f5f" }}>{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
