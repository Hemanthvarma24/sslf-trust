"use client";

import Image from "next/image";
import Link from "next/link";
import herobg from "@/assets/homepage/steptodown.com759068.jpg";

export default function HeroSection() {
  return (
    <section className="relative w-full h-150 flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={herobg}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={80}
        />
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 lg:px-20 text-center md:text-left">
        <div className="max-w-3xl">
          <p className="text-white text-lg italic mb-2">
            We Are Giving Help Form 1962
          </p>
          <h1 className="text-white text-3xl md:text-2xl lg:text-4xl font-bold leading-tight">
            CLEAN-WATER SYSTEM FOR
          </h1>
          <h1 className="text-white text-3xl md:text-2xl lg:text-4xl font-bold leading-tight">
            RURAL POOR
          </h1>

        </div>
      </div>
    </section>
  );
}
