import { FC } from "react";

export const Icon: FC<{ type: string }> = ({ type }) => {
  return <span className="material-symbols-outlined">{type}</span>;
};
