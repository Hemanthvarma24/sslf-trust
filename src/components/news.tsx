"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// Scholarship images
import imgone from "@/assets/news&Events/scholaship/IMG-20250311-WA0108.jpg";
import imgtwo from "@/assets/news&Events/scholaship/WhatsApp Image 2025-03-19 at 08.09.59_cab63718.jpg";
import imgthree from "@/assets/news&Events/scholaship/WhatsApp Image 2025-03-19 at 08.10.00_e4c36ec4.jpg";
import imgfour from "@/assets/news&Events/scholaship/WhatsApp Image 2025-03-19 at 08.10.01_c4051704.jpg";
import imgfive from "@/assets/news&Events/scholaship/WhatsApp Image 2025-03-19 at 08.10.02_2652a436.jpg";
import imgsix from "@/assets/news&Events/scholaship/one.jpg";

// Medical camp images
import medicalone from "@/assets/news&Events/medical/593A4526.jpg";
import medicaltwo from "@/assets/news&Events/medical/695A6847.jpg";
import medicalthree from "@/assets/news&Events/medical/695A6848.jpg";
import medicalfour from "@/assets/news&Events/medical/695A6852.jpg";
import medicalfive from "@/assets/news&Events/medical/695A6853.jpg";
import medicalsix from "@/assets/news&Events/medical/695A6854.jpg";

// Awareness program images
import awsone from "@/assets/news&Events/awarenessprogram/0ne.jpg";
import awstwo from "@/assets/news&Events/awarenessprogram/four.jpg";
import awsthree from "@/assets/news&Events/awarenessprogram/piccc.jpg";
import awsfour from "@/assets/news&Events/awarenessprogram/three.jpg";
import awsfive from "@/assets/news&Events/awarenessprogram/neww.jpg";
import awssix from "@/assets/news&Events/awarenessprogram/IMG-20250328-WA0024.jpg";
import awsseven from "@/assets/news&Events/awarenessprogram/awsseven.jpg";
import awseight from "@/assets/news&Events/awarenessprogram/awseight.jpg";
import awsnine from "@/assets/news&Events/awarenessprogram/awsnine.jpg";
import awsten from "@/assets/news&Events/awarenessprogram/awstwn.jpg";
import awseleven from "@/assets/news&Events/awarenessprogram/awseleven.jpg";
import aws from "@/assets/news&Events/awarenessprogram/aws.jpg";

// Vocational training images
import vtcone from "@/assets/news&Events/vocialtraning/book.jpg";
import vtctwo from "@/assets/news&Events/vocialtraning/WhatsApp Image 2025-03-11 at 17.16.59_9c6af3fb.jpg";
import vtcthree from "@/assets/news&Events/vocialtraning/fce931b8-20de-4f76-838a-45e7316b04d3.jpg";
import vtcfour from "@/assets/news&Events/vocialtraning/f306a458-a933-490f-aca8-6ab1dba2837a.jpg";
import vtcfive from "@/assets/news&Events/vocialtraning/eead60c9-b045-4864-bbb6-20957869fd26.jpg";

// Donate program images
import donate from "@/assets/news&Events/donate/WhatsApp Image 2025-03-11 at 17.16.56_0ef56408.jpg";
import donatetwo from "@/assets/news&Events/donate/WhatsApp Image 2025-03-11 at 17.16.57_05311e86.jpg";
import donatethree from "@/assets/news&Events/donate/WhatsApp Image 2025-03-11 at 17.16.57_240274f7.jpg";

interface NewsItem {
  id: number;
  title: string;
  category: string;
  image: any;
}

interface AwarenessImagePair {
  position: number;
  currentIndex: number;
  images: NewsItem[];
}

