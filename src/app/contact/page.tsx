"use client"

import { useState, ChangeEvent, FormEvent } from "react";
import { Phone, Mail, MapPin, Navigation } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    const whatsappMessage = `Hello, I would like to contact you.\n\n*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject}\n*Message:* ${message}`;
    const whatsappURL = `https://wa.me/+919094099940?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, "_blank");
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eef2f7] to-[#dbe5f1] p-6 mt-18">
      {/* Contact Form Section */}
      <div className="flex items-center justify-center mb-12">
        <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-5xl w-full grid md:grid-cols-2 gap-10">
          {/* Left - Contact Info */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-4xl font-bold text-[#0b0a46]">Get in Touch</h2>
            <p className="text-gray-600 text-lg">
              We'd love to hear from you! Reach out to us via phone, email, or send us a message directly.
            </p>

            <div className="space-y-4 text-gray-700">
              <div className="flex items-center gap-4">
                <Phone className="text-[#0b0a46] w-5 h-5" />
                <span className="font-medium">+91 9094099940</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-[#0b0a46] w-5 h-5" />
                <span className="font-medium">edu@sslftrust.com</span>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-[#0b0a46] w-5 h-5 mt-1" />
                <span className="font-medium leading-relaxed">
                  No:1/210, Defence Colony, 15th Cross Street, Ekkattuthangal, Chennai - 600032, INDIA
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#0b0a46] focus:outline-none transition-all duration-300"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#0b0a46] focus:outline-none transition-all duration-300"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#0b0a46] focus:outline-none transition-all duration-300"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#0b0a46] focus:outline-none transition-all duration-300 resize-none"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#0b0a46] text-white py-3 rounded-lg font-semibold hover:bg-[#191861] transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="flex items-center justify-center">
        <div className="bg-white shadow-2xl rounded-xl overflow-hidden max-w-9xl w-full">
          {/* Map Container */}
          <div className="relative h-96 bg-gradient-to-br from-blue-50 to-indigo-100">
            {/* Embedded Google Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0849073633315!2d80.19773737507753!3d13.027166387288952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52676500a47093%3A0xd8066eb0ec0a5e5!2s210%2C%20Defence%20Colony%2015th%20Cross%20St%2C%20Defence%20Colony%2C%20Ekkatuthangal%2C%20Chennai%2C%20Tamil%20Nadu%20600032!5e0!3m2!1sen!2sin!4v1716807000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
            
            {/* Overlay for interactive elements */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Subtle grid overlay */}
              <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#0b0a46_1px,transparent_1px),linear-gradient(to_bottom,#0b0a46_1px,transparent_1px)] bg-[size:20px_20px]" />
            </div>
          </div>

          {/* Map Footer */}
          <div className="bg-gray-50 p-4 border-t">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-600">
                <span className="font-medium">Address:</span> No:1/210, Defence Colony, 15th Cross Street, Ekkattuthangal, Chennai - 600032
              </div>
              <div className="flex items-center gap-4 text-sm">
                <a 
                  href="tel:+919094099940" 
                  className="text-[#0b0a46] hover:text-[#191861] font-medium flex items-center gap-1 transition-colors duration-300"
                >
                  <Phone className="w-3 h-3" />
                  Call Us
                </a>
                <a 
                  href="mailto:edu@sslftrust.com" 
                  className="text-[#0b0a46] hover:text-[#191861] font-medium flex items-center gap-1 transition-colors duration-300"
                >
                  <Mail className="w-3 h-3" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}