import { EventList } from "@/components/EventList";
import { AvailableLang, STORES } from "@/constants";
import { notFound } from "next/navigation";
import { Container, Grid } from "@mui/material";
import { Stage } from "@/components/Stage/Stage";
import { LanguageSwitch } from "@/components/LanguageSwitch/LanguageSwitch";
import { IEvent } from "@/components/EventList/useEventList";
import { getEvents } from "@/mock/getEvents";

export default async function ListingPage({
  params,
}: {
  params: { locale: AvailableLang; page: string };
}) {
  const { locale, page } = params;
  const events = await getEvents();

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
