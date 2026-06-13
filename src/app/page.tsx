import { MessageCircle } from "lucide-react";
import { AboutSection } from "@/components/landing/AboutSection";
import { AssessmentInfoSection } from "@/components/landing/AssessmentInfoSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { HeroBenefitsSection } from "@/components/landing/HeroBenefitsSection";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { ReportSection } from "@/components/landing/ReportSection";
import { SelfQuestionsSection } from "@/components/landing/SelfQuestionsSection";
import { links } from "@/config/links";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { SiteHeader } from "@/components/shared/SiteHeader";
import { TrustSection } from "@/components/landing/TrustSection";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <SelfQuestionsSection />
        <HeroBenefitsSection />
        <ProblemSection />
        <BenefitsSection />
        <ReportSection />
        <ProcessSection />
        <AboutSection />
        <TrustSection />
<AssessmentInfoSection />
        <FinalCTASection />
      </main>
      <SiteFooter />
      {/* Desktop */}
<a
  href={links.messenger}
  target="_blank"
  rel="noreferrer"
  className="
    fixed
    bottom-6
    right-6
    z-50
    hidden
    md:flex
    items-center
    gap-3
    rounded-full
    bg-[#1877F2]
    px-5
    py-3
    text-white
    font-semibold
    shadow-2xl
    transition-all
    hover:scale-105
    hover:bg-[#166FE5]
  "
>
  <MessageCircle className="h-5 w-5" />
  <span>Chat với Mr. Thấu Hiểu</span>
</a>

{/* Mobile */}
<a
  href={links.messenger}
  target="_blank"
  rel="noreferrer"
  className="
    fixed
    bottom-5
    right-5
    z-50
    flex
    md:hidden
    h-14
    w-14
    items-center
    justify-center
    rounded-full
    bg-[#1877F2]
    text-white
    shadow-2xl
  "
>
  <MessageCircle className="h-6 w-6" />
</a>
    </>
  );
}
