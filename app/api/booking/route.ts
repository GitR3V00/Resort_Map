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

    const newBooking:BookingProps = {
    guestName: body.guestName,
    room: body.room,
    columnIndex: body.columnIndex,
    rowIndex: body.rowIndex
  };

  const validBooking = bookingData.find(
  (entry) =>
    entry.room === newBooking.room &&
    entry.guestName.toLowerCase().trim() === newBooking.guestName.toLowerCase().trim()
);

if (!validBooking) {
  return Response.json(
    { message: 'Guest name and room do not match our records' },
    { status: 400 }
  );
}

  if(!newBooking.guestName || !newBooking.room){
    return Response.json({
        message: 'Guest name and room number are required',
    }, { status: 400 });
  }


  if(!newBooking.guestName || !newBooking.room || newBooking.columnIndex === undefined || newBooking.rowIndex === undefined) {
    return Response.json({
        message: 'Invalid booking data',
    }, { status: 400 });
  }

  if(guestBookings.find(booking => booking.columnIndex === newBooking.columnIndex && booking.rowIndex === newBooking.rowIndex)) {
    return Response.json({
        message: 'Cabana already booked',
    }, { status: 400 });
  }

if (guestBookings.find(
  booking =>
    booking.guestName === newBooking.guestName &&
    booking.room === newBooking.room &&
    booking.columnIndex === newBooking.columnIndex &&
    booking.rowIndex === newBooking.rowIndex
)) {
  return Response.json({
    message: 'Booking already exists',
  }, { status: 400 });
}

  guestBookings.push(newBooking);
  console.log("Updated bookings:", guestBookings);
  return Response.json({
      message: 'Booking created successfully',
      guestBookings
    });
}