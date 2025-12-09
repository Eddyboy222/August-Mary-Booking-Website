import { useState } from "react";
import { FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { motion } from "framer-motion";

type Drawing = {
  Pic: string;
};

type PHeroProps = {
  drawing: Drawing[];
};

function PHero({ drawing }: PHeroProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col items-center py-12 px-6 pt-24 bg-[#fbf6f2]">

      {/* Title Section (motion added) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="border-b w-full max-w-4xl pb-6 mb-11 border-gray-300 text-center"
      >
        <h1 className="text-6xl font-Raleway text-black font-black">
          Our Portfolio
        </h1>

        <p className="text-gray-600 text-lg max-w-4xl leading-relaxed mt-3 font-Raleway mb-5">
          The August Mary Portfolio — a visual journey through elegance and <br />
          expression. Inspired by the rhythm of fashion, each piece reveals the <br />
          quiet strength and artistry within every silhouette.
        </p>
      </motion.div>

      {/* Image Grid (NO motion here) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mb-10">
        {drawing.map((img, index) => (
          <div
            key={index}
            onClick={() => handleImageClick(index)}
            className="relative w-full h-120 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
          >
            <img
              src={img.Pic}
              alt={`illustration-${index}`}
              className={`w-full h-full object-cover transform transition-transform duration-700 ease-in-out ${
                activeIndex === index ? "scale-110" : "scale-100"
              }`}
            />
          </div>
        ))}
      </div>

      {/* Footer Section (motion added) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full border-t border-gray-300 pt-6 pb-6 flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between max-w-4xl mx-auto px-4"
      >
        {/* Copyright */}
        <p className="text-gray-600 text-sm font-Raleway text-center">
          © {new Date().getFullYear()} August Mary. All rights reserved.
        </p>

        {/* Socials */}
        <div className="flex flex-row gap-6 justify-center">
          <a
            href="https://www.tiktok.com/@august_mary"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="group relative"
          >
            <FaTiktok
              size={24}
              className="text-gray-500 group-hover:text-black transition-colors duration-300"
            />
          </a>

          <a
            href="https://www.instagram.com/_augustmary"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="group relative"
          >
            <AiFillInstagram
              size={24}
              className="text-gray-500 group-hover:text-black transition-colors duration-300"
            />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default PHero;
