import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  highlight?: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  tag,
  title,
  highlight,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-16 md:mb-20",
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl",
        className
      )}
    >
      {/* Terminal Tag */}
      {tag && (
        <div
          className={cn(
            "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest text-primary bg-primary/10 border border-primary/20 mb-4 shadow-[0_0_15px_var(--cyber-glow-primary)]",
            align === "center" ? "justify-center" : ""
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          <span>{tag}</span>
        </div>
      )}

      {/* Main Title */}
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
        {title}{" "}
        {highlight && (
          <span className="text-primary relative inline-block">
            {highlight}
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-primary via-accent to-transparent opacity-80" />
          </span>
        )}
      </h2>

      {/* Description */}
      {description && (
        <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}

      {/* Accent Line */}
      <div
        className={cn(
          "mt-6 h-[2px] w-20 bg-gradient-to-r from-primary to-transparent",
          align === "center" ? "mx-auto" : ""
        )}
      />
    </div>
  );
}

