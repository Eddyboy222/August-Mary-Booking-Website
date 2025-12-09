import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
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
      className={`w-full left-0 z-50 fixed transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-lg py-2 backdrop-blur" : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            className="w-9 h-9 rounded-full"
            src="https://res.cloudinary.com/dafafyxbh/image/upload/v1759243633/352342323_139696332413341_7837195590897249075_n_wbrhvw.jpg"
            alt="Logo"
          />
          <div className="md:text-base text-lg text-black font-CinzelDecorative font-bold">
            August mary
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center flex-1 space-x-8 font-Raleway text-gray-900 text-sm">
          <Link to="/"><li className="hover:text-black transition">Home</li></Link>
          <Link to="/portfolio"><li className="hover:text-black transition">Portfolio</li></Link>
          <Link to="/contact"><li className="hover:text-black transition">Contact</li></Link>
        </ul>

        {/* CTA */}
        <div className="hidden md:flex justify-end">
          <Link to="/book">
            <button className="px-4 py-2 bg-[#262626] text-white text-xs rounded-full shadow-md hover:bg-[#0a0a0a] transition duration-300">
              Book Now
            </button>
          </Link>
        </div>

        {/* Mobile Button */}
        <div className="flex md:hidden justify-end flex-1">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-500 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 py-10 text-lg font-Raleway">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <li className="hover:text-black hover:scale-105 transition">Home</li>
          </Link>
          <Link to="/portfolio" onClick={() => setIsOpen(false)}>
            <li className="hover:text-black hover:scale-105 transition">Portfolio</li>
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <li className="hover:text-black hover:scale-105 transition">Contact</li>
          </Link>

          <div className="border-t border-gray-200 pt-5">
            <Link to="/book" onClick={() => setIsOpen(false)}>
              <button className="mt-2 px-6 py-2 bg-[#262626] text-white text-sm  rounded-full hover:bg-[#0a0a0a] transition">
                Book Now
              </button>
            </Link>
          </div>
        </ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;
