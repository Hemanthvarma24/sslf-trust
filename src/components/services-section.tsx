"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import volunteer from "@/assets/BeApart/IMG-20250311-WA0093.jpg";
import donate from "@/assets/BeApart/storyt02.jpeg";
import corporate from "@/assets/BeApart/IMG-20250311-WA0112.jpg";
import education from "@/assets/BeApart/IMG-20250311-WA0116.jpg";

// Define services with links to their respective pages
const services = [
  {
    name: "BE A VOLUNTEER",
    image: volunteer,
    href: "/volunteer"
  },
  {
    name: "DONATE",
    image: donate,
    href: "/donate"
  },
  {
    name: "CORPORATE",
    image: corporate,
    href: "/corporate"
  },
  {
    name: "EDUCATION",
    image: education,
    href: "/education"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white text-center relative">
      <div className="container mx-auto px-4 mb-6">
        <h2 className="text-3xl font-bold mb-2 text-[#0b0a46] tracking-wide">
        BE PART OF US
        </h2>

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-2">
          {services.map((service, index) => (
            <Link 
              href={service.href} 
              key={index}
              className="relative group overflow-hidden rounded-lg cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.name}
                className="w-full h-80 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-red-700 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>

              {/* Text with hover effect */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-lg font-bold tracking-wide">
                  {service.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}