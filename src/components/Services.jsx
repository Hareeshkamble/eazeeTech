import React from "react";
import { motion } from "motion/react";

const industries = [
  { id: 1, name: "Retail", image: "/pics/retail.jpg", description:" Enhance shopping experiences with seamless transactions"},
  { id: 2, name: "Healthcare", image: "/pics/hospital2.webp", description:" Secure and efficient payment solutions for hospitals and clinics" },
  { id: 3, name: "Convenience Store", image: "/pics/store.jpg" ,description:"Fast and reliable POS systems for quick service"},
  { id: 4, name: "Cinema", image: "/pics/cinema.png" , description:"Streamline ticketing and concessions with smart payment solutions"},
  { id: 5, name: "Nightclub & Bar", image: "/pics/bar.jpg" , description:"Speed up drink and food orders with intuitive POS systems"},
  { id: 6, name: "Restaurant", image: "/pics/resto.png" , description:" Improve order accuracy and speed with a modern POS system"},
];

export default function Services (){
  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-6 text-center">
        {/* Title */}
      <div className="mb-8">
      <h2 className="text-3xl font-bold text-gray-900  ">
          <span className="font-extrabold">Industries</span> We Serve
        </h2>
        <p className="text-gray-600 mt-2">
        Powering businesses with innovative and reliable POS solutions
          </p>
      </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   gap-6 mt-2">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              className="relative overflow-hidden group service rounded-lg shadow-lg text-white  hover:text-black cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Background Image */}
              <img
                src={industry.image}
                alt={industry.name}
                className="w-full h-64 object-cover bg-black transition-transform duration-300 group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 group-hover:bg-opacity-50 transition duration-300"></div>

              {/* Industry Name */}
              <div className="absolute bottom-4 w-full bg-[#4582EC] ">
                <p className="text-sm ">{industry.description}</p>
                <h3 className="text-lg font-bold">{industry.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
