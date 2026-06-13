import { Container } from "@/components/shared/Container";
import { CTAButton } from "@/components/shared/CTAButton";
import { links } from "@/config/links";
export function ProcessSection() {
return ( <section id="quy-trinh" className="bg-white py-14 sm:py-16"> 
<Container> <div className="mx-auto max-w-4xl text-center"> 
<p
className="text-[16px] sm:text-[18px] font-semibold uppercase tracking-[0.20em] text-brand-gold">
CHỈ 3 BƯỚC ĐƠN GIẢN
</p>

```
      <h2 className="mt-4 text-3xl font-bold text-brand-charcoal md:text-3xl">
        Nhận báo cáo cá nhân hóa và 30 phút luận giải miễn phí
      </h2>

      <p className="mt-4 text-lg text-brand-muted">
        Một quy trình đơn giản để hiểu rõ hơn cách mình đang vận hành trong cuộc sống.
      </p>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-3">
      <div className="rounded-2xl border border-brand-border bg-white p-4 text-center shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-gold/10 text-2xl font-bold text-brand-gold">
          1
        </div>

        <h3 className="mt-5 text-xl font-bold text-brand-teal">
          Trả lời 20 câu hỏi
        </h3>

        <p className="mt-3 text-brand-muted">
          Chỉ mất khoảng 5–7 phút để hoàn thành bài đánh giá.
        </p>
      </div>

      <div className="rounded-2xl border border-brand-border bg-white p-4 text-center shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-gold/10 text-2xl font-bold text-brand-gold">
          2
        </div>

        <h3 className="mt-5 text-xl font-bold text-brand-teal">
          Nhận báo cáo cá nhân hóa
        </h3>

        <p className="mt-3 text-brand-muted">
          Hiểu rõ hơn điểm mạnh, vòng lặp và xu hướng vận hành của bản thân.
        </p>
      </div>
      
      <div className="rounded-2xl border border-brand-border bg-white p-4 text-center shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-gold/10 text-2xl font-bold text-brand-gold">
          3
        </div>

        <h3 className="mt-5 text-xl font-bold text-brand-teal">
          30 phút luận giải miễn phí
        </h3>

        <p className="mt-3 text-brand-muted">
          Đồng hành cùng Mr. Thấu Hiểu để hiểu sâu hơn về kết quả và định hướng phát triển phù hợp.
        </p>
      </div>
</div>
      <div className="mt-8 text-center">
  <CTAButton href={links.googleForm}>
    Làm bài đánh giá ngay
  </CTAButton>

  <p className="mt-3 text-sm text-brand-muted">
    Miễn phí • 5-7 phút thực hiện • Tặng 30 phút luận giải
  </p>

    </div>
  </Container>
</section>
);
}