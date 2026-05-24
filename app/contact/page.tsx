"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #6f0808 0%, #8f0d0d 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">{t("contact")}</h1>
          <p className="text-white/70 text-lg">Reach out — we're here to help.</p>
        </div>
      </section>

      <section className="py-16" style={{ background: "#faf7f5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="space-y-6">
              <h2 className="section-heading">Get in Touch</h2>
              <p style={{ color: "#5f5f5f" }}>
                The MLA office is open to all citizens for grievances, inquiries, and service requests.
              </p>

              {[
                {
                  Icon: MapPin,
                  title: "Office Address",
                  detail: "MLA Office, Sholinganallur, Chennai – 600119, Tamil Nadu",
                  color: "#8f0d0d",
                  bg: "#fff0f0",
                },
                {
                  Icon: Phone,
                  title: "Phone",
                  detail: "044-2450-1234 | Helpline: 1800-XXX-XXXX",
                  color: "#39a852",
                  bg: "#eaf7ee",
                },
                {
                  Icon: Mail,
                  title: "Email",
                  detail: "mla@sholinganallur.gov.in",
                  color: "#2677d9",
                  bg: "#e8f2ff",
                },
                {
                  Icon: Clock,
                  title: "Office Hours",
                  detail: "Mon – Sat: 9:00 AM – 6:00 PM | Emergency: 24×7",
                  color: "#d99a0d",
                  bg: "#fff8e0",
                },
                {
                  Icon: MessageCircle,
                  title: "WhatsApp",
                  detail: "+91 98765 43210 (Complaint Channel)",
                  color: "#39a852",
                  bg: "#eaf7ee",
                },
              ].map(({ Icon, title, detail, color, bg }) => (
                <div key={title} className="flex gap-4 items-start">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: bg }}
                  >
                    <Icon size={20} style={{ color }} />
                  </div>
                  <div>
                    <div className="font-bold text-sm" style={{ color: "#1d1d1d" }}>{title}</div>
                    <div className="text-sm mt-0.5" style={{ color: "#5f5f5f" }}>{detail}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact form */}
            <div className="card p-8" style={{ borderTop: "4px solid #8f0d0d" }}>
              {sent ? (
                <div className="flex flex-col items-center text-center py-10">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={{ background: "#eaf7ee" }}
                  >
                    <CheckCircle size={32} style={{ color: "#39a852" }} />
                  </div>
                  <h3 className="font-black text-xl mb-2">Message Sent!</h3>
                  <p className="text-sm" style={{ color: "#5f5f5f" }}>
                    We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 btn-primary px-6 py-2.5 text-sm font-bold rounded-xl"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-black text-xl mb-6">Send a Message</h3>
                  <form
                    onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="form-label">Full Name</label>
                        <input type="text" className="form-input" placeholder="Your name" required />
                      </div>
                      <div>
                        <label className="form-label">Mobile</label>
                        <input type="tel" className="form-input" placeholder="10-digit number" required />
                      </div>
                    </div>
                    <div>
                      <label className="form-label">Email (optional)</label>
                      <input type="email" className="form-input" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="form-label">Subject</label>
                      <input type="text" className="form-input" placeholder="What is this about?" required />
                    </div>
                    <div>
                      <label className="form-label">Message</label>
                      <textarea rows={4} className="form-input resize-none" placeholder="Your message…" required />
                    </div>
                    <button type="submit" className="w-full btn-primary py-3 text-sm font-bold rounded-xl">
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
