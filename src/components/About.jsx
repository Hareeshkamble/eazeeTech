import React from "react";

export default function About() {
  return (
    <section className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[500px] bg-gray-900">
        <img
          src="/pics/company-banner.jpg"
          alt="Company Banner"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-3xl md:text-5xl font-bold">About EazeeTech</h1>
          <p className="mt-2 text-lg md:text-xl max-w-2xl">
            Driving Innovation in POS Technology
          </p>
        </div>
      </div>

      {/* About Us Section */}
      <div className="container mx-auto px-6 py-12 lg:flex lg:items-center">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900">Who We Are</h2>
          <p className="mt-4 text-gray-600">
            At EazeeTech, we are passionate about revolutionizing the Point-of-Sale (POS) industry. 
            Our team is dedicated to providing cutting-edge solutions that enhance efficiency and 
            streamline business operations. With a strong focus on innovation and customer satisfaction, 
            we aim to redefine how businesses interact with technology.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center mt-6 lg:mt-0">
          <img
            src="/pics/company-office.jpg"
            alt="Company Office"
            className="w-full max-w-lg rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="container mx-auto px-6 py-12 grid gap-6 md:grid-cols-2">
        <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-blue-900">Our Mission</h3>
          <p className="mt-3 text-gray-700">
            Our mission is to empower businesses with smart and efficient POS solutions 
            that drive growth, optimize performance, and enhance customer experience.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900">Our Vision</h3>
          <p className="mt-3 text-gray-700">
            We envision a world where technology simplifies business operations, 
            making transactions faster, safer, and smarter.
          </p>
        </div>
      </div>

      {/* Founders Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900">Meet Our Team</h2>
        <p className="text-center text-gray-600 mt-2">
          The visionaries behind EazeeTech.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {/* Founder */}
          <div className="w-72 text-center p-4 bg-white shadow-lg rounded-lg">
            <img
              src="/pics/founder.jpg"
              alt="Founder"
              className="w-40 h-40 mx-auto rounded-full border-4 border-blue-600"
            />
            <h3 className="text-xl font-bold mt-4 text-gray-900">John Doe</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>

          {/* Co-Founder 1 */}
          <div className="w-72 text-center p-4 bg-white shadow-lg rounded-lg">
            <img
              src="/pics/cofounder1.jpg"
              alt="Co-Founder"
              className="w-32 h-32 mx-auto rounded-full border-4 border-gray-600"
            />
            <h3 className="text-lg font-bold mt-4 text-gray-900">Jane Smith</h3>
            <p className="text-gray-600">Co-Founder & CTO</p>
          </div>

          {/* Co-Founder 2 */}
          <div className="w-72 text-center p-4 bg-white shadow-lg rounded-lg">
            <img
              src="/pics/cofounder2.jpg"
              alt="Co-Founder"
              className="w-32 h-32 mx-auto rounded-full border-4 border-gray-600"
            />
            <h3 className="text-lg font-bold mt-4 text-gray-900">Mike Johnson</h3>
            <p className="text-gray-600">Co-Founder & CFO</p>
          </div>
        </div>
      </div>

      {/* Contact Us Banner */}
      <div className="w-full bg-blue-900 py-12 text-white text-center">
        <h2 className="text-3xl font-bold">Let's Connect</h2>
        <p className="mt-2 text-lg">Have questions? Get in touch with us.</p>
        <a
          href="/contact"
          className="mt-4 inline-block bg-white text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
