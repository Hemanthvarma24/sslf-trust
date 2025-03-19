import Image from "next/image";
import Link from "next/link";
import scholar from "@/assets/whatwedo/scholarship.png";
import medical from "@/assets/whatwedo/healthcare.png";
import awareness from "@/assets/whatwedo/training-program.png";
import training from "@/assets/whatwedo/training-program.png";
import blood from "@/assets/whatwedo/blood-donation.png";

export default function WhatWeDoSection() {
  const items = [
    { href: "/whatwedo/scholarships", img: scholar, label: "SCHOLARSHIP" },
    { href: "/whatwedo/medicalcamps", img: medical, label: "MEDICAL CAMP" },
    {
      href: "/whatwedo/awarenessprograms",
      img: awareness,
      label: "AWARENESS PROGRAM",
    },
    {
      href: "/whatwedo/training",
      img: training,
      label: "VOCATIONAL TRAINING CENTER",
    },
    { href: "/whatwedo/blooddonation", img: blood, label: "DONATE PROGRAM" },
  ];

  return (
    <>
      <h2 className="text-xl font-semibold uppercase mb-6 text-center text-[#0b0a46]">
        WHAT WE DO
        <span className="block w-12 h-1 bg-[#0b0a46] mx-auto mt-2"></span>
      </h2>
      <section className="py-12 bg-[#0b0a46] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 place-items-center">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex flex-col items-center w-full max-w-xs p-4 rounded-lg transition-transform hover:scale-105"
              >
                <div className="w-20 h-20 flex items-center justify-center">
                  <Image
                    src={item.img || "/placeholder.svg"}
                    alt={item.label}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <p className="mt-4 text-sm font-semibold text-center">
                  {item.label}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
