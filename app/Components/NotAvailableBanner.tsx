import { motion } from "framer-motion";

const NotAvailableBanner = () => {
  return (
    <div
      className=" fixed
    transition-all duration-150
    p-1 rounded-lg text-xs text-center justify-center bg-red-400 text-red-700 border border-red-700 z-50"
    >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1>Cabana Not Available!</h1>
      </motion.div>
    </div>
  );
};

export default NotAvailableBanner;
