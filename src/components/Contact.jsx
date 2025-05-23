import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    contact: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_nej8nb9",
        "template_k986t38",
        formData,
        "XbJRetwyIByaYDj-Y",
      )
      .then(() => {
        alert("Thanks for reaching out!");
        setFormData({ name: "", email: "", message: "", contact: "" });
      })
      .catch((error) => {
        alert("Oops! Something went wrong, please try again.");
        console.error(error);
      });
  };

  return (
    <motion.div
      className="flex justify-center items-center px-4 py-10 bg-black text-white overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <motion.div className="w-full max-w-4xl bg-[#111] p-6 md:p-10 rounded-xl shadow-xl border border-gray-700">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
            {/* Left Column */}
            <div className="w-full md:w-1/2 space-y-4">
              <div>
                <label className="block mb-1 text-sm font-medium">Name</label>
                <input
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full h-12 p-2 rounded-md bg-gray-900 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full h-12 p-2 rounded-md bg-gray-900 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">Contact</label>
                <input
                  name="contact"
                  required
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="+1234567890"
                  className="w-full h-12 p-2 rounded-md bg-gray-900 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-1/2 space-y-4 flex flex-col">
              <div className="flex-1">
                <label className="block mb-1 text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  rows="8"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  className="w-full h-56 p-3 rounded-md bg-gray-900 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full mt-2 px-6 py-2 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white font-semibold tracking-wide hover:opacity-90 transition duration-300 shadow-md"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
