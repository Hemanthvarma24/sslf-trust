import Image from "next/image";
import aboutsslf from "@/assets/aboustus/aboutsslf/IMG-20250311-WA0097.jpg";
import vision from "@/assets/aboustus/vission/IMG-20250311-WA0107.jpg";
import mission from "@/assets/aboustus/mission/IMG-20250311-WA0104.jpg";

export default function AboutSection() {
  return (
    <section className="py-16 bg-white text-center">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4 text-[#0b0a46]">ABOUT US</h2>
        <p className="max-w-2xl mx-auto mb-8 text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, vitae mattis vehicula scelerisque suscipit
          donec, tortor duis phasellus vivamus wisi placerat, pellentesque augue
          leo. Orci nullam, nonummy nam sed, sapien temporibus ac ac, velit ante
          volutpat enim{" "}
          <span className="font-bold text-[#0b0a46]">
            We Help 22,4780 People
          </span>
        </p>

        {/* Card Container */}
        <div className="grid md:grid-cols-3 gap-6 justify-center items-center">
          {/* About SSLF Card */}
          <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden max-w-[350px] mx-auto transform transition duration-300 hover:scale-105">
            <Image
              src={aboutsslf}
              alt="About SSLF"
              width={350}
              height={220}
              className="w-full h-[220px] object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">ABOUT SSLF</h3>
              <p className="text-gray-600 text-sm mb-4">
                Lorem ipsum dolor sit amet, vitae mattis vehicula scelerisque
                suscipit donec, tortor duis phasellus vivamus wisi
              </p>
              <a
                href="/aboutus"
                className="bg-[#0b0a46] text-white py-2 px-4 rounded-lg inline-block text-center transition duration-300 hover:bg-[#14136e] hover:shadow-lg"
              >
                VIEW MORE
              </a>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden max-w-[350px] mx-auto transform transition duration-300 hover:scale-105">
            <Image
              src={vision}
              alt="Vision"
              width={350}
              height={220}
              className="w-full h-[220px] object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">VISION</h3>
              <p className="text-gray-600 text-sm mb-4">
                Lorem ipsum dolor sit amet, vitae mattis vehicula scelerisque
                suscipit donec, tortor duis phasellus vivamus wisi
              </p>
              <a
                href="/aboutus"
                className="bg-[#0b0a46] text-white py-2 px-4 rounded-lg inline-block text-center transition duration-300 hover:bg-[#14136e] hover:shadow-lg"
              >
                VIEW MORE
              </a>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden max-w-[350px] mx-auto transform transition duration-300 hover:scale-105">
            <Image
              src={mission}
              alt="Mission"
              width={350}
              height={220}
              className="w-full h-[220px] object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">MISSION</h3>
              <p className="text-gray-600 text-sm mb-4">
                Lorem ipsum dolor sit amet, vitae mattis vehicula scelerisque
                suscipit donec, tortor duis phasellus vivamus wisi
              </p>
              <a
                href="/aboutus"
                className="bg-[#0b0a46] text-white py-2 px-4 rounded-lg inline-block text-center transition duration-300 hover:bg-[#14136e] hover:shadow-lg"
              >
                VIEW MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
