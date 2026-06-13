import { CheckCircle2, Sprout } from "lucide-react";
import { landingContent } from "@/content/landing";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function AboutSection() {
  const { about } = landingContent;

  return (
    <section id="mr-thau-hieu" className="bg-brand-tealSoft py-14 sm:py-16 lg:py-[88px]">
      <Container className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <figure className="overflow-hidden rounded-2xl border border-brand-border bg-white shadow-soft">
          <img
            src="/images/mr-thau-hieu/about-mrthauhieu.jpg"
            alt="Đỗ Tiến Trung trong hoạt động Maxwell Leadership"
            className="aspect-[4/3] w-full object-cover lg:aspect-[4/5]"
          />
          <figcaption className="bg-white p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-gold">
              Người gieo hạt thấu hiểu
            </p>
            <p className="mt-1 text-xl font-bold text-brand-teal">{about.title}</p>
            <p className="mt-1 font-semibold text-brand-charcoal">{about.role}</p>
          </figcaption>
        </figure>

        <div className="max-w-2xl">
          <SectionHeader
            eyebrow={about.eyebrow}
            title="Vì sao bạn có thể tin tưởng bài đánh giá này?"
            description={about.description}
          />
          <div className="mt-7 grid gap-3">
            <div className="mt-7 rounded-2xl border border-brand-border bg-white p-6 shadow-soft">
  <h3 className="text-xl font-bold text-brand-teal">
    Gần 20 năm làm việc trải qua nhiều lĩnh vực khác nhau
  </h3>

  <div className="mt-4 space-y-3">
    {about.credentials.map((credential) => (
      <div key={credential} className="flex items-start gap-3">
        <CheckCircle2
          className="mt-1 h-5 w-5 shrink-0 text-brand-gold"
          aria-hidden="true"
        />
        <p className="leading-6 text-brand-charcoal">
          {credential}
        </p>
      </div>
    ))}
  </div>
</div>
          </div>
          <div className="mt-7 rounded-xl border border-brand-border bg-white p-5">
            <div className="flex items-center gap-3">
              <Sprout className="h-5 w-5 text-brand-gold" aria-hidden="true" />
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-gold">
                Triết lý làm việc
              </p>
            </div>
            <p className="mt-3 text-xl font-bold text-brand-charcoal">{about.philosophy}</p>
            
          </div>
        </div>
      </Container>
    </section>
  );
}
