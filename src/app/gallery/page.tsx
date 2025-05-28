"use client";

import { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";

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

// Create image objects with varied aspect ratios for masonry effect
// Add alt text and fix type to match Next.js image imports
const allImages = [
  { src: img6, aspectRatio: 0.75, alt: "Image 6" },
  { src: img20, aspectRatio: 1.2, alt: "Image 20" },
  { src: img24, aspectRatio: 0.8, alt: "Image 24" },
  { src: img25, aspectRatio: 0.9, alt: "Image 25" },
  { src: img3, aspectRatio: 1.1, alt: "Image 3" },
  { src: img10, aspectRatio: 0.7, alt: "Image 10" },
  { src: img11, aspectRatio: 1.3, alt: "Image 11" },
  { src: img17, aspectRatio: 0.85, alt: "Image 17" },
  { src: img15, aspectRatio: 0.95, alt: "Image 15" },
  { src: img1, aspectRatio: 1.0, alt: "Image 1" },
  { src: img21, aspectRatio: 0.78, alt: "Image 21" },
  { src: img22, aspectRatio: 1.15, alt: "Image 22" },
  { src: img2, aspectRatio: 0.82, alt: "Image 2" },
  { src: img7, aspectRatio: 1.05, alt: "Image 7" },
  { src: img8, aspectRatio: 0.88, alt: "Image 8" },
  { src: img9, aspectRatio: 1.25, alt: "Image 9" },
  { src: img19, aspectRatio: 0.73, alt: "Image 19" },
  { src: img4, aspectRatio: 0.92, alt: "Image 4" },
  { src: img12, aspectRatio: 1.18, alt: "Image 12" },
  { src: img23, aspectRatio: 0.87, alt: "Image 23" },
  { src: img13, aspectRatio: 1.08, alt: "Image 13" },
  { src: img16, aspectRatio: 0.76, alt: "Image 16" },
  { src: img18, aspectRatio: 1.22, alt: "Image 18" },
  { src: img5, aspectRatio: 0.84, alt: "Image 5" },
  { src: img14, aspectRatio: 0.98, alt: "Image 14" },
];

interface MasonryItem {
  src: StaticImageData;
  aspectRatio: number;
  alt: string;
  index: number;
}

interface ImageLoadState {
  [key: number]: boolean;
}

export default function Gallery() {
  const [itemsToShow, setItemsToShow] = useState(15);
  const [columns, setColumns] = useState(4);
  const [masonryItems, setMasonryItems] = useState<MasonryItem[][]>([]);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [imageLoadState] = useState<ImageLoadState>({});
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate responsive columns and items
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setColumns(2);
        setItemsToShow(8);
      } else if (width < 768) {
        setColumns(3);
        setItemsToShow(12);
      } else if (width < 1024) {
        setColumns(4);
        setItemsToShow(16);
      } else {
        setColumns(5);
        setItemsToShow(20);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Organize images into masonry columns
  useEffect(() => {
    const organizeIntoColumns = () => {
      const columnHeights = new Array(columns).fill(0);
      const columnArrays: MasonryItem[][] = Array.from(
        { length: columns },
        () => []
      );

      const currentImages = allImages.slice(0, itemsToShow).map((img, i) => ({
        ...img,
        index: i,
      }));

      currentImages.forEach((img) => {
        const shortestColumnIndex = columnHeights.indexOf(
          Math.min(...columnHeights)
        );
        columnArrays[shortestColumnIndex].push(img);
        columnHeights[shortestColumnIndex] += 1 / img.aspectRatio;
      });

      setMasonryItems(columnArrays);
    };

    organizeIntoColumns();

    // Set initial load to false after organizing
    if (isInitialLoad) {
      setTimeout(() => setIsInitialLoad(false), 100);
    }
  }, [columns, itemsToShow, isInitialLoad]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      switch (e.key) {
        case "Escape":
          setSelectedImage(null);
          setIsZoomed(false);
          break;
        case "ArrowLeft":
          e.preventDefault();
          navigateImage(-1);
          break;
        case "ArrowRight":
          e.preventDefault();
          navigateImage(1);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  const navigateImage = (direction: number) => {
    if (selectedImage === null) return;

    const visibleImages = allImages.slice(0, itemsToShow);
    const newIndex = selectedImage + direction;

    if (newIndex >= 0 && newIndex < visibleImages.length) {
      setSelectedImage(newIndex);
      setIsZoomed(false);
    }
  };

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
    setIsZoomed(false);
  };

  const handleDownload = async (src: string, alt: string) => {
    try {
      const response = await fetch(src);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${alt}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  const isAllImagesLoaded = itemsToShow >= allImages.length;
  const visibleImages = allImages.slice(0, itemsToShow);

  return (
    <>
      <section className="py-8 md:py-16 mt-12 bg-white mb-6 pb-6">
        <div className="container mx-auto px-3 md:px-4">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold uppercase text-gray-800">
              Photo Gallery
            </h2>
            <p className="text-gray-600 mt-2">
              Discover our moments captured in time
            </p>
          </div>

          <div
            ref={containerRef}
            className="flex gap-2 md:gap-4"
            style={{ minHeight: "600px" }}
          >
            {masonryItems.map((column, columnIndex) => (
              <div
                key={columnIndex}
                className="flex-1 flex flex-col gap-2 md:gap-4"
              >
                {column.map((item, itemIndex) => {
                  const globalIndex =
                    columnIndex * Math.ceil(itemsToShow / columns) + itemIndex;
                  return (
                    <div
                      key={`${item.index}-${columnIndex}-${itemIndex}`}
                      className="relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer transform hover:-translate-y-1"
                      onClick={() => handleImageClick(item.index)}
                      style={{
                        opacity: isInitialLoad ? 0 : 1,
                        transform: isInitialLoad
                          ? "translateY(50px)"
                          : "translateY(0)",
                        transition: `all 0.6s ease-out ${globalIndex * 0.05}s`,
                      }}
                    >
                      <div
                        className="relative w-full"
                        style={{ aspectRatio: item.aspectRatio }}
                      >
                        <Image
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading={globalIndex < 6 ? "eager" : "lazy"}
                        />
                        <div className="absolute inset-0  transition-all duration-300 flex items-center justify-center">
                          <ZoomIn
                            className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            size={32}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {!isAllImagesLoaded && (
            <div className="text-center mt-8">
              <button
                className="px-6 py-3 bg-[#1e2838] text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
                onClick={() =>
                  setItemsToShow((prev) => Math.min(prev + 5, allImages.length))
                }
              >
                Load More Images
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Image Popup Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            opacity: 1,
            transition: "opacity 0.3s ease",
          }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-90 backdrop-blur-sm"
            onClick={() => {
              setSelectedImage(null);
              setIsZoomed(false);
            }}
          />

          {/* Modal Content */}
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Navigation Controls */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
              onClick={() => navigateImage(-1)}
              disabled={selectedImage === 0}
            >
              <ChevronLeft size={24} />
            </button>

            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
              onClick={() => navigateImage(1)}
              disabled={selectedImage === visibleImages.length - 1}
            >
              <ChevronRight size={24} />
            </button>

            {/* Top Controls */}
            <div className="absolute top-4 right-4 flex gap-2 z-10">
              <button
                className=" text-white p-3 rounded-full transition-all duration-200"
                onClick={() => setIsZoomed(!isZoomed)}
                title={isZoomed ? "Zoom Out" : "Zoom In"}
              >
                {isZoomed ? <ZoomOut size={20} /> : <ZoomIn size={20} />}
              </button>

              <button
                className="text-white p-3 rounded-full transition-all duration-200"
                onClick={() => {
                  setSelectedImage(null);
                  setIsZoomed(false);
                }}
                title="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Image Container */}
            <div
              className={`relative max-w-full max-h-full flex items-center justify-center ${
                isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
              style={{
                transform: "scale(1)",
                opacity: 1,
                transition: "all 0.3s ease-out",
              }}
            >
              <Image
                src={visibleImages[selectedImage].src}
                alt={visibleImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                style={{
                  transform: isZoomed ? "scale(1.5)" : "scale(1)",
                  transition: "transform 0.3s ease",
                  maxWidth: isZoomed ? "none" : "90vw",
                  maxHeight: isZoomed ? "none" : "90vh",
                }}
              />
            </div>

            {/* Image Info */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full">
              <span className="text-sm font-medium">
                {selectedImage + 1} / {visibleImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
