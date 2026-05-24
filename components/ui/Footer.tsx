"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Share2, MessageCircle, Camera, Play } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer style={{ background: "#1a0505", color: "white" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-black text-lg"
                style={{ background: "#f3b316", color: "#8f0d0d" }}
              >
                TVK
              </div>
              <div>
                <div className="font-bold text-base leading-tight">TVK – Shollinganallur ECR</div>
                <div className="text-xs mt-0.5" style={{ color: "#fde68a" }}>
                  {t("tagline")}
                </div>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Serving the citizens of Shollinganallur constituency with transparency, speed, and dedication.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-4" style={{ color: "#f3b316" }}>
              {t("quickLinks")}
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/about", label: t("about") },
                { href: "/leader", label: t("leader") },
                { href: "/services", label: t("services") },
                { href: "/updates", label: t("updates") },
                { href: "/gallery", label: t("gallery") },
                { href: "/contact", label: t("contact") },
                { href: "/complaints/new", label: t("raiseComplaint") },
                { href: "/complaints/track", label: t("trackComplaint") },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-4" style={{ color: "#f3b316" }}>
              Services
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/services/emergency-help", label: "Emergency Help" },
                { href: "/services/government-schemes", label: "Government Schemes" },
                { href: "/services/public-polls", label: "Public Polls" },
                { href: "/services/volunteer", label: "Volunteer" },
                { href: "/map", label: "Area Map" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-4" style={{ color: "#f3b316" }}>
              {t("contact")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/60">
                <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: "#f3b316" }} />
                MLA Office, Sholinganallur, Chennai – 600119
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/60">
                <Phone size={14} style={{ color: "#f3b316" }} />
                044-2450-1234
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/60">
                <Mail size={14} style={{ color: "#f3b316" }} />
                mla@sholinganallur.gov.in
              </li>
            </ul>
            <div className="flex gap-3 mt-5">
              {[
                { icon: Share2, href: "#" },
                { icon: MessageCircle, href: "#" },
                { icon: Camera, href: "#" },
                { icon: Play, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.1)", color: "white" }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.4)" }}
        >
          <span>{t("rights")}</span>
          <Link href="/admin" className="hover:text-white/70 transition-colors">
            Admin Login
          </Link>
        </div>
      </div>
    </footer>
  );
}
