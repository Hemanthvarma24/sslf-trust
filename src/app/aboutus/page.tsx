"use client"

import { useState } from "react"
import Image from "next/image"
import { Users, Lightbulb, Target } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import photone from "@/assets/aboustus/aboutsslf/trusteeimages/IMG-20250311-WA0083.jpg";
import phototwo from "@/assets/aboustus/aboutsslf/trusteeimages/IMG-20250311-WA0103.jpg";

export default function AboutUs() {
  const [openDialog1, setOpenDialog1] = useState(false)
  const [openDialog2, setOpenDialog2] = useState(false)

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      rotate: 2,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  }

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 },
    },
  }

  const dialogVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  }

  const textSlideVariants = {
    hidden: {
      opacity: 0,
      x: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  }


  return (
    <motion.section
      className="py-16 px-6 pt-24 lg:px-20 bg-gradient-to-br from-slate-50 to-blue-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 className="text-3xl md:text-3xl font-bold text-[#0b0a46] mb-4" variants={itemVariants}>
          ABOUT TRUSTEES
        </motion.h2>
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-[#0b0a46] to-[#1a1970] mx-auto mb-8"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        <motion.h3 className="text-xl md:text-2xl font-bold text-[#0b0a46] mb-10" variants={itemVariants}>
          Trustee SSLF Educational Trust
        </motion.h3>
      </div>

      {/* Trustees Section with Images and Content */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 max-w-6xl mx-auto"
        variants={containerVariants}
      >
        {/* First Trustee */}
        <motion.div className="flex flex-col items-center" variants={itemVariants}>
          <motion.div className="relative w-full max-w-md group" variants={imageVariants} whileHover="hover">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b0a46] to-[#1a1970] rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
            <div className="relative bg-white p-2 rounded-2xl shadow-xl">
              <Image
                src={photone}
                alt="Dr. G. Sakthivel"
                className="rounded-xl object-cover w-full h-80"
                width={350}
                height={400}
                priority
              />
            </div>
          </motion.div>
          <motion.div
            className="mt-8 text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            variants={textSlideVariants}
          >
            <h4 className="text-2xl font-bold text-[#0b0a46] mb-2">Dr. G. Sakthivel</h4>
            <p className="text-[#0b0a46] font-medium mb-4 text-lg">
              Founder & Managing Trustee of SSLF Educational Trust
            </p>
            <motion.div variants={buttonVariants} initial="initial" whileHover="hover" whileTap="tap">
              <Button
                onClick={() => setOpenDialog1(true)}
                className="bg-gradient-to-r from-[#0b0a46] to-[#1a1970] hover:from-[#1a1970] hover:to-[#0b0a46] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Read More
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Second Trustee */}
        <motion.div className="flex flex-col items-center" variants={itemVariants}>
          <motion.div className="relative w-full max-w-md group" variants={imageVariants} whileHover="hover">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1970] to-[#0b0a46] rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300" />
            <div className="relative bg-white p-2 rounded-2xl shadow-xl">
              <Image
                src={phototwo}
                alt="Prof. A. Mohamed Abdul Kadhar"
                className="rounded-xl object-cover w-full h-80"
                width={350}
                height={400}
                priority
              />
            </div>
          </motion.div>
          <motion.div
            className="mt-8 text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            variants={textSlideVariants}
          >
            <h4 className="text-2xl font-bold text-[#0b0a46] mb-2">Prof. A. Mohamed Abdul Kadhar</h4>
            <p className="text-[#0b0a46] font-medium mb-4 text-lg line-clamp-1">
              Trustee & Chief Co-ordinator of Projects - SSLF Educational Trust
            </p>
            <motion.div variants={buttonVariants} initial="initial" whileHover="hover" whileTap="tap">
              <Button
                onClick={() => setOpenDialog2(true)}
                className="bg-gradient-to-r from-[#0b0a46] to-[#1a1970] hover:from-[#1a1970] hover:to-[#0b0a46] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Read More
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Mission, Vision, About Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-20 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* About Us Card */}
        <motion.div
          className="bg-white shadow-xl rounded-3xl p-8 transition duration-300 hover:shadow-2xl text-center border border-gray-100 group"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.div
            className="w-20 h-20 bg-gradient-to-r from-[#0b0a46] to-[#1a1970] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Users className="text-3xl text-white" />
          </motion.div>
          <motion.h3
            className="text-2xl font-bold text-[#0b0a46] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            About Us
          </motion.h3>
          <motion.p
            className="text-gray-600 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            SSLF Charity Trust is a dedicated nonprofit organization committed to uplifting communities through
            impactful social initiatives.
          </motion.p>
        </motion.div>

        {/* Vision Card */}
        <motion.div
          className="bg-white shadow-xl rounded-3xl p-8 transition duration-300 hover:shadow-2xl text-center border border-gray-100 group"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.div
            className="w-20 h-20 bg-gradient-to-r from-[#0b0a46] to-[#1a1970] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Lightbulb className="text-3xl text-white" />
          </motion.div>
          <motion.h3
            className="text-2xl font-bold text-[#0b0a46] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Vision
          </motion.h3>
          <motion.p
            className="text-gray-600 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Empowering individuals, enriching communities, fostering a culture of education, wellness, and
            entrepreneurship.
          </motion.p>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          className="bg-white shadow-xl rounded-3xl p-8 transition duration-300 hover:shadow-2xl text-center border border-gray-100 group"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.div
            className="w-20 h-20 bg-gradient-to-r from-[#0b0a46] to-[#1a1970] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Target className="text-3xl text-white" />
          </motion.div>
          <motion.h3
            className="text-2xl font-bold text-[#0b0a46] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Mission
          </motion.h3>
          <motion.p
            className="text-gray-600 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            viewport={{ once: true }}
          >
            Stimulating youth from all backgrounds to maximize their potential through scholarships, healthcare, and
            entrepreneurial guidance.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Dialog for First Trustee */}
      <AnimatePresence>
        {openDialog1 && (
          <Dialog open={openDialog1} onOpenChange={setOpenDialog1}>
            <DialogContent className="sm:max-w-lg md:max-w-3xl lg:max-w-5xl max-h-[95vh] p-0 overflow-hidden rounded-2xl border-0 shadow-2xl">
              <motion.div
                className="flex flex-col md:flex-row h-full bg-white"
                variants={dialogVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Left side - Image */}
                <motion.div
                  className="w-full md:w-2/5 h-64 sm:h-72 md:h-auto relative bg-gradient-to-br from-[#0b0a46] to-[#1a1970]"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="w-full h-full relative p-4">
                    <Image
                      src={photone}
                      alt="Dr. G. Sakthivel"
                      className="object-cover object-center"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </motion.div>

                {/* Right side - Content */}
                <motion.div
                  className="w-full md:w-3/5 p-4 sm:p-6 md:p-8"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <DialogHeader className="mb-3 sm:mb-4 md:mb-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                    >
                      <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0b0a46]">
                        Dr. G. Sakthivel
                      </DialogTitle>
                      <DialogDescription className="text-base sm:text-lg md:text-xl font-semibold text-[#1a1970] mt-1 sm:mt-2">
                        Founder & Managing Trustee of SSLF Educational Trust
                      </DialogDescription>
                    </motion.div>
                  </DialogHeader>

                  <ScrollArea className="h-[calc(60vh-100px)] sm:h-[calc(60vh-120px)] md:h-[calc(75vh-150px)] pb-4">
                    <motion.div
                      className="pr-2 sm:pr-4 pb-6 space-y-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <motion.p
                        className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                      >
                        Dr. G. Sakthivel is indeed a visionary entrepreneur and philanthropist who has dedicated his
                        life to empowering young minds and transforming communities. As the Founder and Managing Trustee
                        of SSLF Educational Trust, he has been instrumental in providing educational scholarships,
                        vocational training, and entrepreneurial guidance to thousands of underprivileged individuals.
                      </motion.p>
                      <motion.p
                        className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                      >
                        His contributions extend beyond education, as he has conducted numerous blood donation and
                        medical camps, benefiting thousands of patients. He has also established book release functions
                        and reading programs to promote literacy and a love for learning.
                      </motion.p>
                      <motion.p
                        className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                      >
                        Additionally, Dr. Sakthivel provides annual scholarships to economically backward students,
                        supporting their educational pursuits and empowering their futures.
                      </motion.p>
                      <motion.p
                        className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                      >
                        Dr. Sakthivel's commitment to giving back to the community is truly inspiring. He has also been
                        a pillar of support for economically poor athletes, helping them achieve success in their
                        respective fields. As a motivational speaker, he has delivered inspiring talks on career
                        development, entrepreneurship, self-confidence, and success, encouraging youth, women, and
                        students to reach their full potential.
                      </motion.p>
                    </motion.div>
                  </ScrollArea>
                </motion.div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>

      {/* Dialog for Second Trustee */}
      <AnimatePresence>
        {openDialog2 && (
          <Dialog open={openDialog2} onOpenChange={setOpenDialog2}>
            <DialogContent className="sm:max-w-lg md:max-w-3xl lg:max-w-5xl max-h-[95vh] p-0 overflow-hidden rounded-2xl border-0 shadow-2xl">
              <motion.div
                className="flex flex-col md:flex-row h-full bg-white"
                variants={dialogVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Left side - Image */}
                <motion.div
                  className="w-full md:w-2/5 h-64 sm:h-72 md:h-auto relative bg-gradient-to-br from-[#1a1970] to-[#0b0a46]"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="w-full h-full relative p-4">
                    <Image
                      src={phototwo}
                      alt="Prof. A. Mohamed Abdul Kadhar"
                      className="object-cover object-center"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      priority
                    />
                  </div>
                </motion.div>

                {/* Right side - Content */}
                <motion.div
                  className="w-full md:w-3/5 p-4 sm:p-6 md:p-8"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <DialogHeader className="mb-3 sm:mb-4 md:mb-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                    >
                      <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0b0a46]">
                        Prof. A. Mohamed Abdul Kadhar
                      </DialogTitle>
                      <DialogDescription className="text-base sm:text-lg md:text-xl font-semibold text-[#1a1970] mt-1 sm:mt-2">
                        Trustee & Chief Co-ordinator of Projects - SSLF Educational Trust
                      </DialogDescription>
                    </motion.div>
                  </DialogHeader>

                  <ScrollArea className="h-[calc(60vh-100px)] sm:h-[calc(60vh-120px)] md:h-[calc(75vh-150px)] pb-4">
                    <motion.div
                      className="pr-2 sm:pr-4 pb-6 space-y-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <motion.p
                        className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                      >
                        Prof. A. Mohamed Abdul Kadhar is a renowned educator, author, and motivational speaker. With
                        extensive experience in leadership positions at engineering colleges, he has inspired countless
                        students and youth.
                      </motion.p>
                      <motion.p
                        className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                      >
                        As a prolific writer, Prof. Mohamed Abdulkadhar regularly contributes articles on education,
                        employment, and self-confidence to daily and weekly magazines. He has authored 13 influential
                        books on self-confidence and educational guides, empowering youth and students to succeed.
                      </motion.p>
                      <motion.p
                        className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                      >
                        Prof. Md. Abdulkadhar's dedication to education and social welfare has earned him 14 prestigious
                        awards, including the Best Educationist Award, Best Humanitarian Award, and Best Writer Award.
                      </motion.p>
                      <motion.p
                        className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                      >
                        As a sought-after motivational speaker, Prof. Kadhhar has been invited to speak at various
                        schools and colleges, inspiring students to achieve their goals. His innovative program, "Let's
                        Set Up a Library at Home," has established libraries in over 100 students' homes.
                      </motion.p>
                      <motion.p
                        className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.0 }}
                      >
                        Furthermore, Prof. Md. Abdulkadhar founded the Dr. Abdul Kalam Innovation Centre, fostering a
                        culture of innovation among students and encouraging them to develop more inventive projects.
                        Through his tireless efforts, Prof. A. Mohamed Abdulkadhar continues to transform lives,
                        inspiring future generations to strive for excellence.
                      </motion.p>
                    </motion.div>
                  </ScrollArea>
                </motion.div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </motion.section>
  )
}
