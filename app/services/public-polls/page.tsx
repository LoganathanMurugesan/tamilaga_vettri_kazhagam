"use client";

import { useState } from "react";
import { BarChart2, Clock, Users, CheckCircle } from "lucide-react";
import { POLLS } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";

export default function PollsPage() {
  const [votes, setVotes] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState<Record<number, boolean>>({});

  const vote = (pollId: number, optionId: number) => {
    setVotes((p) => ({ ...p, [pollId]: optionId }));
  };

  const submit = (pollId: number) => {
    if (votes[pollId]) setSubmitted((p) => ({ ...p, [pollId]: true }));
  };

  return (
    <div className="min-h-screen">
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #6f0808 0%, #8f0d0d 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Public Polls</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Your opinion shapes decisions. Participate in active constituency polls.
          </p>
        </div>
      </section>

      <section className="py-14" style={{ background: "#faf7f5" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {POLLS.map((poll) => {
            const isSubmitted = submitted[poll.id];
            const selectedOption = votes[poll.id];
            const maxVotes = Math.max(...poll.options.map((o) => o.votes));

            return (
              <div
                key={poll.id}
                className="card overflow-hidden"
                style={{ borderTop: "4px solid #6f38c5" }}
              >
                <div className="p-6 border-b" style={{ borderColor: "#eadfda" }}>
                  <div className="flex items-start gap-3 mb-2">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "#f0ebff" }}
                    >
                      <BarChart2 size={20} style={{ color: "#6f38c5" }} />
                    </div>
                    <h2 className="font-bold text-lg" style={{ color: "#1d1d1d" }}>
                      {poll.title}
                    </h2>
                  </div>
                  <div className="flex gap-4 ml-13">
                    <span className="flex items-center gap-1 text-xs" style={{ color: "#5f5f5f" }}>
                      <Users size={11} />
                      {poll.totalVotes.toLocaleString()} votes
                    </span>
                    <span className="flex items-center gap-1 text-xs" style={{ color: "#5f5f5f" }}>
                      <Clock size={11} />
                      Ends {formatDate(poll.endDate)}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  {poll.options.map((option) => {
                    const pct = Math.round((option.votes / poll.totalVotes) * 100);
                    const isSelected = selectedOption === option.id;

                    return (
                      <div key={option.id}>
                        {isSubmitted ? (
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span
                                className="font-medium flex items-center gap-1"
                                style={{ color: option.votes === maxVotes ? "#6f38c5" : "#1d1d1d" }}
                              >
                                {option.votes === maxVotes && <CheckCircle size={13} />}
                                {option.label}
                              </span>
                              <span className="font-bold" style={{ color: "#6f38c5" }}>
                                {pct}%
                              </span>
                            </div>
                            <div className="h-2 rounded-full overflow-hidden" style={{ background: "#eadfda" }}>
                              <div
                                className="h-full rounded-full transition-all duration-700"
                                style={{
                                  width: `${pct}%`,
                                  background: option.votes === maxVotes ? "#6f38c5" : "#eadfda",
                                }}
                              />
                            </div>
                          </div>
                        ) : (
                          <button
                            onClick={() => vote(poll.id, option.id)}
                            className="w-full text-left p-3 rounded-xl border-2 transition-all text-sm font-medium"
                            style={
                              isSelected
                                ? { borderColor: "#6f38c5", background: "#f0ebff", color: "#6f38c5" }
                                : { borderColor: "#eadfda", background: "white", color: "#1d1d1d" }
                            }
                          >
                            <span className="flex items-center gap-2">
                              <span
                                className="w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0"
                                style={{
                                  borderColor: isSelected ? "#6f38c5" : "#eadfda",
                                  background: isSelected ? "#6f38c5" : "transparent",
                                }}
                              >
                                {isSelected && (
                                  <span className="w-2 h-2 rounded-full bg-white" />
                                )}
                              </span>
                              {option.label}
                            </span>
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>

                {!isSubmitted && (
                  <div className="px-6 pb-6">
                    <button
                      onClick={() => submit(poll.id)}
                      disabled={!votes[poll.id]}
                      className="w-full py-3 rounded-xl text-sm font-bold transition-all disabled:opacity-50"
                      style={{ background: "#6f38c5", color: "white" }}
                    >
                      Submit Vote
                    </button>
                  </div>
                )}

                {isSubmitted && (
                  <div className="px-6 pb-6">
                    <div
                      className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold"
                      style={{ background: "#eaf7ee", color: "#2d8a41" }}
                    >
                      <CheckCircle size={16} />
                      Your vote has been counted!
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
