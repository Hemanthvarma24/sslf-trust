"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    const whatsappMessage = `Hello, I would like to contact you.\n\n*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject}\n*Message:* ${message}`;
    const whatsappURL = `https://wa.me/+919094099940?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eef2f7] to-[#dbe5f1] flex items-center justify-center p-6 mt-16">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-5xl w-full grid md:grid-cols-2 gap-10">
        {/* Left - Contact Info */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-4xl font-bold text-[#0b0a46]">Get in Touch</h2>
          <p className="text-gray-600 text-lg">
            We'd love to hear from you! Reach out to us via phone, email, or send us a message directly.
          </p>

          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-[#0b0a46]" />
              <span className="font-medium">+91 9094099940</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-[#0b0a46]" />
              <span className="font-medium">edu@sslftrust.com</span>
            </div>
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-[#0b0a46] mt-1" />
              <span className="font-medium leading-relaxed">
                No:1/210, Defence Colony, 15th Cross Street, Ekkattuthangal, Chennai - 600032, INDIA
              </span>
            </div>
          </div>
        </div>

        {/* Right - Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#0b0a46] focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#0b0a46] focus:outline-none"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#0b0a46] focus:outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#0b0a46] focus:outline-none"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#0b0a46] text-white py-3 rounded-lg font-semibold hover:bg-[#191861] transition duration-300 shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
