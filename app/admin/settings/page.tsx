"use client";

import { Settings } from "lucide-react";

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black" style={{ color: "#1d1d1d" }}>Settings</h1>
        <p className="text-sm mt-1" style={{ color: "#5f5f5f" }}>Manage site configuration</p>
      </div>

      <div className="bg-white rounded-2xl border p-6 space-y-6" style={{ borderColor: "#eadfda" }}>
        <div>
          <h3 className="font-bold mb-4">Site Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="form-label">Site Title</label>
              <input type="text" className="form-input" defaultValue="TVK – Shollinganallur ECR" />
            </div>
            <div>
              <label className="form-label">Tagline</label>
              <input type="text" className="form-input" defaultValue="People First. Always." />
            </div>
            <div>
              <label className="form-label">MLA Name</label>
              <input type="text" className="form-input" defaultValue="Vijay" />
            </div>
            <div>
              <label className="form-label">Contact Phone</label>
              <input type="text" className="form-input" defaultValue="044-2450-1234" />
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-4">WhatsApp Integration</h3>
          <div>
            <label className="form-label">WhatsApp Number</label>
            <input type="text" className="form-input" defaultValue="+91 98765 43210" />
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-4">SLA Configuration</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="form-label">Default Resolution SLA (days)</label>
              <input type="number" className="form-input" defaultValue="7" />
            </div>
            <div>
              <label className="form-label">Emergency SLA (hours)</label>
              <input type="number" className="form-input" defaultValue="4" />
            </div>
          </div>
        </div>

        <button className="btn-primary px-6 py-2.5 text-sm font-bold rounded-xl">
          Save Settings
        </button>
      </div>
    </div>
  );
}
