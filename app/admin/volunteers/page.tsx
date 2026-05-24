"use client";

import { useState } from "react";
import { Users, CheckCircle, XCircle, Clock } from "lucide-react";
import { VOLUNTEERS } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";

export default function AdminVolunteersPage() {
  const [volunteers, setVolunteers] = useState(VOLUNTEERS);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black" style={{ color: "#1d1d1d" }}>Manage Volunteers</h1>
        <p className="text-sm mt-1" style={{ color: "#5f5f5f" }}>
          {volunteers.filter((v) => v.status === "Active").length} active · {volunteers.length} total
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Total", value: volunteers.length, color: "#8f0d0d", bg: "#fff0f0" },
          { label: "Active", value: volunteers.filter((v) => v.status === "Active").length, color: "#39a852", bg: "#eaf7ee" },
          { label: "Avg. Tasks", value: Math.round(volunteers.reduce((a, v) => a + v.completedTasks, 0) / volunteers.length), color: "#6f38c5", bg: "#f0ebff" },
        ].map(({ label, value, color, bg }) => (
          <div key={label} className="bg-white rounded-2xl border p-5 text-center" style={{ borderColor: "#eadfda" }}>
            <div className="font-black text-3xl mb-1" style={{ color }}>{value}</div>
            <div className="text-xs" style={{ color: "#5f5f5f" }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Volunteer list */}
      <div className="bg-white rounded-2xl border overflow-hidden" style={{ borderColor: "#eadfda" }}>
        <table className="w-full text-sm">
          <thead>
            <tr style={{ background: "#faf7f5", borderBottom: "1px solid #eadfda" }}>
              {["Name", "Area", "Skills", "Joined", "Tasks Done", "Status", "Actions"].map((h) => (
                <th key={h} className="px-4 py-3 text-left text-xs font-bold" style={{ color: "#5f5f5f" }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y" style={{ borderColor: "#eadfda" }}>
            {volunteers.map((v) => (
              <tr key={v.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-semibold">{v.name}</td>
                <td className="px-4 py-3 text-xs" style={{ color: "#5f5f5f" }}>{v.area}</td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-1">
                    {v.skills.map((s) => (
                      <span key={s} className="text-xs px-1.5 py-0.5 rounded-full" style={{ background: "#f0ebff", color: "#6f38c5" }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-3 text-xs" style={{ color: "#5f5f5f" }}>{formatDate(v.joinedDate)}</td>
                <td className="px-4 py-3 font-bold" style={{ color: "#8f0d0d" }}>{v.completedTasks}</td>
                <td className="px-4 py-3">
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{ background: v.status === "Active" ? "#eaf7ee" : "#faf7f5", color: v.status === "Active" ? "#2d8a41" : "#5f5f5f" }}
                  >
                    {v.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-1">
                    <button
                      onClick={() => setVolunteers((p) => p.map((x) => x.id === v.id ? { ...x, status: x.status === "Active" ? "Inactive" : "Active" } : x))}
                      className="p-1.5 rounded-lg hover:bg-gray-100 transition-all"
                    >
                      {v.status === "Active"
                        ? <XCircle size={14} style={{ color: "#b51217" }} />
                        : <CheckCircle size={14} style={{ color: "#39a852" }} />
                      }
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