export default function NewsEventsSection() {
  const categories: string[] = [
    "SCHOLARSHIP",
    "MEDICAL CAMP",
    "AWARENESS PROGRAM",
    "VOCATIONAL TRAINING",
    "DONATE PROGRAM",
  ];

  // Create a comprehensive newsItems array that includes all imported images
  const newsItems: NewsItem[] = [
    // Scholarship items
    {
      id: 1,
      title: "Annual Scholarship Program",
      category: "SCHOLARSHIP",
      image: imgone,
    },
    {
      id: 2,
      title: "Merit Scholarship Awards",
      category: "SCHOLARSHIP",
      image: imgtwo,
    },
    {
      id: 3,
      title: "Scholarship Distribution Ceremony",
      category: "SCHOLARSHIP",
      image: imgthree,
    },
    {
      id: 4,
      title: "Education Support Initiative",
      category: "SCHOLARSHIP",
      image: imgfour,
    },
    {
      id: 5,
      title: "Scholarship Alumni Meet",
      category: "SCHOLARSHIP",
      image: imgfive,
    },
    {
      id: 6,
      title: "Scholarship Program Overview",
      category: "SCHOLARSHIP",
      image: imgsix,
    },

    // Medical Camp items
    {
      id: 7,
      title: "Free Health Check-up Camp",
      category: "MEDICAL CAMP",
      image: medicalone,
    },
    {
      id: 8,
      title: "Dental Check-up Drive",
      category: "MEDICAL CAMP",
      image: medicaltwo,
    },
    {
      id: 9,
      title: "Eye Care Awareness Camp",
      category: "MEDICAL CAMP",
      image: medicalthree,
    },
    {
      id: 10,
      title: "Rural Health Initiative",
      category: "MEDICAL CAMP",
      image: medicalfour,
    },
    {
      id: 11,
      title: "Women's Health Check-up",
      category: "MEDICAL CAMP",
      image: medicalfive,
    },
    {
      id: 12,
      title: "Community Medical Outreach",
      category: "MEDICAL CAMP",
      image: medicalsix,
    },

    // Awareness Program items - first set
    {
      id: 13,
      title: "Community Awareness Session",
      category: "AWARENESS PROGRAM",
      image: awsone,
    },
    {
      id: 14,
      title: "Environmental Awareness Drive",
      category: "AWARENESS PROGRAM",
      image: awstwo,
    },
    {
      id: 15,
      title: "Health Education Program",
      category: "AWARENESS PROGRAM",
      image: awsthree,
    },
    {
      id: 16,
      title: "Youth Awareness Workshop",
      category: "AWARENESS PROGRAM",
      image: awsfour,
    },
    {
      id: 17,
      title: "Public Health Awareness",
      category: "AWARENESS PROGRAM",
      image: awsfive,
    },
    {
      id: 18,
      title: "Social Awareness Campaign",
      category: "AWARENESS PROGRAM",
      image: awssix,
    },
    
    // Awareness Program items - second set
    {
      id: 27,
      title: "Community Outreach Program",
      category: "AWARENESS PROGRAM",
      image: awsseven,
    },
    {
      id: 28,
      title: "School Health Education",
      category: "AWARENESS PROGRAM",
      image: awseight,
    },
    {
      id: 29,
      title: "Rural Awareness Initiative",
      category: "AWARENESS PROGRAM",
      image: awsnine,
    },
    {
      id: 30,
      title: "Public Safety Workshop",
      category: "AWARENESS PROGRAM",
      image: awsten,
    },
    {
      id: 31,
      title: "Community Health Seminar",
      category: "AWARENESS PROGRAM",
      image: awseleven,
    },
    {
      id: 32,
      title: "Environmental Protection Drive",
      category: "AWARENESS PROGRAM",
      image: aws,
    },

    // Vocational Training items
    {
      id: 19,
      title: "Skill Development Workshop",
      category: "VOCATIONAL TRAINING",
      image: vtcone,
    },
    {
      id: 20,
      title: "Computer Training Program",
      category: "VOCATIONAL TRAINING",
      image: vtctwo,
    },
    {
      id: 21,
      title: "Handicraft Training Session",
      category: "VOCATIONAL TRAINING",
      image: vtcthree,
    },
    {
      id: 22,
      title: "Youth Employment Training",
      category: "VOCATIONAL TRAINING",
      image: vtcfour,
    },
    {
      id: 23,
      title: "Women Empowerment Workshop",
      category: "VOCATIONAL TRAINING",
      image: vtcfive,
    },

    // Donate Program items
    {
      id: 24,
      title: "Food Distribution Drive",
      category: "DONATE PROGRAM",
      image: donate,
    },
    {
      id: 25,
      title: "Clothing Donation Campaign",
      category: "DONATE PROGRAM",
      image: donatetwo,
    },
    {
      id: 26,
      title: "Educational Materials Donation",
      category: "DONATE PROGRAM",
      image: donatethree,
    },
  ];

  const [activeCategory, setActiveCategory] = useState<string>("SCHOLARSHIP");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;
  
  // For awareness program auto-sliding
  const awarenessItems = newsItems.filter(item => item.category === "AWARENESS PROGRAM");
  const [awarenessImagePairs, setAwarenessImagePairs] = useState<AwarenessImagePair[]>([]);
  
  // Initialize the 6 grid positions with image pairs
  useEffect(() => {
    if (activeCategory === "AWARENESS PROGRAM") {
      // Create pairs of images for each grid position
      const pairs: AwarenessImagePair[] = [];
      for (let i = 0; i < 6; i++) {
        pairs.push({
          position: i,
          currentIndex: 0,
          images: [awarenessItems[i], awarenessItems[i + 6]], // Pair original and second set
        });
      }
      setAwarenessImagePairs(pairs);
    }
  }, [activeCategory]);
  
  // Auto-slide timer for awareness program
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (activeCategory === "AWARENESS PROGRAM") {
      timer = setInterval(() => {
        setAwarenessImagePairs(prev => 
          prev.map(pair => ({
            ...pair,
            currentIndex: pair.currentIndex === 0 ? 1 : 0 // Toggle between 0 and 1
          }))
        );
      }, 4000); // Switch every 3 seconds
    }
    
    return () => clearInterval(timer);
  }, [activeCategory]);

  // Get displayed items based on category and pagination
  const getDisplayedItems = () => {
    if (activeCategory === "AWARENESS PROGRAM") {
      // For awareness program, return the current visible images
      return awarenessImagePairs.map(pair => pair.images[pair.currentIndex]);
    } else {
      // For other categories, use normal pagination
      const filteredItems = newsItems.filter(
        (item) => item.category === activeCategory
      );
      
      return filteredItems.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      );
    }
  };
  
  // Calculate total pages for pagination
  const getTotalPages = () => {
    if (activeCategory === "AWARENESS PROGRAM") {
      return 1; // No pagination for awareness program
    } else {
      const filteredItems = newsItems.filter(
        (item) => item.category === activeCategory
      );
      return Math.ceil(filteredItems.length / itemsPerPage);
    }
  };
  
  const displayedItems = getDisplayedItems();
  const totalPages = getTotalPages();
  
  const menuRef = useRef<HTMLDivElement>(null);

  // Reset pagination when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  // Scroll active category into view
  useEffect(() => {
    if (menuRef.current) {
      const activeButton = menuRef.current.querySelector(
        `button[data-category="${activeCategory}"]`
      );
      if (activeButton) {
        const container = menuRef.current;
        const scrollLeft =
          activeButton.getBoundingClientRect().left -
          container.getBoundingClientRect().left +
          container.scrollLeft -
          (container.offsetWidth - (activeButton as HTMLElement).offsetWidth) /
            2;

        container.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        });
      }
    }
  }, [activeCategory]);

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl text-[#0b0a45] md:text-4xl font-bold">
            NEWS & EVENTS
          </h2>
        </div>

        {/* Centered menu container for desktop, scrollable for mobile */}
        <div className="relative mb-8 flex justify-center">
          <div
            ref={menuRef}
            className="flex md:max-w-fit mx-auto overflow-x-auto scrollbar-hide gap-3 py-2 px-1 scroll-smooth snap-x"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories.map((category) => (
              <button
                key={category}
                data-category={category}
                className={`px-4 py-2 text-xs md:text-sm font-semibold border rounded-md transition-all whitespace-nowrap flex-shrink-0 snap-start ${
                  activeCategory === category
                    ? "bg-blue-900 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Image grid - 2 columns on mobile, 3 columns on desktop with object-contain */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {displayedItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="relative rounded-lg overflow-hidden shadow-lg group h-44 sm:h-56 md:h-64 lg:h-72 transition-transform hover:scale-[1.02] duration-300"
            >
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 33vw"
                  className={`object-contain w-full h-full p-1 transition-all duration-500 ${
                    activeCategory === "AWARENESS PROGRAM" ? "group-hover:scale-110" : "group-hover:scale-110"
                  }`}
                  priority={item.id <= 6}
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
            </div>
          ))}
        </div>

        {/* Pagination controls - Only show if needed */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-8 gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded-md ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-blue-900 text-white hover:bg-blue-800"
              }`}
            >
              &lt;
            </button>
            
            <div className="flex items-center gap-1">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-8 h-8 flex items-center justify-center rounded-md ${
                    currentPage === i + 1
                      ? "bg-blue-900 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            
            
          </div>
        )}

        {displayedItems.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500">
              No events available in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}