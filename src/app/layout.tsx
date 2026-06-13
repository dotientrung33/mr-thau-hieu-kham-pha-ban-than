import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khám phá cách bạn đang vận hành trong cuộc sống | Mr. Thấu Hiểu",
  description:
    "Một trải nghiệm ngắn giúp bạn nhìn rõ cách mình đang ra quyết định, phản ứng, theo đuổi mục tiêu và mắc kẹt trong cuộc sống.",
  metadataBase: new URL("https://mr-thau-hieu.vercel.app"),
  openGraph: {
    title: "Khám phá cách bạn đang vận hành trong cuộc sống",
    description:
      "Nhận Báo cáo Thấu Hiểu Bản Thân và bắt đầu nhìn rõ hơn cách bạn đang vận hành.",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
