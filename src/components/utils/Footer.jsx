import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble, BsWhatsapp, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-black py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        

        {/* Address Block */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">Our Address</h2>
          <p>123 Main Street, Cityville</p>
          <p>Country, ZIP 12345</p>
          <p>Email: contact@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600">Home</a></li>
            <li><a href="#" className="hover:text-blue-600">About Us</a></li>
            <li><a href="#" className="hover:text-blue-600">Services</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="text-black hover:text-blue-600"><BsFacebook size={20} /></a>
          <a href="#" className="text-black hover:text-pink-600"><BsInstagram size={20} /></a>
          <a href="#" className="text-black hover:text-blue-600"><BsLinkedin size={20} /></a>
          <a href="#" className="text-black hover:text-green-600"><BsWhatsapp size={20} /></a>
        </div>

      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm text-gray-500 mt-6 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
      </div>
    </footer>
  );
}
