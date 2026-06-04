import Image from "next/image";
import mapIcons from "../Functions/renderMapIcons";
import NotAvailableBanner from "./NotAvailableBanner";
import { getCellState } from "../Functions/getCellState";
import { ResortMapIcons, BookingData, Spot } from "../Types/types";

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

  const {
    isBooked,
    isClickable,
    showNotAvailableBanner,
  } = getCellState({
    icon,
    colIndex,
    rowIndex,
    bookings,
    hoveredSpot,
  });

  return (
    <span
      onMouseEnter={() =>
        setHoveredSpot({ columnIndex: colIndex, rowIndex })
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
          ${isClickable ? "animate-pulse cursor-pointer transition-all duration-300 hover:scale-115" : ""}
          ${isBooked ? "opacity-50 cursor-not-allowed scale-90" : ""}
        `}
      />
    </span>
  );
};

export default MapCell;