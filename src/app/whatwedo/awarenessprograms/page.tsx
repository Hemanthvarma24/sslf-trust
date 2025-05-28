"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import type { CarouselApi } from "@/components/ui/carousel";
import { motion } from "framer-motion";
import awsone from "@/assets/news&Events/awarenessprogram/0ne.jpg";
import awstwo from "@/assets/news&Events/awarenessprogram/four.jpg";
import awsthree from "@/assets/news&Events/awarenessprogram/piccc.jpg";
import awsfour from "@/assets/news&Events/awarenessprogram/IMG-20250328-WA0033.jpg";

export default function AwarenessProgramsPage() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const autoplayInterval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(autoplayInterval);
  }, [api]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 py-12 mt-16">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Awareness Programs & Social Initiatives
          </h1>
          <p className="text-lg mt-3 text-gray-600">
            Educating communities on key social, health, and environmental
            issues.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center bg-white rounded-2xl shadow-xl p-6 md:p-10">
          {/* Carousel Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full rounded-lg overflow-hidden"
          >
            <Carousel
              setApi={setApi}
              opts={{ loop: true }}
              className="w-full"
            >
              <CarouselContent>
                {[awsone, awstwo, awsthree, awsfour].map((src, index) => (
                  <CarouselItem key={index}>
                    <div className="relative h-[300px] md:h-[400px] w-full">
                      <Image
                        src={src}
                        alt={`Awareness Program ${index + 1}`}
                        fill
                        className="object-cover rounded-xl"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-gray-800"
          >
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              Creating awareness is the first step toward social change. SSLF
              Charity Trust conducts Awareness Programs to educate communities
              on hygiene, women's empowerment, education, environmental
              conservation, and substance abuse. Our interactive workshops,
              campaigns, and street plays engage people effectively, inspiring
              them to take action. Through partnerships with schools, colleges,
              and organizations, we reach a wider audience, fostering an
              informed and responsible society. Help us spread awareness and
              make a lasting impact!
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
