import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "motion/react";

// New  Build
const partners = [ 
  { id: 1, name: "Partner A", logo: "/pics/logo.png" },
  { id: 6, name: "Partner F", logo: "/pics/1.jpg" },
  { id: 3, name: "Partner C", logo: "/pics/bmw.png" },
  { id: 7, name: "Partner G", logo: "/pics/1.jpg" },
  { id: 4, name: "Partner D", logo: "/pics/logo.png" },
  { id: 5, name: "Partner E", logo: "/pics/1.jpg" },
  { id: 2, name: "Partner B", logo: "/pics/bmw.png" },
  { id: 6, name: "Partner F", logo: "/pics/logo.png" },
  { id: 5, name: "Partner E", logo: "/pics/bmw.png" },
  { id: 7, name: "Partner G", logo: "/pics/1.jpg" },
];

export default function Partners() {
  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Our <span className="font-extrabold">Partners</span>
        </h2>

        {/* Marquee Effect */}
        <Marquee gradient={false} speed={50} className="h-full" pauseOnHover>
          {partners.map((partner) => (
            <>
            <motion.div
              key={partner.id}
              className="mx-6 rounded-[50%] m-2 shadow-md flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-20 lg:h-24 lg:w-24 object-cover rounded-[50%] "
              />
            </motion.div>
          <p className="font-semibold text-gray-400">{partner.name}</p>
          </>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
