/** @jsxImportSource @emotion/react */
import { Input, InputAdornment } from "@mui/material";
import { FC } from "react";
import { Icon } from "@/components/Icon/Icon";

export const SearchInput: FC<{ onChange: (value: string) => void }> = ({
  onChange,
}) => {
  return (
    <Input
      disableUnderline
      startAdornment={
        <InputAdornment position="start">
          <Icon type="search" />
        </InputAdornment>
      }
      onChange={(event) => onChange(event.target.value)}
    />
  );
};
