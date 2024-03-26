import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { constructMetadata } from "@/lib/utils";
import { ChangeLanguage } from "@/components/ChangeLanguage";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });
export const metadata: Metadata = {
  title: "AKDKids",
  description:
    "AKD Kids institutions, which have a deep-rooted history, consider preparing children for the future as their most important principle. For this reason, we provide opportunities for our children to discover themselves by offering rich learning opportunities with our different branch courses in all our institutions. Bilingual Education...",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/logo1.png?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={roboto.className}>
        <ChangeLanguage />
        {children}
        <Footer />
      </body>
    </html>
  );
}
