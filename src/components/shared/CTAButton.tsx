import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "light" | "outline";
  className?: string;
};

const variants = {
  primary:
    "bg-brand-teal text-white hover:bg-brand-tealDark border-brand-teal shadow-soft",
  light:
    "bg-white text-brand-teal hover:bg-brand-ivory border-white shadow-soft",
  outline:
    "bg-transparent text-brand-teal hover:bg-brand-tealSoft border-brand-border",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-6 py-3 text-center text-sm font-semibold transition sm:text-base ${variants[variant]} ${className}`}
    >
      <span>{children}</span>
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}
