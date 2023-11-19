import { EventList } from "@/components/EventList";
import { events } from "@/mock/bootshaus.json";
import { AVAILABLE_LANG, STORES } from "@/constants";
import { notFound } from "next/navigation";
import { Container, Grid } from "@mui/material";
import { Stage } from "@/components/Stage/Stage";
import { LanguageSwitch } from "@/components/LanguageSwitch/LanguageSwitch";
import { IEvent } from "@/components/EventList/useEventList";

export default function ListingPage({
  params,
}: {
  params: { locale: AVAILABLE_LANG; page: string };
}) {
  const { locale, page } = params;

  if (!Object.keys(STORES).includes(locale)) return notFound();
  return (
    <main>
      <Container>
        <Grid container justifyContent="flex-end">
          <LanguageSwitch value={locale} />
        </Grid>
        <Stage locale={locale} />
        <EventList
          events={events as unknown as IEvent[]}
          locale={locale}
          page={parseInt(page)}
        />
      </Container>
    </main>
  );
}
