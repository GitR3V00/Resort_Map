import { BookingData } from "../Types/types";


export default function bookingExists(
  colIndex: number,
  rowIndex: number,
  bookings: BookingData[]
): boolean {
  return bookings.some(
    booking =>
      booking.columnIndex === colIndex &&
      booking.rowIndex === rowIndex
  );
}