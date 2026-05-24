"use client";

import { useState } from "react";
import { Search, CheckCircle, Clock, MapPin, User, AlertCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { COMPLAINTS } from "@/lib/mock-data";
import { StatusBadge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

export default function TrackComplaintPage() {
  const { t } = useLanguage();
  const [input, setInput] = useState("");
  const [result, setResult] = useState<(typeof COMPLAINTS)[0] | null | "notfound">(null);

  const handleTrack = () => {
    const found = COMPLAINTS.find(
      (c) => c.complaintCode.toLowerCase() === input.toLowerCase()
    );
    setResult(found ?? "notfound");
  };

  const statusSteps = ["Pending", "In Progress", "Resolved"];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #6f0808 0%, #8f0d0d 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            {t("trackYourComplaint")}
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Enter your complaint ID to get a real-time status update.
          </p>
        </div>
      </section>

      <section className="py-14" style={{ background: "#faf7f5" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search */}
          <div className="card p-8 mb-8">
            <label className="form-label text-base mb-3 block">
              {t("enterComplaintId")}
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="e.g. TVK24001"
                className="form-input flex-1 uppercase"
                onKeyDown={(e) => e.key === "Enter" && handleTrack()}
              />
              <button
                onClick={handleTrack}
                className="btn-gold px-6 py-2.5 font-bold rounded-xl text-sm flex items-center gap-2 hover:opacity-90 transition-all"
              >
                <Search size={16} />
                {t("trackNow")}
              </button>
            </div>
            <p className="text-xs mt-3" style={{ color: "#5f5f5f" }}>
              Try: <strong>TVK24001</strong>, <strong>TVK24002</strong>, <strong>TVK24003</strong>
            </p>
          </div>

          {/* Result */}
          {result === "notfound" && (
            <div
              className="card p-8 text-center"
              style={{ borderTop: "4px solid #b51217" }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: "#ffeaea" }}
              >
                <AlertCircle size={28} style={{ color: "#b51217" }} />
              </div>
              <h3 className="font-black text-lg mb-2">Complaint Not Found</h3>
              <p className="text-sm" style={{ color: "#5f5f5f" }}>
                Please check the complaint ID and try again.
              </p>
            </div>
          )}

          {result && result !== "notfound" && (
            <div className="card overflow-hidden" style={{ borderTop: "4px solid #39a852" }}>
              {/* Status header */}
              <div
                className="px-8 py-5 flex items-center justify-between"
                style={{ background: "#eaf7ee" }}
              >
                <div>
                  <div className="text-xs font-semibold mb-1" style={{ color: "#5f5f5f" }}>
                    Complaint ID
                  </div>
                  <div className="font-black text-xl" style={{ color: "#2d8a41" }}>
                    {result.complaintCode}
                  </div>
                </div>
                <StatusBadge status={result.status} />
              </div>

              {/* Progress bar */}
              <div className="px-8 py-6 border-b" style={{ borderColor: "#eadfda" }}>
                <div className="flex items-center">
                  {statusSteps.map((step, i) => {
                    const stepIndex = statusSteps.indexOf(result.status);
                    const done = i <= stepIndex;
                    return (
                      <div key={step} className="flex items-center flex-1">
                        <div className="flex flex-col items-center gap-1 flex-1">
                          <div
                            className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
                            style={{
                              background: done ? "#39a852" : "#eadfda",
                              color: done ? "white" : "#5f5f5f",
                            }}
                          >
                            {done ? <CheckCircle size={16} /> : i + 1}
                          </div>
                          <span className="text-xs font-medium text-center" style={{ color: done ? "#2d8a41" : "#5f5f5f" }}>
                            {step}
                          </span>
                        </div>
                        {i < statusSteps.length - 1 && (
                          <div
                            className="h-1 flex-1 -mt-5 rounded-full"
                            style={{ background: i < stepIndex ? "#39a852" : "#eadfda" }}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Details */}
              <div className="p-8 space-y-4">
                {[
                  { Icon: User, label: "Name", value: result.citizenName },
                  { Icon: MapPin, label: "Area", value: result.area },
                  { Icon: AlertCircle, label: "Category", value: result.category },
                  { Icon: Clock, label: "Submitted", value: formatDate(result.createdAt) },
                  { Icon: Clock, label: "Resolved", value: result.resolvedAt ? formatDate(result.resolvedAt) : "Pending" },
                  { Icon: User, label: "Assigned To", value: result.assignedTo ?? "Unassigned" },
                ].map(({ Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "#fff0f0" }}
                    >
                      <Icon size={14} style={{ color: "#8f0d0d" }} />
                    </div>
                    <div className="flex-1 flex justify-between">
                      <span className="text-sm" style={{ color: "#5f5f5f" }}>{label}</span>
                      <span className="text-sm font-semibold" style={{ color: "#1d1d1d" }}>{value}</span>
                    </div>
                  </div>
                ))}

                <div
                  className="p-4 rounded-xl mt-2"
                  style={{ background: "#faf7f5", border: "1px solid #eadfda" }}
                >
                  <div className="text-xs font-semibold mb-1" style={{ color: "#5f5f5f" }}>Description</div>
                  <p className="text-sm" style={{ color: "#1d1d1d" }}>{result.description}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
