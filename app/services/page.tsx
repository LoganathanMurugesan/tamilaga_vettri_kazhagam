"use client";

import Link from "next/link";
import {
  AlertCircle,
  Phone,
  BookOpen,
  BarChart2,
  Users,
  QrCode,
  Mic,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const services = [
  {
    href: "/services/complaints",
    Icon: AlertCircle,
    title: "File a Complaint",
    desc: "Submit, track, and resolve grievances related to roads, water, electricity, drainage, safety, and more.",
    color: "#8f0d0d",
    bg: "#fff0f0",
    cta: "Raise Complaint",
  },
  {
    href: "/services/emergency-help",
    Icon: Phone,
    title: "Emergency Help",
    desc: "One-tap access to emergency contacts for fire, medical, police, and disaster response.",
    color: "#b51217",
    bg: "#ffeaea",
    cta: "Get Help Now",
  },
  {
    href: "/services/government-schemes",
    Icon: BookOpen,
    title: "Government Schemes",
    desc: "Discover welfare schemes you may be eligible for and get assistance with applications.",
    color: "#2677d9",
    bg: "#e8f2ff",
    cta: "Browse Schemes",
  },
  {
    href: "/services/public-polls",
    Icon: BarChart2,
    title: "Public Polls",
    desc: "Participate in constituency-wide polls that shape local governance decisions.",
    color: "#6f38c5",
    bg: "#f0ebff",
    cta: "Vote Now",
  },
  {
    href: "/services/volunteer",
    Icon: Users,
    title: "Become a Volunteer",
    desc: "Join our volunteer network and make a direct impact in your neighbourhood.",
    color: "#6f38c5",
    bg: "#f0ebff",
    cta: "Join Network",
  },
  {
    href: "/scan",
    Icon: QrCode,
    title: "Scan & Complain",
    desc: "Scan QR codes installed across the constituency to instantly file location-specific complaints.",
    color: "#d99a0d",
    bg: "#fff8e0",
    cta: "Scan Now",
  },
  {
    href: "/services/complaints",
    Icon: Mic,
    title: "Voice Complaint",
    desc: "Record and submit your complaint by voice — perfect for low-literacy or accessibility needs.",
    color: "#8f0d0d",
    bg: "#fff0f0",
    cta: "Record Complaint",
  },
  {
    href: "https://wa.me/919876543210",
    Icon: MessageCircle,
    title: "WhatsApp Complaint",
    desc: "Send photos, videos, and descriptions via WhatsApp and receive a complaint ID.",
    color: "#39a852",
    bg: "#eaf7ee",
    cta: "Open WhatsApp",
  },
] as const;

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #6f0808 0%, #8f0d0d 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            {t("services")}
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            All citizen services in one place — accessible, fast, and free.
          </p>
        </div>
      </section>

      <section className="py-16" style={{ background: "#faf7f5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map(({ href, Icon, title, desc, color, bg, cta }) => (
              <Link
                key={title}
                href={href}
                className="card p-6 flex flex-col gap-4 hover:scale-[1.02] transition-all group"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: bg }}
                >
                  <Icon size={26} style={{ color }} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-base mb-1" style={{ color: "#1d1d1d" }}>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#5f5f5f" }}>
                    {desc}
                  </p>
                </div>
                <div
                  className="flex items-center gap-1 text-sm font-bold group-hover:gap-2 transition-all"
                  style={{ color }}
                >
                  {cta} <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
