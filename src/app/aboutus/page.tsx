"use client";

import { useState } from "react";
import Image from "next/image";
import { FaUsers, FaLightbulb, FaBullseye } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import photone from "@/assets/aboustus/aboutsslf/trusteeimages/IMG-20250311-WA0083.jpg";
import phototwo from "@/assets/aboustus/aboutsslf/trusteeimages/IMG-20250311-WA0103.jpg";

// In a real implementation, these would be your actual imported images
const photo1 = photone;
const photo2 = phototwo;

export default function AboutUs() {
  const [openDialog1, setOpenDialog1] = useState(false);
  const [openDialog2, setOpenDialog2] = useState(false);

  return (
    <section className="py-16 px-6 pt-24 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#0b0a46] mb-8">
          ABOUT TRUSTEES
        </h2>
        <h3 className="text-2xl font-bold text-[#0b0a46] mb-10">
          Trustee SSLF Educational Trust
        </h3>
      </div>

      {/* Trustees Section with Images and Content - 2 columns on large screens, 1 column on small */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        {/* First Trustee */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-md flex justify-center">
            <Image
              src={photo1 || "/placeholder.svg"}
              alt="Dr. G. Sakthivel"
              className="rounded-lg shadow-lg object-cover h-80"
              width={500}
              height={350}
              priority
            />
          </div>
          <div className="mt-6 text-center">
            <h4 className="text-xl font-bold text-[#0b0a46] mb-1">
              Dr. G. Sakthivel
            </h4>
            <p className="text-[#0b0a46] font-medium mb-3">
              Founder & Managing Trustee of SSLF Educational Trust
            </p>
            <Button
              onClick={() => setOpenDialog1(true)}
              className="bg-[#0b0a46] hover:bg-[#1a1970] text-white"
            >
              Read More
            </Button>
          </div>
        </div>

        {/* Second Trustee */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-md flex justify-center">
            <Image
              src={photo2 || "/placeholder.svg"}
              alt="Prof. A. Mohamed Abdul Kadhar"
              className="rounded-lg shadow-lg object-cover h-80"
              width={500}
              height={350}
              priority
            />
          </div>
          <div className="mt-6 text-center">
            <h4 className="text-xl font-bold text-[#0b0a46] mb-1">
              Prof.A.Mohamed Abdul kadhar
            </h4>
            <p className="text-[#0b0a46] font-medium mb-3">
              Trustee & Chief Co-ordinator of Projects -SSLF Educational Trust
            </p>
            <Button
              onClick={() => setOpenDialog2(true)}
              className="bg-[#0b0a46] hover:bg-[#1a1970] text-white"
            >
              Read More
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-14">
        {/* About Us Card */}
        <div className="bg-gray-100 shadow-lg rounded-2xl p-6 transition duration-300 hover:shadow-xl hover:bg-gray-150 transform hover:-translate-y-2 text-center">
          <FaUsers className="text-5xl text-[#0b0a46] mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-[#0b0a46] mb-4">About Us</h3>
          <p className="text-gray-700 text-lg">
            SSLF Charity Trust is a dedicated nonprofit organization committed
            to uplifting communities through impactful social initiatives.
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-gray-100 shadow-lg rounded-2xl p-6 transition duration-300 hover:shadow-xl hover:bg-gray-150 transform hover:-translate-y-2 text-center">
          <FaLightbulb className="text-5xl text-[#0b0a46] mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-[#0b0a46] mb-4">Vision</h3>
          <p className="text-gray-700 text-lg">
            Empowering individuals, enriching communities, fostering a culture
            of education, wellness, and entrepreneurship.
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-gray-100 shadow-lg rounded-2xl p-6 transition duration-300 hover:shadow-xl hover:bg-gray-150 transform hover:-translate-y-2 text-center">
          <FaBullseye className="text-5xl text-[#0b0a46] mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-[#0b0a46] mb-4">Mission</h3>
          <p className="text-gray-700 text-lg">
            Stimulating youth from all backgrounds to maximize their potential
            through scholarships, healthcare, and entrepreneurial guidance.
          </p>
        </div>
      </div>

      {/* Dialog for First Trustee - Improved Layout with Better Mobile Responsiveness */}
      <Dialog open={openDialog1} onOpenChange={setOpenDialog1}>
        <DialogContent className="sm:max-w-lg md:max-w-3xl lg:max-w-5xl max-h-[95vh] p-0 overflow-hidden rounded-xl">
          <div className="flex flex-col md:flex-row h-full">
            {/* Left side - Image with better positioning */}
            <div className="w-full md:w-2/5 h-64 sm:h-72 md:h-auto relative bg-gray-200">
              <div className="w-full h-full relative">
                <Image
                  src={photo1 || "/placeholder.svg"}
                  alt="Dr. G. Sakthivel"
                  className="object-cover object-center"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>

            {/* Right side - Scrollable content with proper padding */}
            <div className="w-full md:w-3/5 p-4 sm:p-6 md:p-8">
              <DialogHeader className="mb-3 sm:mb-4 md:mb-6">
                <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0b0a46]">
                  Dr. G. Sakthivel
                </DialogTitle>
                <DialogDescription className="text-base sm:text-lg md:text-xl font-semibold text-[#1a1970] mt-1 sm:mt-2">
                  Founder & Managing Trustee of SSLF Educational Trust
                </DialogDescription>
              </DialogHeader>

              <ScrollArea className="h-[calc(60vh-100px)] sm:h-[calc(60vh-120px)] md:h-[calc(75vh-150px)] pb-4">
                <div className="pr-2 sm:pr-4 pb-6">
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-normal mb-4 sm:mb-6">
                    Dr. G. Sakthivel is indeed a visionary entrepreneur and
                    philanthropist who has dedicated his life to empowering
                    young minds and transforming communities. As the Founder and
                    Managing Trustee of SSLF Educational Trust, he has been
                    instrumental in providing educational scholarships,
                    vocational training, and entrepreneurial guidance to
                    thousands of underprivileged individuals.
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-normal mb-4">
                    His contributions extend beyond education, as he has
                    conducted numerous blood donation and medical camps,
                    benefiting thousands of patients. He has also established
                    book release functions and reading programs to promote
                    literacy and a love for learning.
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-normal mb-4">
                    Additionally, Dr. Sakthivel provides annual scholarships to
                    economically backward students, supporting their educational
                    pursuits and empowering their futures.
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
                    Dr. Sakthivel's commitment to giving back to the community
                    is truly inspiring. He has also been a pillar of support for
                    economically poor athletes, helping them achieve success in
                    their respective fields. As a motivational speaker, he has
                    delivered inspiring talks on career development,
                    entrepreneurship, self-confidence, and success, encouraging
                    youth, women, and students to reach their full potential.
                  </p>
                </div>
              </ScrollArea>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Dialog for Second Trustee - Improved Layout with Better Mobile Responsiveness */}
      <Dialog open={openDialog2} onOpenChange={setOpenDialog2}>
        <DialogContent className="sm:max-w-lg md:max-w-3xl lg:max-w-5xl max-h-[95vh] p-0 overflow-hidden rounded-xl">
          <div className="flex flex-col md:flex-row h-full">
            {/* Left side - Image with better positioning */}
            <div className="w-full md:w-2/5 h-64 sm:h-72 md:h-auto relative bg-gray-200">
              <div className="w-full h-full relative">
                <Image
                  src={photo2 || "/placeholder.svg"}
                  alt="Prof. A. Mohamed Abdul Kadhar"
                  className="object-cover object-center"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>

            {/* Right side - Scrollable content with proper padding */}
            <div className="w-full md:w-3/5 p-4 sm:p-6 md:p-8">
              <DialogHeader className="mb-3 sm:mb-4 md:mb-6">
                <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0b0a46]">
                  Prof. A. Mohamed Abdul Kadhar
                </DialogTitle>
                <DialogDescription className="text-base sm:text-lg md:text-xl font-semibold text-[#1a1970] mt-1 sm:mt-2">
                  Trustee & Chief Co-ordinator of Projects - SSLF Educational
                  Trust
                </DialogDescription>
              </DialogHeader>

              <ScrollArea className="h-[calc(60vh-100px)] sm:h-[calc(60vh-120px)] md:h-[calc(75vh-150px)] pb-4">
                <div className="pr-2 sm:pr-4 pb-6">
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-normal mb-4 sm:mb-6">
                    Prof. A. Mohamed Abdul Kadhar is a renowned educator,
                    author, and motivational speaker. With extensive experience
                    in leadership positions at engineering colleges, he has
                    inspired countless students and youth.
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-normal mb-4">
                    As a prolific writer, Prof. Mohamed Abdulkadhar regularly
                    contributes articles on education, employment, and
                    self-confidence to daily and weekly magazines. He has
                    authored 13 influential books on self-confidence and
                    educational guides, empowering youth and students to
                    succeed.
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-normal mb-4">
                    Prof. Md. Abdulkadhar's dedication to education and social
                    welfare has earned him 14 prestigious awards, including the
                    Best Educationist Award, Best Humanitarian Award, and Best
                    Writer Award.
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-normal mb-4">
                    As a sought-after motivational speaker, Prof. Kadhhar has
                    been invited to speak at various schools and colleges,
                    inspiring students to achieve their goals. His innovative
                    program, "Let's Set Up a Library at Home," has established
                    libraries in over 100 students' homes.
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
                    Furthermore, Prof. Md. Abdulkadhar founded the Dr. Abdul
                    Kalam Innovation Centre, fostering a culture of innovation
                    among students and encouraging them to develop more
                    inventive projects. Through his tireless efforts, Prof. A.
                    Mohamed Abdulkadhar continues to transform lives, inspiring
                    future generations to strive for excellence.
                  </p>
                </div>
              </ScrollArea>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}