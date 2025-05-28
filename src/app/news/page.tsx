"use client"

import Image, { type StaticImageData } from "next/image"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
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
import awsfive from "@/assets/news&Events/awarenessprogram/neww.jpg"
import awssix from "@/assets/news&Events/awarenessprogram/WhatsApp Image 2025-04-03 at 14.49.25_7fb9aa05.jpg"
import awsseven from "@/assets/news&Events/awarenessprogram/awsseven.jpg"
import awseight from "@/assets/news&Events/awarenessprogram/awseight.jpg"
import awsnine from "@/assets/news&Events/awarenessprogram/awsnine.jpg"
import awsten from "@/assets/news&Events/awarenessprogram/awstwn.jpg"
import awseleven from "@/assets/news&Events/awarenessprogram/awseleven.jpg"
import aws from "@/assets/news&Events/awarenessprogram/aws.jpg"

// Vocational training images
import vtcone from "@/assets/news&Events/vocialtraning/vtcopen.jpg"
import vtctwo from "@/assets/news&Events/vocialtraning/fce931b8-20de-4f76-838a-45e7316b04d3.jpg"
import vtcthree from "@/assets/news&Events/vocialtraning/vtc-center.jpg"
// import vtcfour from "@/assets/news&Events/vocialtraning/f306a458-a933-490f-aca8-6ab1dba2837a.jpg";
import vtcfive from "@/assets/news&Events/vocialtraning/eead60c9-b045-4864-bbb6-20957869fd26.jpg"

// Training images
import trainingone from "@/assets/news&Events/training/IMG-20250328-WA0023.jpg"
import trainingtwo from "@/assets/news&Events/training/IMG-20250328-WA0024.jpg"
import trainingthree from "@/assets/news&Events/training/IMG-20250328-WA0025.jpg"
import trainingfour from "@/assets/news&Events/training/IMG-20250328-WA0033.jpg"
import trainingfive from "@/assets/news&Events/training/IMG-20250328-WA0035.jpg"
import trainingsix from "@/assets/news&Events/training/IMG-20250328-WA0034.jpg"

import newevent from "@/assets/news&Events/new.jpg"

// Donate program images
import donate from "@/assets/news&Events/donate/WhatsApp Image 2025-03-11 at 17.16.56_0ef56408.jpg"
import donatetwo from "@/assets/news&Events/donate/WhatsApp Image 2025-03-11 at 17.16.57_05311e86.jpg"
import donatethree from "@/assets/news&Events/donate/WhatsApp Image 2025-03-11 at 17.16.57_240274f7.jpg"

interface NewsItem {
  id: number
  title: string
  category: string
  image: string | StaticImageData
}
interface AwarenessImagePair {
  position: number
  currentIndex: number
  images: NewsItem[]
}

