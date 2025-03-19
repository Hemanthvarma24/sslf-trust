"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import type { CarouselApi } from "@/components/ui/carousel";
import vtcone from "@/assets/news&Events/vocialtraning/eead60c9-b045-4864-bbb6-20957869fd26.jpg"
import vtctwo from "@/assets/news&Events/vocialtraning/WhatsApp Image 2025-03-11 at 17.16.59_9c6af3fb.jpg"
import vtcthree from "@/assets/news&Events/vocialtraning/fce931b8-20de-4f76-838a-45e7316b04d3.jpg"

export default function MedicalCampsPage() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    // Start autoplay
    const autoplayInterval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    // Clean up interval on unmount
    return () => clearInterval(autoplayInterval);
  }, [api]);

  return (
    <div className="min-h-screen bg-white py-8 mt-16 md:py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Vocational Training Center
          </h1>
        </div>

        {/* Medical Camps Details */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Carousel for Medical Camp Images */}
          <div className="w-full">
            <Carousel
              setApi={setApi}
              opts={{
                loop: true,
              }}
              className="w-full rounded-lg overflow-hidden shadow-lg"
            >
              <CarouselContent>
                {[vtcone,vtctwo,vtcthree].map((src, index) => (
                  <CarouselItem key={index}>
                    <div className="relative h-[300px] md:h-[400px] w-full">
                      <Image
                        src={src || "/placeholder.svg"}
                        alt={`Medical Camp ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Right Side Content */}
          <div className="text-gray-800 px-4 md:px-6">
            <p className="text-gray-600 mt-4 text-base md:text-lg">
              SSLF Charity Trust's Vocational Training Center is committed to
              empowering individuals by providing skill-based education and
              hands-on training to enhance employability and self-reliance. We
              believe that skill development is key to breaking the cycle of
              poverty and creating sustainable livelihoods. Our center offers
              structured training programs designed to equip individuals with
              practical knowledge, boost their confidence, and open doors to new
              career opportunities. By bridging the gap between education and
              employment, we help people build a strong foundation for their
              future.Through our efforts, we strive to create a skilled and
              empowered workforce that can contribute to economic growth and
              community development. Join us in making a difference by
              supporting skill-building initiatives that transform lives!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
