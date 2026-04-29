import { guestBookings } from "../booking/route";

export async function GET() {
  return Response.json(guestBookings);
}