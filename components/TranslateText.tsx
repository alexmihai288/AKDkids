"use client";
import { useLanguage } from "@/hooks/use-language";
import React from "react";

export const TranslateText = ({
  englishText,
  turkishText,
}: {
  englishText: string;
  turkishText: string;
}) => {
  const { language } = useLanguage();
  return <>{language === "english" ? englishText : turkishText}</>;
};
