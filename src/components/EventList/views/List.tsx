/** @jsxImportSource @emotion/react */
import { FC } from "react";
import { Box, Button, Chip, Grid, Typography, css } from "@mui/material";
import { TioEvent } from "@/data/event";
import { useI18n } from "@/locales/client";

import { Icon } from "@/components/Icon/Icon";

export const List: FC<{ events: TioEvent[] }> = ({ events }) => {
  const t = useI18n();

  return (
    <>
      {events.map(
        ({ id, title, price, location, date, time, detailLink, soldOut }) => (
          <Grid
            container
            key={id}
            padding={2}
            css={css`
              &:nth-child(odd) {
                background: #f2f2f2;
              }
            `}
          >
            <Grid item xs={12} md={6}>
              <Typography component="h2" variant="h3">
                {title}
              </Typography>
              <Box display="flex">
                <Icon size={18} type="location_on" />
                {location}
              </Box>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography>{t("On", { date })}</Typography>
              <Typography>{t("at", { time })}</Typography>
            </Grid>
            {!soldOut && (
              <Grid item xs={12} md={2}>
                <Typography>{t("Tickets from", { price: "" })}</Typography>
                <strong>{price}</strong>
              </Grid>
            )}
            {soldOut && (
              <Grid item xs={12} md={2}>
                <Chip variant="outlined" color="error" label={t("Sold out")} />
              </Grid>
            )}

            <Grid
              item
              xs={12}
              md={2}
              justifyContent="flex-end"
              display="flex"
              alignItems="center"
            >
              <Button
                variant="contained"
                href={detailLink}
                endIcon={<Icon type="chevron_right" />}
              >
                {t("[overview] To the tickets")}
              </Button>
            </Grid>
          </Grid>
        )
      )}
    </>
  );
};
