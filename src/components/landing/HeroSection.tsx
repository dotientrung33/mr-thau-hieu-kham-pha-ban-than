import { CheckCircle2, Sparkles } from "lucide-react";
import { landingContent } from "@/content/landing";
import { links } from "@/config/links";
import { Container } from "@/components/shared/Container";
import { CTAButton } from "@/components/shared/CTAButton";

export function HeroSection() {
  const { hero } = landingContent;

  return (
    <section id="top" className="overflow-hidden bg-brand-ivory py-12 sm:py-14 lg:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-[1.34fr_0.66fr]">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-border bg-white px-4 py-2 text-sm font-semibold text-brand-teal">
            <Sparkles className="h-4 w-4 text-brand-gold" aria-hidden="true" />
            {hero.eyebrow}
          </div>
<h1 className="whitespace-pre-line text-[28px] font-semibold leading-[1.2] text-brand-charcoal sm:text-[34px] lg:text-[38px]">
  {hero.title}
          </h1>
          <p className="mt-5 max-w-xl whitespace-pre-line text-base leading-[1.8] text-brand-muted sm:text-lg">
            {hero.description}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CTAButton href={links.googleForm}>{hero.primaryCta}</CTAButton>
            <a
              href="#nhan-duoc-gi"
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-brand-teal transition hover:bg-brand-tealSoft sm:text-base"
            >
              {hero.secondaryCta}
            </a>
          </div>
          <div className="mt-5 grid max-w-xl gap-3 sm:grid-cols-2">
            {hero.trustPoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-2 rounded-xl border border-brand-border bg-white px-4 py-3 text-sm font-semibold text-brand-teal"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
                <span>{point}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 max-w-xl text-sm text-brand-muted">{hero.microcopy}</p>
        </div>

        <div className="relative">
          <div className="absolute -right-8 -top-8 h-44 w-44 rounded-full bg-brand-gold/15 blur-3xl" />
          <figure className="relative mx-auto max-w-[500px] overflow-hidden rounded-2xl border border-brand-border bg-white shadow-soft">
            <img
              src="/images/mr-thau-hieu/hero-trung.jpg"
              alt="Mr. Thấu Hiểu"
            className="h-auto w-full object-cover"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-brand-teal/92 p-5 text-white backdrop-blur">
              <p className="text-sm font-semibold text-brand-gold">Mr. Thấu hiểu</p>
              <p className="mt-1 text-base font-semibold">Chuyên gia tâm lý học ứng dụng</p>
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
