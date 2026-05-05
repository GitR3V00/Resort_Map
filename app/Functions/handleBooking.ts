import { BookingData, BookingResult } from "../Types/types";

export default async function handleBooking({
  guestName,
  roomNumber,
  columnIndex,
  rowIndex,
}: BookingData): Promise<BookingResult> {
  try {
    const res = await fetch("/api/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        guestName,
        room: roomNumber, 
        columnIndex,
        rowIndex,
      }),
    });

    const data = await res.json().catch(() => null);

    if (!res.ok) {
      return {
        ok: false,
        error: data?.message ?? "Booking request failed",
      };
    }

    return {
      ok: true,
      data,
    };
  } catch (error) {
    console.error("handleBooking error:", error);

    return {
      ok: false,
      error: "Network error. Please try again.",
    };
  }
}