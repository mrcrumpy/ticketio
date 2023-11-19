/** @jsxImportSource @emotion/react */
"use client";
import { ChangeEvent, FC } from "react";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import { useEventList } from ".";
import { IEvent } from "./useEventList";
import { AvailableLang } from "@/constants";
import { List } from "./views/List";
import { Tiles } from "./views/Tiles";
import { Calendar } from "./views/Calendar";
import { Grid, Pagination, Typography, styled } from "@mui/material";
import { useI18n } from "@/locales/client";
import { SearchInput } from "../SearchInput/SearchInput";
import { Icon } from "@/components/Icon/Icon";
import { Event } from "schema-dts";
import { JsonLd } from "react-schemaorg";
import { useRouter } from "next/navigation";

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

const EventList: FC<{
  events: IEvent[];
  locale: AvailableLang;
  page: number;
}> = ({ events: rawEvents, locale, page }) => {
  const {
    displayMode,
    setDisplayMode,
    events,
    setSearchValue,
    currentStore,
    pages,
  } = useEventList(rawEvents, locale, page);

  const t = useI18n();
  const router = useRouter();

  const handlePaginationChange = (e: ChangeEvent<unknown>, value: number) => {
    router.push(`/${locale}/${value}`);
  };

  return (
    <>
      <Grid container marginBottom={3}>
        <Grid item xs={12} md={6}>
          <Typography component="h1" variant="h1">
            {t("[overview] Tickets for", { name: currentStore.name })}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container justifyContent="flex-end">
            <Grid item xs={6} md="auto" display="flex" paddingRight={2}>
              <SearchInput onChange={setSearchValue} />
            </Grid>
            <Grid
              item
              xs={6}
              md="auto"
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
      </Grid>
      {displayMode === "list" && <List events={events} />}
      {displayMode === "tiles" && <Tiles events={events} />}
      {displayMode === "calendar" && <Calendar events={events} />}
      <Pagination count={pages} page={page} onChange={handlePaginationChange} />

      {events.map(
        ({ id, title, startDate, endDate, address, location, image }) => (
          <JsonLd<Event>
            key={id}
            item={{
              "@context": "https://schema.org",
              "@type": "Event",
              name: title,
              startDate,
              endDate,
              eventAttendanceMode:
                "https://schema.org/OfflineEventAttendanceMode",
              eventStatus: "https://schema.org/EventScheduled",
              location: {
                "@type": "Place",
                name: location,
                address,
              },
              image,
            }}
          />
        )
      )}
    </>
  );
};

export default EventList;
