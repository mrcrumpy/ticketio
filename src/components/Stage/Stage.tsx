/** @jsxImportSource @emotion/react */
"use client";
import { AVAILABLE_LANG, STORES } from "@/constants";
import { Grid, css } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const Stage: FC<{ locale: AVAILABLE_LANG }> = ({ locale }) => {
  const currentStore = STORES[locale];

  return (
    <Grid container justifyContent="center">
      <Link href={`/${locale}`}>
        <Image
          src={currentStore.logo}
          alt={currentStore.name}
          width={420}
          height={233}
          priority
          css={css`
            max-width: 90%;
            height: auto;
          `}
        />
      </Link>
    </Grid>
  );
};
