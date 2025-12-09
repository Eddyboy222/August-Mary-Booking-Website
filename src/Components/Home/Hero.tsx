import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="bg-[#fbf6f2] flex flex-col lg:flex-row items-center lg:items-center justify-between px-5 sm:px-10 md:px-16 lg:px-17 pt-24 md:pt-24 pb-15 lg:pb-16 overflow-hidden lg:gap-10">
      
      {/* Text Section */}
      <motion.div
        className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-xl"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <h1 className="text-5xl sm:text-5xl md:text-6xl font-black leading-tight tracking-[-0.03em] font-Poppins">
          Elevate your Brand with
          Custom Fashion Illustrations
        </h1>

        <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed mt-5 font-Raleway">
          Connect with us to create unique visuals for your fashion brand,
          editorial, or personal projects.
        </p>

        <motion.div
          className="flex flex-col sm:flex-row mt-7 items-center gap-3"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
        >
          <Link to="/book">
            <button className="bg-black hover:bg-[#0a0a0a] px-7 py-3 text-white rounded-full font-Raleway transition-all duration-200">
              Request Booking
            </button>
          </Link>

          <Link to="/portfolio">
            <button className="bg-white outline outline-[#d4d4d4] hover:bg-[#fbeee6] active:bg-[#fbeee6] px-7 py-3 text-black rounded-full font-Raleway transition-all duration-200">
              View Portfolio
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="flex flex-row lg:flex-row justify-center gap-4 mt-11 lg:mt-0 w-full lg:w-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <motion.img
          className="object-cover outline rounded-xl transform -translate-y-3 hover:scale-105 transition-transform duration-300
          w-40 h-56 sm:w-48 sm:h-64 md:w-56 md:h-72 lg:w-64 lg:h-[26rem]"
          src="https://res.cloudinary.com/dafafyxbh/image/upload/v1760746608/522681876_18284920876284941_7507482192588424598_n_thjuhu.jpg"
          alt="fashion illustration 1"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <motion.img
          className="object-cover outline rounded-xl transform translate-y-3 hover:scale-105 transition-transform duration-300
          w-40 h-56 sm:w-48 sm:h-64 md:w-56 md:h-72 lg:w-64 lg:h-[26rem]"
          src="https://res.cloudinary.com/dafafyxbh/image/upload/v1760747177/354424642_867561164703498_2161191697726496672_n_ixroau.jpg"
          alt="fashion illustration 2"
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </motion.div>
    </section>
  );
}

export default Hero;
