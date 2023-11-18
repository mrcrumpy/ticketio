import * as events from "@/mock/bootshaus.json";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const event = events.find(({ id: eventId }) => id === eventId);

  if (!event) {
    return new Response("", {
      status: 404,
    });
  }
  return Response.json(events);
}
