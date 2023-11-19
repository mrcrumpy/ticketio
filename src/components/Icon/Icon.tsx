/** @jsxImportSource @emotion/react */
import { css } from "@mui/material";
import { FC } from "react";

export const Icon: FC<{ type: string; size?: number }> = ({
  type,
  size = 24,
}) => {
  return (
    <span
      className="material-symbols-outlined"
      css={css`
        font-size: ${size}px;
      `}
    >
      {type}
    </span>
  );
};
