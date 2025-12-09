import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, type Variants, easeOut } from "framer-motion";

type Images = {
  picture: string;
};

type IllustrationProps = {
  images: Images[];
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // delay between each child
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut }, // TypeScript-compliant easing
  },
};

function Illustrations({ images }: IllustrationProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col items-center py-12 px-6 bg-white overflow-hidden">
      {/* Heading */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: easeOut }}
      >
        <h1 className="text-4xl md:text-4xl lg:text-5xl text-black font-Raleway font-black mb-2">
          Featured Illustrations
        </h1>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Where art meets fashion — every illustration redefines style.
        </p>
      </motion.div>

      {/* Image Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {images.map((img, index) => (
          <motion.div
            key={index}
            onClick={() => handleImageClick(index)}
            className="relative w-full h-120 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
            variants={itemVariants}
          >
            <img
              src={img.picture}
              alt={`illustration-${index}`}
              className={`w-full h-full object-cover transform transition-transform duration-700 ease-in-out ${
                activeIndex === index ? "scale-110" : "scale-100"
              }`}
            />

            <div
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                activeIndex === index ? "bg-black/20" : "bg-transparent"
              }`}
            ></div>
          </motion.div>
        ))}
      </motion.div>

      {/* See More Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6, ease: easeOut }}
      >
        <Link to="/portfolio">
          <button className="group flex items-center gap-2 text-lg font-bold text-black relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-yellow-400 after:to-yellow-600 after:transition-all after:duration-500 hover:after:w-full">
            <span className="group-hover:text-yellow-600 transition-colors duration-300">
              See more
            </span>
            <ArrowRight
              size={20}
              className="text-yellow-600 transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </Link>
      </motion.div>
    </div>
  );
}

export default Illustrations;
