"use client";

import { MapPin, TrendingUp, AlertCircle, CheckCircle } from "lucide-react";
import { MAP_AREAS } from "@/lib/mock-data";

export default function MapPage() {
  return (
    <div className="min-h-screen">
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #6f0808 0%, #8f0d0d 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Area-wise Status Map</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            See complaint density and resolution status for every locality in the constituency.
          </p>
        </div>
      </section>

      <section className="py-14" style={{ background: "#faf7f5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Map placeholder */}
          <div
            className="card p-6 mb-8 flex items-center justify-center"
            style={{ height: "400px", background: "#e8f2ff" }}
          >
            <div className="text-center">
              <MapPin size={48} style={{ color: "#8f0d0d", opacity: 0.4 }} className="mx-auto mb-3" />
              <div className="text-lg font-bold" style={{ color: "#5f5f5f" }}>
                Interactive Map
              </div>
              <p className="text-sm mt-1" style={{ color: "#aaa" }}>
                Sholinganallur Constituency – Complaint Heatmap
              </p>
              <div className="flex gap-4 justify-center mt-4">
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="w-3 h-3 rounded-full" style={{ background: "#39a852" }} />
                  Low issues
                </div>
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="w-3 h-3 rounded-full" style={{ background: "#f3b316" }} />
                  Medium issues
                </div>
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="w-3 h-3 rounded-full" style={{ background: "#b51217" }} />
                  High issues
                </div>
              </div>
            </div>
          </div>

          {/* Area list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {MAP_AREAS.map((area) => {
              const resolvedPct = Math.round((area.resolved / area.complaints) * 100);
              const pending = area.complaints - area.resolved;

              return (
                <div key={area.id} className="card p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin size={16} style={{ color: "#8f0d0d" }} />
                    <h3 className="font-bold">{area.name}</h3>
                  </div>

                  <div className="flex gap-3 mb-4">
                    <div className="flex-1 text-center rounded-xl py-2" style={{ background: "#fff0f0" }}>
                      <div className="font-black text-xl" style={{ color: "#8f0d0d" }}>{area.complaints}</div>
                      <div className="text-xs" style={{ color: "#5f5f5f" }}>Total</div>
                    </div>
                    <div className="flex-1 text-center rounded-xl py-2" style={{ background: "#eaf7ee" }}>
                      <div className="font-black text-xl" style={{ color: "#39a852" }}>{area.resolved}</div>
                      <div className="text-xs" style={{ color: "#5f5f5f" }}>Resolved</div>
                    </div>
                    <div className="flex-1 text-center rounded-xl py-2" style={{ background: "#fff8e0" }}>
                      <div className="font-black text-xl" style={{ color: "#d99a0d" }}>{pending}</div>
                      <div className="text-xs" style={{ color: "#5f5f5f" }}>Pending</div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span style={{ color: "#5f5f5f" }}>Resolution rate</span>
                      <span className="font-bold" style={{ color: resolvedPct > 80 ? "#39a852" : "#d99a0d" }}>
                        {resolvedPct}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden" style={{ background: "#eadfda" }}>
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${resolvedPct}%`,
                          background: resolvedPct > 80 ? "#39a852" : "#f3b316",
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
