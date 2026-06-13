import { Clock3, FileCheck2, Gift, ListChecks, ShieldCheck } from "lucide-react";
import { landingContent } from "@/content/landing";
import { links } from "@/config/links";
import { Container } from "@/components/shared/Container";
import { CTAButton } from "@/components/shared/CTAButton";
import { SectionHeader } from "@/components/shared/SectionHeader";

const icons = [ListChecks, Clock3, FileCheck2, ShieldCheck, Gift];

export function AssessmentInfoSection() {
  const { assessmentInfo } = landingContent;

  return (
    <section className="bg-brand-ivory py-12 sm:py-14 lg:py-20">
      <Container>
        <SectionHeader
          eyebrow={assessmentInfo.eyebrow}
          title={assessmentInfo.title}
          align="center"
          className="mx-auto"
        />
        <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {assessmentInfo.items.map((item, index) => {
            const Icon = icons[index];

            return (
              <article
                key={item}
                className="rounded-xl border border-brand-border bg-white p-5 text-center shadow-[0_12px_30px_rgba(15,61,62,0.05)]"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-brand-tealSoft text-brand-teal">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="mt-4 font-bold text-brand-charcoal">{item}</p>
              </article>
            );
          })}
        </div>
        <div className="mt-8 text-center">
          <CTAButton href={links.googleForm}>Hoàn thành trong 5 phút</CTAButton>
        </div>
      </Container>
    </section>
  );
}
