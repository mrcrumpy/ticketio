/** @jsxImportSource @emotion/react */
"use client";
import { FC } from "react";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import { useEventList } from ".";
import { IEvent } from "./useEventList";
import { AVAILABLE_LANG } from "@/constants";
import { List } from "./views/List";
import { Tiles } from "./views/Tiles";
import { Calendar } from "./views/Calendar";
import {
  Grid,
  Input,
  InputAdornment,
  Typography,
  css,
  styled,
} from "@mui/material";
import { useI18n } from "@/locales/client";
import { SearchInput } from "../SearchInput/SearchInput";
import { Icon } from "@/components/Icon/Icon";

const StyledToggleButton = styled(ToggleButton)`
  border: 0;
  border-radius: 6px !important;
  margin: 0 !important;
  color: black;

  &.Mui-selected {
    background: black;
    color: white;
  }
`;

const EventList: FC<{ events: IEvent[]; locale: AVAILABLE_LANG }> = ({
  events: rawEvents,
  locale,
}) => {
  const { displayMode, setDisplayMode, events, setSearchValue, currentStore } =
    useEventList(rawEvents, locale);

  const t = useI18n();

  return (
    <>
      <Grid container marginBottom={3}>
        <Grid item xs={12} md={6}>
          <Typography component="h1" variant="h1">
            {t("[overview] Tickets for", { name: currentStore.name })}
          </Typography>
        </Grid>
        <Grid container xs={12} md={6} justifyContent="flex-end">
          <Grid item xs="auto" display="flex" paddingRight={2}>
            <SearchInput onChange={setSearchValue} />
          </Grid>
          <Grid
            item
            xs="auto"
            alignItems="center"
            display="flex"
            justifyContent="flex-end"
          >
            {t("[overview] View:")}&nbsp;
            <ToggleButtonGroup
              value={displayMode}
              exclusive
              onChange={(event, value) => setDisplayMode(value)}
            >
              <StyledToggleButton value="tiles">
                <Icon type="grid_view" />
              </StyledToggleButton>
              <StyledToggleButton value="list">
                <Icon type="list" />
              </StyledToggleButton>
              <StyledToggleButton value="calendar">
                <Icon type="calendar_month" />
              </StyledToggleButton>
            </ToggleButtonGroup>
          </Grid>
        </Grid>
      </Grid>
      {displayMode === "list" && <List events={events} />}
      {displayMode === "tiles" && <Tiles events={events} />}
      {displayMode === "calendar" && <Calendar events={events} />}
    </>
  );
};

export default EventList;
