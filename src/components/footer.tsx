"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, Clock } from "lucide-react";
import logo from "@/assets/ssfl.png";

export default function Footer() {
  return (
    <footer className="bg-[#0b0a46] text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo and description */}
        <div className="flex flex-col items-center md:items-start">
          {/* Animated Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/">
              <Image
                src={logo}
                alt="Logo"
                width={180} // Increased size
                height={70}
                className="mx-auto md:mx-0"
              />
            </Link>
          </motion.div>
        </div>

        {/* Business Hours */}
        <div>
          <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
            <Clock size={20} /> Trust Hours
          </h3>
          <p className="text-sm">Monday to Friday <br /> 10:00 AM - 07:00 PM</p>
          <p className="text-sm text-gray-400">All branches of the company</p>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
          <p className="text-sm flex items-center gap-2">
            <Phone size={16} /> <strong>Phone :</strong> 9094099940
          </p>
          <p className="text-sm flex items-center gap-2">
            <Mail size={16} /> <strong>Email :</strong> edu@sslftrust.com
          </p>
          <p className="text-sm flex items-start gap-2">
            <strong>Address:</strong> 210, Defence Colony 15th Cross St, Defence Colony, Ekkatuthangal, Chennai, Tamil Nadu 600032
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 text-center mt-8 pt-4 text-sm text-gray-300">
        COPYRIGHT © {new Date().getFullYear()}. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
