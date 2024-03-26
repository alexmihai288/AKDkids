import { Container } from "@/components/Container";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GalleryImagesType } from "@/constants";
import { cn } from "@/lib/utils";
import { Atma } from "next/font/google";
import Image from "next/image";
import React from "react";

const atma = Atma({ subsets: ["latin"], weight: "700" });
export const Gallery = ({
  name,
  color,
  images,
}: {
  name?: string;
  color?: string;
  images: GalleryImagesType[];
}) => {
  return (
    <>
      <Container>
        <p
          className={cn(
            "text-2xl max-w-[550px] break-words mt-20 border-b-2 border-primaryRed w-fit",
            atma.className
          )}
        >
          {name} Gallery
        </p>
      </Container>
      <div className={cn("rounded-sm p-5 mt-10", color && `bg-[${color}]`)}>
        <Container>
          <ScrollArea className="h-[600px] px-5 pt-5">
            <div className="mt-6 grid grid-cols-1 items-center justify-center sm:grid-cols-2 md:grid-cols-4 gap-10">
              {images?.map((galleryImage) => (
                <Image
                  loading="lazy"
                  src={galleryImage.imageUrl}
                  width={8000}
                  height={8000}
                  className="object-cover max-w-[400px] max-h-[600px] mx-auto w-full h-full rounded-[5px]"
                  quality={100}
                  alt="gallery-image"
                  key={galleryImage.imageUrl}
                />
              ))}
            </div>
          </ScrollArea>
        </Container>
      </div>
    </>
  );
};
