/** @jsxImportSource @emotion/react */
import { FC } from "react";
import {
  Box,
  Button,
  Chip,
  Grid,
  List,
  ListItem,
  Typography,
  css,
} from "@mui/material";
import { TioEvent } from "@/data/event";
import Image from "next/image";
import { useI18n } from "@/locales/client";
import { Icon } from "@/components/Icon/Icon";

export const Tiles: FC<{ events: TioEvent[] }> = ({ events }) => {
  const t = useI18n();
  return (
    <Grid>
      {events.map(
        ({
          id,
          image,
          title,
          date,
          time,
          price,
          location,
          detailLink,
          info,
          warning,
          tickets,
          soldOut,
        }) => (
          <Grid container key={id} marginBottom={4}>
            <Grid item xs={12} md={5}>
              <Box
                component="div"
                css={css`
                  border-radius: 8px;
                  overflow: hidden;
                  line-height: 0;
                `}
              >
                <Image
                  src={image}
                  alt={title}
                  width={520}
                  height={230}
                  objectFit="cover"
                  objectPosition="center center"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={5} sx={{ paddingTop: { xs: 2, md: 0 } }}>
              <List disablePadding>
                <ListItem>
                  <Typography
                    component="h3"
                    sx={{ typography: { xs: "h3", md: "h2" } }}
                  >
                    {title}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Icon type="calendar_month" size={18} marginRight={0.5} />
                  {date}
                  <Icon
                    type="schedule"
                    size={18}
                    marginRight={0.5}
                    marginLeft={1}
                  />
                  {time}
                </ListItem>
                <ListItem>
                  <Icon type="location_on" size={18} marginRight={0.5} />
                  {location}
                </ListItem>
                {!soldOut && (
                  <ListItem>
                    <Icon
                      type="confirmation_number"
                      size={18}
                      marginRight={0.5}
                    />
                    {t("Tickets from", { price })}
                  </ListItem>
                )}
                {soldOut && (
                  <ListItem>
                    <Chip
                      variant="outlined"
                      color="error"
                      label={t("Sold out")}
                    />
                  </ListItem>
                )}
                {info && (
                  <ListItem>
                    <Icon type="info" size={18} marginRight={0.5} />
                    {info}
                  </ListItem>
                )}
                {warning && !soldOut && (
                  <ListItem sx={{ color: "warning.main" }}>
                    <Icon type="warning" size={18} marginRight={0.5} />
                    <Typography>
                      {t("Only amount tickets left", {
                        amount: tickets.amount,
                      })}
                    </Typography>
                  </ListItem>
                )}
              </List>
            </Grid>
            <Grid
              item
              xs={12}
              md={2}
              justifyContent="flex-end"
              alignItems="flex-start"
              display="flex"
              paddingTop={4}
              sx={{ paddingTop: { xs: 1, md: 4 } }}
            >
              <Button
                variant="contained"
                href={detailLink}
                endIcon={
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                }
              >
                {t("[overview] To the tickets")}
              </Button>
            </Grid>
          </Grid>
        )
      )}
    </Grid>
  );
};
