/** @jsxImportSource @emotion/react */
"use client";
import { MenuItem, Select } from "@mui/material";
import { useChangeLocale, useI18n } from "@/locales/client";
import { AvailableLang } from "@/constants";
import { FC } from "react";

export const LanguageSwitch: FC<{ value: AvailableLang }> = ({ value }) => {
  const changeLocale = useChangeLocale();

  const t = useI18n();

  return (
    <Select
      onChange={(event) => changeLocale(event.target.value as AvailableLang)}
      value={value}
    >
      <MenuItem value="de">🇩🇪 {t("German")}</MenuItem>
      <MenuItem value="en">🇩🇬 {t("English")}</MenuItem>
    </Select>
  );
};
