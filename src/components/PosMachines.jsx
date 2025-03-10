import React from "react";
import { motion } from "motion/react";

export default function PosMachines() {
  return (
    <motion.section
    //   initial={{ opacity: 0, y: 50 }}
    //   animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gradient-to-r from-blue-100  px-6 py-12 md:px-12 lg:px-20 xl:px-32 rounded-lg shadow-lg"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-evenly gap-8">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Advanced Self-Service POS Kiosks
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed text-justify">
            Enhance your business operations with our modern self-service <b>POS</b> kiosks, 
            designed for efficiency and customer convenience. Featuring high-definition 
            touchscreen displays, seamless payment integration, and a sleek, durable design, 
            these kiosks reduce wait times and improve customer satisfaction. Customize software 
            integration to match your business needs effortlessly.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
          >
            Learn More
          </motion.button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
        <motion.img
  initial={{ opacity: 0, x: 200 }} // Start off-screen to the right
  whileInView={{ opacity: 1, x: 0 }} // Move to position when in view
  transition={{ type: "spring", stiffness: 100,duration:1, damping: 15 }}
  whileHover={{ scale: 1.05 }} // Slight scale-up effect on hover
  viewport={{ once: true, amount: 0.3 }} // Ensures animation triggers once when 30% visible
  src="/pics/img2.jpg"
  alt="POS Kiosk"
  className="h-[350px] sm:h-[300px] md:h-[400px] border-1 border-blue-500 rounded-2xl shadow-lg object-cover"
/>

        </div>
      </div>
    </motion.section>
  );
}
