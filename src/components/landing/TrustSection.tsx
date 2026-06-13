import { Container } from "@/components/shared/Container";

const partners = [
"/images/mr-thau-hieu/ACB.jpg",
"/images/mr-thau-hieu/mb.jpg",
"/images/mr-thau-hieu/msb.jpg",
"/images/mr-thau-hieu/VCB.jfif",
"/images/mr-thau-hieu/VPBank_logo.svg.png",
];

const certifications = [
{
image: "/images/mr-thau-hieu/certified-transformation-coach.png",
name: "Transformation Coach",

},
{
image: "/images/mr-thau-hieu/certified-hooponopono.png",
name: "Ho'oponopono Practitioner",
},
{
image: "/images/mr-thau-hieu/certified-maxwell.png",
name: "Maxwell Leadership",
},
{
image: "/images/mr-thau-hieu/certified-NLP.png",
name: "NLP Practitioner",
},
{
image: "/images/mr-thau-hieu/certified-professional.png",
name: "Certified Professional Coach",
},
];

const clients = [
{
image: "/images/mr-thau-hieu/Jennifer-Pham.jpg",
},
{
image: "/images/mr-thau-hieu/ca-sy-nguyenvu.jpg",
},
{
image: "/images/mr-thau-hieu/Chu-thanh-huyen.png",
},
{
image: "/images/mr-thau-hieu/map-for-success.png",
name: "Coaching cá nhân",
},
{
image: "/images/mr-thau-hieu/group-workshop.JPG",
name: "Workshop & Đào tạo",
},
{
image: "/images/mr-thau-hieu/leadership-training.jpg",
name: "Leadership Training",
},
];

export function TrustSection() {
return ( <section className="bg-white py-14 sm:py-16"> 
<Container> 
  <div className="mx-auto max-w-4xl text-center"> 
    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-gold">
ĐỐI TÁC - KHÁCH HÀNG - CHỨNG NHẬN 
   </p>

      <h2 className="mt-4 text-3xl font-bold text-brand-charcoal">
        Đồng hành cùng nhiều cá nhân, tổ chức và cộng đồng
      </h2>

      <p className="mt-4 text-lg text-brand-muted">
        Hơn 500 học viên và khách hàng đã tham gia các chương trình đào tạo,
        coaching và phát triển bản thân cùng Mr. Thấu Hiểu.
      </p>
    </div>

    {/* ĐỐI TÁC */}
    <div className="mt-12">
      <h3 className="mb-6 text-center text-lg font-bold text-brand-teal">
        ĐỐI TÁC TIÊU BIỂU
      </h3>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
        {partners.map((logo) => (
          <div
            key={logo}
            className="flex items-center justify-center rounded-xl border border-brand-border bg-white p-4 shadow-sm"
          >
            <img
              src={logo}
              alt="Partner"
              className="h-12 object-contain"
            />
          </div>
        ))}
      </div>
    </div>

    {/* KHÁCH HÀNG */}
    <div className="mt-16">
      <h3 className="mb-3 text-center text-lg font-bold text-brand-teal">
        KHÁCH HÀNG & CỘNG ĐỒNG ĐÃ ĐỒNG HÀNH
      </h3>

      <p className="mb-8 text-center text-brand-muted">
        Đồng hành cùng doanh nhân, người nổi tiếng, gia đình,
        lãnh đạo và cộng đồng phát triển bản thân.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {clients.map((client) => (
          <div
            key={client.image}
            className="overflow-hidden rounded-2xl border border-brand-border bg-white shadow-sm"
          >
            <img
              src={client.image}
              alt={client.name || "Khách hàng"}
              className="aspect-[4/3] w-full object-cover"
            />

            {client.name && (
              <div className="p-4">
                <p className="font-semibold text-brand-charcoal">
                  {client.name}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>

    {/* CHỨNG NHẬN */}
    <div className="mt-16">
      <h3 className="mb-6 text-center text-lg font-bold text-brand-teal">
        CHỨNG NHẬN CHUYÊN MÔN TIÊU BIỂU
      </h3>

      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
        {certifications.map((item) => (
          <div
            key={item.name}
            className="rounded-xl border border-brand-border bg-white p-4 shadow-sm"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-40 w-full object-contain"
            />

            <div className="mt-3 text-center">
              <p className="text-sm font-semibold text-brand-charcoal">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Container>
</section>
);
}