import { motion } from "framer-motion";

const NotAvailableBanner = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div
        className=" fixed
    transition-all duration-150
    p-1 rounded-lg text-xs text-center justify-center bg-red-400 text-red-500 border border-red-500 z-40"
      >
        <h1>Cabana Not Available!</h1>
      </div>
    </motion.div>
  );
};

export default NotAvailableBanner;
