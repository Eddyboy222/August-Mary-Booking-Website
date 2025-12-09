import { Link } from "react-router-dom";
import { motion, easeOut } from "framer-motion";

function Getstarted() {
  return (
    <div className="w-full flex flex-col items-center py-16 px-6 bg-[#fbf6f2] overflow-hidden">
      {/* Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: easeOut }}
      >
        <h1 className="text-4xl md:text-4xl lg:text-5xl text-black font-Raleway font-black mb-3">
          Let’s Bring Your Fashion Vision to Life
        </h1>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Turn your ideas into timeless illustrations that capture your brand’s essence and individuality.
        </p>
      </motion.div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6, ease: easeOut }}
      >
        <Link to="/book">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="relative bg-black hover:bg-gray-900 px-10 py-4 text-white rounded-full font-Raleway font-semibold text-lg flex items-center justify-center gap-2"
          >
            Get Started
            <motion.span
              className="inline-block"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3, ease: easeOut }}
            >
              →
            </motion.span>
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}

export default Getstarted;
