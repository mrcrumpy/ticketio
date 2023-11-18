import * as events from "@/mock/bootshaus.json";

export async function GET() {
  return Response.json(events);
}
