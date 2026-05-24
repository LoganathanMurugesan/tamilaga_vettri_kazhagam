"use client";

import { useState } from "react";
import { Search, Filter, AlertTriangle, ChevronDown } from "lucide-react";
import { COMPLAINTS, AREAS, CATEGORIES } from "@/lib/mock-data";
import { StatusBadge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

export default function AdminComplaintsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [areaFilter, setAreaFilter] = useState("All");
  const [complaints, setComplaints] = useState(COMPLAINTS);

  const filtered = complaints.filter((c) => {
    const matchSearch =
      c.complaintCode.toLowerCase().includes(search.toLowerCase()) ||
      c.citizenName.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "All" || c.status === statusFilter;
    const matchArea = areaFilter === "All" || c.area === areaFilter;
    return matchSearch && matchStatus && matchArea;
  });

  const updateStatus = (id: string, status: string) => {
    setComplaints((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status } : c))
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black" style={{ color: "#1d1d1d" }}>Complaint Inbox</h1>
        <p className="text-sm mt-1" style={{ color: "#5f5f5f" }}>
          {filtered.length} complaints · Manage and update status
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#5f5f5f" }} />
          <input
            type="text"
            placeholder="Search by ID, name, or description…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="form-input pl-9"
          />
        </div>
        <div className="flex gap-2">
          {["All", "Pending", "In Progress", "Resolved"].map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className="px-3 py-2 rounded-lg text-xs font-semibold transition-all"
              style={
                statusFilter === s
                  ? { background: "#8f0d0d", color: "white" }
                  : { background: "white", color: "#5f5f5f", border: "1px solid #eadfda" }
              }
            >
              {s}
            </button>
          ))}
        </div>
        <select
          value={areaFilter}
          onChange={(e) => setAreaFilter(e.target.value)}
          className="form-input w-auto"
          style={{ minWidth: "140px" }}
        >
          <option value="All">All Areas</option>
          {AREAS.map((a) => <option key={a}>{a}</option>)}
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border overflow-hidden" style={{ borderColor: "#eadfda" }}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "#faf7f5", borderBottom: "1px solid #eadfda" }}>
                {["ID", "Name", "Area", "Category", "Description", "Priority", "Status", "Date", "Actions"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-bold" style={{ color: "#5f5f5f" }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y" style={{ borderColor: "#eadfda" }}>
              {filtered.map((c) => (
                <tr key={c.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 font-bold text-xs" style={{ color: "#8f0d0d" }}>
                    {c.complaintCode}
                  </td>
                  <td className="px-4 py-3 font-medium">{c.citizenName}</td>
                  <td className="px-4 py-3 text-xs" style={{ color: "#5f5f5f" }}>{c.area}</td>
                  <td className="px-4 py-3 text-xs" style={{ color: "#5f5f5f" }}>{c.category}</td>
                  <td className="px-4 py-3 max-w-xs">
                    <div className="truncate text-xs" style={{ color: "#1d1d1d" }}>{c.description}</div>
                  </td>
                  <td className="px-4 py-3">
                    {c.priority === "High" ? (
                      <span className="flex items-center gap-1 text-xs font-bold" style={{ color: "#b51217" }}>
                        <AlertTriangle size={11} /> High
                      </span>
                    ) : (
                      <span className="text-xs" style={{ color: "#5f5f5f" }}>{c.priority}</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <StatusBadge status={c.status} />
                  </td>
                  <td className="px-4 py-3 text-xs whitespace-nowrap" style={{ color: "#5f5f5f" }}>
                    {formatDate(c.createdAt)}
                  </td>
                  <td className="px-4 py-3">
                    <select
                      value={c.status}
                      onChange={(e) => updateStatus(c.id, e.target.value)}
                      className="text-xs px-2 py-1.5 rounded-lg border font-medium"
                      style={{ borderColor: "#eadfda" }}
                    >
                      <option>Pending</option>
                      <option>In Progress</option>
                      <option>Resolved</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-400">No complaints found.</div>
        )}
      </div>
    </div>
  );
}
