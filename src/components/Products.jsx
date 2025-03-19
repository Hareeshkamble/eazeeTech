import React from 'react'
import { motion } from 'motion/react';
export default function Products() {
    const products = [
        {
          id: 1,
          name: "Self-service kiosks Touchscreen POS System",
          description: "A customizable menu showcase with groupings, modifiers, and more.",

          image: "/pics/1.jpg",
        },
        {
          id: 2,
          name: "All-in-One Touchscreen POS System",
          description: "An all-in-one touchscreen POS system designed for fast transactions.",

          image: "/pics/pic1bg.png",
        },
        {
          id: 3,
          name: "Low Price POS Touch Screen POS Machine/ Cash Register",
          description: "A cost-effective POS Touch Screen Machine with cash register functionality.",

          image: "/pics/pic2bg.png",
        },
        {
          id: 4,
          name: "SPOS-1401 Android 14 Inch POS for Restaurant",
          description: "14-inch high brightness LCD screen with multi-point projected capacitive touch panel.",

          image: "/pics/pic3.jpeg",
        },
        {
          id: 5,
          name: "Compact Handheld POS Terminal",
          description: "A lightweight handheld POS system perfect for mobile businesses.",

          image: "/pics/pos4.jpeg",
        },
        {
          id: 6,
          name: "Smart Retail POS with Dual Screen",
          description: "A modern POS with dual screens for better customer interaction.",

          image: "/pics/pos5.jpeg",
        },
        {
          id: 7,
          name: "E-commerce Integrated POS System",
          description: "A POS system designed to sync seamlessly with online stores.",

          image: "/pics/pos6.jpeg",
        },
        {
          id: 8,
          name: "Cloud-Based Touch POS System",
          description: "A cloud-enabled POS for seamless data management.",

          image: "/pics/pos7.jpeg",
        },
        {
          id: 9,
          name: "Multi-Purpose POS Terminal",
          description: "A POS system built for restaurants, retail, and more.",

          image: "/pics/pos8.jpeg",
        },
        {
          id: 10,
          name: "Advanced Self-Checkout Kiosk",
          description: "A self-service POS terminal with high-speed processing.",

          image: "/pics/pos9.jpeg",
        },
        {
          id: 11,
          name: "POS System with Barcode Scanner",
          description: "An all-in-one POS with an integrated barcode scanner.",

          image: "/pics/pos10.jpeg",
        },
        {
          id: 12,
          name: "Wireless Mobile POS",
          description: "A wireless POS system perfect for food trucks and pop-up stores.",

          image: "/pics/pos11.jpeg",
        },
      ];
  return (
    <section className="w-full py-6">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
          <p className="text-gray-600 mt-2">
            Discover our curated selection of premium products for your business.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="group relative flex flex-col bg-white border-1 border-blue-500 rounded-lg overflow-hidden shadow-sm transition-all"
              initial={{ opacity: 0, y: 0 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: "easeOut", delay: product.id * 0.1, type: "spring" },
              }}
              viewport={{ once: true, amount: 0.2 }}
              style={{ willChange: "opacity, transform" }}
            >
              <a href={`/products/${product.id}`} className="block overflow-hidden">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="object-contain w-full h-64 p-2 transition-transform duration-300 hover:scale-110"
                />
              </a>

              <div className="p-4">
                <a href={`/products/${product.id}`}>
                  <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition">
                    {product.name.slice(0, 35)}
                  </h3>
                </a>
                <p className="text-sm text-gray-600 mt-1">{product.description.slice(0, 55)}...</p>

                <div className="flex items-center justify-between mt-4">
                  {/* <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span> */}
                  <motion.button
                    className="px-4 py-2 bg-blue-600 w-full text-white text-sm rounded-lg hover:bg-blue-700 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Buy Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      </section>
  )}
  
