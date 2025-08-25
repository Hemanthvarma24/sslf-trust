"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Image imports
import img1 from "@/assets/photogalary/all images/IMG-20250110-WA0018.jpg";
import img2 from "@/assets/photogalary/all images/IMG-20250311-WA0077.jpg";
import img3 from "@/assets/photogalary/all images/IMG-20250311-WA0078.jpg";
import img4 from "@/assets/photogalary/all images/IMG-20250311-WA0079.jpg";
import img5 from "@/assets/photogalary/all images/IMG-20250311-WA0080.jpg";
import img6 from "@/assets/photogalary/all images/IMG-20250311-WA0081.jpg";
import img7 from "@/assets/photogalary/all images/IMG-20250311-WA0082.jpg";
import img8 from "@/assets/photogalary/all images/IMG-20250311-WA0084.jpg";
import img9 from "@/assets/photogalary/all images/IMG-20250311-WA0085.jpg";
import img10 from "@/assets/photogalary/all images/IMG-20250311-WA0086.jpg";
import img11 from "@/assets/photogalary/all images/IMG-20250311-WA0087.jpg";
import img12 from "@/assets/photogalary/all images/IMG-20250311-WA0088.jpg";
import img13 from "@/assets/photogalary/all images/IMG-20250311-WA0089.jpg";
import img14 from "@/assets/photogalary/all images/IMG-20250311-WA0091.jpg";
import img15 from "@/assets/photogalary/all images/IMG-20250311-WA0092.jpg";
import img16 from "@/assets/photogalary/all images/IMG-20250311-WA0094.jpg";
import img17 from "@/assets/photogalary/all images/IMG-20250311-WA0098.jpg";
import img18 from "@/assets/photogalary/all images/IMG-20250311-WA0101.jpg";
import img19 from "@/assets/photogalary/all images/IMG-20250311-WA0106.jpg";
import img20 from "@/assets/photogalary/all images/IMG-20250311-WA0108.jpg";
import img21 from "@/assets/photogalary/all images/IMG-20250311-WA0109.jpg";
import img22 from "@/assets/photogalary/all images/IMG-20250311-WA0110.jpg";
import img23 from "@/assets/photogalary/all images/IMG-20250311-WA0111.jpg";
import img24 from "@/assets/photogalary/all images/IMG-20250311-WA0113.jpg";
import img25 from "@/assets/photogalary/all images/IMG-20250311-WA0114.jpg";
import img26 from "@/assets/news&Events/new.jpg"
import img27 from "@/assets/news&Events/new2.jpg"
import img28 from "@/assets/news&Events/new-3.jpg"
import img29 from "@/assets/news&Events/new-4.jpg"
import img30 from "@/assets/news&Events/new-5.jpg"
import img31 from "@/assets/news&Events/new-6.jpg"
import img32 from "@/assets/news&Events/new-7.jpg"

const allImages = [
  img26 , img27, img28 , img29, img30, img6, img20, img24, img25, img3, img10, img11, img17, img15, img1,
  img21, img22, img2, img7, img8, img9, img19, img4, img12, img23,
  img13, img16, img18, img5, img14, img31,img32
];

export default function GallerySection() {
  const [index, setIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(10);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsToShow(4);
      else if (window.innerWidth < 1024) setItemsToShow(6);
      else setItemsToShow(10);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % allImages.length);
    }, 3000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="py-8 md:py-16 bg-white mb-6 pb-6">
      <div className="container mx-auto px-3 md:px-4">
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-2xl md:text-3xl font-bold uppercase">
            Photo Gallery
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4">
          {allImages.slice(0, itemsToShow).map((_, i) => (
            <motion.div
              key={i}
              className="relative aspect-square rounded-sm overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: i * 0.05,
                ease: "easeOut",
              }}
            >
              <Image
                src={allImages[(index + i) % allImages.length]}
                alt={`Gallery Image ${i + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover hover:scale-105 transition-transform duration-300"
                priority={i < 4}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}