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
import imgone from "@/assets/news&Events/medical/593A4526.jpg";
import imgtwo from "@/assets/news&Events/medical/695A6847.jpg";
import imgthree from "@/assets/news&Events/medical/695A6848.jpg";

export default function MedicalCampsPage() {
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
            Medical Camps & Healthcare Support
          </h1>
          <p className="text-lg mt-3 text-gray-600">
            Providing essential healthcare services to underprivileged
            communities.
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
                {[imgone, imgtwo, imgthree].map((src, index) => (
                  <CarouselItem key={index}>
                    <div className="relative h-[300px] md:h-[400px] w-full">
                      <Image
                        src={src}
                        alt={`Medical Camp ${index + 1}`}
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
              Healthcare should be accessible to all, yet many communities lack
              basic medical facilities. SSLF Charity Trust organizes Medical
              Camps to provide free healthcare services to those in need. Our
              camps offer general health check-ups, specialized consultations,
              diagnostic services, and free medications. We also conduct
              awareness sessions on hygiene, nutrition, and disease prevention
              to promote better health practices. Our dedicated team of doctors,
              nurses, and volunteers work tirelessly to ensure early detection
              and timely treatment of illnesses. By reaching remote and
              underserved areas, we aim to make healthcare more inclusive. With
              your support, we can continue to bring quality medical care to
              those who need it the most. Join us in our mission to build a
              healthier society.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
