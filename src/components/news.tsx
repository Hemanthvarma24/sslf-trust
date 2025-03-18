"use client";

import Image from "next/image";
import { useState } from "react";
import imgone from "@/assets/news&Events/IMG-20250311-WA0090.jpg";
import imgtwo from "@/assets/news&Events/IMG-20250311-WA0099.jpg";
import imgthree from "@/assets/news&Events/IMG-20250311-WA0102.jpg";
import imgfour from "@/assets/news&Events/IMG-20250311-WA0105.jpg";
import imgfive from "@/assets/news&Events/IMG-20250311-WA0121.jpg";
import imgsix from "@/assets/news&Events/img/IMG-20250311-WA0114.jpg";
import medicalone from "@/assets/news&Events/medical/593A4526.jpg";
import medicaltwo from "@/assets/news&Events/medical/695A6847.jpg";
import medicalthree from "@/assets/news&Events/medical/695A6848.jpg";
import medicalfour from "@/assets/news&Events/medical/695A6852.jpg";
import medicalfive from "@/assets/news&Events/medical/695A6853.jpg";
import medicalsix from "@/assets/news&Events/medical/695A6854.jpg";

interface NewsItem {
  id: number;
  title: string;
  category: string;
  image: any;
}

export default function NewsEventsSection() {
  const categories: string[] = [
    "SCHOLARSHIP",
    "MEDICAL CAMP",
    "AWARENESS PROGRAM",
    "TRAINING PROGRAM",
    "DONATE PROGRAM",
  ];

  const newsItems: NewsItem[] = [
    { id: 1, title: "Annual Scholarship Program", category: "SCHOLARSHIP", image: imgone },
    { id: 2, title: "Merit Scholarship Awards", category: "SCHOLARSHIP", image: imgtwo },
    { id: 3, title: "Scholarship Distribution Ceremony", category: "SCHOLARSHIP", image: imgthree },
    { id: 4, title: "Education Support Initiative", category: "SCHOLARSHIP", image: imgfour },
    { id: 5, title: "Scholarship Alumni Meet", category: "SCHOLARSHIP", image: imgfive },
    { id: 6, title: "Scholarship Program Overview", category: "SCHOLARSHIP", image: imgsix },
    { id: 7, title: "Free Health Check-up Camp", category: "MEDICAL CAMP", image: medicalone },
    { id: 8, title: "Dental Check-up Drive", category: "MEDICAL CAMP", image: medicaltwo },
    { id: 9, title: "Eye Care Awareness Camp", category: "MEDICAL CAMP", image: medicalthree },
    { id: 10, title: "Rural Health Initiative", category: "MEDICAL CAMP", image: medicalfour },
    { id: 11, title: "Women's Health Check-up", category: "MEDICAL CAMP", image: medicalfive },
    { id: 12, title: "Community Medical Outreach", category: "MEDICAL CAMP", image: medicalsix },
  ];

  const [activeCategory, setActiveCategory] = useState<string>("SCHOLARSHIP");
  const filteredItems = newsItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold">NEWS & EVENTS</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Stay updated with our latest news, events, and inspiring stories.
          </p>
        </div>

        <div className="flex justify-center space-x-2 mb-6 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 text-sm font-semibold border rounded-md transition-all ${
                activeCategory === category
                  ? "bg-blue-900 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="relative rounded-lg overflow-hidden shadow-md group">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-[250px] object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}