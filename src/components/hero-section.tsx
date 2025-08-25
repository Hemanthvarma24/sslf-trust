"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "@/assets/homepage/img1.jpg";
import img7 from "@/assets/homepage/WhatsAppImage 2025-03-19.jpg";
import img8 from "@/assets/news&Events/new.jpg";

const images = [img1, img7,  img8];

export default function HeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
    cssEase: "linear",
    pauseOnHover: false,
  };

  return (
    <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] overflow-hidden">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh]"
          >
            <Image
              src={image}
              alt={`Hero Slide ${index + 1}`}
              fill
              style={{ objectFit: "cover" }}
              quality={90}
              priority
              className="transition-opacity duration-700 ease-in-out"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}
