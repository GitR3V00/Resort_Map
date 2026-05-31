"use client";

import Image from "next/image";
import mapIcons from "../Functions/renderMapIcons";
import { BookingData, ResortMapIcons, Spot } from "../Types/types";
import { useState } from "react";
import BookingModal from "./BookingModal";
import bookingExists from "../Functions/validateBookings";

import NotAvailableBanner from "./NotAvailableBanner";
import { motion } from "framer-motion";

export interface ResortMapRenderProps {
  grid: ResortMapIcons[][];
}

const ResortMapRender = ({ grid }: ResortMapRenderProps) => {
  const [selectedSpot, setSelectedSpot] = useState<Spot | null>(null);

  const [hoveredSpot, setHoveredSpot] = useState<Spot | null>(null);

  const [bookings, setBookings] = useState<BookingData[]>([]);

  const handleNewBooking = (newBooking: BookingData) => {
    setBookings((prev) => [...prev, newBooking]);
  };

  return (
    <>
      {selectedSpot && (
        <BookingModal
          onBookingSuccess={handleNewBooking}
          columnIndex={selectedSpot.columnIndex}
          rowIndex={selectedSpot.rowIndex}
          onClose={() => setSelectedSpot(null)}
        />
      )}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="h-full w-full mx-auto shadow-2xl p-2">
          {grid.map((row, rowIndex) => (
            <div className="flex" key={rowIndex}>
              {row.map((icon, colIndex) => {
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
                    key={colIndex}
                    onMouseEnter={() =>
                      setHoveredSpot({ columnIndex: colIndex, rowIndex })
                    }
                    onMouseLeave={() => setHoveredSpot(null)}
                  >
                    {showNotAvailableBanner && <NotAvailableBanner />}

                    <Image
                      data-testid={`cell-${rowIndex}-${colIndex}`}
                      onClick={
                        isClickable
                          ? () =>
                              setSelectedSpot({
                                columnIndex: colIndex,
                                rowIndex,
                              })
                          : undefined
                      }
                      src={iconData.src}
                      alt={`spot-${rowIndex}-${colIndex}`}
                      width={40}
                      height={40}
                      className={`
                      ${iconData.className || ""}
                      ${
                        isClickable
                          ? "animate-pulse cursor-pointer transition-all duration-300 hover:scale-115"
                          : ""
                      }
                      ${isBooked ? "opacity-50 cursor-not-allowed scale-90" : ""}
                    `}
                    />
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default ResortMapRender;
