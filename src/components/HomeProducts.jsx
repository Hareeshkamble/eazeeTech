import React from "react";
import { motion } from "motion/react";
import Button from "./utils/Button";

export default function HomeProducts() {
  const products = [
    {
      id: 1,
      name: "Self-service kiosks Touchscreen POS System",
      description: "A customizable menu showcase with groupings, modifiers, an editable shopping cart, loyalty system, and advertising while idle management modules are supported.",
      price: 399,
      image: "/pics/1.jpg",
    },
    {
      id: 2,
      name: "All-in-One Touchscreen POS System",
      description: "An all-in-one touchscreen POS system designed for fast and efficient transactions. Featuring a high-resolution display, smooth touchscreen interface, and Windows OS compatibility.",
      price: 599.99,
      image: "/pics/pic1bg.png",
    },
    {
      id: 3,
      name: "Low Price POS Touch Screen POS Machine/ Cash Register",
      description: "A cost-effective POS Touch Screen Machine with cash register functionality.",
      price: 411.30,
      image: "/pics/pic2bg.png",
    },
    {
      id: 4,
      name: "SPOS-1401 Android 14 Inch POS for Restaurant",
      description: "14-inch high brightness LCD screen with multi-point projected capacitive touch panel.",
      price: 199.99,
      image: "/pics/pic3.jpeg",
    },
  ];

  return (
    <section className="w-full py-6 ">
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
          {products.map((product, index) => (
           <motion.div
           key={product.id}
           className="group relative flex flex-col bg-white border-1 border-blue-500 rounded-lg overflow-hidden shadow-sm transition-all "
           initial={{ opacity: 0, y: 0 }} 
           whileInView={{
             opacity: 1,
             y: 0,
             transition: { duration: 1, ease: "easeOut", delay: product.id*0.1, type:"spring" },
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
                  <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
                  <motion.button
                    className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
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
     <div className=" flex items-end justify-center m-2 mb-0">
     <Button/>
     </div>
    </section>
  );
}
