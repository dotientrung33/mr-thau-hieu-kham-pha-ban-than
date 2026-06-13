import {
  Compass,
  HeartPulse,
  Lightbulb,
  LockKeyhole,
  MessageCircleQuestion,
  Sparkles,
} from "lucide-react";
import { landingContent } from "@/content/landing";
import { links } from "@/config/links";
import { Container } from "@/components/shared/Container";
import { CTAButton } from "@/components/shared/CTAButton";
import { SectionHeader } from "@/components/shared/SectionHeader";

const icons = [Compass, Sparkles, HeartPulse, LockKeyhole, Lightbulb, MessageCircleQuestion];

export function HeroBenefitsSection() {
  const { heroBenefits } = landingContent;

  return (
    <section id="nhan-duoc-gi" className="bg-white py-10 sm:py-12 lg:py-16">
      <Container>
        <SectionHeader
          eyebrow={heroBenefits.eyebrow}
          title={heroBenefits.title}
          align="center"
          className="mx-auto"
        />
        <div className="mx-auto mt-9 grid max-w-5xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {heroBenefits.items.map((item, index) => {
            const Icon = icons[index];

            return (
              <article
                key={item.title}
                className="rounded-xl border border-brand-border bg-brand-ivory p-5"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-teal">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold leading-snug text-brand-charcoal">{item.title}</h3>
                <p className="mt-2 leading-6 text-brand-muted">{item.description}</p>
              </article>
            );
          })}
        </div>
        <div className="mt-8 text-center">
          <CTAButton href={links.googleForm}>Nhận bản đồ vận hành của tôi</CTAButton>
        </div>
      </Container>
    </section>
  );
}
