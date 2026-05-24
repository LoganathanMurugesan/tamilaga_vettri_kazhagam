"use client";

import { useState } from "react";
import { BookOpen, CheckCircle, Search, FileText } from "lucide-react";
import { SCHEMES } from "@/lib/mock-data";

const CATS = ["All", "Housing", "Women Welfare", "Education", "Transport"];

export default function SchemesPage() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = SCHEMES.filter((s) => {
    const matchCat = active === "All" || s.category === active;
    const matchSearch = s.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen">
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #6f0808 0%, #8f0d0d 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Government Schemes</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Discover welfare schemes you qualify for and get help applying.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-white border-b" style={{ borderColor: "#eadfda" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#5f5f5f" }} />
              <input
                type="text"
                placeholder="Search schemes…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="form-input pl-9"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {CATS.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className="px-4 py-2 rounded-full text-sm font-semibold transition-all"
                  style={
                    active === c
                      ? { background: "#8f0d0d", color: "white" }
                      : { background: "#faf7f5", color: "#5f5f5f", border: "1px solid #eadfda" }
                  }
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12" style={{ background: "#faf7f5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((scheme) => (
              <div key={scheme.id} className="card p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ background: "#e8f2ff" }}
                  >
                    <BookOpen size={22} style={{ color: "#2677d9" }} />
                  </div>
                  <div>
                    <div
                      className="text-xs font-bold px-2.5 py-0.5 rounded-full inline-block mb-1"
                      style={{ background: "#f0ebff", color: "#6f38c5" }}
                    >
                      {scheme.category}
                    </div>
                    <h3 className="font-bold text-base" style={{ color: "#1d1d1d" }}>
                      {scheme.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm mb-4" style={{ color: "#5f5f5f" }}>
                  {scheme.description}
                </p>

                <div className="mb-4">
                  <div className="text-xs font-bold mb-2" style={{ color: "#1d1d1d" }}>
                    Eligibility
                  </div>
                  <p className="text-sm" style={{ color: "#5f5f5f" }}>{scheme.eligibility}</p>
                </div>

                <div className="mb-5">
                  <div className="text-xs font-bold mb-2" style={{ color: "#1d1d1d" }}>
                    Required Documents
                  </div>
                  <ul className="space-y-1">
                    {scheme.documents.map((doc) => (
                      <li key={doc} className="flex items-center gap-2 text-sm" style={{ color: "#5f5f5f" }}>
                        <CheckCircle size={12} style={{ color: "#39a852" }} />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold hover:opacity-90 transition-all"
                  style={{ background: "#2677d9", color: "white" }}
                >
                  <FileText size={14} />
                  Request Assistance
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
