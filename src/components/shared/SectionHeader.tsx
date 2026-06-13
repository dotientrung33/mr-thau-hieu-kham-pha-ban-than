type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`
        ${
          align === "center"
            ? "mx-auto max-w-5xl text-center"
            : "max-w-5xl"
        }
        ${className}
      `}
    >
      {eyebrow ? (
        <p className="mb-3 text-[18px] font-semibold uppercase tracking-[0.18em] text-brand-gold">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-[22px] font-semibold leading-[1.35] text-brand-charcoal sm:text-[26px] lg:text-[27px]">
        {title}
      </h2>

      {description ? (
        <p
  className={`
    mt-4
    text-[16px]
    leading-[1.8]
    text-brand-muted
    sm:text-[18px]
    ${
      align === "center"
        ? "mx-auto max-w-5xl"
        : "max-w-5xl"
    }
  `}
>
          {description}
        </p>
      ) : null}
    </div>
  );
}