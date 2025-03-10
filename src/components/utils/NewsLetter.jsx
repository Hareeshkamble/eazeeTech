import React, { useState } from "react";
import { motion } from "framer-motion";

export default function NewsletterSubscription() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubscribe = () => {
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setIsSubscribed(true);
    setEmail("");
    setError("");
  };

  return (
    <section className="relative w-full py-16 bg-gradient-to-r from-blue-600 to-indigo-800 text-white px-6 text-center">
      <div className="container mx-auto flex flex-col items-center space-y-6">
        
        <motion.h2 
          className="text-4xl md:text-5xl font-extrabold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Stay Updated with Our Newsletter
        </motion.h2>

        <motion.p
          className="max-w-2xl text-lg md:text-xl text-white/90"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Get the latest industry insights, product updates, and exclusive offers 
          straight to your inbox. Subscribe today!
        </motion.p>

        {!isSubscribed ? (
          <motion.div 
            className="w-full max-w-md flex flex-col space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 rounded-lg  focus:outline-none focus:ring-2 border-2 border-white text-white focus:ring-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <p className="text-red-400 text-sm">{error}</p>}

            <button
              className="w-full px-6 py-3 bg-white text-blue-600 font-semibold text-lg rounded-lg shadow-lg hover:bg-gray-200 transition"
              onClick={handleSubscribe}
            >
              Subscribe Now
            </button>
          </motion.div>
        ) : (
          <motion.div 
            className="flex items-center space-x-3 bg-green-500 text-white py-3 px-6 rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2C6.486,2,2,6.486,2,12c0,5.514,4.486,10,10,10s10-4.486,10-10C22,6.486,17.514,2,12,2z M10.001,16.413l-3.713-3.705 L7.7,11.292l2.299,2.295l5.294-5.294l1.414,1.414L10.001,16.413z" />
            </svg>
            <p className="text-lg font-semibold">Successfully Subscribed!</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
