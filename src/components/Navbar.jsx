"use client";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white navbar shadow-md sticky top-0 w-full z-50 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-gray-800">
          BakwasTech
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li><a href="#" className="hover:text-blue-600">Home</a></li>
          <li><a href="#" className="hover:text-blue-600">About</a></li>
          <li><a href="#" className="hover:text-blue-600">Products</a></li>
          <li><a href="#" className="hover:text-blue-600">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-white shadow-md`}>
        <ul className="flex flex-col items-center space-y-4 py-4 text-gray-700 font-medium">
          <li><a href="#" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Services</a></li>
          <li><a href="#" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
