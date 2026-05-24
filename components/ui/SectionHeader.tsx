import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  accentWord?: string;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  align = "left",
  accentWord,
  className,
}: SectionHeaderProps) {
  const titleParts = accentWord
    ? title.split(accentWord)
    : [title];

  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <h2 className="section-heading">
        {accentWord && titleParts.length === 2 ? (
          <>
            {titleParts[0]}
            <span style={{ color: "#8f0d0d" }}>{accentWord}</span>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && <p className="section-subheading mt-2">{subtitle}</p>}
    </div>
  );
}
