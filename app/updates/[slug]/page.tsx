"use client";

import Link from "next/link";
import { use } from "react";
import { ArrowLeft, MapPin, Clock } from "lucide-react";
import { UPDATES } from "@/lib/mock-data";
import { StatusBadge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

export default function UpdateDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const update = UPDATES.find((u) => u.slug === slug) ?? UPDATES[0];

  return (
    <div className="min-h-screen py-12" style={{ background: "#faf7f5" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/updates"
          className="inline-flex items-center gap-2 text-sm font-semibold mb-8 hover:underline"
          style={{ color: "#8f0d0d" }}
        >
          <ArrowLeft size={14} />
          Back to Updates
        </Link>

        <div className="card overflow-hidden">
          <div className="h-64 overflow-hidden bg-gray-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={update.image} alt={update.title} className="w-full h-full object-cover" />
          </div>

          <div className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <StatusBadge status={update.status} />
              <span className="flex items-center gap-1 text-xs" style={{ color: "#5f5f5f" }}>
                <MapPin size={11} /> {update.area}
              </span>
              <span className="flex items-center gap-1 text-xs" style={{ color: "#5f5f5f" }}>
                <Clock size={11} /> {formatDate(update.date)}
              </span>
            </div>

            <h1 className="text-3xl font-black mb-4" style={{ color: "#1d1d1d" }}>
              {update.title}
            </h1>

            <p className="text-base leading-relaxed" style={{ color: "#5f5f5f" }}>
              {update.description}
            </p>

            <p className="text-base leading-relaxed mt-4" style={{ color: "#5f5f5f" }}>
              This project is part of our ongoing commitment to improving infrastructure and quality of life for all residents of the Shollinganallur constituency. Regular progress updates are published on this page and communicated directly to affected residents via SMS and WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
