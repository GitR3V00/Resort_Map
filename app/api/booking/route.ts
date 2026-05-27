import bookingData from "@/bookings.json";

interface BookingProps {
    guestName: string;
    room: string;
    columnIndex: number;
    rowIndex: number;
}

export const guestBookings: BookingProps[] = [];

export async function POST(req: Request) {
  const body = await req.json();

  if (!body) {
    return Response.json({ message: "Missing request body" }, { status: 400 });
  }

  const { guestName, room, columnIndex, rowIndex } = body;

  if (!guestName || !room || columnIndex === undefined || rowIndex === undefined) {
    return Response.json(
      { message: "Invalid booking data" },
      { status: 400 }
    );
  }

  const newBooking: BookingProps = {
    guestName,
    room,
    columnIndex,
    rowIndex,
  };


  const validBooking = bookingData.find(
    (entry) =>
      entry.room === room &&
      entry.guestName.toLowerCase().trim() === guestName.toLowerCase().trim()
  );

  if (!validBooking) {
    return Response.json(
      { message: "Guest name and room do not match our records" },
      { status: 400 }
    );
  }

  if (
    guestBookings.find(
      (b) =>
        b.columnIndex === columnIndex &&
        b.rowIndex === rowIndex
    )
  ) {
    return Response.json(
      { message: "Cabana already booked" },
      { status: 400 }
    );
  }

  if (
    guestBookings.find(
      (b) =>
        b.guestName === guestName &&
        b.room === room &&
        b.columnIndex === columnIndex &&
        b.rowIndex === rowIndex
    )
  ) {
    return Response.json(
      { message: "Booking already exists" },
      { status: 400 }
    );
  }

  const guestAlreadyBooked = guestBookings.find(
  (b) =>
    b.guestName.toLowerCase().trim() === newBooking.guestName.toLowerCase().trim() &&
    b.room === newBooking.room
);

 if (guestAlreadyBooked) {
  return Response.json(
    { message: "Guest already has an active booking for today" },
    { status: 400 }
  );
}

  guestBookings.push(newBooking);

  return Response.json({
    message: "Booking created successfully",
  });
}