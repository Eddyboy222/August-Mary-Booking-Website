import { Mail, Phone, Earth } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { motion } from "framer-motion";

function Getintouch() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-[#fbf6f2] py-16 px-6 md:px-12 lg:px-24 pt-24">
      <div className="w-full flex flex-col lg:flex-row justify-between gap-12 lg:gap-20 max-w-6xl">

        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h1 className="text-4xl md:text-5xl font-Raleway font-black text-gray-900">
            Get in Touch
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed mt-4 font-Raleway mb-8">
            We'd love to hear from you! Whether you have a question about our
            services, pricing, or anything else — we’re ready to answer all your
            questions.
          </p>

          <div className="flex flex-col space-y-6">

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex items-center gap-4 md:gap-6"
            >
              <div className="bg-white p-3 text-black rounded-xl w-12 h-12 flex items-center justify-center shadow-sm">
                <Mail size={22} />
              </div>
              <div className="flex flex-col leading-tight">
                <p className="text-gray-800 font-Raleway font-bold text-sm md:text-base">
                  Email
                </p>
                <p className="text-gray-600 font-Raleway text-sm md:text-base">
                  augustmmary@gmail.com
                </p>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 md:gap-6"
            >
              <div className="bg-white p-3 text-black rounded-xl w-12 h-12 flex items-center justify-center shadow-sm">
                <Phone size={22} />
              </div>
              <div className="flex flex-col leading-tight">
                <p className="text-gray-800 font-Raleway font-bold text-sm md:text-base">
                  Phone
                </p>
                <p className="text-gray-600 font-Raleway text-sm md:text-base">
                  +234 813 160 9584
                </p>
              </div>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 md:gap-4"
            >
              <div className="bg-white p-3 text-black rounded-xl w-12 h-12 flex items-center justify-center shadow-sm">
                <Earth size={22} />
              </div>
              <div className="flex flex-col leading-tight">
                <p className="text-gray-800 font-Raleway font-bold text-sm md:text-base">
                  Social Media
                </p>
                <p className="text-gray-600 font-Raleway text-sm md:text-base">
                  Follow us for the latest updates
                </p>
              </div>

              <div className="flex gap-4 ml-2">
                <a
                  href="https://www.tiktok.com/@august_mary"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="group relative"
                >
                  <FaTiktok
                    size={20}
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
                    size={20}
                    className="text-gray-500 group-hover:text-black transition-colors duration-300"
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 bg-white rounded-2xl shadow-md p-8"
        >
          <form className="flex flex-col space-y-6">

            {/* Name */}
            <div className="flex flex-col space-y-2">
              <label className="text-gray-800 font-Raleway font-semibold text-sm">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black font-Raleway"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col space-y-2">
              <label className="text-gray-800 font-Raleway font-semibold text-sm">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black font-Raleway"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col space-y-2">
              <label className="text-gray-800 font-Raleway font-semibold text-sm">
                Your Message
              </label>
              <textarea
                placeholder="Type your message here..."
                rows={5}
                className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black font-Raleway"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-40 px-4 py-3 bg-[#262626] text-white text-sm rounded-full shadow-md hover:bg-[#0a0a0a] transition-colors duration-300 font-Raleway self-start"
            >
              Send Message
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
}

export default Getintouch;
