"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

const allImages = [
  img10, img11, img12, img13, img16, img17, img18, img14, img15,
  img1, img21, img22, img2, img7, img8, img9, img19, img20,
  img23, img24, img25, img3, img4, img5, img6,
];

export default function GallerySection() {
  const [index, setIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Number of images to show based on screen size
  const [itemsToShow, setItemsToShow] = useState(10);

  useEffect(() => {
    // Set loaded state after component mounts
    setIsLoaded(true);
    
    // Update items to show based on window width
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(4); // Show 4 images (2 columns × 2 rows) on mobile
      } else if (window.innerWidth < 1024) {
        setItemsToShow(6); // Show 6 images on tablets
      } else {
        setItemsToShow(10); // Show 10 images on desktop
      }
    };

    // Set initial value
    handleResize();

    // Add resize listener
    window.addEventListener('resize', handleResize);
    
    // Auto-rotate images
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % allImages.length);
    }, 3000);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-3 md:px-4">
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-2xl md:text-3xl font-bold uppercase">Photo Gallery</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4">
          {isLoaded && allImages.slice(0, itemsToShow).map((_, i) => (
            <motion.div
              key={i}
              className="relative aspect-square rounded-sm overflow-hidden shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
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