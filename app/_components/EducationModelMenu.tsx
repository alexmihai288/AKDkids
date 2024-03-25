"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { TranslateText } from "@/components/TranslateText";
export const EducationModelMenu = ({
  whereClause,
}: {
  whereClause?: string;
}) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              whereClause === "main" && "bg-inherit text-white",
              `font-bold text-md ${
                whereClause !== "main"
                  ? "hover:text-primaryRed"
                  : "hover:text-white"
              } transition-colors hover:bg-inherit`
            )}
          >
            <TranslateText
              englishText="Education Model"
              turkishText="Eğitim Modeli"
            />
          </NavigationMenuTrigger>
          <NavigationMenuContent className="py-2.5 flex flex-col font-bold">
            <Link
              href={"/AuthenticEducationModel"}
              className="text-nowrap p-2.5 hover:text-primaryRed transition-colors"
            >
              <TranslateText
                englishText="Authentic Education Model"
                turkishText="Otantik Eğitim Modeli"
              />
            </Link>
            <Link
              href={"/FeaturesOfOurProgram"}
              className="text-nowrap p-2.5 hover:text-primaryRed transition-colors"
            >
              <TranslateText
                englishText="Features of Our Program"
                turkishText="Programımızın Özellikleri"
              />
            </Link>
            <Link
              href={"/OurCollaboration"}
              className="text-nowrap p-2.5 hover:text-primaryRed transition-colors"
            >
              <TranslateText
                englishText="Our Collaboration"
                turkishText="İşbirliğimiz"
              />
            </Link>
            {/* <Link
              href={"/branches/1"}
              className="text-nowrap p-2.5 hover:text-primaryRed transition-colors"
            >
              Our Events
            </Link> */}
            <Link
              href={"/OurForeignLanguageEducation"}
              className="text-nowrap p-2.5 hover:text-primaryRed transition-colors"
            >
              <TranslateText
                englishText="Our Foreign Language Education"
                turkishText="Yabancı Dil Eğitimimiz"
              />
            </Link>
            <Link
              href={"/EuropeanLanguagePortfolio"}
              className="text-nowrap p-2.5 hover:text-primaryRed transition-colors"
            >
              <TranslateText
                englishText="European Language Portfolio"
                turkishText="Avrupa Dil Portföyü"
              />
            </Link>
            <Link
              href={"/OurFamilyNewsletter"}
              className="text-nowrap p-2.5 hover:text-primaryRed transition-colors"
            >
              <TranslateText
                englishText="Our Family Newsletter"
                turkishText="Aile Bültenimiz"
              />
            </Link>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
