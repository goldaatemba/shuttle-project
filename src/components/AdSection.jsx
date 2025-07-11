import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function AdSection() {
  return (
    <section className="w-full bg-gradient-to-r from-black to-gray-900 py-16 px-6 text-white">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-bold text-yellow-400"
        >
          Prestige Shuttles — The Best or Nothing, Travel Across Kenya
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-lg md:text-xl text-gray-300"
        >
          Whether you're heading to{" "}
          <span className="font-semibold text-yellow-300">Mombasa</span>,{" "}
          <span className="font-semibold text-yellow-300">Nairobi</span>, or{" "}
          <span className="font-semibold text-yellow-300">Kisumu</span>,
          <span className="font-semibold text-yellow-300">Kakamega</span>, we
          offer reliable, scheduled services designed for comfort, safety, and
          effortless booking.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="text-xl font-semibold italic text-yellow-200"
        >
          Travel smart. Travel Prestige.
        </motion.p>
      </div>
    </section>
  );
}

export default AdSection;