import React, { useState } from "react";
import { motion } from "framer-motion";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ text: "", type: "" });

    try {
      await addDoc(collection(db, "messages"), formData);
      setMessage({ text: "Message sent successfully!", type: "success" });
      setFormData({ fullName: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setMessage({ text: "Error sending message. Please try again.", type: "error" });
    }

    setIsSubmitting(false);
  };

  return (
    <div id="contact" className="flex items-center justify-center min-h-screen bg-[#F1F9F6] p-6">
      <motion.div
        className="bg-white w-full max-w-5xl shadow-lg p-6 sm:p-10 rounded-lg flex flex-col md:flex-row"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Side */}
        <div className="md:w-1/2 p-6 sm:p-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-950">Let's chat.</h2>
          <p className="text-slate-500 mt-2">Tell me about your project.</p>
          <p className="text-slate-500 mt-4">Let's create something together</p>
          <div className="mt-6 bg-slate-300 p-4 rounded-lg">
            <p className="text-slate-500">Mail me:</p>
            <p className="text-blue-950 font-semibold">chamelimoneesha02@gmail.com</p>
            <p className="text-slate-500">Call me:</p>
            <p className="text-blue-950 font-semibold">0760212005</p>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="md:w-1/2 bg-blue-950 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-white mb-4">Send me a message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full name"
              required
              className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 bg-slate-300 text-sm"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              required
              className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 bg-slate-300 text-sm"
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 bg-slate-300 text-sm"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us more about your project"
              required
              rows="4"
              className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 bg-slate-300 text-sm"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-slate-500 text-blue-950 py-3 rounded-lg font-semibold hover:bg-slate-300 transition disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send message"}
            </button>
          </form>
          {message.text && (
            <p className={`mt-4 ${message.type === "success" ? "text-green-500" : "text-red-500"}`}>
              {message.text}
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
