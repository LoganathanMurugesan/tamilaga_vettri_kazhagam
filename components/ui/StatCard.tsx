import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string | number;
  icon?: LucideIcon;
  accent?: "maroon" | "green" | "gold" | "purple" | "blue";
  className?: string;
  size?: "sm" | "md" | "lg";
}

const accentMap = {
  maroon: { bg: "#fff0f0", icon: "#8f0d0d", text: "#8f0d0d" },
  green: { bg: "#eaf7ee", icon: "#39a852", text: "#2d8a41" },
  gold: { bg: "#fff8e0", icon: "#d99a0d", text: "#b37f09" },
  purple: { bg: "#f0ebff", icon: "#6f38c5", text: "#5a2da0" },
  blue: { bg: "#e8f2ff", icon: "#2677d9", text: "#1a5db0" },
};

export default function StatCard({
  label,
  value,
  icon: Icon,
  accent = "maroon",
  className,
  size = "md",
}: StatCardProps) {
  const colors = accentMap[accent];

  return (
    <div
      className={cn(
        "card p-5 flex flex-col gap-3",
        size === "sm" && "p-4",
        size === "lg" && "p-6",
        className
      )}
    >
      {Icon && (
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: colors.bg }}
        >
          <Icon size={20} style={{ color: colors.icon }} />
        </div>
      )}
      <div>
        <div
          className={cn(
            "font-black leading-none",
            size === "sm" ? "text-2xl" : size === "lg" ? "text-4xl" : "text-3xl"
          )}
          style={{ color: colors.text }}
        >
          {value}
        </div>
        <div className="text-sm text-muted mt-1" style={{ color: "#5f5f5f" }}>
          {label}
        </div>
      </div>
    </div>
  );
}
