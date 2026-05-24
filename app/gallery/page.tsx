"use client";

import { useState } from "react";
import { MapPin, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { GALLERY_ITEMS } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";

const CATEGORIES = ["All", "Roads", "Drainage", "Street Lights", "Water Supply", "Cleanliness", "Other Works"];

export default function GalleryPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");
  const [page, setPage] = useState(0);

  const filtered =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((g) => g.category === activeCategory);

  const ITEMS_PER_PAGE = 4;
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const pageItems = filtered.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-white">
      {/* ─── Page Title ─── */}
      <section className="py-16 text-center" style={{ background: "#faf7f5" }}>
        <h1 className="font-black text-4xl sm:text-5xl mb-2" style={{ color: "#8f0d0d" }}>
          {t("galleryTitle")}
        </h1>
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-2 mt-3">
          <div className="h-0.5 w-12 rounded-full" style={{ background: "#8f0d0d" }} />
          <div className="w-2 h-2 rounded-full" style={{ background: "#f3b316" }} />
          <div className="h-0.5 w-12 rounded-full" style={{ background: "#8f0d0d" }} />
        </div>
        <p className="mt-4 text-base" style={{ color: "#5f5f5f" }}>
          Visual proof of every completed project — see the transformation for yourself.
        </p>
      </section>

      {/* ─── Category Tabs ─── */}
      <section className="py-4 bg-white border-y" style={{ borderColor: "#eadfda" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setPage(0); }}
                className="shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all"
                style={
                  activeCategory === cat
                    ? { background: "#8f0d0d", color: "white" }
                    : { background: "white", color: "#5f5f5f", border: "1.5px solid #eadfda" }
                }
              >
                {cat === "All" ? t("all")
                  : cat === "Cleanliness" ? t("cleanliness")
                  : cat === "Other Works" ? t("otherWorks")
                  : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Gallery Grid (carousel row) ─── */}
      <section className="py-12" style={{ background: "#faf7f5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation arrows */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm font-medium" style={{ color: "#5f5f5f" }}>
              Showing {pageItems.length} of {filtered.length} projects
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all disabled:opacity-30"
                style={{ border: "1.5px solid #eadfda", background: "white" }}
              >
                <ChevronLeft size={16} style={{ color: "#8f0d0d" }} />
              </button>
              <button
                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={page >= totalPages - 1}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all disabled:opacity-30"
                style={{ border: "1.5px solid #eadfda", background: "white" }}
              >
                <ChevronRight size={16} style={{ color: "#8f0d0d" }} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {pageItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden hover:scale-[1.01] transition-all"
                style={{ border: "1px solid #eadfda", boxShadow: "0 4px 16px rgba(80,30,20,0.07)" }}
              >
                {/* Split before/after image row — matches reference */}
                <div className="grid grid-cols-2 h-44">
                  {/* Before */}
                  <div className="relative overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.beforeImage}
                      alt={`Before – ${item.title}`}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className="absolute top-2 left-2 px-2 py-0.5 rounded text-xs font-black"
                      style={{ background: "#8f0d0d", color: "white" }}
                    >
                      {t("before").toUpperCase()}
                    </div>
                  </div>
                  {/* After */}
                  <div className="relative overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.afterImage}
                      alt={`After – ${item.title}`}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className="absolute top-2 left-2 px-2 py-0.5 rounded text-xs font-black"
                      style={{ background: "#39a852", color: "white" }}
                    >
                      {t("after").toUpperCase()}
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-bold text-sm mb-1 leading-tight" style={{ color: "#1d1d1d" }}>
                    {item.title}
                  </h3>
                  <p className="text-xs mb-3 line-clamp-2" style={{ color: "#5f5f5f" }}>
                    {item.description}
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-xs" style={{ color: "#5f5f5f" }}>
                      <MapPin size={10} style={{ color: "#8f0d0d" }} />
                      {item.area}
                    </span>
                    <span className="flex items-center gap-1 text-xs" style={{ color: "#5f5f5f" }}>
                      <Clock size={10} />
                      {formatDate(item.date)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <button className="px-8 py-3 rounded-xl text-sm font-black hover:opacity-90 transition-all" style={{ background: "#8f0d0d", color: "white" }}>
              {t("viewAllWorks")}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
