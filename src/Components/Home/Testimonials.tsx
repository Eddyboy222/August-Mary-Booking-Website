import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants, easeOut } from "framer-motion";

type Testimonial = {
  name: string;
  message: string;
};

type TestimonialsProps = {
  testimonials: Testimonial[];
};

// Motion variants for testimonial slides
const testimonialVariants: Variants = {
  enter: { opacity: 0, x: 50 },
  center: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeOut } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.7, ease: easeOut } },
};

function Testimonials({ testimonials }: TestimonialsProps) {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="w-full flex flex-col items-center py-24 px-6 bg-white overflow-hidden">
      {/* Heading */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: easeOut }}
      >
        <h1 className="text-4xl md:text-5xl font-black font-Raleway text-black mb-4">
          What Our Clients Say
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto leading-relaxed text-base md:text-lg">
          Real stories from clients who trusted us with their projects.
        </p>
      </motion.div>

      {/* Carousel */}
      <div className="relative w-full max-w-3xl h-64 md:h-72 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {testimonials.map(
            (t, index) =>
              index === current && (
                <motion.div
                  key={index}
                  className="absolute w-full px-4"
                  variants={testimonialVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <div className="bg-[#fbf6f2] rounded-2xl shadow-lg p-10 md:p-12 text-center border border-[#f0e9e2]">
                    <p className="text-gray-700 italic text-lg md:text-xl leading-relaxed mb-6">
                      “{t.message}”
                    </p>
                    <h3 className="text-black font-semibold text-xl font-Raleway tracking-wide">
                      — {t.name}
                    </h3>
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex space-x-3 mt-8">
        {testimonials.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrent(index)}
            className="w-3.5 h-3.5 rounded-full transition-all duration-300"
            animate={{
              backgroundColor: index === current ? "#000" : "#9ca3af",
              scale: index === current ? 1.1 : 1,
              opacity: index === current ? 1 : 0.6,
            }}
            whileHover={{ scale: 1.2, opacity: 1 }}
            transition={{ duration: 0.3, ease: easeOut }}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
