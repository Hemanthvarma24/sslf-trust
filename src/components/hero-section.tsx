"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "@/assets/homepage/img1.jpg";
import img2 from "@/assets/homepage/img2.jpg";
import img7 from "@/assets/homepage/WhatsAppImage 2025-03-19.jpg";
import img3 from "@/assets/homepage/img3.jpg";
import img5 from "@/assets/homepage/img5.jpg";
import img6 from "@/assets/homepage/img6.jpg";

const images = [img1, img2, img7, img3,  img5, img6];

export default function HeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
    cssEase: "linear",
    pauseOnHover: false,
  };

  return (
    <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] overflow-hidden">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh]">
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
