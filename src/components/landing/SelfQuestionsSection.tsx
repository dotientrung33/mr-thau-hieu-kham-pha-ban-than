import { HelpCircle } from "lucide-react";
import { landingContent } from "@/content/landing";
import { links } from "@/config/links";
import { Container } from "@/components/shared/Container";
import { CTAButton } from "@/components/shared/CTAButton";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function SelfQuestionsSection() {
  const { selfQuestions } = landingContent;

  return (
    <section className="bg-brand-tealSoft py-10 sm:py-12 lg:py-16">
      <Container>
        <SectionHeader
         eyebrow={selfQuestions.eyebrow}
         title={selfQuestions.title}
         description={selfQuestions.description}
         align="center"
         className="mx-auto"
         />
        <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2">
          {selfQuestions.items.map((item) => (
            <article key={item} className="flex gap-4 rounded-xl border border-brand-border bg-white p-5">
              <HelpCircle className="mt-1 h-5 w-5 shrink-0 text-brand-gold" aria-hidden="true" />
              <p className="font-semibold text-brand-charcoal">{item}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <CTAButton href={links.googleForm}>Tôi muốn hiểu mình rõ hơn</CTAButton>
        </div>
      </Container>
    </section>
  );
}
