import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  icon?: ReactNode;
  variant?: "subtle" | "glow" | "outline";
  className?: string;
}

export default function TechBadge({
  name,
  icon,
  variant = "subtle",
  className,
}: TechBadgeProps) {
  const variantStyles = {
    subtle:
      "bg-primary/10 border-primary/20 text-foreground/90 hover:border-primary/50 hover:bg-primary/20 hover:text-foreground",
    glow:
      "bg-primary/20 border-primary/40 text-primary shadow-[0_0_15px_var(--cyber-glow-primary)] hover:scale-105",
    outline:
      "bg-background/40 border-border text-muted-foreground hover:text-foreground hover:border-primary/40",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono tracking-wide border transition-all duration-300 backdrop-blur-md",
        variantStyles[variant],
        className
      )}
    >
      {icon && <span className="text-primary text-sm">{icon}</span>}
      <span>{name}</span>
    </span>
  );
}
