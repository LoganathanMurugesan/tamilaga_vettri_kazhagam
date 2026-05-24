"use client";

import Link from "next/link";
import {
  MessageSquare,
  CheckCircle,
  Clock,
  TrendingUp,
  AlertTriangle,
  Users,
  Activity,
  ArrowRight,
} from "lucide-react";
import { COMPLAINTS, METRICS } from "@/lib/mock-data";
import { StatusBadge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

export default function AdminDashboard() {
  const recentComplaints = COMPLAINTS.slice(0, 5);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-black" style={{ color: "#1d1d1d" }}>
          Dashboard
        </h1>
        <p className="text-sm mt-1" style={{ color: "#5f5f5f" }}>
          TVK – Shollinganallur ECR · Admin Overview
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Complaints", value: METRICS.totalComplaints.toLocaleString(), Icon: MessageSquare, color: "#8f0d0d", bg: "#fff0f0" },
          { label: "Resolved", value: METRICS.resolved.toLocaleString(), Icon: CheckCircle, color: "#39a852", bg: "#eaf7ee" },
          { label: "In Progress", value: METRICS.inProgress, Icon: Clock, color: "#d99a0d", bg: "#fff8e0" },
          { label: "Today", value: METRICS.todaysComplaints, Icon: TrendingUp, color: "#2677d9", bg: "#e8f2ff" },
        ].map(({ label, value, Icon, color, bg }) => (
          <div key={label} className="bg-white rounded-2xl p-5 border" style={{ borderColor: "#eadfda" }}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium" style={{ color: "#5f5f5f" }}>{label}</span>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: bg }}>
                <Icon size={18} style={{ color }} />
              </div>
            </div>
            <div className="font-black text-3xl" style={{ color }}>{value}</div>
          </div>
        ))}
      </div>

      {/* Second stats row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: "Avg. Resolution Time", value: METRICS.avgResolutionDays, Icon: Activity, color: "#6f38c5", bg: "#f0ebff" },
          { label: "Satisfaction Rate", value: METRICS.satisfactionRate, Icon: TrendingUp, color: "#39a852", bg: "#eaf7ee" },
          { label: "Active Volunteers", value: METRICS.activeVolunteers, Icon: Users, color: "#2677d9", bg: "#e8f2ff" },
        ].map(({ label, value, Icon, color, bg }) => (
          <div key={label} className="bg-white rounded-2xl p-5 border" style={{ borderColor: "#eadfda" }}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium" style={{ color: "#5f5f5f" }}>{label}</span>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: bg }}>
                <Icon size={18} style={{ color }} />
              </div>
            </div>
            <div className="font-black text-2xl" style={{ color }}>{value}</div>
          </div>
        ))}
      </div>

      {/* Recent complaints */}
      <div className="bg-white rounded-2xl border" style={{ borderColor: "#eadfda" }}>
        <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: "#eadfda" }}>
          <h2 className="font-bold text-base">Recent Complaints</h2>
          <Link
            href="/admin/complaints"
            className="text-sm font-semibold flex items-center gap-1 hover:underline"
            style={{ color: "#8f0d0d" }}
          >
            View All <ArrowRight size={13} />
          </Link>
        </div>
        <div className="divide-y" style={{ borderColor: "#eadfda" }}>
          {recentComplaints.map((c) => (
            <div key={c.id} className="px-6 py-4 flex items-center gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-bold text-sm" style={{ color: "#8f0d0d" }}>
                    {c.complaintCode}
                  </span>
                  <StatusBadge status={c.status} />
                  {c.priority === "High" && (
                    <span className="flex items-center gap-0.5 text-xs font-bold" style={{ color: "#b51217" }}>
                      <AlertTriangle size={10} /> High
                    </span>
                  )}
                </div>
                <div className="text-sm truncate" style={{ color: "#1d1d1d" }}>
                  {c.description}
                </div>
                <div className="flex gap-3 mt-1 text-xs" style={{ color: "#5f5f5f" }}>
                  <span>{c.area}</span>
                  <span>·</span>
                  <span>{c.category}</span>
                  <span>·</span>
                  <span>{formatDate(c.createdAt)}</span>
                </div>
              </div>
              <Link
                href={`/admin/complaints`}
                className="px-3 py-1.5 rounded-lg text-xs font-bold hover:opacity-80 transition-all whitespace-nowrap"
                style={{ background: "#fff0f0", color: "#8f0d0d" }}
              >
                View
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
