import { links } from "@/config/links";
import { site } from "@/config/site";
import { CTAButton } from "./CTAButton";
import { Container } from "./Container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-border/70 bg-brand-ivory/90 backdrop-blur">
      <Container className="flex min-h-16 items-center justify-between gap-4">
        <a href="#top" className="focus-ring rounded-md">
          <span className="block text-sm font-bold uppercase tracking-[0.18em] text-brand-teal">
            {site.name}
          </span>
          <span className="hidden text-xs text-brand-muted sm:block">
            Thấu hiểu là tên gọi khác của yêu thương
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-brand-muted md:flex">
          <a className="hover:text-brand-teal" href="#bao-cao">
            Báo cáo
          </a>
          <a className="hover:text-brand-teal" href="#quy-trinh">
            Quy trình
          </a>
          <a className="hover:text-brand-teal" href="#mr-thau-hieu">
            Giới thiệu
          </a>
        </nav>
        <CTAButton href={links.googleForm} className="hidden md:inline-flex">
          Làm bài đánh giá
        </CTAButton>
      </Container>
    </header>
  );
}
