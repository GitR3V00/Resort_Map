interface BookingProps {
    guestName: string;
    room: string;
    cabanaId: string;
}


const bookings: BookingProps[] = [];

export async function POST(req: Request) {

    const body = await req.json();

    const newBooking = {
    guestName: body.guestName,
    room: body.room,
    cabanaId: body.cabanaId
  };

  // Need to add validation, check the guest and room details match a record in Bookings.json along with a valid cabanaId.

    bookings.push(newBooking);
    return Response.json({
        message: 'Booking created successfully',
        bookings
    });
}