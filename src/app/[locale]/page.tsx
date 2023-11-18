import { EventList } from "@/components/EventList";
import * as events from "@/mock/bootshaus.json";
import { AVAILABLE_LANG, STORES } from "@/constants";
import { notFound } from "next/navigation";
import { Container, Grid } from "@mui/material";
import { Stage } from "@/components/Stage/Stage";
import { LanguageSwitch } from "@/components/LanguageSwitch/LanguageSwitch";

export default function ListingPage({
  params,
}: {
  params: { locale: AVAILABLE_LANG };
}) {
  const { locale } = params;

  if (!Object.keys(STORES).includes(locale)) return notFound();
  return (
    <main>
      <Container>
        <Grid container xs={12} justifyContent="flex-end">
          <LanguageSwitch value={locale} />
        </Grid>
        <Stage locale={locale} />
        <EventList events={Object.values(events)} locale={locale} />
      </Container>
    </main>
  );
}
