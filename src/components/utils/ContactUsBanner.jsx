import React from "react";
import { motion } from "motion/react";
export default function ContactUsBanner() {
  return (
    <section className="relative w-full py-16 bg-gradient-to-r from-blue-600 to-indigo-800 text-white text-center px-6">
      <div className="container mx-auto flex flex-col items-center space-y-6">
        

        <motion.h2 
          className="text-4xl md:text-5xl font-extrabold"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }} 
        >
          Build Your Perfect Product
        </motion.h2>

        {/* Description */}
        <motion.p
          className="max-w-2xl text-lg md:text-xl text-white/90"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <b>Whether it's a small tweak to our existing products or a fully custom design, 
          our expert team is here to bring your vision to life.  
          Get in touch to discuss your unique requirements!</b>
        </motion.p>

        {/* Contact Button */}
        <motion.a
          href="/contact"
          className="px-6 py-3 bg-white text-blue-600 font-semibold text-lg rounded-lg shadow-lg hover:bg-gray-200 transition"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Contact Us
        </motion.a>
      </div>
    </section>
  );
}
