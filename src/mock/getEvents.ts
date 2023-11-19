import { events } from "@/mock/bootshaus.json";

export const getEvents = async () => {
  return events;
};

export const getEvent = async (id: string) => {
  return events?.find(({ id: eventId }) => eventId === id);
};
