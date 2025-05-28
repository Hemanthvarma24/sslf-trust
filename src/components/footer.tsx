"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Clock,
  Heart,
  MapPin,
  Instagram,
  Facebook,
  Globe,
} from "lucide-react";
import logo from "@/assets/sslf logo White-01.png"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Footer = () => {
  return (
    <footer className="bg-[#0b0a46] text-white pt-10 pb-6 w-full">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 items-start">
          {/* Logo and Socials */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-start gap-4"
          >
            <Link href="/">
              <Image
                src={logo}
                alt="SSLF Educational Trust Logo"
                width={140}
                height={74}
                className=" object-cover"
              />
            </Link>
            <div className="flex gap-4 ml-4">
              <Link
                href="https://www.instagram.com/sslfeducationaltrust?igsh=Mm9vanBmbnExbjU3"
                target="_blank"
              >
                <Instagram className="hover:text-blue-300 transition duration-300" />
              </Link>
              <Link
                href="https://www.facebook.com/share/1E62VrBKAQ/"
                target="_blank"
              >
                <Facebook className="hover:text-blue-300 transition duration-300" />
              </Link>
              <Link href="https://g.co/kgs/QCeJuQ7" target="_blank">
                <Globe className="hover:text-blue-300 transition duration-300" />
              </Link>
            </div>
          </motion.div>

          {/* Trust Hours */}
          <motion.div variants={fadeInUp} className="text-left">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <Clock size={18} /> Trust Hours
            </h3>
            <p className="text-sm leading-relaxed">
              Monday to Friday <br />
              10:00 AM - 07:00 PM
            </p>
            <p className="text-xs text-gray-400 mt-1">
              All branches of the company
            </p>
          </motion.div>

          {/* Join Us Links */}
          <motion.div variants={fadeInUp} className="text-left">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <Heart size={18} /> Be A Part of Us
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/volunteer", label: "Be a Volunteer" },
                { href: "/donate", label: "Donation" },
                { href: "/corporate", label: "Corporate" },
                { href: "/education", label: "Education" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="hover:text-blue-300 transition duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeInUp} className="text-left break-words">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              Contact Us
            </h3>
            <div className="text-sm space-y-2">
              <div className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Phone:</strong> 9094099940
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Email:</strong> edu@sslftrust.com
                </span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="break-words">
                  <strong>Address:</strong> No:1/210, Defence Colony, 15th Cross
                  Street, Ekkattuthangal, Chennai - 600032, INDIA
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-sm text-center text-gray-300 px-4">
        COPYRIGHT © {new Date().getFullYear()}. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

export default Footer;
