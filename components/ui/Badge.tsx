import { cn } from "@/lib/utils";

type BadgeVariant = "resolved" | "progress" | "pending" | "emergency" | "info";

const variants: Record<BadgeVariant, string> = {
  resolved: "badge-resolved",
  progress: "badge-progress",
  pending: "badge-pending",
  emergency: "bg-red-100 text-red-700 border border-red-200 rounded-full text-xs font-bold px-2.5 py-0.5",
  info: "bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-xs font-semibold px-2.5 py-0.5",
};

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ variant = "info", children, className }: BadgeProps) {
  return (
    <span className={cn(variants[variant], className)}>
      {children}
    </span>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const lower = status.toLowerCase();
  const variant: BadgeVariant =
    lower === "resolved" || lower === "completed"
      ? "resolved"
      : lower === "in progress" || lower === "in-progress"
      ? "progress"
      : lower === "pending"
      ? "pending"
      : "info";
  return <Badge variant={variant}>{status}</Badge>;
}
