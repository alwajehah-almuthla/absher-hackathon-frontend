import type { Metadata } from "next";
import "@/styles/globals.css";
import localFont from "next/font/local";
import Provider from "@/components/providers/Provider";
const myFont = localFont({
  src: "../../public/fonts/DINNextLTArabic-Medium-4.ttf",
});

export const metadata: Metadata = {
  title: "Absher Hackathon",
  description: "Absher Hackathon Project by Alwjhah Almothla",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${myFont.className} antialiased bg-neutral-50 text-neutral-700`}
      >
        <Provider>
          <div className="root">{children}</div>
        </Provider>
      </body>
    </html>
  );
}
