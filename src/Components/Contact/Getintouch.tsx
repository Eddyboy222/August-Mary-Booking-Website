import { useState } from "react";
import { Mail, Phone, Earth } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { motion } from "framer-motion";
import { sendContactMessage } from "../../lib/contactApi";
import type { ContactPayload } from "../../types/contact";

function Getintouch() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [success, setSuccess] = useState("");
  // const [error, setError] = useState("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   setError("");
  //   setSuccess("");

  //   if (!name || !email || !message) {
  //     setError("Please fill in all fields.");
  //     return;
  //   }

  //   try {
  //     setLoading(true);

  //     const res = await fetch("http://localhost:5000/api/contact", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ name, email, message }),
  //     });

  //     const data: { message?: string } = await res.json();

  //     if (!res.ok) {
  //       throw new Error(data.message || "Failed to send message");
  //     }

  //     setSuccess("Message sent successfully!");
  //     setName("");
  //     setEmail("");
  //     setMessage("");
  //   } catch (err: unknown) {
  //     if (err instanceof Error) {
  //       setError(err.message);
  //     } else {
  //       setError("Unexpected error occurred");
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload: ContactPayload = {
      name,
      email,
      message,
    };

    try {
      setLoading(true);
      setError(null);
      setSuccess(null);

      await sendContactMessage(payload);

      setSuccess("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

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
            <div className="flex items-center gap-6">
              <div className="bg-white p-3 rounded-xl w-12 h-12 flex items-center justify-center shadow-sm">
                <Mail size={22} />
              </div>
              <div>
                <p className="font-Raleway font-bold">Email</p>
                <p className="text-gray-600 font-Raleway">
                  augustmmary@gmail.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-6">
              <div className="bg-white p-3 rounded-xl w-12 h-12 flex items-center justify-center shadow-sm">
                <Phone size={22} />
              </div>
              <div>
                <p className="font-Raleway font-bold">Phone</p>
                <p className="text-gray-600 font-Raleway">+234 813 160 9584</p>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4">
              <div className="bg-white p-3 rounded-xl w-12 h-12 flex items-center justify-center shadow-sm">
                <Earth size={22} />
              </div>
              <div>
                <p className="font-Raleway font-bold">Social Media</p>
                <p className="text-gray-600 font-Raleway">
                  Follow us for updates
                </p>
              </div>

              <div className="flex gap-4 ml-2">
                <a href="https://www.tiktok.com/@august_mary" target="_blank">
                  <FaTiktok
                    size={20}
                    className="text-gray-500 hover:text-black"
                  />
                </a>
                <a href="https://www.instagram.com/_augustmary" target="_blank">
                  <AiFillInstagram
                    size={20}
                    className="text-gray-500 hover:text-black"
                  />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 bg-white rounded-2xl shadow-md p-8"
        >
          <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
            {/* Name */}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="px-4 py-3 border border-gray-300 rounded-md font-Raleway"
            />

            {/* Email */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-3 border border-gray-300 rounded-md font-Raleway"
            />

            {/* Message */}
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              rows={5}
              className="px-4 py-3 border border-gray-300 rounded-md font-Raleway"
            />

            {/* Feedback */}
            {error && (
              <p className="text-red-600 text-sm font-Raleway">{error}</p>
            )}

            {success && (
              <p className="text-green-600 text-sm font-Raleway">{success}</p>
            )}

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-40 px-4 py-3 bg-[#262626] text-white rounded-full font-Raleway disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Getintouch;
