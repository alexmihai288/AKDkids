"use client";
import React from "react";
import { Container } from "./Container";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Image from "next/image";
import { useLanguage } from "@/hooks/use-language";
import { cn } from "@/lib/utils";

export const ChangeLanguage = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="bg-[#f7f5f2] p-5">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2.5">
              <FaPhoneAlt className="text-sm text-primaryRed self-start" />
              <p>Phone number:</p>
              <span>0850 80 80 453</span>
            </div>
            <div className="flex items-center gap-2.5">
              <IoIosMail className="text-xl text-primaryRed self-start" />
              <span>info@akdkids.com</span>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <div
              onClick={() => setLanguage("english")}
              className={cn(
                "cursor-pointer flex items-center gap-2.5 border-2 border-[#f7f5f2] p-2 rounded-full ",
                language === "english" && "border-primaryRed"
              )}
            >
              <Image
                src="/english-logo.png"
                alt="english-logo"
                width={30}
                height={30}
              />
              <p>English</p>
            </div>
            <div
              onClick={() => setLanguage("turkish")}
              className={cn(
                "cursor-pointer flex items-center gap-2.5 border-2 border-[#f7f5f2] p-2 rounded-full ",
                language === "turkish" && "border-primaryRed"
              )}
            >
              <Image
                src="/turkey-logo.png"
                alt="turkey-logo"
                width={30}
                height={30}
              />
              <p>Turkish</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
