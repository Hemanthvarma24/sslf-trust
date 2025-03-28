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

    // Format the message for WhatsApp
    const whatsappMessage = `Hello, I would like to contact you.\n\n*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject}\n*Message:* ${message}`;
    
    // WhatsApp API link
    const whatsappURL = `https://wa.me/+919094099940?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="bg-white shadow-md rounded-xl p-6 max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-3 flex flex-col justify-center">
            <div className="flex items-center space-x-3 p-3">
              <FaPhoneAlt className="text-[#0b0a46] text-xl" />
              <span className="text-gray-700 font-medium">9094099940</span>
            </div>
            <div className="flex items-center space-x-3 p-3">
              <FaEnvelope className="text-[#0b0a46] text-xl" />
              <span className="text-gray-700 font-medium">edu@sslftrust.com</span>
            </div>
            <div className="flex items-start space-x-3 p-3">
              <FaMapMarkerAlt className="text-[#0b0a46] text-xl mt-1" />
              <span className="text-gray-700 font-medium">No:1/210,Defence Colony, 15th Cross Street,Ekkattuthangal,
Chennai -600032,INDIA</span>
            </div>
          </div>
          
          {/* Contact Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0b0a46]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0b0a46]"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0b0a46]"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0b0a46]"
              rows={4}
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#0b0a46] text-white py-3 rounded-lg hover:bg-opacity-90 transition duration-300 font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}