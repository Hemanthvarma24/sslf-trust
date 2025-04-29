"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

import volunteer from "@/assets/BeApart/IMG-20250311-WA0093.jpg";
import donate from "@/assets/BeApart/storyt02.jpeg";
import corporate from "@/assets/BeApart/IMG-20250311-WA0112.jpg";
import education from "@/assets/BeApart/IMG-20250311-WA0116.jpg";

const services = [
  {
    name: "BE A VOLUNTEER",
    image: volunteer,
    href: "/volunteer",
  },
  {
    name: "DONATE",
    image: donate,
    href: "/donate",
  },
  {
    name: "CORPORATE",
    image: corporate,
    href: "/corporate",
  },
  {
    name: "EDUCATION",
    image: education,
    href: "/education",
  },
];

export default function ServicesSection() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false, // animation happens every scroll
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="py-16 bg-white text-center relative">
      <div className="container mx-auto px-4 mb-6">
        <h2
          className="text-3xl font-bold mb-10 text-[#0b0a46] tracking-wide"
          data-aos="fade-up"
        >
          BE PART OF US
        </h2>

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-2">
          {services.map((service, index) => (
            <Link
              href={service.href}
              key={index}
              className="relative group overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay={`${index * 150}`} // 0ms, 150ms, 300ms, 450ms stagger
            >
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.name}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Text with hover effect */}
              <div className="absolute bottom-0 left-0 w-full p-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-lg font-bold tracking-wide">{service.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
