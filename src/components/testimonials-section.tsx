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
      name: "Panna Rahman",
      position: "CEO - HP Company",
      image: "/api/placeholder/120/120",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
      rating: 5,
    },
    {
      id: 2,
      name: "Juyna Akter",
      position: "CEO - HP Company",
      image: "/api/placeholder/120/120",
      testimonial:
        "Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
      rating: 5,
    },
    {
      id: 3,
      name: "Sarah Johnson",
      position: "CTO - Tech Solutions",
      image: "/api/placeholder/120/120",
      testimonial:
        "Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.",
      rating: 4,
    },
    {
      id: 4,
      name: "John Doe",
      position: "Manager - ABC Ltd",
      image: "/api/placeholder/120/120",
      testimonial:
        "Aliquam erat volutpat. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.",
      rating: 4,
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
        <span key={i} className="text-yellow-400">
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
        <div className="md:w-1/2 text-white text-left">
          <h2 className="text-4xl font-bold mb-4">TESTIMONIALS</h2>
          <p className="text-lg mb-6">See what our satisfied customers have to say about us.</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-lg">Read More</button>
        </div>

        <div className="md:w-1/2 bg-white rounded-lg shadow-lg p-6 relative">
          <div className="flex flex-wrap justify-center">
            {testimonials.slice(activeIndex, activeIndex + itemsToShow).map((testimonial) => (
              <div key={testimonial.id} className="w-full md:w-1/2 px-4 mb-4">
                {/* Fixed height card container */}
                <div className="flex flex-col items-center pb-4 bg-gray-100 p-4 rounded-lg h-96">
                  {/* Fixed sizes for all elements */}
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-3 flex-shrink-0">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 h-6 overflow-hidden">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 mb-2 h-5 overflow-hidden">{testimonial.position}</p>
                  <div className="w-16 h-1 bg-purple-800 mb-4 flex-shrink-0"></div>
                  
                  {/* Fixed height testimonial container */}
                  <div className="text-gray-600 text-center text-sm relative h-32 flex items-center">
                    <span className="text-5xl text-gray-300 absolute -left-4 -top-6">"</span>
                    <p className="px-6 overflow-y-auto max-h-full">{testimonial.testimonial}</p>
                    <span className="text-5xl text-gray-300 absolute -right-4 -bottom-6">"</span>
                  </div>
                  
                  {/* Rating stars with fixed height */}
                  <div className="flex mt-3 h-6 flex-shrink-0">{renderStars(testimonial.rating)}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Below the Cards */}
          <div className="flex justify-center mt-4">
            {[...Array(getNumberOfDots())].map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`mx-1 w-3 h-3 rounded-full ${
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