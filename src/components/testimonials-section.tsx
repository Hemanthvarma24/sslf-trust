"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import bgimg from "@/assets/testimonial/steptodown.com264913.jpg";

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(2);

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

  useEffect(() => {
    const updateItemsToShow = () => {
      setItemsToShow(window.innerWidth >= 768 ? 2 : 1);
    };
    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  const handleDotClick = (index: number) => {
    setActiveIndex(index * itemsToShow);
  };
  

  const getNumberOfDots = () => {
    return Math.ceil(testimonials.length / itemsToShow);
  };

  const renderStars = (rating: number) => (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-yellow-400 text-lg">
          {i < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );

  return (
    <div className="w-full py-12 flex flex-col items-center relative min-h-[500px]">
      <div className="absolute inset-0">
        <Image src={bgimg} alt="Background" layout="fill" objectFit="cover" quality={100} />
      </div>

      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between z-10 px-6">
        <div className="md:w-1/2 text-[#0b0a45] text-left">
          <h2 className="text-4xl  font-bold mb-4">TESTIMONIALS</h2>
          <p className="text-lg mb-6">See what our satisfied customers have to say about us.</p>
        </div>

        <div className="md:w-1/2 bg-white rounded-lg shadow-lg p-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.slice(activeIndex, activeIndex + itemsToShow).map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center h-auto">
                <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                <div className="w-16 h-1 bg-purple-800 my-3"></div>
                <p className="text-gray-600 text-center text-sm">{testimonial.testimonial}</p>
                <div className="mt-4">{renderStars(testimonial.rating)}</div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            {[...Array(getNumberOfDots())].map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`mx-1 w-3 h-3 rounded-full transition-colors duration-300 ${
                  Math.floor(activeIndex / itemsToShow) === index ? "bg-gray-800" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
