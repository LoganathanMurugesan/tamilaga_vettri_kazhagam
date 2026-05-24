"use client";

import { QrCode, MapPin, AlertCircle } from "lucide-react";
import Link from "next/link";
import { AREAS } from "@/lib/mock-data";

export default function ScanPage() {
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
            <QrCode size={32} style={{ color: "#f3b316" }} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Scan & Complain</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            QR codes are installed across the constituency. Scan one to file a pre-filled location complaint instantly.
          </p>
        </div>
      </section>

      <section className="py-14" style={{ background: "#faf7f5" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* QR scan demo */}
          <div className="card p-8 text-center mb-8">
            <div
              className="w-48 h-48 rounded-2xl mx-auto mb-6 flex items-center justify-center"
              style={{ background: "#1d1d1d" }}
            >
              <QrCode size={120} color="white" />
            </div>
            <h3 className="font-black text-xl mb-2">Scan the QR Code</h3>
            <p className="text-sm mb-6" style={{ color: "#5f5f5f" }}>
              Use your phone camera to scan any QR code installed at a public location. It will auto-fill the area and redirect you to the complaint form.
            </p>
            <Link
              href="/complaints/new"
              className="inline-flex items-center gap-2 btn-primary px-6 py-3 rounded-xl text-sm font-bold hover:opacity-90 transition-all"
            >
              <AlertCircle size={16} />
              File Complaint Manually Instead
            </Link>
          </div>

          {/* QR locations */}
          <h3 className="font-bold text-lg mb-4">QR Code Locations</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {AREAS.map((area) => (
              <div key={area} className="card p-4 flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: "#fff0f0" }}
                >
                  <MapPin size={16} style={{ color: "#8f0d0d" }} />
                </div>
                <div>
                  <div className="font-semibold text-sm">{area}</div>
                  <div className="text-xs" style={{ color: "#5f5f5f" }}>QR installed at main junction</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
