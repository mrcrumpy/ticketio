/** @jsxImportSource @emotion/react */
import { css } from "@mui/material";
import { FC } from "react";

export const Icon: FC<{
  type: string;
  size?: number;
  marginLeft?: number;
  marginRight?: number;
}> = ({ type, size = 24, marginLeft = 0, marginRight = 0 }) => {
  return (
    <span
      className="material-symbols-outlined"
      css={css`
        font-size: ${size}px;
        margin-left: ${marginLeft}em;
        margin-right: ${marginRight}em;
      `}
    >
      {type}
    </span>
  );
};
