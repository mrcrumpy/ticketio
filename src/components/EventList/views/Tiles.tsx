/** @jsxImportSource @emotion/react */
import { FC } from "react";
import {
  Box,
  Button,
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
      {events.map(({ id, image, title, date, time, price, location }) => (
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
          <Grid item xs={12} md={5}>
            <List
              disablePadding
              css={css`
                font-size: 18px;
                leine-height: 1.56;
              `}
            >
              <ListItem>
                <Typography component="h3" variant="h2">
                  {title}
                </Typography>
              </ListItem>
              <ListItem>
                <Icon type="calendar_month" />
                &nbsp;{date}&nbsp;
                <Icon type="schedule" />
                &nbsp;{time}
              </ListItem>
              <ListItem>
                <Icon type="location_on" />
                &nbsp;{location}
              </ListItem>
              <ListItem>
                <Icon type="confirmation_number" />
                &nbsp;{t("Tickets from", { price })}
              </ListItem>
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
          >
            <Button
              variant="contained"
              endIcon={
                <span className="material-symbols-outlined">chevron_right</span>
              }
            >
              {t("[overview] To the tickets")}
            </Button>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};