"use client";

import { BookingData, ResortMapIcons, Spot } from "../Types/types";
import { useState } from "react";
import BookingModal from "./BookingModal";
import { motion } from "framer-motion";
import MapCell from "./MapCell"

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
      {row.map((icon, colIndex) => (
      <MapCell
        key={colIndex}
        icon={icon}
        rowIndex={rowIndex}
        colIndex={colIndex}
        bookings={bookings}
        hoveredSpot={hoveredSpot}
        setHoveredSpot={setHoveredSpot}
        setSelectedSpot={setSelectedSpot}
      />
    ))}
  </div>
))}
            
        </div>
      </motion.div>
    </>
  );
};

export default ResortMapRender;
