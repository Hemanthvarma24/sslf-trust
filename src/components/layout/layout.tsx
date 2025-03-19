import type { ReactNode } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow ml-4 mr-4">{children}</main>
      <Footer />
    </div>
  )
}

