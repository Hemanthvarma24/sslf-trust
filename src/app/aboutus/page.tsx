import Image from "next/image";
import { FaUsers, FaLightbulb, FaBullseye } from "react-icons/fa";
import photo1 from "@/assets/aboustus/aboutsslf/trusteeimages/IMG-20250311-WA0083.jpg";
import photo2 from "@/assets/aboustus/aboutsslf/trusteeimages/IMG-20250311-WA0103.jpg";

export default function AboutUs() {
  return (
    <section className="py-16 px-6 lg:px-20">
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
              src={photo1}
              alt="Dr. G. Sakthivel"
              className="rounded-lg shadow-lg"
              width={500}
              height={350}
              objectFit="cover"
            />
          </div>
          <div className="mt-6 text-center">
            <h4 className="text-xl font-bold text-[#0b0a46] mb-3">
              Dr. G. Sakthivel
            </h4>
            <p className="text-gray-700 text-sm leading-relaxed text-left">
              Dr. G. Sakthivel is indeed a visionary entrepreneur and
              philanthropist who has dedicated his life to empowering young
              minds and transforming communities. As the Founder and Managing
              Trustee of SSLF Educational Trust, he has been instrumental in
              providing educational scholarships, vocational training, and
              entrepreneurial guidance to thousands of underprivileged
              individuals. His contributions extend beyond education, as he has
              conducted numerous blood donation and medical camps, benefiting
              thousands of patients. He has also established book release
              functions and reading programs to promote literacy and a love for
              learning.
            </p>
          </div>
        </div>

        {/* Second Trustee */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-md flex justify-center">
            <Image
              src={photo2}
              alt="Prof. A. Mohamed Abdul Kadhar"
              className="rounded-lg shadow-lg"
              width={500}
              height={350}
              objectFit="cover"
            />
          </div>
          <div className="mt-6 text-center">
            <h4 className="text-xl font-bold text-[#0b0a46] mb-3">
              Prof. A. Mohamed Abdul Kadhar
            </h4>
            <p className="text-gray-700 text-sm leading-relaxed text-left">
              Prof. A. Mohamed Abdul Kadhar is a renowned educator, author, and
              motivational speaker. With extensive experience in leadership
              positions at engineering colleges, he has inspired countless
              students and youth. As a prolific writer, Prof. Mohamed Abdul
              Kadhar regularly contributes articles on education, employment,
              and self-confidence to daily and weekly magazines. He has authored
              13 influential books on self-confidence and educational guides.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
        {/* About Us Card */}
        <div className="bg-gray-50 shadow-lg rounded-2xl p-6 bg-gray-50 rounded-2xl shadow-md transition duration-300 hover:shadow-xl hover:bg-gray-100 transform hover:-translate-y-2 text-center">
          <FaUsers className="text-5xl text-[#0b0a46] mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-[#0b0a46] mb-4">About Us</h3>
          <p className="text-gray-700 text-lg">
            SSLF Charity Trust is a dedicated nonprofit organization committed
            to uplifting communities through impactful social initiatives.
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-gray-50 shadow-lg rounded-2xl p-6 bg-gray-50 rounded-2xl shadow-md transition duration-300 hover:shadow-xl hover:bg-gray-100 transform hover:-translate-y-2 text-center">
          <FaLightbulb className="text-5xl text-[#0b0a46] mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-[#0b0a46] mb-4">Vision</h3>
          <p className="text-gray-700 text-lg">
            Empowering individuals, enriching communities, fostering a culture
            of education, wellness, and entrepreneurship.
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-gray-50 shadow-lg rounded-2xl p-6 bg-gray-50 rounded-2xl shadow-md transition duration-300 hover:shadow-xl hover:bg-gray-100 transform hover:-translate-y-2 text-center">
          <FaBullseye className="text-5xl text-[#0b0a46] mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-[#0b0a46] mb-4">Mission</h3>
          <p className="text-gray-700 text-lg">
            Stimulating youth from all backgrounds to maximize their potential
            through scholarships, healthcare, and entrepreneurial guidance.
          </p>
        </div>
      </div>
    </section>
  );
}
