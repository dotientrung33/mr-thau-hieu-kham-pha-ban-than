import { Container } from "./Container";

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-border bg-white py-8">
      <Container className="flex flex-col gap-3 text-sm text-brand-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Mr. Thấu Hiểu. All rights reserved.</p>
        <p>KHÁM PHÁ CÁCH BẠN ĐANG VẬN HÀNH TRONG CUỘC SỐNG™</p>
      </Container>
    </footer>
  );
}
