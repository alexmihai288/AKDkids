import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = "Dum Dance Team",
  description = "Dum Dance Team este mai mult decât o echipă sportivă... suntem o comunitate cu prietenii și relații între cursanți, clădită de-a lungul timpului, a căror prezență s-a remarcat prin rezultatele obținute la nivel mondial și național.",
  image = "/logo2.png",
  icons = "/logo2.png",
  noIndex = false,
  keywords,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
  keywords?: string[];
} = {}): Metadata {
  return {
    title,
    keywords: ["AKD", "Afyon", "AKDKids", "AKD kids"],
    description,
    icons,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    metadataBase: new URL("https://akdkids.com/"),
    themeColor: "#fff",
    ...(noIndex && {
      robots: {
        index: true,
        follow: true,
      },
    }),
  };
}
