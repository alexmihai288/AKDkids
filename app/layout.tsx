import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { constructMetadata } from "@/lib/utils";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });
export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
