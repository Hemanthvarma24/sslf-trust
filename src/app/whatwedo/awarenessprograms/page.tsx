"use client"

import { useState, useEffect } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import type { CarouselApi } from "@/components/ui/carousel"
import awsone from "@/assets/news&Events/awarenessprogram/0ne.jpg"
import awstwo from "@/assets/news&Events/awarenessprogram/four.jpg"
import awsthree from "@/assets/news&Events/awarenessprogram/piccc.jpg"

export default function AwarenessProgramsPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Awareness Programs & Social Initiatives</h1>
          <p className="text-lg mt-2 text-gray-600">
            Educating communities on key social, health, and environmental issues.
          </p>
        </div>

        {/* Awareness Programs Details */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Carousel for Awareness Program Images */}
          <div className="w-full">
            <Carousel
              setApi={setApi}
              opts={{
                loop: true,
              }}
              className="w-full rounded-lg overflow-hidden shadow-lg"
            >
              <CarouselContent>
                {[awsone,awstwo,awsthree].map((src, index) => (
                  <CarouselItem key={index}>
                    <div className="relative h-[300px] md:h-[400px] w-full">
                      <Image
                        src={src || "/placeholder.svg"}
                        alt={`Awareness Program ${index + 1}`}
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
              Creating awareness is the first step toward social change. SSLF Charity Trust conducts Awareness Programs to educate communities on hygiene, women's empowerment, education, environmental conservation, and substance abuse. Our interactive workshops, campaigns, and street plays engage people effectively, inspiring them to take action. Through partnerships with schools, colleges, and organizations, we reach a wider audience, fostering an informed and responsible society. Help us spread awareness and make a lasting impact!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
