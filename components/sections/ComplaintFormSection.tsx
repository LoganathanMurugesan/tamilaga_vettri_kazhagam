"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Upload, CheckCircle, ClipboardList, MapPin, User, Phone, AlignLeft, ListFilter } from "lucide-react";
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

export default function ComplaintFormSection() {
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
      <div className="rounded-2xl overflow-hidden shadow-md" style={{ border: "1px solid #eadfda" }}>
        {/* Maroon banner */}
        <div
          className="px-6 py-4"
          style={{ background: "#8f0d0d" }}
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
              <ClipboardList size={18} color="white" />
            </div>
            <div>
              <div className="text-white font-black text-base">{t("raiseYourComplaint")}</div>
              <div className="text-white/70 text-xs">{t("quickEasyConfidential")}</div>
            </div>
          </div>
        </div>
        <div className="bg-white px-6 py-8 flex flex-col items-center text-center">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
            style={{ background: "#eaf7ee" }}
          >
            <CheckCircle size={32} style={{ color: "#39a852" }} />
          </div>
          <h3 className="font-black text-xl mb-2">Complaint Submitted!</h3>
          <p className="text-sm mb-4" style={{ color: "#5f5f5f" }}>
            Use your complaint ID to track status.
          </p>
          <div
            className="px-6 py-3 rounded-xl font-black text-2xl tracking-widest mb-6"
            style={{ background: "#eaf7ee", color: "#2d8a41" }}
          >
            {complaintId}
          </div>
          <button
            onClick={() => setSubmitted(false)}
            className="btn-primary px-6 py-2.5 text-sm font-bold rounded-xl hover:opacity-90 transition-all"
          >
            Raise Another Complaint
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl overflow-hidden shadow-md" style={{ border: "1px solid #eadfda" }}>
      {/* Maroon banner header — matches reference */}
      <div
        className="px-6 py-4"
        style={{ background: "#8f0d0d" }}
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
            <ClipboardList size={18} color="white" />
          </div>
          <div>
            <div className="text-white font-black text-base">{t("raiseYourComplaint")}</div>
            <div className="text-white/70 text-xs">{t("quickEasyConfidential")}</div>
          </div>
        </div>
      </div>

      {/* Form body */}
      <div className="bg-white px-6 py-5">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {/* Full Name */}
            <div>
              <div className="relative">
                <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#aaa" }} />
                <input
                  {...register("fullName")}
                  type="text"
                  placeholder={t("fullName")}
                  className="form-input pl-9"
                />
              </div>
              {errors.fullName && (
                <p className="text-xs mt-1 text-red-600">{errors.fullName.message}</p>
              )}
            </div>

            {/* Mobile */}
            <div>
              <div className="relative">
                <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#aaa" }} />
                <input
                  {...register("mobileNumber")}
                  type="tel"
                  placeholder={t("mobileNumber")}
                  className="form-input pl-9"
                />
              </div>
              {errors.mobileNumber && (
                <p className="text-xs mt-1 text-red-600">{errors.mobileNumber.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {/* Area */}
            <div>
              <div className="relative">
                <MapPin size={14} className="absolute left-3 top-1/2 -translate-y-1/2 z-10" style={{ color: "#aaa" }} />
                <select {...register("area")} className="form-input pl-9">
                  <option value="">{t("selectArea")}</option>
                  {AREAS.map((a) => <option key={a} value={a}>{a}</option>)}
                </select>
              </div>
              {errors.area && (
                <p className="text-xs mt-1 text-red-600">{errors.area.message}</p>
              )}
            </div>

            {/* Category */}
            <div>
              <div className="relative">
                <ListFilter size={14} className="absolute left-3 top-1/2 -translate-y-1/2 z-10" style={{ color: "#aaa" }} />
                <select {...register("category")} className="form-input pl-9">
                  <option value="">{t("problemType")}</option>
                  {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              {errors.category && (
                <p className="text-xs mt-1 text-red-600">{errors.category.message}</p>
              )}
            </div>
          </div>

          {/* Description */}
          <div>
            <div className="relative">
              <AlignLeft size={14} className="absolute left-3 top-3 z-10" style={{ color: "#aaa" }} />
              <textarea
                {...register("description")}
                rows={3}
                placeholder={t("issueDescription")}
                className="form-input pl-9 resize-none"
              />
            </div>
            {errors.description && (
              <p className="text-xs mt-1 text-red-600">{errors.description.message}</p>
            )}
          </div>

          {/* Upload */}
          <div
            className="border border-dashed rounded-xl p-3 flex items-center gap-3 cursor-pointer hover:border-maroon transition-colors"
            style={{ borderColor: "#eadfda" }}
          >
            <Upload size={16} style={{ color: "#aaa" }} />
            <span className="text-sm" style={{ color: "#aaa" }}>
              {t("uploadMedia")} (Optional)
            </span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 text-sm font-black rounded-xl hover:opacity-90 transition-all disabled:opacity-60"
            style={{ background: "#8f0d0d", color: "white" }}
          >
            {isSubmitting ? "Submitting…" : t("submitComplaint")}
          </button>
        </form>
      </div>
    </div>
  );
}
