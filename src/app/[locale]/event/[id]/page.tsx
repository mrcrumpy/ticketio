import { AvailableLang } from "@/constants";
import { getEvent } from "@/mock/getEvents";
import { notFound } from "next/navigation";

const EventPage = async ({
  params,
}: {
  params: { locale: AvailableLang; id: string };
}) => {
  const { id } = params;

  const event = await getEvent(id);

  if (!event) return notFound();
  return (
    <div>
      <h1>{event.title}</h1>
      <p>Not yet implemented</p>
    </div>
  );
};

export default EventPage;
