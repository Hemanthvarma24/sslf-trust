import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import WhatWeDoSection from "@/components/what-we-do-section"
import ServicesSection from "@/components/services-section"
import NewsEventsSection from "@/components/news"
import TestimonialsSection from "@/components/testimonials-section"
import GallerySection from "@/components/gallery"

export default function Home() {
  return (
    <div className="pt-14">
      <HeroSection />
      <AboutSection />
      <WhatWeDoSection />
      <ServicesSection />
      <NewsEventsSection />
      <TestimonialsSection />
      <GallerySection />
    </div>
  )
}