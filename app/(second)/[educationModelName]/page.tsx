import { Container } from "@/components/Container";
import { Separator } from "@/components/ui/separator";
import { EducationModels, EducationModelsType } from "@/constants";
import { cn } from "@/lib/utils";
import { Atma } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { TranslateText } from "@/components/TranslateText";
import { ChangeChildrenLanguage } from "@/components/ChangeChildrenLanguage";

const atam = Atma({ subsets: ["latin"], weight: "700" });

const page = ({ params }: { params: { educationModelName: string } }) => {
  const formattedModelName = params.educationModelName
    .replace(/([A-Z])/g, " $1")
    .trim();

  // Find the EducationModels object with the matching title
  const educationModel: EducationModelsType | undefined = EducationModels.find(
    (model) => model.englishTitle === formattedModelName
  );

  if (!educationModel) {
    // Handle case when no matching education model is found
    return <div>Educational model not found</div>;
  }
  return (
    <main>
      <div className="relative">
        <Image
          src={educationModel.imageUrl}
          className="w-full h-[550px] object-cover brightness-50"
          width={8000}
          height={8000}
          alt="education-image"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white flex flex-col items-center">
            <p className={cn(atam.className, "text-2xl sm:text-4xl")}>
              <TranslateText
                englishText={educationModel.englishTitle}
                turkishText={educationModel.turkishTitle}
              />
            </p>
            <p className="text-md font-medium">
              AKD <span>KIDS</span>{" "}
              <span className="text-primaryRed">
                |{" "}
                <TranslateText
                  englishText={educationModel.englishTitle}
                  turkishText={educationModel.turkishTitle}
                />
              </span>
            </p>
          </div>
        </div>
      </div>
      <Container>
        <div className="">
          <div className="mt-20 flex flex-col md:flex-row gap-5">
            <Image
              src={educationModel.imageUrl}
              width={700}
              height={700}
              alt="education-1"
            />
            <div className="hidden md:block border-t-2 flex-1 border-primaryRed rounded-md p-5 max-w-full shadow-2xl h-fit">
              <h1 className={cn(atam.className, "text-3xl")}>
                <TranslateText
                  englishText="Contact us"
                  turkishText="Bize ulaşın"
                />
              </h1>
              <Separator className="w-1/2 mt-2.5" />
              <div className="flex items-center mt-5 text-[#6b6b84]">
                <span className="font-semibold flex items-center gap-2.5 text-black">
                  <FaPhoneAlt className="text-sm text-[#6b6b84]" />{" "}
                  <TranslateText englishText="Phone" turkishText="Telefon" />
                </span>
                <Link
                  href="tel:0850 80 80 453"
                  className="hover:text-primaryRed transition-colors"
                >
                  : 0850 80 80 453{" "}
                </Link>
              </div>
              <div className="flex items-center mt-5 text-[#6b6b84]">
                <span className="font-semibold flex items-center gap-2.5 text-black">
                  <IoIosMail className="text-md text-[#6b6b84]" /> Email
                </span>
                <Link
                  href="mailto:info@akdkids.com"
                  className="hover:text-primaryRed transition-colors"
                >
                  : info@akdkids.com
                </Link>
              </div>
              <div className="flex items-center mt-5 text-[#6b6b84]">
                <span className="font-semibold flex items-center gap-2.5 text-black whitespace-nowrap self-start">
                  <CiLocationOn className="text-md text-[#6b6b84]" />
                  <TranslateText englishText="Address" turkishText="Adres" />
                </span>
                <div className="hover:text-primaryRed transition-colors">
                  : Ataşehir Mah. Güney Çevre Yolu Cad. B Blok. NO:224
                  Merkez/ELAZIĞ
                </div>
              </div>
            </div>

            <div className="md:hidden mt-10">
              <p className={cn(atam.className, "text-4xl")}>
                <TranslateText
                  englishText={educationModel.englishTitle}
                  turkishText={educationModel.turkishTitle}
                />
              </p>
              <div className="font-semibold mt-2.5">
                <ChangeChildrenLanguage educationModel={educationModel} />
              </div>
            </div>
          </div>
          <div className="hidden md:block w-1/2 mt-10">
            <p className={cn(atam.className, "text-4xl")}>
              <TranslateText
                englishText={educationModel.englishTitle}
                turkishText={educationModel.turkishTitle}
              />
            </p>
            <div className="font-semibold">
              <ChangeChildrenLanguage educationModel={educationModel} />
            </div>
          </div>
          <div className="md:hidden mt-5 border-t-2 flex-1 border-primaryRed rounded-md p-5 max-w-full shadow-2xl h-fit">
            <h1 className={cn(atam.className, "text-3xl")}>
              <TranslateText
                englishText="Contact us"
                turkishText="Bize ulaşın"
              />
            </h1>
            <Separator className="w-1/2 mt-2.5" />
            <div className="flex items-center mt-5 text-[#6b6b84]">
              <span className="font-semibold flex items-center gap-2.5 text-black">
                <FaPhoneAlt className="text-sm text-[#6b6b84]" />{" "}
                <TranslateText englishText="Phone" turkishText="Telefon" />
              </span>
              <Link
                href="tel:0850 80 80 453"
                className="hover:text-primaryRed transition-colors"
              >
                : 0850 80 80 453{" "}
              </Link>
            </div>
            <div className="flex items-center mt-5 text-[#6b6b84]">
              <span className="font-semibold flex items-center gap-2.5 text-black">
                <IoIosMail className="text-md text-[#6b6b84]" /> Email
              </span>
              <Link
                href="tel:0850 80 80 453"
                className="hover:text-primaryRed transition-colors"
              >
                : info@akdkids.com
              </Link>
            </div>
            <div className="flex items-center mt-5 text-[#6b6b84]">
              <span className="font-semibold flex items-center gap-2.5 text-black whitespace-nowrap self-start">
                <CiLocationOn className="text-md text-[#6b6b84]" />
                <TranslateText englishText="Address" turkishText="Adres" />
              </span>
              <Link
                href="tel:0850 80 80 453"
                className="hover:text-primaryRed transition-colors"
              >
                : Ataşehir Mah. Güney Çevre Yolu Cad. B Blok. NO:224
                Merkez/ELAZIĞ
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default page;
