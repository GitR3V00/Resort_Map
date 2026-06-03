"use client";

import { useState } from "react";
import handleBooking from "../Functions/handleBooking";
import { BookingData } from "../Types/types";
import type { SyntheticEvent } from "react";

export interface BookingModalFormProps {
  columnIndex: number;
  rowIndex: number;
  onClose?: () => void;
  onBookingSuccess: (booking: BookingData) => void;
}

const BookingModalForm = ({
  columnIndex,
  rowIndex,
  onClose,
  onBookingSuccess,
}: BookingModalFormProps) => {
  const [guestName, setGuestName] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

 const submitBooking = async (
  e: SyntheticEvent<HTMLFormElement>
) => {
  e.preventDefault();

    if (loading) return;

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const result = await handleBooking({
        rowIndex,
        columnIndex,
        guestName,
        roomNumber,
      });

      if (!result.ok) {
        setError(result.error);
        return;
      }

      setSuccess(
        result.data?.message ?? "Booking successful"
      );

      onBookingSuccess({
        rowIndex,
        columnIndex,
        guestName,
        roomNumber,
      });

      setGuestName("");
      setRoomNumber("");

      setTimeout(() => {
        onClose?.();
      }, 1500);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-left">
      <form onSubmit={submitBooking}>
        <label className="block mb-2">
          Name:
          <input
            type="text"
            className="border p-1 w-full"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
          />
        </label>

        <label className="block mb-2">
          Room:
          <input
            type="text"
            className="border p-1 w-full"
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
          />
        </label>

        {error && (
          <p className="text-red-500 mt-2 p-2 border border-red-500 rounded bg-red-300">
            {error}
          </p>
        )}

        {success && (
          <p className="text-green-500 mt-2 p-2 border border-green-500 rounded bg-green-300">
            {success}
          </p>
        )}

        <button
          disabled={loading}
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg cursor-pointer hover:bg-blue-400 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Booking..." : "Book Now"}
        </button>
      </form>
    </div>
  );
};

export default BookingModalForm;