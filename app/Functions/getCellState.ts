import { BookingData, ResortMapIcons, Spot } from "../Types/types";
import bookingExists from "../Functions/validateBookings";

interface GetCellStateProps {
  icon: ResortMapIcons;
  colIndex: number;
  rowIndex: number;
  bookings: BookingData[];
  hoveredSpot: Spot | null;
}

export function getCellState({
  icon,
  colIndex,
  rowIndex,
  bookings,
  hoveredSpot,
}: GetCellStateProps) {
  const isBooked = bookingExists(colIndex, rowIndex, bookings);

  const isHovered =
    hoveredSpot?.columnIndex === colIndex &&
    hoveredSpot?.rowIndex === rowIndex;

  const isCabanaSpot = icon === "W";

  return {
    isBooked,
    isHovered,
    isClickable: isCabanaSpot && !isBooked,
    showNotAvailableBanner: isCabanaSpot && isBooked && isHovered,
  };
}