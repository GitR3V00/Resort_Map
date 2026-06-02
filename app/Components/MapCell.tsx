import Image from "next/image";
import mapIcons from "../Functions/renderMapIcons";
import bookingExists from "../Functions/validateBookings";
import {
  ResortMapIcons,
  BookingData,
  Spot,
} from "../Types/types";
import NotAvailableBanner from "./NotAvailableBanner";

interface MapCellProps {
  icon: ResortMapIcons;
  rowIndex: number;
  colIndex: number;
  bookings: BookingData[];
  hoveredSpot: Spot | null;
  setHoveredSpot: (spot: Spot | null) => void;
  setSelectedSpot: (spot: Spot) => void;
}

const MapCell = ({
  icon,
  rowIndex,
  colIndex,
  bookings,
  hoveredSpot,
  setHoveredSpot,
  setSelectedSpot,
}: MapCellProps) => {
  
    const iconData = mapIcons({
    icon,
    columnIndex: colIndex,
    rowIndex,
  });

  const isBooked = bookingExists(colIndex, rowIndex, bookings);

  const cabanaSpot = icon === "W";
  const isClickable = cabanaSpot && !isBooked;

  const isHovered =
    hoveredSpot?.columnIndex === colIndex &&
    hoveredSpot?.rowIndex === rowIndex;

  const showNotAvailableBanner =
    cabanaSpot && isBooked && isHovered;

  return (
    <span
      onMouseEnter={() =>
        setHoveredSpot({
          columnIndex: colIndex,
          rowIndex,
        })
      }
      onMouseLeave={() => setHoveredSpot(null)}
    >
      {showNotAvailableBanner && <NotAvailableBanner />}

      <Image
        data-testid={`cell-${rowIndex}-${colIndex}`}
        src={iconData.src}
        alt={`spot-${rowIndex}-${colIndex}`}
        width={40}
        height={40}
        onClick={
          isClickable
            ? () =>
                setSelectedSpot({
                  columnIndex: colIndex,
                  rowIndex,
                })
            : undefined
        }
        className={`
          ${iconData.className || ""}
          ${
            isClickable
              ? "animate-pulse cursor-pointer transition-all duration-300 hover:scale-115"
              : ""
          }
          ${
            isBooked
              ? "opacity-50 cursor-not-allowed scale-90"
              : ""
          }
        `}
      />
    </span>
  );
};

export default MapCell;