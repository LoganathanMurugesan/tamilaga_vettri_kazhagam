import ComplaintFormSection from "@/components/sections/ComplaintFormSection";
import Link from "next/link";
import { Search } from "lucide-react";

export default function ServiceComplaintsPage() {
  return (
    <div className="min-h-screen">
      <section
        className="py-14"
        style={{ background: "linear-gradient(135deg, #6f0808 0%, #8f0d0d 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-3">Citizen Complaints</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Submit a new complaint or track an existing one.
          </p>
        </div>
      </section>

      <section className="py-14" style={{ background: "#faf7f5" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ComplaintFormSection />
            </div>
            <div>
              <div className="card p-6" style={{ borderTop: "4px solid #f3b316" }}>
                <h3 className="font-bold text-base mb-4">Already have a complaint?</h3>
                <p className="text-sm mb-4" style={{ color: "#5f5f5f" }}>
                  Enter your complaint ID to check the latest status and updates.
                </p>
                <input type="text" className="form-input mb-3" placeholder="e.g. TVK24001" />
                <Link
                  href="/complaints/track"
                  className="w-full flex items-center justify-center gap-2 btn-gold py-2.5 rounded-xl text-sm font-bold hover:opacity-90 transition-all"
                >
                  <Search size={15} />
                  Track Complaint
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
