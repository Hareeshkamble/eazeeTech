"use client";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";


export default function Navbar({companyName}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white navbar shadow-md font-bold sticky top-0 w-full z-50 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3 flex justify-between items-center">
      
        <Link to="/" className="text-2xl flex items-center  text-gray-800">
        <img src="/pics/logo.png" height={70} width={100} alt="logo" />
          {companyName}
        </Link>


        <ul className="hidden md:flex space-x-8 text-gray-700  font-semibold">
          <li><Link to="/home" className="hover:text-blue-600">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
          <li><Link to="/products" className="hover:text-blue-600">Products</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
        </ul>


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
          <li><a href="/" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="/about" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="/products" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Products</a></li>
          <li><a href="/contact" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
