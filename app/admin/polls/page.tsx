"use client";

import { useState } from "react";
import { Plus, BarChart2, Clock, Users, XCircle } from "lucide-react";
import { POLLS } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";

export default function AdminPollsPage() {
  const [polls, setPolls] = useState(POLLS);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black" style={{ color: "#1d1d1d" }}>Manage Polls</h1>
          <p className="text-sm mt-1" style={{ color: "#5f5f5f" }}>{polls.length} active polls</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 btn-primary px-4 py-2.5 text-sm font-bold rounded-xl"
        >
          <Plus size={16} />
          New Poll
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-2xl border p-6 space-y-4" style={{ borderColor: "#eadfda", borderTop: "3px solid #6f38c5" }}>
          <h3 className="font-bold">New Poll</h3>
          <div>
            <label className="form-label">Question</label>
            <input type="text" className="form-input" placeholder="Poll question…" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="form-label">End Date</label>
              <input type="date" className="form-input" />
            </div>
            <div>
              <label className="form-label">Area</label>
              <input type="text" className="form-input" placeholder="All Areas or specific" />
            </div>
          </div>
          <div>
            <label className="form-label">Options (one per line)</label>
            <textarea rows={4} className="form-input resize-none" placeholder="Option 1&#10;Option 2&#10;Option 3&#10;Option 4" />
          </div>
          <div className="flex gap-3">
            <button className="px-5 py-2 text-sm font-bold rounded-xl" style={{ background: "#6f38c5", color: "white" }}>Create Poll</button>
            <button onClick={() => setShowForm(false)} className="px-5 py-2 text-sm font-semibold rounded-xl" style={{ background: "#faf7f5", color: "#5f5f5f" }}>Cancel</button>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {polls.map((poll) => {
          const maxVotes = Math.max(...poll.options.map((o) => o.votes));
          return (
            <div key={poll.id} className="bg-white rounded-2xl border overflow-hidden" style={{ borderColor: "#eadfda", borderLeft: "4px solid #6f38c5" }}>
              <div className="px-6 py-4 border-b flex items-start justify-between" style={{ borderColor: "#eadfda" }}>
                <div>
                  <div className="font-bold text-base mb-1">{poll.title}</div>
                  <div className="flex gap-4 text-xs" style={{ color: "#5f5f5f" }}>
                    <span className="flex items-center gap-1"><Users size={11} />{poll.totalVotes.toLocaleString()} total votes</span>
                    <span className="flex items-center gap-1"><Clock size={11} />Ends {formatDate(poll.endDate)}</span>
                  </div>
                </div>
                <button
                  onClick={() => setPolls((p) => p.filter((x) => x.id !== poll.id))}
                  className="p-1.5 rounded-lg hover:bg-red-50 transition-all"
                >
                  <XCircle size={16} style={{ color: "#b51217" }} />
                </button>
              </div>
              <div className="px-6 py-4 space-y-3">
                {poll.options.map((option) => {
                  const pct = Math.round((option.votes / poll.totalVotes) * 100);
                  return (
                    <div key={option.id}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium" style={{ color: option.votes === maxVotes ? "#6f38c5" : "#1d1d1d" }}>
                          {option.votes === maxVotes && "🏆 "}{option.label}
                        </span>
                        <span className="font-bold" style={{ color: "#6f38c5" }}>{pct}% ({option.votes})</span>
                      </div>
                      <div className="h-2 rounded-full overflow-hidden" style={{ background: "#eadfda" }}>
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${pct}%`, background: option.votes === maxVotes ? "#6f38c5" : "#c9a8ff" }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
