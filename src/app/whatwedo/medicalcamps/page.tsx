"use client"

import { useState, useEffect } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import type { CarouselApi } from "@/components/ui/carousel"
import imgone from "@/assets/news&Events/medical/593A4526.jpg"
import imgtwo from "@/assets/news&Events/medical/695A6847.jpg"
import imgthree from "@/assets/news&Events/medical/695A6848.jpg"

export default function MedicalCampsPage() {
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    if (!api) return

    // Start autoplay
    const autoplayInterval = setInterval(() => {
      api.scrollNext()
    }, 3000)

    // Clean up interval on unmount
    return () => clearInterval(autoplayInterval)
  }, [api])

  return (
    <div className="min-h-screen bg-white py-8 mt-16 md:py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Medical Camps & Healthcare Support</h1>
          <p className="text-lg mt-2 text-gray-600">
            Providing essential healthcare services to underprivileged communities.
          </p>
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
                {[imgone, imgtwo, imgthree].map((src, index) => (
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
              Healthcare should be accessible to all, yet many communities lack basic medical facilities. SSLF Charity Trust organizes Medical Camps to provide free healthcare services to those in need. Our camps offer general health check-ups, specialized consultations, diagnostic services, and free medications. We also conduct awareness sessions on hygiene, nutrition, and disease prevention to promote better health practices. Our dedicated team of doctors, nurses, and volunteers work tirelessly to ensure early detection and timely treatment of illnesses. By reaching remote and underserved areas, we aim to make healthcare more inclusive. With your support, we can continue to bring quality medical care to those who need it the most. Join us in our mission to build a healthier society.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
