"use client";

import Link from "next/link";
import { useState } from "react";
import { MapPin, Clock, Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { UPDATES } from "@/lib/mock-data";
import { StatusBadge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

export default function UpdatesPage() {
  const { t } = useLanguage();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filtered = UPDATES.filter((u) => {
    const matchSearch =
      u.title.toLowerCase().includes(search.toLowerCase()) ||
      u.area.toLowerCase().includes(search.toLowerCase());
    const matchFilter =
      filter === "All" ||
      u.status.toLowerCase() === filter.toLowerCase();
    return matchSearch && matchFilter;
  });

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #6f0808 0%, #8f0d0d 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            {t("updates")}
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Stay informed about all ongoing and completed works in your constituency.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-white border-b" style={{ borderColor: "#eadfda" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#5f5f5f" }} />
              <input
                type="text"
                placeholder="Search updates…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="form-input pl-9"
              />
            </div>
            {/* Status filter */}
            <div className="flex gap-2">
              {["All", "Completed", "In Progress"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className="px-4 py-2 rounded-full text-sm font-semibold transition-all"
                  style={
                    filter === f
                      ? { background: "#8f0d0d", color: "white" }
                      : { background: "#faf7f5", color: "#5f5f5f", border: "1px solid #eadfda" }
                  }
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Updates list */}
      <section className="py-12" style={{ background: "#faf7f5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">No updates found.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filtered.map((update) => (
                <Link
                  key={update.id}
                  href={`/updates/${update.slug}`}
                  className="card overflow-hidden flex flex-col sm:flex-row hover:scale-[1.01] transition-all group"
                >
                  <div className="sm:w-48 h-40 sm:h-auto shrink-0 overflow-hidden bg-gray-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={update.image}
                      alt={update.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5 flex flex-col justify-center">
                    <StatusBadge status={update.status} />
                    <h3 className="font-bold text-base mt-2 mb-2 leading-tight" style={{ color: "#1d1d1d" }}>
                      {update.title}
                    </h3>
                    <p className="text-sm mb-3 line-clamp-2" style={{ color: "#5f5f5f" }}>
                      {update.description}
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1 text-xs" style={{ color: "#5f5f5f" }}>
                        <MapPin size={11} />
                        {update.area}
                      </span>
                      <span className="flex items-center gap-1 text-xs" style={{ color: "#5f5f5f" }}>
                        <Clock size={11} />
                        {formatDate(update.date)}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
