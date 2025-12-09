import type { ReactNode } from "react";
import { motion, type Variants, easeOut } from "framer-motion";

type Step = {
  icon: ReactNode;
  title: string;
  description: string;
};

type StepsProps = {
  steps: Step[];
};

// Container variants for staggered children
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // each step appears 0.2s after previous
    },
  },
};

// Each step item animation
const stepVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

function Steps({ steps }: StepsProps) {
  return (
    <div className="w-full flex flex-col items-center py-16 px-6 bg-[#fbf6f2]">
      {/* Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: easeOut }}
      >
        <h1 className="text-4xl md:text-4xl lg:text-5xl text-black font-Raleway font-black mb-3">
          How It Works
        </h1>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          A simple process to get your custom illustrations.
        </p>
      </motion.div>

      {/* Steps Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-500"
            variants={stepVariants}
          >
            {/* Icon */}
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#f7e9df] text-black mb-5">
              {step.icon}
            </div>

            {/* Title */}
            <h2 className="text-xl font-semibold text-black mb-3 font-Raleway">
              {step.title}
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Steps;
