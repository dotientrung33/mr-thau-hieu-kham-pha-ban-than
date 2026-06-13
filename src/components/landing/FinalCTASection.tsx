import { landingContent } from "@/content/landing";
import { links } from "@/config/links";
import { Container } from "@/components/shared/Container";
import { CTAButton } from "@/components/shared/CTAButton";

export function FinalCTASection() {
const { finalCta } = landingContent;

return ( <section className="bg-brand-teal py-12 sm:py-14 lg:py-16 text-white"> 
<Container> 
  <div className="mx-auto max-w-2xl rounded-2xl border border-white/15 bg-white/10 px-6 py-10 text-center shadow-soft backdrop-blur sm:px-10 lg:py-12">

      <p className="mb-5 text-[18px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
        THÔNG ĐIỆP GỬI ĐẾN BẠN
      </p>

      <h2 className="mx-auto max-w-3xl whitespace-pre-line text-[10px] font-semibold leading-[1.25] sm:text-[22px] lg:text-[22px]">
        {finalCta.title}
      </h2>

      <p className="mx-auto mt-5 max-w-xl text-[16px] leading-[1.8] text-white/80">
        {finalCta.description}
      </p>

      <div className="mt-8">
        <CTAButton
          href={links.googleForm}
          variant="light"
          className="px-8 py-4 text-base"
        >
          {finalCta.cta}
        </CTAButton>
      </div>

      <p className="mx-auto mt-5 max-w-xl text-sm text-white/70">
        {finalCta.microcopy}
      </p>
    </div>
  </Container>
</section>

);
}