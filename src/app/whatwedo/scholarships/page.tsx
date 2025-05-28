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
import imgone from "@/assets/news&Events/scholaship/IMG-20250311-WA0108.jpg";
import imgtwo from "@/assets/news&Events/scholaship/WhatsApp Image 2025-03-19 at 08.09.59_cab63718.jpg";
import imgthree from "@/assets/news&Events/scholaship/WhatsApp Image 2025-03-19 at 08.10.00_e4c36ec4.jpg";

export default function ScholarshipProgramPage() {
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
            Scholarship Program & Educational Support
          </h1>
          <p className="text-lg mt-3 text-gray-600">
            Empowering students with education and financial aid for a brighter
            future.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center bg-white rounded-2xl shadow-xl p-6 md:p-10">
          {/* Carousel for Images */}
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
                        src={src || "/placeholder.svg"}
                        alt={`Scholarship Program ${index + 1}`}
                        fill
                        className="object-cover rounded-xl"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-gray-800"
          >
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              Education is the key to unlocking opportunities, yet financial
              constraints hold many students back. SSLF Charity Trust’s
              Scholarship Program provides financial aid, tuition fees, and
              learning materials to underprivileged students, ensuring they can
              pursue their academic dreams. Our scholarships are awarded based
              on merit and need, giving talented individuals the chance to
              excel. Beyond financial assistance, we offer mentorship and career
              guidance to help students shape a successful future. With the
              generosity of donors and well-wishers, we aim to expand our
              support and create equal educational opportunities. Join us in
              empowering young minds and investing in a future of knowledge and
              success.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
