import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <article className="rounded-xl border border-brand-border bg-white p-6 shadow-[0_12px_30px_rgba(15,61,62,0.06)]">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-brand-tealSoft text-brand-teal">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-bold text-brand-charcoal">{title}</h3>
      <p className="mt-3 leading-7 text-brand-muted">{description}</p>
    </article>
  );
}
