import { Award, CheckCircle2 } from "lucide-react";
import { landingContent } from "@/content/landing";
import { links } from "@/config/links";
import { Container } from "@/components/shared/Container";
import { CTAButton } from "@/components/shared/CTAButton";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function ReportSection() {
  const { report, socialProof } = landingContent;

  return (
    <section id="bao-cao" className="bg-brand-ivory py-12 sm:py-14 lg:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl">
            <SectionHeader
              eyebrow={socialProof.eyebrow}
              title={socialProof.title}
              description={socialProof.description}
            />
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {socialProof.stats.map((stat) => (
                <div key={stat} className="rounded-xl border border-brand-border bg-white p-4">
                  <CheckCircle2 className="mb-3 h-5 w-5 text-brand-gold" aria-hidden="true" />
                  <p className="font-bold text-brand-teal">{stat}</p>
                </div>
              ))}
            </div>
            <div className="mt-7">
              <CTAButton href={links.googleForm}>Tôi muốn nhận báo cáo</CTAButton>
            </div>
          </div>

          <figure className="overflow-hidden rounded-2xl border border-brand-border bg-white shadow-soft">
            <img
              src="/images/mr-thau-hieu/training-speaker.jpg"
              alt="Mr. Thấu Hiểu trong vai trò diễn giả và trainer"
              className="aspect-[4/3] w-full object-cover lg:aspect-[4/5]"
            />
            <figcaption className="flex items-center gap-3 bg-white p-5 text-brand-teal">
              <Award className="h-5 w-5 text-brand-gold" aria-hidden="true" />
              <span className="font-semibold">Đào tạo, dẫn dắt và phát triển con người</span>
            </figcaption>
          </figure>
        </div>

        <div className="mt-12 rounded-2xl border border-brand-border bg-white p-6 shadow-[0_12px_30px_rgba(15,61,62,0.06)] sm:p-8">
          <SectionHeader
            eyebrow={report.eyebrow}
            title={report.title}
            description={report.description}
            align="center"
            className="mx-auto"
          />
          <div className="mt-8 grid gap-3 md:grid-cols-5">
            {report.sections.map((section) => (
              <div key={section} className="rounded-xl bg-brand-ivory p-4 text-center">
                <CheckCircle2 className="mx-auto mb-3 h-5 w-5 text-brand-gold" aria-hidden="true" />
                <p className="text-sm font-bold text-brand-charcoal">{section}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
