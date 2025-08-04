"use client";

import { motion } from "framer-motion";

export default function ButtonLihatSelengkapnya() {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-teal-500 text-white font-poppins font-semibold text-xl lg:text-2xl py-4 px-8 rounded-3xl block mx-auto mt-12"
    >
      Lihat Selengkapnya
    </motion.button>
  );
}
