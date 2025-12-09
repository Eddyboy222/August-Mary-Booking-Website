import logo from "../../assets/352342323_139696332413341_7837195590897249075_n.jpg"; 
import { Link } from "react-router-dom";
import { FaTiktok } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { motion, type Variants, easeOut } from "framer-motion";

function Footer() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };


  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  return (
    <footer className="w-full bg-white text-gray-700 py-16 px-6 border-t border-gray-100 relative overflow-hidden">
      <motion.div
        className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Logo & Business Info */}
        <motion.div
          className="flex flex-col items-center md:items-start space-y-4 flex-1"
          variants={itemVariants}
        >
          <div className="relative group">
            <motion.div
              className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300"
              whileHover={{ opacity: 0.3 }}
            />
            <motion.img 
              src={logo} 
              alt="August Mary Logo" 
              className="w-20 h-20 object-cover rounded-full border-2 border-white shadow-lg relative z-10 transition-transform duration-300 group-hover:scale-105" 
              whileHover={{ scale: 1.05 }}
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-black font-CinzelDecorative tracking-wide">
              August mary
            </h2>
            <p className="text-sm text-gray-500 mt-1 italic">Fashion Illustration Excellence</p>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="flex flex-col items-center md:items-start space-y-4 flex-1"
          variants={itemVariants}
        >
          <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-2">Quick Links</h3>
          <div className="flex flex-col space-y-3 text-center md:text-left">
            <Link to="/contact">
              <span className="text-gray-600 hover:text-rose-600 transition-colors duration-300 text-sm font-medium group">
                Contact
                <span className="block h-0.5 bg-rose-600 w-0 group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Connect With Us */}
        <motion.div
          className="flex flex-col items-center md:items-start space-y-4 flex-1"
          variants={itemVariants}
        >
          <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-2">Connect With Us</h3>
          <div className="flex items-center space-x-5">
            <motion.a
              href="https://www.tiktok.com/@august_mary"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              aria-label="TikTok"
              whileHover={{ scale: 1.1 }}
            >
              <div className="absolute inset-0 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative bg-white p-3 rounded-full shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                <FaTiktok size={20} className="text-gray-700 group-hover:text-black transition-colors duration-300" />
              </div>
            </motion.a>
            <motion.a
              href="https://www.instagram.com/_augustmary?utm_source=ig_web_button_share_sheet&igsh=aWVuYmJsNzI0eGR2"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              aria-label="Instagram"
              whileHover={{ scale: 1.1 }}
            >
              <div className="absolute inset-0 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative bg-white p-3 rounded-full shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                <AiFillInstagram size={24} className="text-gray-700 group-hover:text-black transition-colors duration-300" />
              </div>
            </motion.a>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center md:text-left">Follow for latest illustrations</p>
        </motion.div>
      </motion.div>

      {/* Divider with gradient */}
      <div className="relative mt-12 mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="h-1 w-32 bg-gradient-to-r from-rose-400 via-purple-400 to-rose-400 rounded-full"></div>
        </div>
      </div>

      {/* Copyright */}
      <motion.div
        className="text-center pt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: easeOut }}
      >
        <p className="text-sm text-gray-500">
          © 2025 <span className="font-semibold text-gray-700">August Mary</span>. All rights reserved.
        </p>
        <p className="text-xs text-gray-400 mt-1">Crafted with passion for fashion illustration</p>
      </motion.div>
    </footer>
  );
}

export default Footer;
