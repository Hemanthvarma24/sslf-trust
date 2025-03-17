import Image from "next/image";
import scholar from "@/assets/whatwedo/scholarship.png"
import medical from "@/assets/whatwedo/healthcare.png"
import awareness from "@/assets/whatwedo/training-program.png"
import training from "@/assets/whatwedo/training-program.png" 
import blood from "@/assets/whatwedo/blood-donation.png"

export default function WhatWeDoSection() {
  return (
    <>
      <h2 className="text-xl font-semibold uppercase  mb-6 text-center text-[#0b0a46]">
        WHAT WE DO
        <span className="block w-12 h-1 bg-[#0b0a46] mx-auto mt-2"></span>
      </h2>
      <section className="py-16 bg-[#0b0a46] text-white">
        <div className="container mx-auto px-8 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-8">
            <div className="flex flex-col items-center">
              <Image src={scholar} alt="Scholarship" width={50} height={50} />
              <p className="mt-4 text-sm font-semibold">SCHOLARSHIP</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={medical} alt="Medical Camp" width={50} height={50} />
              <p className="mt-4 text-sm font-semibold">MEDICAL CAMP</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={awareness} alt="Awareness Program" width={50} height={50} />
              <p className="mt-4 text-sm font-semibold">AWARENESS PROGRAM</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={training} alt="Training Program" width={50} height={50} />
              <p className="mt-4 text-sm font-semibold">TRAINING PROGRAM</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={blood} alt="Training Program" width={50} height={50} />
              <p className="mt-4 text-sm font-semibold">DONATE PROGRAM</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
