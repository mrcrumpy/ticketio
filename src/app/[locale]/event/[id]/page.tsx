import { AVAILABLE_LANG } from "@/constants";
import * as data from "@/mock/bootshaus.json";
import { notFound } from "next/navigation";

const EventPage = ({
  params,
}: {
  params: { locale: AVAILABLE_LANG; id: string };
}) => {
  const { id } = params;
  const { events } = data;

  const event = events?.find(({ id: eventId }) => eventId === id);

  if (!event) return notFound();
  return (
    <div>
      <h1>{event.title}</h1>
      <p>Not yet implemented</p>
    </div>
  );
};

export default EventPage;
