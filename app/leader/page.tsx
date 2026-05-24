"use client";

import Link from "next/link";
import { Award, Users, MapPin, Quote, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LeaderPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #6f0808 0%, #8f0d0d 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6"
                style={{ background: "rgba(243,179,22,0.2)", color: "#f3b316", border: "1px solid rgba(243,179,22,0.3)" }}
              >
                {t("leaderConstituency")}
              </div>
              <h1 className="text-5xl font-black text-white mb-2">{t("leaderName")}</h1>
              <p className="text-xl font-medium mb-4" style={{ color: "#fde68a" }}>
                {t("leaderRole")}
              </p>
              <p className="text-white/70 text-base leading-relaxed max-w-lg mb-8">
                Committed to transparent governance, citizen empowerment, and the rapid development of the Shollinganallur constituency through inclusive public service.
              </p>
              <Link
                href="/complaints/new"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold hover:opacity-90 transition-all"
                style={{ background: "#f3b316", color: "#6f0808" }}
              >
                Connect with the Office <ArrowRight size={14} />
              </Link>
            </div>

            {/* Portrait */}
            <div className="flex justify-center">
              <div
                className="relative rounded-3xl p-10 max-w-sm w-full text-center"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div
                  className="w-40 h-40 rounded-full mx-auto flex items-center justify-center text-6xl font-black mb-4"
                  style={{ background: "#f3b316", color: "#8f0d0d" }}
                >
                  V
                </div>
                <div className="text-white font-black text-2xl">{t("leaderName")}</div>
                <div className="text-white/70 text-sm mt-1">MLA, Shollinganallur</div>
                <div className="flex justify-center gap-3 mt-4">
                  <div
                    className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{ background: "rgba(243,179,22,0.2)", color: "#f3b316" }}
                  >
                    {t("leaderConstituency")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote size={40} style={{ color: "#8f0d0d", opacity: 0.3 }} className="mx-auto mb-4" />
          <blockquote className="text-2xl font-black leading-relaxed mb-4" style={{ color: "#1d1d1d" }}>
            &ldquo;{t("leaderQuote")}&rdquo;
          </blockquote>
          <div
            className="inline-block px-4 py-1.5 rounded-full text-sm font-bold"
            style={{ background: "#fff0f0", color: "#8f0d0d" }}
          >
            — {t("leaderName")}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16" style={{ background: "#faf7f5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-heading">Key Achievements</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                title: "4,287+ Complaints Resolved",
                desc: "Over 4,200 citizen grievances addressed within SLA, with a 94% satisfaction rate.",
                color: "#8f0d0d",
                bg: "#fff0f0",
              },
              {
                icon: MapPin,
                title: "ECR Road Widening",
                desc: "Spearheaded the Phase 1 expansion of ECR, benefiting 50,000+ daily commuters.",
                color: "#39a852",
                bg: "#eaf7ee",
              },
              {
                icon: Users,
                title: "218 Active Volunteers",
                desc: "Built a strong volunteer network covering all wards of the constituency.",
                color: "#6f38c5",
                bg: "#f0ebff",
              },
              {
                icon: Award,
                title: "45 New Street Lights",
                desc: "Installed LED street lighting in Semmencheri improving nighttime safety.",
                color: "#d99a0d",
                bg: "#fff8e0",
              },
              {
                icon: Award,
                title: "Water Pipeline Replacement",
                desc: "Replaced 12 km of aging water pipelines in Perungudi serving 1,200 households.",
                color: "#2677d9",
                bg: "#e8f2ff",
              },
              {
                icon: Award,
                title: "Digital Grievance Platform",
                desc: "Launched Tamil Nadu's first constituency-level digital grievance tracking system.",
                color: "#b51217",
                bg: "#ffeaea",
              },
            ].map(({ icon: Icon, title, desc, color, bg }) => (
              <div key={title} className="card p-6 flex gap-4 items-start">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: bg }}
                >
                  <Icon size={22} style={{ color }} />
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1" style={{ color: "#1d1d1d" }}>{title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#5f5f5f" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
