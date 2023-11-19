import events from "@/mock/bootshaus.json";

export const getEvents = async () => {
  return Object.values(events);
};

export const getEvent = async (id: string) => {
  return Object.values(events)?.find(({ id: eventId }) => eventId === id);
};
