"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ClipboardList, User, Phone, MapPin, ListFilter, AlignLeft, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { AREAS, CATEGORIES } from "@/lib/mock-data";
import { generateComplaintId } from "@/lib/utils";

const schema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  mobileNumber: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  area: z.string().min(1, "Please select an area"),
  category: z.string().min(1, "Please select a problem type"),
  description: z.string().min(10, "Please describe the issue (min 10 characters)"),
});

type FormData = z.infer<typeof schema>;

export default function ComplaintFormCompact() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [complaintId, setComplaintId] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 700));
    const id = generateComplaintId();
    setComplaintId(id);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="rounded-2xl overflow-hidden shadow-md h-full" style={{ border: "1px solid #eadfda" }}>
        <div className="px-4 py-3" style={{ background: "#8f0d0d" }}>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center">
              <ClipboardList size={14} color="white" />
            </div>
            <div>
              <div className="text-white font-black text-sm">{t("raiseYourComplaint")}</div>
              <div className="text-white/70 text-xs">{t("quickEasyConfidential")}</div>
            </div>
          </div>
        </div>
        <div className="bg-white px-4 py-6 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ background: "#eaf7ee" }}>
            <CheckCircle size={24} style={{ color: "#39a852" }} />
          </div>
          <h3 className="font-black text-base mb-1">Complaint Submitted!</h3>
          <p className="text-xs mb-3" style={{ color: "#5f5f5f" }}>Use your ID to track status.</p>
          <div className="px-4 py-2 rounded-xl font-black text-lg tracking-widest mb-4" style={{ background: "#eaf7ee", color: "#2d8a41" }}>
            {complaintId}
          </div>
          <button
            onClick={() => setSubmitted(false)}
            className="px-4 py-2 text-xs font-bold rounded-xl hover:opacity-90 transition-all"
            style={{ background: "#8f0d0d", color: "white" }}
          >
            Raise Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl overflow-hidden shadow-md" style={{ border: "1px solid #eadfda" }}>
      {/* Maroon header */}
      <div className="px-4 py-3" style={{ background: "#8f0d0d" }}>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center">
            <ClipboardList size={14} color="white" />
          </div>
          <div>
            <div className="text-white font-black text-sm">{t("raiseYourComplaint")}</div>
            <div className="text-white/70 text-xs">{t("quickEasyConfidential")}</div>
          </div>
        </div>
      </div>

      {/* Form body */}
      <div className="bg-white px-4 py-3">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2.5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div>
              <div className="relative">
                <User size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2" style={{ color: "#aaa" }} />
                <input
                  {...register("fullName")}
                  type="text"
                  placeholder={t("fullName")}
                  className="w-full pl-7 pr-2 py-2 text-xs rounded-lg border outline-none focus:ring-1"
                  style={{ border: "1.5px solid #eadfda", fontSize: 12 }}
                />
              </div>
              {errors.fullName && <p className="text-xs mt-0.5 text-red-600" style={{ fontSize: 10 }}>{errors.fullName.message}</p>}
            </div>
            <div>
              <div className="relative">
                <Phone size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2" style={{ color: "#aaa" }} />
                <input
                  {...register("mobileNumber")}
                  type="tel"
                  placeholder={t("mobileNumber")}
                  className="w-full pl-7 pr-2 py-2 text-xs rounded-lg border outline-none focus:ring-1"
                  style={{ border: "1.5px solid #eadfda", fontSize: 12 }}
                />
              </div>
              {errors.mobileNumber && <p className="text-xs mt-0.5 text-red-600" style={{ fontSize: 10 }}>{errors.mobileNumber.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div>
              <div className="relative">
                <MapPin size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 z-10" style={{ color: "#aaa" }} />
                <select
                  {...register("area")}
                  className="w-full pl-7 pr-2 py-2 text-xs rounded-lg border outline-none focus:ring-1 bg-white"
                  style={{ border: "1.5px solid #eadfda", fontSize: 12 }}
                >
                  <option value="">{t("selectArea")}</option>
                  {AREAS.map((a) => <option key={a} value={a}>{a}</option>)}
                </select>
              </div>
              {errors.area && <p className="text-xs mt-0.5 text-red-600" style={{ fontSize: 10 }}>{errors.area.message}</p>}
            </div>
            <div>
              <div className="relative">
                <ListFilter size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 z-10" style={{ color: "#aaa" }} />
                <select
                  {...register("category")}
                  className="w-full pl-7 pr-2 py-2 text-xs rounded-lg border outline-none focus:ring-1 bg-white"
                  style={{ border: "1.5px solid #eadfda", fontSize: 12 }}
                >
                  <option value="">{t("problemType")}</option>
                  {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              {errors.category && <p className="text-xs mt-0.5 text-red-600" style={{ fontSize: 10 }}>{errors.category.message}</p>}
            </div>
          </div>

          <div>
            <div className="relative">
              <AlignLeft size={12} className="absolute left-2.5 top-2.5 z-10" style={{ color: "#aaa" }} />
              <textarea
                {...register("description")}
                rows={2}
                placeholder={t("issueDescription")}
                className="w-full pl-7 pr-2 py-2 text-xs rounded-lg border outline-none focus:ring-1 resize-none"
                style={{ border: "1.5px solid #eadfda", fontSize: 12 }}
              />
            </div>
            {errors.description && <p className="text-xs mt-0.5 text-red-600" style={{ fontSize: 10 }}>{errors.description.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2.5 text-xs font-black rounded-xl hover:opacity-90 transition-all disabled:opacity-60"
            style={{ background: "#8f0d0d", color: "white" }}
          >
            {isSubmitting ? "Submitting…" : t("submitComplaint")}
          </button>
        </form>
      </div>
    </div>
  );
}
