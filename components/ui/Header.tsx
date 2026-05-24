"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, AlertCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const servicesDropdown = [
  { href: "/services/complaints", label: "File a Complaint" },
  { href: "/services/emergency-help", label: "Emergency Help" },
  { href: "/services/government-schemes", label: "Government Schemes" },
  { href: "/services/public-polls", label: "Public Polls" },
  { href: "/services/volunteer", label: "Become a Volunteer" },
  { href: "/scan", label: "Scan & Complain" },
];

const navLinks = [
  { href: "/", key: "home", hasDropdown: false },
  { href: "/about", key: "about", hasDropdown: false },
  { href: "/leader", key: "leader", hasDropdown: false },
  { href: "/services", key: "services", hasDropdown: true },
  { href: "/updates", key: "updates", hasDropdown: false },
  { href: "/gallery", key: "gallery", hasDropdown: false },
  { href: "/contact", key: "contact", hasDropdown: false },
] as const;

export default function Header() {
  const pathname = usePathname();
  const { t, lang, setLang } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const isAdmin = pathname.startsWith("/admin");

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="sticky top-0 z-50" style={{ background: "#8f0d0d", boxShadow: "0 2px 12px rgba(80,10,10,0.25)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center h-16 gap-3">

          {/* Logo + Brand */}
          <Link href="/" className="flex items-center gap-3 shrink-0 mr-2">
            {/* Circular party logo */}
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center font-black text-xs border-2 leading-tight text-center"
              style={{ background: "white", color: "#8f0d0d", borderColor: "#f3b316" }}
            >
              <div>
                <div className="text-[10px] font-black leading-none">TVK</div>
                <div style={{ fontSize: 7 }} className="leading-none font-semibold">ECR</div>
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-black text-sm leading-none tracking-wide">
                TVK – SOLLINGANALLUR ECR
              </div>
              <div className="text-xs mt-0.5" style={{ color: "#fde68a" }}>
                People First. Always.
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            {navLinks.map(({ href, key, hasDropdown }) => {
              const active = href === "/" ? pathname === "/" : pathname.startsWith(href);

              if (hasDropdown) {
                return (
                  <div key={href} className="relative" ref={servicesRef}>
                    <button
                      onClick={() => setServicesOpen((p) => !p)}
                      className={cn(
                        "flex items-center gap-1 px-3 py-1.5 text-sm font-medium transition-all rounded-lg",
                        active || servicesOpen
                          ? "text-yellow-300 font-bold"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                      )}
                    >
                      {t(key as Parameters<typeof t>[0])}
                      <ChevronDown
                        size={13}
                        className={cn("transition-transform", servicesOpen && "rotate-180")}
                      />
                    </button>
                    {active && !servicesOpen && (
                      <div className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full" style={{ background: "#f3b316" }} />
                    )}
                    {servicesOpen && (
                      <div
                        className="absolute top-full left-0 mt-2 w-52 rounded-2xl overflow-hidden shadow-xl z-50"
                        style={{ background: "white", border: "1px solid #eadfda" }}
                      >
                        {servicesDropdown.map(({ href: dHref, label }) => (
                          <Link
                            key={dHref}
                            href={dHref}
                            onClick={() => setServicesOpen(false)}
                            className="block px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors font-medium"
                            style={{ color: "#1d1d1d", borderBottom: "1px solid #f5f0ee" }}
                          >
                            {label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <div key={href} className="relative">
                  <Link
                    href={href}
                    className={cn(
                      "px-3 py-1.5 text-sm font-medium transition-all rounded-lg block",
                      active
                        ? "text-yellow-300 font-bold"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {t(key as Parameters<typeof t>[0])}
                  </Link>
                  {active && (
                    <div className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full" style={{ background: "#f3b316" }} />
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2 ml-auto">
            {/* Raise Complaint CTA */}
            {!isAdmin && (
              <Link
                href="/complaints/new"
                className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold transition-all hover:opacity-90"
                style={{ background: "#f3b316", color: "#6f0808" }}
              >
                <AlertCircle size={14} />
                {t("raiseComplaint")}
              </Link>
            )}

            {/* Language toggle */}
            <button
              onClick={() => setLang(lang === "en" ? "ta" : "en")}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-semibold border transition-all hover:bg-white/10"
              style={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}
            >
              {lang === "en" ? "தமிழ்" : "English"}
              <ChevronDown size={13} />
            </button>

            {/* Mobile menu */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-all"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t px-4 py-4 space-y-1"
          style={{ borderColor: "rgba(255,255,255,0.15)", background: "#7a0b0b" }}
        >
          {navLinks.map(({ href, key }) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block px-3 py-2.5 rounded-xl text-sm font-medium transition-all",
                  active ? "font-bold" : "text-white/85 hover:text-white hover:bg-white/10"
                )}
                style={active ? { background: "#f3b316", color: "#6f0808" } : {}}
              >
                {t(key as Parameters<typeof t>[0])}
              </Link>
            );
          })}
          {/* Services dropdown on mobile */}
          <div className="pt-1 ml-3 space-y-1">
            {servicesDropdown.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 text-xs text-white/60 hover:text-white/90 transition-all"
              >
                › {label}
              </Link>
            ))}
          </div>
          <div className="pt-3 flex flex-col gap-2">
            <Link
              href="/complaints/new"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-sm font-bold hover:opacity-90 transition-all"
              style={{ background: "#f3b316", color: "#6f0808" }}
            >
              <AlertCircle size={14} />
              {t("raiseComplaint")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