export default function EnhancedNewsGallery() {
  const categories: string[] = [
    "SCHOLARSHIP",
    "MEDICAL CAMP",
    "AWARENESS PROGRAM",
    "VOCATIONAL TRAINING",
    "TRAINING PROGRAM",
    "NEW EVENTS",
    "DONATE PROGRAM",
  ]

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
      title: "Environmental Protection Drive",
      category: "AWARENESS PROGRAM",
      image: aws,
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
      title: "Awareness",
      category: "AWARENESS PROGRAM",
      image: awsfive,
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
      title: "Teacher Training",
      category: "VOCATIONAL TRAINING",
      image: vtcthree,
    },
    // {
    //   id: 22,
    //   title: "Youth Employment Training",
    //   category: "VOCATIONAL TRAINING",
    //   image: vtcfour,
    // },
    {
      id: 23,
      title: "Women Empowerment Workshop",
      category: "VOCATIONAL TRAINING",
      image: vtcfive,
    },

    // Training Program items - Fixed category name to match the menu
    {
      id: 33,
      title: "Leadership Development Program",
      category: "TRAINING PROGRAM",
      image: trainingone,
    },
    {
      id: 34,
      title: "Professional Skills Workshop",
      category: "TRAINING PROGRAM",
      image: trainingtwo,
    },
    {
      id: 35,
      title: "Community Leadership Training",
      category: "TRAINING PROGRAM",
      image: trainingthree,
    },
    {
      id: 36,
      title: "Specialized Skills Development",
      category: "TRAINING PROGRAM",
      image: trainingfour,
    },
    {
      id: 37,
      title: "Train the Trainer Program",
      category: "TRAINING PROGRAM",
      image: trainingfive,
    },
    {
      id: 38,
      title: "Career Development Workshop",
      category: "TRAINING PROGRAM",
      image: trainingsix,
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
    {
      id: 39, // Fixed duplicate ID (was 27)
      title: "NEW",
      category: "NEW EVENTS",
      image: newevent,
    },
  ]

  const [activeCategory, setActiveCategory] = useState<string>("SCHOLARSHIP")
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const itemsPerPage = 6

  // For awareness program auto-sliding
  const awarenessItems = newsItems.filter((item) => item.category === "AWARENESS PROGRAM")
  const [awarenessImagePairs, setAwarenessImagePairs] = useState<AwarenessImagePair[]>([])

  // For image popup functionality
  const [selectedImage, setSelectedImage] = useState<NewsItem | null>(null)
  const popupRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  // Initialize awareness program pairs
  useEffect(() => {
    if (activeCategory === "AWARENESS PROGRAM") {
      const pairs: AwarenessImagePair[] = []
      for (let i = 0; i < 6; i++) {
        pairs.push({
          position: i,
          currentIndex: 0,
          images: [awarenessItems[i], awarenessItems[i + 6]].filter(Boolean),
        })
      }
      setAwarenessImagePairs(pairs)
    }
  }, [activeCategory])

  // Auto-slide timer for awareness program
  useEffect(() => {
    let timer: NodeJS.Timeout

    if (activeCategory === "AWARENESS PROGRAM") {
      timer = setInterval(() => {
        setAwarenessImagePairs((prev) =>
          prev.map((pair) => ({
            ...pair,
            currentIndex: pair.currentIndex === 0 ? 1 : 0,
          })),
        )
      }, 4000)
    }

    return () => clearInterval(timer)
  }, [activeCategory])

  // Handle category change with loading animation
  const handleCategoryChange = (category: string) => {
    if (category === activeCategory) return

    setIsLoading(true)
    setTimeout(() => {
      setActiveCategory(category)
      setCurrentPage(1)
      setIsLoading(false)
    }, 300)
  }

  // Close popup handlers
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setSelectedImage(null)
      }
    }

    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null)
      }
    }

    if (selectedImage) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleEscKey)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscKey)
      document.body.style.overflow = "auto"
    }
  }, [selectedImage])

  // Get displayed items
  const getDisplayedItems = () => {
    if (activeCategory === "AWARENESS PROGRAM") {
      return awarenessImagePairs.map((pair) => pair.images[pair.currentIndex]).filter(Boolean)
    } else {
      const filteredItems = newsItems.filter((item) => item.category === activeCategory)
      return filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    }
  }

  // Calculate total pages
  const getTotalPages = () => {
    if (activeCategory === "AWARENESS PROGRAM") {
      return 1
    } else {
      const filteredItems = newsItems.filter((item) => item.category === activeCategory)
      return Math.ceil(filteredItems.length / itemsPerPage)
    }
  }

  const displayedItems = getDisplayedItems()
  const totalPages = getTotalPages()

  // Scroll active category into view
  useEffect(() => {
    if (menuRef.current) {
      const activeButton = menuRef.current.querySelector(`button[data-category="${activeCategory}"]`)
      if (activeButton) {
        const container = menuRef.current
        const scrollLeft =
          activeButton.getBoundingClientRect().left -
          container.getBoundingClientRect().left +
          container.scrollLeft -
          (container.offsetWidth - (activeButton as HTMLElement).offsetWidth) / 2

        container.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        })
      }
    }
  }, [activeCategory])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const categoryButtonVariants = {
    inactive: {
      scale: 1,
      backgroundColor: "#f3f4f6",
      color: "#374151",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    },
    active: {
      scale: 1.05,
      backgroundColor: "#1e3a8a",
      color: "#ffffff",
      boxShadow: "0 4px 15px rgba(30, 58, 138, 0.3)",
    },
    hover: {
      scale: 1.08,
      backgroundColor: "#e5e7eb",
      transition: { duration: 0.2 },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-60 h-60 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <motion.section
        ref={sectionRef}
        className="relative py-10 md:py-16 mt-12"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div className="text-center mb-12 mt-6" variants={itemVariants}>
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
              NEWS & EVENTS
            </h2>
            <motion.div
              className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-4"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>
        </motion.div>

        {/* Category Menu */}
        <motion.div className="relative mb-12 px-4 flex justify-center" variants={itemVariants}>
          <div
            ref={menuRef}
            className="flex md:max-w-fit mx-auto overflow-x-auto scrollbar-hide gap-3 py-2 px-1 scroll-smooth snap-x"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                data-category={category}
                className="px-6 py-3 text-xs md:text-sm font-semibold border-2 border-transparent rounded-xl transition-all whitespace-nowrap flex-shrink-0 snap-start backdrop-blur-sm"
                onClick={() => handleCategoryChange(category)}
                variants={categoryButtonVariants}
                initial="inactive"
                animate={activeCategory === category ? "active" : "inactive"}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Loading Overlay */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              className="absolute inset-0 bg-white/50 backdrop-blur-sm z-10 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Image Grid */}
        <motion.div
          className="grid grid-cols-2 px-4 md:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          key={activeCategory}
        >
          <AnimatePresence mode="wait">
            {displayedItems.map((item, index) => (
              <motion.div
                key={`${item?.id}-${index}`}
                className="relative rounded-2xl overflow-hidden shadow-lg group h-48 sm:h-64 md:h-72 lg:h-80 cursor-pointer bg-white/80 backdrop-blur-sm border border-white/20"
                onClick={() => setSelectedImage(item)}
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  y: -5,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.98 }}
                layout
              >
                <div className="relative w-full h-full overflow-hidden">
                  <motion.div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Image
                    src={item?.image || "/placeholder.svg?height=400&width=600"}
                    alt={item?.title || "Event image"}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 33vw"
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                    priority={index < 6}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div className="flex justify-center items-center mt-12 gap-3" variants={itemVariants}>
            <motion.button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-xl font-medium transition-all ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl"
              }`}
              whileHover={currentPage !== 1 ? { scale: 1.05 } : {}}
              whileTap={currentPage !== 1 ? { scale: 0.95 } : {}}
            >
              Previous
            </motion.button>

            <div className="flex items-center gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 flex items-center justify-center rounded-xl font-medium transition-all ${
                    currentPage === i + 1
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white/80 text-gray-700 hover:bg-blue-100 border border-gray-200"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {i + 1}
                </motion.button>
              ))}
            </div>

            <motion.button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-xl font-medium transition-all ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl"
              }`}
              whileHover={currentPage !== totalPages ? { scale: 1.05 } : {}}
              whileTap={currentPage !== totalPages ? { scale: 0.95 } : {}}
            >
              Next
            </motion.button>
          </motion.div>
        )}

        {/* Empty State */}
        {displayedItems.length === 0 && !isLoading && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-6xl mb-4">📅</div>
            <p className="text-gray-600 text-lg">No events available in this category yet.</p>
          </motion.div>
        )}
      </motion.section>

      {/* Image Popup/Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              ref={popupRef}
              className="bg-white/95 backdrop-blur-md rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-white/20"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="p-6 border-b border-gray-200/50 flex justify-between items-center bg-gradient-to-r from-blue-50 to-indigo-50">
                <div>
                  <h3 className="font-bold text-xl text-gray-800 mb-1">{selectedImage.title}</h3>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-700 rounded-full text-sm font-medium">
                    {selectedImage.category}
                  </span>
                </div>
                <motion.button
                  onClick={() => setSelectedImage(null)}
                  className="text-gray-500 hover:text-gray-700 rounded-full h-10 w-10 flex items-center justify-center bg-white/80 hover:bg-white transition-all shadow-md"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              <div className="flex-1 overflow-auto p-6 flex items-center justify-center">
                <motion.div
                  className="relative h-[70vh] w-full"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Image
                    src={selectedImage.image || "/placeholder.svg"}
                    alt={selectedImage.title}
                    fill
                    className="object-contain rounded-lg"
                    sizes="90vw"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
