import { describe, it, expect, vi, afterEach } from "vitest";
import handleBooking from "./handleBooking";
import { BookingData } from "../Types/types";

describe("handleBooking", () => {
  const bookingData: BookingData = {
    guestName: "Grace Lee",
    roomNumber: "107",
    columnIndex: 4,
    rowIndex: 12,
  };

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns success when API responds with ok", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ message: "Booking created successfully" }),
    });

    const result = await handleBooking(bookingData);

    expect(global.fetch).toHaveBeenCalledWith("/api/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        guestName: bookingData.guestName,
        room: bookingData.roomNumber,
        columnIndex: bookingData.columnIndex,
        rowIndex: bookingData.rowIndex,
      }),
    });

    expect(result.ok).toBe(true);

    if (result.ok) {
      expect(result.data.message).toBe("Booking created successfully");
    }
  });

  
  it("returns API error when response is not ok", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      json: async () => ({ message: "Cabana already booked" }),
    });

    const result = await handleBooking(bookingData);

    expect(result.ok).toBe(false);

    if (!result.ok) {
      expect(result.error).toBe("Cabana already booked");
    }
  });


  it("returns network error when fetch fails", async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error("Network failure"));

    const result = await handleBooking(bookingData);

    expect(result.ok).toBe(false);

    if (!result.ok) {
      expect(result.error).toBe("Network error. Please try again.");
    }
  });
});