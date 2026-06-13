import { CheckCircle2 } from "lucide-react";
import { landingContent } from "@/content/landing";
import { links } from "@/config/links";
import { Container } from "@/components/shared/Container";
import { CTAButton } from "@/components/shared/CTAButton";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function BenefitsSection() {
  const { coaching } = landingContent;

  return (
    <section className="bg-white py-12 sm:py-14 lg:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <figure className="overflow-hidden rounded-2xl border border-brand-border bg-brand-ivory shadow-soft">
          <img
            src="/images/mr-thau-hieu/coaching-session-1.png"
            alt="Không gian coaching một-một với sự lắng nghe và đồng hành"
            className="aspect-[4/3] w-full object-cover lg:aspect-[5/4]"
          />
        </figure>

        <div className="max-w-2xl">
          <SectionHeader
            eyebrow={coaching.eyebrow}
            title={coaching.title}
            description={coaching.description}
          />
          <div className="mt-7 grid gap-3">
            {coaching.points.map((point) => (
              <div key={point} className="flex gap-3 rounded-xl border border-brand-border bg-brand-ivory p-4">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-gold" aria-hidden="true" />
                <p className="font-semibold text-brand-charcoal">{point}</p>
              </div>
            ))}
          </div>
          <div className="mt-7">
            <CTAButton href={links.googleForm}>Nhận 30 phút luận giải miễn phí</CTAButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
