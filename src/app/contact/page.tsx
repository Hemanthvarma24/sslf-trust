"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    // Format the message for WhatsApp
    const whatsappMessage = `Hello, I would like to contact you.\n\n*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject}\n*Message:* ${message}`;
    
    // WhatsApp API link
    const whatsappURL = `https://wa.me/+919094099940?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="min-h-screen flex items-center pt-22 justify-center bg-white p-6">
      <div className="bg-white shadow-sm rounded-2xl p-10 max-w-5xl w-full">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-4 flex flex-col justify-center">
            <div className="flex items-center space-x-4  p-5  ">
              <FaPhoneAlt className="text-[#0b0a46] text-2xl" />
              <span className="text-gray-700 font-medium text-lg">9094099940</span>
            </div>
            <div className="flex items-center space-x-4  p-5  ">
              <FaEnvelope className="text-[#0b0a46] text-2xl" />
              <span className="text-gray-700 font-medium text-lg">edu@sslftrust.com</span>
            </div>
            <div className="flex items-center space-x-4 p-5 ">
              <FaMapMarkerAlt className="text-[#0b0a46] text-5xl" />
              <span className="text-gray-700 font-medium text-lg">210, Defence Colony 15th Cross St, Defence Colony, Ekkatuthangal, Chennai, Tamil Nadu 600032</span>
            </div>
          </div>
          {/* Contact Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-4 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={5}
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#0b0a46] text-white py-4 rounded-lg shadow-lg hover:bg-gray-500 transition duration-300 text-lg font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
