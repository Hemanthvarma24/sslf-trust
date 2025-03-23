import type { ReactNode } from "react"
import Navbar  from "@/components/navbar"
import Footer from "@/components/footer"
import { Metadata } from "next";

interface LayoutProps {
  children: ReactNode
}
export const metadata: Metadata = {
  title: "SSLF EDUCATIONAL TRUST",
  description: "SSLF Charity Trust empowers youth through scholarships, healthcare, and entrepreneurship support. Join us in creating a better future – You Need Us!",
  keywords: "SSLF Educational Trust, SSLF Charity Trust, nonprofit organization, community service, social initiatives, education support, youth empowerment, scholarships, healthcare programs, entrepreneurship development, charitable trust, community upliftment, social welfare, nonprofit education, skill development, youth mentoring"
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <main className="flex-grow ml-4 mr-4">{children}</main>
      <Footer />
    </div>
  )
}

