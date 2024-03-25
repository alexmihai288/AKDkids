import { cn } from "@/lib/utils";
import { Atma } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { EducationModels as EducationModelsConst } from "@/constants";
import { buttonVariants } from "@/components/ui/button";
import { TranslateText } from "@/components/TranslateText";
const atma = Atma({ subsets: ["latin"], weight: "700" });

export const EducationModels = () => {
  const removeSpacesAndConcatenate = (str: string) => {
    return str.replace(/\s+/g, "");
  };

  const educationModelsToDisplay = EducationModelsConst.slice(0, -1);
  return (
    <>
      <p
        className={cn(
          "text-2xl max-w-[550px] break-words mt-20 border-b-2 border-primaryRed w-fit",
          atma.className
        )}
      >
        <TranslateText
          englishText="Education Model"
          turkishText="Eğitim Modeli"
        />
      </p>
      <div className="bg-[#fdf6ed] rounded-sm p-5 mt-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {educationModelsToDisplay.map((educationModel) => (
          <div key={educationModel.turkishTitle} className="">
            <Image
              src={educationModel.imageUrl}
              alt="educationmodelimage"
              width={500}
              height={500}
              className="w-full"
            />
            <div className=" flex flex-col bg-white pt-10 px-2.5 pb-2.5 min-h-[400px]">
              <p
                className={cn(
                  "text-xl max-w-[550px] break-words",
                  atma.className
                )}
              >
                <TranslateText
                  englishText={educationModel.englishTitle}
                  turkishText={educationModel.turkishTitle}
                />
              </p>{" "}
              <div className="text-[#6b6b84] mt-2.5">
                <TranslateText
                  englishText={educationModel.englishDescription}
                  turkishText={educationModel.turkishDescription}
                />
              </div>
              <div className="flex-1 flex items-end justify-end mt-auto">
                <Link
                  href={`/${removeSpacesAndConcatenate(
                    educationModel.englishTitle
                  )}`} // Using the function to remove spaces and concatenate words
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "bg-primaryRed hover:bg-[#9d361e] h-full"
                  )}
                >
                  <TranslateText
                    englishText="View more"
                    turkishText="Daha fazla görüntüle"
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
