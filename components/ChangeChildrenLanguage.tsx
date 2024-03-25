"use client";
import {
  EducationModelsType,
} from "@/constants";
import { useLanguage } from "@/hooks/use-language";
import React from "react";

export const ChangeChildrenLanguage = ({
  educationModel,
}: {
  educationModel: EducationModelsType;
}) => {
  const { language } = useLanguage();
  return (
    <>
      {language === "english"
        ? educationModel.englishChildren
        : educationModel.turkishChildren}
    </>
  );
};
