"use client";

import { Phone, AlertTriangle, Heart, Shield, Flame, Droplets } from "lucide-react";

const emergencyContacts = [
  { icon: Police, title: "Police", number: "100", color: "#2677d9", bg: "#e8f2ff" },
  { icon: Flame, title: "Fire & Rescue", number: "101", color: "#b51217", bg: "#ffeaea" },
  { icon: Heart, title: "Ambulance", number: "108", color: "#39a852", bg: "#eaf7ee" },
  { icon: AlertTriangle, title: "Disaster Help", number: "1077", color: "#d99a0d", bg: "#fff8e0" },
  { icon: Shield, title: "Women Helpline", number: "181", color: "#6f38c5", bg: "#f0ebff" },
  { icon: Droplets, title: "Water Emergency", number: "044-2450-5678", color: "#2677d9", bg: "#e8f2ff" },
  { icon: Phone, title: "MLA Office", number: "044-2450-1234", color: "#8f0d0d", bg: "#fff0f0" },
  { icon: Phone, title: "Constituency Helpline", number: "1800-XXX-XXXX", color: "#39a852", bg: "#eaf7ee" },
];

function Police(props: React.ComponentProps<typeof Shield>) {
  return <Shield {...props} />;
}

export default function EmergencyHelpPage() {
  return (
    <div className="min-h-screen">
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #6f0808 0%, #8f0d0d 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            style={{ background: "rgba(243,179,22,0.2)" }}
          >
            <AlertTriangle size={32} style={{ color: "#f3b316" }} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Emergency Help</h1>
          <p className="text-white/70 text-lg">
            One-tap access to emergency services. Available 24×7.
          </p>
        </div>
      </section>

      <section className="py-16" style={{ background: "#faf7f5" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {emergencyContacts.map(({ icon: Icon, title, number, color, bg }) => (
              <a
                key={title}
                href={`tel:${number.replace(/\D/g, "")}`}
                className="card p-6 flex items-center gap-4 hover:scale-[1.02] transition-all group"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: bg }}
                >
                  <Icon size={26} style={{ color }} />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-base" style={{ color: "#1d1d1d" }}>{title}</div>
                  <div className="font-black text-2xl mt-0.5" style={{ color }}>{number}</div>
                </div>
                <Phone size={18} style={{ color }} className="group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>

          <div
            className="mt-10 card p-6 text-center"
            style={{ borderTop: "4px solid #8f0d0d" }}
          >
            <h3 className="font-black text-lg mb-2">Need Immediate Assistance?</h3>
            <p className="text-sm mb-4" style={{ color: "#5f5f5f" }}>
              For non-emergency issues, file a complaint and we will respond within 24 hours.
            </p>
            <a
              href="/complaints/new?priority=high"
              className="inline-flex items-center gap-2 btn-primary px-6 py-3 text-sm font-bold rounded-xl hover:opacity-90 transition-all"
            >
              <AlertTriangle size={16} />
              File High-Priority Complaint
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
