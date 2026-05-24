"use client";

import { useState } from "react";
import { Users, CheckCircle, Heart, Award, Clock } from "lucide-react";
import { AREAS } from "@/lib/mock-data";

export default function VolunteerPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen">
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #6f0808 0%, #8f0d0d 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            style={{ background: "rgba(111,56,197,0.2)" }}
          >
            <Users size={32} style={{ color: "#c9a8ff" }} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Become a Volunteer</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Join 218+ active volunteers making a direct difference in the constituency.
          </p>
        </div>
      </section>

      {/* Why volunteer */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { Icon: Heart, title: "Make a Difference", desc: "Your efforts directly improve lives in your area.", color: "#b51217", bg: "#ffeaea" },
              { Icon: Award, title: "Recognition", desc: "Top volunteers receive certificates and public recognition.", color: "#d99a0d", bg: "#fff8e0" },
              { Icon: Clock, title: "Flexible Hours", desc: "Choose your availability. Every hour counts.", color: "#6f38c5", bg: "#f0ebff" },
            ].map(({ Icon, title, desc, color, bg }) => (
              <div key={title} className="card p-6 flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ background: bg }}>
                  <Icon size={22} style={{ color }} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{title}</h3>
                  <p className="text-sm" style={{ color: "#5f5f5f" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-14" style={{ background: "#faf7f5" }}>
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-8" style={{ borderTop: "4px solid #6f38c5" }}>
            {submitted ? (
              <div className="flex flex-col items-center text-center py-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ background: "#f0ebff" }}>
                  <CheckCircle size={32} style={{ color: "#6f38c5" }} />
                </div>
                <h3 className="font-black text-xl mb-2">Application Received!</h3>
                <p className="text-sm" style={{ color: "#5f5f5f" }}>
                  Our team will review your application and contact you within 48 hours.
                </p>
              </div>
            ) : (
              <>
                <h2 className="font-black text-xl mb-6">Volunteer Application</h2>
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="form-label">Full Name</label>
                      <input type="text" className="form-input" required placeholder="Your name" />
                    </div>
                    <div>
                      <label className="form-label">Mobile Number</label>
                      <input type="tel" className="form-input" required placeholder="10-digit number" />
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Preferred Area</label>
                    <select className="form-input" required>
                      <option value="">Select area…</option>
                      {AREAS.map((a) => <option key={a}>{a}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="form-label">Skills</label>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {["Social Work", "Technical", "Photography", "Documentation", "Event Management", "Communication"].map((skill) => (
                        <label key={skill} className="flex items-center gap-1.5 cursor-pointer">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">{skill}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Availability</label>
                    <select className="form-input">
                      <option>Weekends only</option>
                      <option>Weekdays only</option>
                      <option>Both weekdays and weekends</option>
                      <option>On-call / as needed</option>
                    </select>
                  </div>

                  <div>
                    <label className="form-label">Why do you want to volunteer?</label>
                    <textarea rows={3} className="form-input resize-none" placeholder="Tell us about yourself…" />
                  </div>

                  <button type="submit" className="w-full py-3 rounded-xl text-sm font-bold hover:opacity-90 transition-all" style={{ background: "#6f38c5", color: "white" }}>
                    Submit Application
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
