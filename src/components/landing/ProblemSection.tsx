import { AlertCircle, Repeat2, Route } from "lucide-react";
import { landingContent } from "@/content/landing";
import { links } from "@/config/links";
import { Container } from "@/components/shared/Container";
import { CTAButton } from "@/components/shared/CTAButton";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { SectionHeader } from "@/components/shared/SectionHeader";

const icons = [Route, Repeat2, AlertCircle];

export function ProblemSection() {
  const { problems } = landingContent;

  return (
    <section className="bg-brand-tealSoft py-12 sm:py-14 lg:py-20">
      <Container>
        <SectionHeader
          eyebrow={problems.eyebrow}
          title={problems.title}
          description={problems.description}
        />
        <div className="mx-auto mt-9 grid max-w-5xl gap-5 md:grid-cols-3">
          {problems.items.map((item, index) => (
            <FeatureCard
              key={item.title}
              icon={icons[index]}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <div className="mt-8 text-center">
          <CTAButton href={links.googleForm} variant="outline">
            Tôi muốn hiểu rõ bản thân hơn
          </CTAButton>
        </div>
      </Container>
    </section>
  );
}
