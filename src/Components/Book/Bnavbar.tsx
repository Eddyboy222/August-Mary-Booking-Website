import { useState, useEffect } from "react";
import { Menu, X, Book } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-lg py-2 backdrop-blur" : "bg-white py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img
            className="w-9 h-9 rounded-full"
            src="https://res.cloudinary.com/dafafyxbh/image/upload/v1759243633/352342323_139696332413341_7837195590897249075_n_wbrhvw.jpg"
            alt="Logo"
          />
          <div className="text-lg md:text-base text-black font-CinzelDecorative font-bold whitespace-nowrap">
            August mary
          </div>
        </div>

        {/* Centered Menu */}
        <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-10 font-Raleway text-gray-900 text-sm">
          <Link to="/">
            <li className="text-gray-600 hover:text-black transition">Home</li>
          </Link>
          <Link to="/portfolio">
            <li className="text-gray-600 hover:text-black transition">
              Portfolio
            </li>
          </Link>
          <Link to="/contact">
            <li className="text-gray-600 hover:text-black transition">
              Contact
            </li>
          </Link>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Book Icon - desktop only */}
          <Book
            className="hidden md:block text-gray-700 cursor-pointer hover:text-black transition"
            size={22}
          />

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center justify-center text-center space-y-6 py-10 font-Raleway text-gray-800 text-lg">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <li className="hover:text-black hover:scale-105 transition-all duration-200">
              Home
            </li>
          </Link>
          <Link to="/portfolio" onClick={() => setIsOpen(false)}>
            <li className="hover:text-black hover:scale-105 transition-all duration-200">
              Portfolio
            </li>
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <li className="hover:text-black hover:scale-105 transition-all duration-200">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;
