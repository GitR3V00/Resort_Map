import { BookingData } from "../Functions/handleBooking";
import BookingModalForm from "./BookingModalForm";
import { motion } from "framer-motion";

interface BookingModalProps {
  columnIndex: number;
  rowIndex: number;
  onClose?: () => void;
  onBookingSuccess: (booking: BookingData) => void;
}

const BookingModal = ({
  columnIndex,
  rowIndex,
  onClose,
  onBookingSuccess,
}: BookingModalProps) => {
  return (
    <div className="w-full h-full absolute inset-0 bg-black/50 justify-center items-center flex z-50">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="relative min-w-96 min-h-64 bg-white p-4 rounded-lg shadow-lg">
          <div className="absolute top-0 right-0 p-2">
            <button
              onClick={onClose}
              className="text-gray-500 text-2xl hover:text-gray-700 cursor-pointer"
            >
              &times;
            </button>
          </div>
          <h2 className="text-xl font-bold mb-2 underline">Book a Cabana</h2>
          <BookingModalForm
            columnIndex={columnIndex}
            rowIndex={rowIndex}
            onClose={onClose}
            onBookingSuccess={onBookingSuccess}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default BookingModal;
