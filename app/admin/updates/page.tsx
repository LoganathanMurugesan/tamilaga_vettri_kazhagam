"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, MapPin, Clock } from "lucide-react";
import { UPDATES } from "@/lib/mock-data";
import { StatusBadge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

export default function AdminUpdatesPage() {
  const [updates, setUpdates] = useState(UPDATES);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black" style={{ color: "#1d1d1d" }}>Manage Updates</h1>
          <p className="text-sm mt-1" style={{ color: "#5f5f5f" }}>{updates.length} updates published</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 btn-primary px-4 py-2.5 text-sm font-bold rounded-xl"
        >
          <Plus size={16} />
          New Update
        </button>
      </div>

      {/* Create form */}
      {showForm && (
        <div className="bg-white rounded-2xl border p-6 space-y-4" style={{ borderColor: "#eadfda", borderTop: "3px solid #8f0d0d" }}>
          <h3 className="font-bold">New Update</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="form-label">Title</label>
              <input type="text" className="form-input" placeholder="Update title" />
            </div>
            <div>
              <label className="form-label">Area</label>
              <input type="text" className="form-input" placeholder="Locality" />
            </div>
          </div>
          <div>
            <label className="form-label">Description</label>
            <textarea rows={3} className="form-input resize-none" placeholder="What happened?" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="form-label">Status</label>
              <select className="form-input">
                <option>Completed</option>
                <option>In Progress</option>
              </select>
            </div>
            <div>
              <label className="form-label">Date</label>
              <input type="date" className="form-input" />
            </div>
          </div>
          <div className="flex gap-3">
            <button className="btn-primary px-5 py-2 text-sm font-bold rounded-xl">Publish</button>
            <button onClick={() => setShowForm(false)} className="px-5 py-2 text-sm font-semibold rounded-xl" style={{ background: "#faf7f5", color: "#5f5f5f" }}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Updates list */}
      <div className="space-y-3">
        {updates.map((u) => (
          <div key={u.id} className="bg-white rounded-2xl border flex items-center gap-4 p-4" style={{ borderColor: "#eadfda" }}>
            <div className="w-20 h-16 rounded-xl overflow-hidden shrink-0 bg-gray-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={u.image} alt={u.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <StatusBadge status={u.status} />
              </div>
              <div className="font-bold text-sm truncate">{u.title}</div>
              <div className="flex gap-3 text-xs mt-1" style={{ color: "#5f5f5f" }}>
                <span className="flex items-center gap-1"><MapPin size={10} />{u.area}</span>
                <span className="flex items-center gap-1"><Clock size={10} />{formatDate(u.date)}</span>
              </div>
            </div>
            <div className="flex gap-2 shrink-0">
              <button className="p-2 rounded-lg hover:bg-gray-100 transition-all">
                <Edit2 size={15} style={{ color: "#5f5f5f" }} />
              </button>
              <button
                onClick={() => setUpdates((p) => p.filter((x) => x.id !== u.id))}
                className="p-2 rounded-lg hover:bg-red-50 transition-all"
              >
                <Trash2 size={15} style={{ color: "#b51217" }} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
