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

import donate from "@/assets/news&Events/donate/WhatsApp Image 2025-03-11 at 17.16.56_0ef56408.jpg";
import donatetwo from "@/assets/news&Events/donate/WhatsApp Image 2025-03-11 at 17.16.57_05311e86.jpg";
import donatethree from "@/assets/news&Events/donate/WhatsApp Image 2025-03-11 at 17.16.57_240274f7.jpg";

export default function DonateProgramPage() {
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Donate Program
          </h1>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center bg-white shadow-xl rounded-2xl p-6 md:p-10">
          {/* Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >
            <Carousel
              setApi={setApi}
              opts={{ loop: true }}
              className="w-full rounded-lg overflow-hidden"
            >
              <CarouselContent>
                {[donate, donatetwo, donatethree].map((src, index) => (
                  <CarouselItem key={index}>
                    <div className="relative h-[300px] md:h-[400px] w-full">
                      <Image
                        src={src}
                        alt={`Donate Program ${index + 1}`}
                        fill
                        className="object-cover rounded-xl"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-gray-800"
          >
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              Giving is a powerful way to create change, and SSLF Charity Trust
              provides various ways for individuals and organizations to
              contribute through our Donation Program. We accept donations in
              the form of funds, books, clothes, food, and medical supplies to
              support our initiatives.
              <br /><br />
              Every contribution directly benefits underprivileged individuals
              by providing them with education, healthcare, and basic
              necessities. We ensure transparency and accountability in all
              donations, regularly updating our donors on how their support is
              making an impact.
              <br /><br />
              Your generosity can help a child receive education, a family get
              medical aid, or a community access essential resources. No
              donation is too small—every act of kindness counts. Join us in
              making a meaningful difference in the lives of those in need.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
