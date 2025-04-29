"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import bgimg from "@/assets/testimonial/steptodown.com264913.jpg";

const testimonials = [
  {
    id: 1,
    name: "Deepika",
    testimonial:
      "Being a part of SSLF Educational Trust has been life-changing. The mentorship, scholarships, and quality education have helped me achieve my dreams. I am forever grateful!",
    rating: 5,
  },
  {
    id: 2,
    name: "Krishna",
    testimonial:
      "The trust provided me with not just education, but also confidence and a platform to grow. The faculty and programs are truly exceptional.",
    rating: 5,
  },
  {
    id: 3,
    name: "Kalaivani",
    testimonial:
      "I am thankful to SSLF EDUCATIONAL TRUST for giving my child the best education possible. The values, discipline, and academic excellence they instill are commendable.",
    rating: 4,
  },
  {
    id: 4,
    name: "Anbualagan",
    testimonial:
      "More than just academics, this trust fosters creativity, leadership, and personal growth. My child is now ready for a bright future!",
    rating: 5,
  },
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(2);

  useEffect(() => {
    const updateItemsToShow = () => {
      setItemsToShow(window.innerWidth >= 768 ? 2 : 1);
    };
    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      const nextIndex = activeIndex + itemsToShow;
      const resetIndex = nextIndex >= testimonials.length ? 0 : nextIndex;
      setActiveIndex(resetIndex);
    }, 5000);
    return () => clearInterval(autoSlideInterval);
  }, [activeIndex, itemsToShow]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index * itemsToShow);
  };

  const getNumberOfDots = () => {
    return Math.ceil(testimonials.length / itemsToShow);
  };

  const renderStars = (rating: number) => (
    <div className="flex justify-center mt-2">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-yellow-400 text-base">
          {i < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );

  return (
    <section className="relative w-full py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image src={bgimg} alt="Background" layout="fill" objectFit="cover" quality={100} />
        <div className="absolute inset-0 bg-white/40"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#0b0a45] mb-4">TESTIMONIALS</h2>
          <p className="text-gray-700 text-lg">See what our satisfied customers have to say about us.</p>
        </motion.div>

        <div className="relative z-10">
          {/* Fixed grid spacing with proper gap and responsive alignment */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {testimonials.slice(activeIndex, activeIndex + itemsToShow).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-white p-4 md:p-6 rounded-xl shadow-2xl transform transition duration-500 hover:scale-105 mx-auto w-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-[#0b0a45] text-center">{testimonial.name}</h3>
                <div className="w-12 h-1 bg-purple-800 my-2 mx-auto"></div>
                <p className="text-gray-600 text-sm text-center leading-relaxed">{testimonial.testimonial}</p>
                {renderStars(testimonial.rating)}
              </motion.div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(getNumberOfDots())].map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(activeIndex / itemsToShow) === index ? "bg-purple-800" : "bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;