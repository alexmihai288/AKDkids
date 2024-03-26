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
import { usePathname } from "next/navigation";
export const BranchesMenu = ({ whereClause }: { whereClause?: string }) => {
  const pathname = usePathname();
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
              englishText="
            Branches
            "
              turkishText="Şubeler"
            />
          </NavigationMenuTrigger>
          <NavigationMenuContent className="py-2.5 flex flex-col font-bold">
            <Link
              href="/branches/1"
              className={cn(
                "text-nowrap p-2.5 hover:text-primaryRed transition-colors",
                pathname === "/branches/1" && "text-primaryRed"
              )}
            >
              Mareşal AKD kids
            </Link>
            <Link
              href="/branches/2"
              className={cn(
                "text-nowrap p-2.5 hover:text-primaryRed transition-colors",
                pathname === "/branches/2" && "text-primaryRed"
              )}
            >
              Uydukent AKD kids
            </Link>
            <Link
              href="/branches/3"
              className={cn(
                "text-nowrap p-2.5 hover:text-primaryRed transition-colors",
                pathname === "/branches/3" && "text-primaryRed"
              )}
            >
              Triovista AKD kids
            </Link>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
