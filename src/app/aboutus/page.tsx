"use client"

import { useState } from "react"
import Image from "next/image"
import { FaUsers, FaLightbulb, FaBullseye } from "react-icons/fa"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import photone from "@/assets/aboustus/aboutsslf/trusteeimages/IMG-20250311-WA0083.jpg"
import phototwo from "@/assets/aboustus/aboutsslf/trusteeimages/IMG-20250311-WA0103.jpg"

// In a real implementation, these would be your actual imported images
const photo1 = photone
const photo2 = phototwo

export default function AboutUs() {
  const [openDialog1, setOpenDialog1] = useState(false)
  const [openDialog2, setOpenDialog2] = useState(false)

  return (
    <section className="py-16 px-6 pt-24 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#0b0a46] mb-8">ABOUT TRUSTEES</h2>
        <h3 className="text-2xl font-bold text-[#0b0a46] mb-10">Trustee SSLF Educational Trust</h3>
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
            <h4 className="text-xl font-bold text-[#0b0a46] mb-1">Dr. G. Sakthivel</h4>
            <p className="text-[#0b0a46] font-medium mb-3">Founder & Managing Trustee of SSLF Educational Trust</p>
            <Button onClick={() => setOpenDialog1(true)} className="bg-[#0b0a46] hover:bg-[#1a1970] text-white">
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
            <h4 className="text-xl font-bold text-[#0b0a46] mb-1">Prof. A. Mohamed Abdul Kadhar</h4>
            <p className="text-[#0b0a46] font-medium mb-3">Trustee of SSLF Educational Trust</p>
            <Button onClick={() => setOpenDialog2(true)} className="bg-[#0b0a46] hover:bg-[#1a1970] text-white">
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
            SSLF Charity Trust is a dedicated nonprofit organization committed to uplifting communities through
            impactful social initiatives.
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-gray-100 shadow-lg rounded-2xl p-6 transition duration-300 hover:shadow-xl hover:bg-gray-150 transform hover:-translate-y-2 text-center">
          <FaLightbulb className="text-5xl text-[#0b0a46] mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-[#0b0a46] mb-4">Vision</h3>
          <p className="text-gray-700 text-lg">
            Empowering individuals, enriching communities, fostering a culture of education, wellness, and
            entrepreneurship.
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-gray-100 shadow-lg rounded-2xl p-6 transition duration-300 hover:shadow-xl hover:bg-gray-150 transform hover:-translate-y-2 text-center">
          <FaBullseye className="text-5xl text-[#0b0a46] mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-[#0b0a46] mb-4">Mission</h3>
          <p className="text-gray-700 text-lg">
            Stimulating youth from all backgrounds to maximize their potential through scholarships, healthcare, and
            entrepreneurial guidance.
          </p>
        </div>
      </div>

      {/* Dialog for First Trustee */}
      <Dialog open={openDialog1} onOpenChange={setOpenDialog1}>
        <DialogContent className="sm:max-w-lg md:max-w-3xl lg:max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[#0b0a46]">Dr. G. Sakthivel</DialogTitle>
            <DialogDescription className="text-lg font-semibold text-[#1a1970]">
              Founder & Managing Trustee of SSLF Educational Trust
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="max-h-[70vh]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex justify-center">
                <Image
                  src={photo1 || "/placeholder.svg"}
                  alt="Dr. G. Sakthivel"
                  className="rounded-lg shadow-lg object-cover"
                  width={400}
                  height={300}
                />
              </div>
              <div>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed font-normal">
                  Dr. G. Sakthivel is indeed a visionary entrepreneur and philanthropist who has dedicated his life to
                  empowering young minds and transforming communities. As the Founder and Managing Trustee of SSLF
                  Educational Trust, he has been instrumental in providing educational scholarships, vocational training,
                  and entrepreneurial guidance to thousands of underprivileged individuals.
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed font-normal mt-4">
                  His contributions extend beyond education, as he has conducted numerous blood donation and medical camps, 
                  benefiting thousands of patients. He has also established book release functions and reading programs to 
                  promote literacy and a love for learning.
                </p>
              </div>
            </div>
          </ScrollArea>
          <div className="flex justify-end mt-4">
            <Button onClick={() => setOpenDialog1(false)} className="bg-[#0b0a46] hover:bg-[#1a1970] text-white">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Dialog for Second Trustee */}
      <Dialog open={openDialog2} onOpenChange={setOpenDialog2}>
        <DialogContent className="sm:max-w-lg md:max-w-3xl lg:max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[#0b0a46]">Prof. A. Mohamed Abdul Kadhar</DialogTitle>
            <DialogDescription className="text-lg font-semibold text-[#1a1970]">
              Trustee of SSLF Educational Trust
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="max-h-[70vh]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex justify-center">
                <Image
                  src={photo2 || "/placeholder.svg"}
                  alt="Prof. A. Mohamed Abdul Kadhar"
                  className="rounded-lg shadow-lg object-cover"
                  width={400}
                  height={300}
                />
              </div>
              <div>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed font-normal">
                  Prof. A. Mohamed Abdul Kadhar is a renowned educator, author, and motivational speaker. With extensive
                  experience in leadership positions at engineering colleges, he has inspired countless students and
                  youth.
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed font-normal mt-4">
                  As a prolific writer, Prof. Mohamed Abdul Kadhar regularly contributes articles on education,
                  employment, and self-confidence to daily and weekly magazines. He has authored 13 influential books on
                  self-confidence and educational guides.
                </p>
              </div>
            </div>
          </ScrollArea>
          <div className="flex justify-end mt-4">
            <Button onClick={() => setOpenDialog2(false)} className="bg-[#0b0a46] hover:bg-[#1a1970] text-white">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}