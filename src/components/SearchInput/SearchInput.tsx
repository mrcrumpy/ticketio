/** @jsxImportSource @emotion/react */
import { Input, InputAdornment, css } from "@mui/material";
import { FC } from "react";

export const SearchInput: FC<{ onChange: (value: string) => void }> = ({
  onChange,
}) => {
  return (
    <Input
      disableUnderline
      startAdornment={
        <InputAdornment
          position="start"
          css={css`
            color: black;
          `}
        >
          <span className="material-symbols-outlined">search</span>
        </InputAdornment>
      }
      onChange={(event) => onChange(event.target.value)}
    />
  );
};
