import ComplaintFormSection from "@/components/sections/ComplaintFormSection";

export default function NewComplaintPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section
        className="py-14"
        style={{ background: "linear-gradient(135deg, #6f0808 0%, #8f0d0d 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-3">
            Raise a Complaint
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Your complaint will be reviewed within 24 hours and assigned to the relevant team.
          </p>
        </div>
      </section>

      <section className="py-14" style={{ background: "#faf7f5" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <ComplaintFormSection />
        </div>
      </section>
    </div>
  );
}
