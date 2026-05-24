"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, MapPin, Clock } from "lucide-react";
import { GALLERY_ITEMS } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";

export default function AdminGalleryPage() {
  const [items, setItems] = useState(GALLERY_ITEMS);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black" style={{ color: "#1d1d1d" }}>Manage Gallery</h1>
          <p className="text-sm mt-1" style={{ color: "#5f5f5f" }}>{items.length} before/after projects</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 btn-primary px-4 py-2.5 text-sm font-bold rounded-xl"
        >
          <Plus size={16} />
          Add Project
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-2xl border p-6 space-y-4" style={{ borderColor: "#eadfda", borderTop: "3px solid #8f0d0d" }}>
          <h3 className="font-bold">New Gallery Project</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="form-label">Project Title</label>
              <input type="text" className="form-input" placeholder="e.g. Road repair at Sholinganallur" />
            </div>
            <div>
              <label className="form-label">Category</label>
              <select className="form-input">
                <option>Roads</option>
                <option>Drainage</option>
                <option>Street Lights</option>
                <option>Water Supply</option>
                <option>Cleanliness</option>
                <option>Other Works</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="form-label">Before Image URL</label>
              <input type="url" className="form-input" placeholder="https://…" />
            </div>
            <div>
              <label className="form-label">After Image URL</label>
              <input type="url" className="form-input" placeholder="https://…" />
            </div>
          </div>
          <div>
            <label className="form-label">Description</label>
            <textarea rows={2} className="form-input resize-none" />
          </div>
          <div className="flex gap-3">
            <button className="btn-primary px-5 py-2 text-sm font-bold rounded-xl">Save Project</button>
            <button onClick={() => setShowForm(false)} className="px-5 py-2 text-sm font-semibold rounded-xl" style={{ background: "#faf7f5", color: "#5f5f5f" }}>
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl border overflow-hidden" style={{ borderColor: "#eadfda" }}>
            <div className="grid grid-cols-2 h-32">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <div className="relative overflow-hidden">
                <img src={item.beforeImage} alt="Before" className="w-full h-full object-cover" />
                <div className="absolute top-1 left-1 text-xs font-bold px-1.5 py-0.5 rounded" style={{ background: "#8f0d0d", color: "white" }}>Before</div>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <div className="relative overflow-hidden">
                <img src={item.afterImage} alt="After" className="w-full h-full object-cover" />
                <div className="absolute top-1 left-1 text-xs font-bold px-1.5 py-0.5 rounded" style={{ background: "#39a852", color: "white" }}>After</div>
              </div>
            </div>
            <div className="p-4 flex items-start justify-between">
              <div className="flex-1 min-w-0">
                <div
                  className="text-xs font-bold inline-block px-2 py-0.5 rounded-full mb-1"
                  style={{ background: "#fff0f0", color: "#8f0d0d" }}
                >
                  {item.category}
                </div>
                <div className="font-bold text-sm truncate">{item.title}</div>
                <div className="flex gap-3 text-xs mt-1" style={{ color: "#5f5f5f" }}>
                  <span className="flex items-center gap-1"><MapPin size={10} />{item.area}</span>
                  <span className="flex items-center gap-1"><Clock size={10} />{formatDate(item.date)}</span>
                </div>
              </div>
              <div className="flex gap-1 shrink-0 ml-2">
                <button className="p-1.5 rounded-lg hover:bg-gray-100">
                  <Edit2 size={13} style={{ color: "#5f5f5f" }} />
                </button>
                <button
                  onClick={() => setItems((p) => p.filter((x) => x.id !== item.id))}
                  className="p-1.5 rounded-lg hover:bg-red-50"
                >
                  <Trash2 size={13} style={{ color: "#b51217" }} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
