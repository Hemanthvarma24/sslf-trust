"use client"

import Image from "next/image"
import { useState } from "react"

// Scholarship images
import imgone from "@/assets/news&Events/scholaship/IMG-20250311-WA0108.jpg"
import imgtwo from "@/assets/news&Events/scholaship/WhatsApp Image 2025-03-19 at 08.09.59_cab63718.jpg"
import imgthree from "@/assets/news&Events/scholaship/WhatsApp Image 2025-03-19 at 08.10.00_e4c36ec4.jpg"
import imgfour from "@/assets/news&Events/scholaship/WhatsApp Image 2025-03-19 at 08.10.01_c4051704.jpg"
import imgfive from "@/assets/news&Events/scholaship/WhatsApp Image 2025-03-19 at 08.10.02_2652a436.jpg"
import imgsix from "@/assets/news&Events/scholaship/one.jpg"

// Medical camp images
import medicalone from "@/assets/news&Events/medical/593A4526.jpg"
import medicaltwo from "@/assets/news&Events/medical/695A6847.jpg"
import medicalthree from "@/assets/news&Events/medical/695A6848.jpg"
import medicalfour from "@/assets/news&Events/medical/695A6852.jpg"
import medicalfive from "@/assets/news&Events/medical/695A6853.jpg"
import medicalsix from "@/assets/news&Events/medical/695A6854.jpg"

// Awareness program images
import awsone from "@/assets/news&Events/awarenessprogram/0ne.jpg"
import awstwo from "@/assets/news&Events/awarenessprogram/four.jpg"
import awsthree from "@/assets/news&Events/awarenessprogram/piccc.jpg"
import awsfour from "@/assets/news&Events/awarenessprogram/three.jpg"
import awsfive from "@/assets/news&Events/awarenessprogram/two.jpg"
import awssix from "@/assets/news&Events/awarenessprogram/five.jpg"

// Vocational training images
import vtcone from "@/assets/news&Events/vocialtraning/book.jpg"
import vtctwo from "@/assets/news&Events/vocialtraning/WhatsApp Image 2025-03-11 at 17.16.59_9c6af3fb.jpg"
import vtcthree from "@/assets/news&Events/vocialtraning/fce931b8-20de-4f76-838a-45e7316b04d3.jpg"
import vtcfour from "@/assets/news&Events/vocialtraning/f306a458-a933-490f-aca8-6ab1dba2837a.jpg"
import vtcfive from "@/assets/news&Events/vocialtraning/eead60c9-b045-4864-bbb6-20957869fd26.jpg"
// import vtcsix from "@/assets/news&Events/vocialtraning/WhatsApp Image 2025-03-19 at 19.58.26_5db3cabf.jpg"

// Donate program images
import donate from "@/assets/news&Events/donate/WhatsApp Image 2025-03-11 at 17.16.56_0ef56408.jpg"
import donatetwo from "@/assets/news&Events/donate/WhatsApp Image 2025-03-11 at 17.16.57_05311e86.jpg"
import donatethree from "@/assets/news&Events/donate/WhatsApp Image 2025-03-11 at 17.16.57_240274f7.jpg"

interface NewsItem {
  id: number
  title: string
  category: string
  image: any
}

export default function NewsEventsSection() {
  const categories: string[] = [
    "SCHOLARSHIP",
    "MEDICAL CAMP",
    "AWARENESS PROGRAM",
    "VOCATIONAL TRAINING",
    "DONATE PROGRAM",
  ]

  // Create a comprehensive newsItems array that includes all imported images
  const newsItems: NewsItem[] = [
    // Scholarship items
    { id: 1, title: "Annual Scholarship Program", category: "SCHOLARSHIP", image: imgone },
    { id: 2, title: "Merit Scholarship Awards", category: "SCHOLARSHIP", image: imgtwo },
    { id: 3, title: "Scholarship Distribution Ceremony", category: "SCHOLARSHIP", image: imgthree },
    { id: 4, title: "Education Support Initiative", category: "SCHOLARSHIP", image: imgfour },
    { id: 5, title: "Scholarship Alumni Meet", category: "SCHOLARSHIP", image: imgfive },
    { id: 6, title: "Scholarship Program Overview", category: "SCHOLARSHIP", image: imgsix },

    // Medical Camp items
    { id: 7, title: "Free Health Check-up Camp", category: "MEDICAL CAMP", image: medicalone },
    { id: 8, title: "Dental Check-up Drive", category: "MEDICAL CAMP", image: medicaltwo },
    { id: 9, title: "Eye Care Awareness Camp", category: "MEDICAL CAMP", image: medicalthree },
    { id: 10, title: "Rural Health Initiative", category: "MEDICAL CAMP", image: medicalfour },
    { id: 11, title: "Women's Health Check-up", category: "MEDICAL CAMP", image: medicalfive },
    { id: 12, title: "Community Medical Outreach", category: "MEDICAL CAMP", image: medicalsix },

    // Awareness Program items
    { id: 13, title: "Community Awareness Session", category: "AWARENESS PROGRAM", image: awsone },
    { id: 14, title: "Environmental Awareness Drive", category: "AWARENESS PROGRAM", image: awstwo },
    { id: 15, title: "Health Education Program", category: "AWARENESS PROGRAM", image: awsthree },
    { id: 16, title: "Youth Awareness Workshop", category: "AWARENESS PROGRAM", image: awsfour },
    { id: 17, title: "Public Health Awareness", category: "AWARENESS PROGRAM", image: awsfive },
    { id: 18, title: "Social Awareness Campaign", category: "AWARENESS PROGRAM", image: awssix },

    // Vocational Training items
    { id: 19, title: "Skill Development Workshop", category: "VOCATIONAL TRAINING", image: vtcone },
    { id: 20, title: "Computer Training Program", category: "VOCATIONAL TRAINING", image: vtctwo },
    { id: 21, title: "Handicraft Training Session", category: "VOCATIONAL TRAINING", image: vtcthree },
    { id: 22, title: "Youth Employment Training", category: "VOCATIONAL TRAINING", image: vtcfour },
    { id: 23, title: "Women Empowerment Workshop", category: "VOCATIONAL TRAINING", image: vtcfive },
    // { id: 24, title: "Technical Skills Training", category: "VOCATIONAL TRAINING", image: vtcsix },

    // Donate Program items
    { id: 25, title: "Food Distribution Drive", category: "DONATE PROGRAM", image: donate },
    { id: 26, title: "Clothing Donation Campaign", category: "DONATE PROGRAM", image: donatetwo },
    { id: 27, title: "Educational Materials Donation", category: "DONATE PROGRAM", image: donatethree },
  ]

  const [activeCategory, setActiveCategory] = useState<string>("SCHOLARSHIP")
  const filteredItems = newsItems.filter((item) => item.category === activeCategory)

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl text-[#0b0a45] md:text-3xl mb-2 font-bold">NEWS & EVENTS</h2>
          {/* <p className="text-gray-600 mt-2 text-sm md:text-base max-w-2xl mx-auto px-2">
            Stay updated with SSLF Charity Trust's latest news and events, including educational programs, healthcare
            initiatives, awareness and training programs. We actively organize awareness campaigns, skill development
            programs, and outreach events to uplift society. Join us in making a meaningful impact!
          </p> */}
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-6 px-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-semibold border rounded-md transition-all ${
                activeCategory === category ? "bg-blue-900 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="relative rounded-lg overflow-hidden shadow-md group h-[250px]">
              <div className="w-full h-full">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={item.id <= 3}
                />
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500">No events available in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  )
}

