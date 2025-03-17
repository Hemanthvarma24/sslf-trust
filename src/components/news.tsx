"use client"

import Image from "next/image";
import { useState } from "react";
import imgone from "@/assets/news&Events/IMG-20250311-WA0090.jpg";
import imgtwo from "@/assets/news&Events/IMG-20250311-WA0099.jpg";
import imgthree from "@/assets/news&Events/IMG-20250311-WA0102.jpg";
import imgfour from "@/assets/news&Events/IMG-20250311-WA0105.jpg";
import imgfive from "@/assets/news&Events/IMG-20250311-WA0121.jpg";

interface NewsItem {
  id: number;
  title?: string;
  date?: string;
  comments?: number;
  likes?: number;
  image: any;
  large?: boolean;
}

export default function NewsEventsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "WE CAN DO EVERYTHING",
      date: "05 May 2025",
      comments: 2,
      likes: 201,
      image: imgone,
      large: true,
    },
    { id: 2, image: imgtwo },
    { id: 3, image: imgthree },
    { id: 4, image: imgfour },
    { id: 5, image: imgfive },
  ];

  const categories: string[] = ["ALL", "TOP NEWS", "LATEST NEWS", "EVENT NEWS", "OTHER"];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold">NEWS & EVENTS</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Stay updated with our latest news, events, and inspiring stories.
          </p>
        </div>

        {/* Filter Tabs */}
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

        {/* News Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Left Side: Large Featured News */}
          <div className="relative rounded-lg overflow-hidden shadow-lg group">
            <Image
              src={newsItems[0].image}
              alt={newsItems[0].title || "Featured News"}
              width={600}
              height={400}
              className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-red-700 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 text-white transition-all duration-500 transform translate-y-10 group-hover:translate-y-0">
              <h3 className="text-lg font-bold">{newsItems[0].title}</h3>
              <div className="text-sm opacity-80 mt-1 flex items-center space-x-3">
                <span>{newsItems[0].date}</span>
                <span>💬 {newsItems[0].comments}</span>
                <span>❤️ {newsItems[0].likes}</span>
              </div>
            </div>
          </div>

          {/* Right Side: 2x2 Grid */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {newsItems.slice(1).map((item) => (
              <div key={item.id} className="relative rounded-lg overflow-hidden shadow-md group">
                <Image
                  src={item.image}
                  alt={item.title || "News Image"}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-red-700 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
