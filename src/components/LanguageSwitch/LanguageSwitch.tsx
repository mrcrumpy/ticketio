/** @jsxImportSource @emotion/react */
"use client";
import { MenuItem, Select, css } from "@mui/material";
import { useChangeLocale, useI18n } from "@/locales/client";
import { AVAILABLE_LANG } from "@/constants";
import { FC } from "react";

export const LanguageSwitch: FC<{ value: AVAILABLE_LANG }> = ({ value }) => {
  const changeLocale = useChangeLocale();

  const t = useI18n();

  return (
    <Select
      onChange={(event) => changeLocale(event.target.value as AVAILABLE_LANG)}
      value={value}
    >
      <MenuItem value="de">🇩🇪 {t("German")}</MenuItem>
      <MenuItem value="en">🇩🇬 {t("English")}</MenuItem>
    </Select>
  );
};
