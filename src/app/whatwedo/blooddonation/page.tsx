"use client"

import { useState, useEffect } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import type { CarouselApi } from "@/components/ui/carousel"
import donate from "@/assets/news&Events/donate/WhatsApp Image 2025-03-11 at 17.16.56_0ef56408.jpg"
import donatetwo from "@/assets/news&Events/donate/WhatsApp Image 2025-03-11 at 17.16.57_05311e86.jpg"
import donatethree from "@/assets/news&Events/donate/WhatsApp Image 2025-03-11 at 17.16.57_240274f7.jpg"

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
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">DONATE PROGRAM</h1>
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
                {[donate, donatetwo,donatethree].map((src, index) => (
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
            Giving is a powerful way to create change, and SSLF Charity Trust provides various ways for individuals and organizations to contribute through our Donation Program. We accept donations in the form of funds, books, clothes, food, and medical supplies to support our initiatives. Every contribution directly benefits underprivileged individuals by providing them with education, healthcare, and basic necessities. We ensure transparency and accountability in all donations, regularly updating our donors on how their support is making an impact. Your generosity can help a child receive education, a family get medical aid, or a community access essential resources. No donation is too small—every act of kindness counts. Join us in making a meaningful difference in the lives of those in need.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
