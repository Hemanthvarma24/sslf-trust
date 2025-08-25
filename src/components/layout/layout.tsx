"use client"

import { useState, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { useReducedMotion } from "framer-motion"
import gsap from "gsap"
import type { ReactNode } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import logo from "@/assets/logo.png"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)
  const prefersReducedMotion = useReducedMotion()

  const rootRef = useRef<HTMLDivElement>(null!)
  const topRef = useRef<HTMLDivElement>(null!)
  const bottomRef = useRef<HTMLDivElement>(null!)
  const logoRef = useRef<HTMLDivElement>(null!)
  const siteWrapperRef = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || !loading) return

    if (prefersReducedMotion) {
      setTimeout(() => setLoading(false), 200)
      return
    }

    const t0 = performance.now()
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.inOut" } })

      // Hide site initially
      gsap.set(siteWrapperRef.current, { opacity: 0 })

      // Panels closed
      tl.set(topRef.current, { yPercent: 0 })
      tl.set(bottomRef.current, { yPercent: 0 })

      // Logo fade in
      tl.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" },
        0
      )

      // Panels slide away
      tl.to(topRef.current, { yPercent: -110, duration: 1.2 }, 0.5)
      tl.to(bottomRef.current, { yPercent: 110, duration: 1.2 }, 0.5)

      // Logo zoom + fade
      tl.to(logoRef.current, {
        scale: 6,
        opacity: 0,
        rotateZ: 2,
        duration: 1.2,
        ease: "power3.inOut",
      })

      // Fade in site
      tl.to(siteWrapperRef.current, { opacity: 1, duration: 0.8, ease: "power2.out" }, "<+0.3")

      // End after min duration
      tl.call(() => {
        const elapsed = performance.now() - t0
        const wait = Math.max(0, 2500 - elapsed)
        setTimeout(() => setLoading(false), wait)
      })
    }, rootRef)

    return () => ctx.revert()
  }, [mounted, loading, prefersReducedMotion])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Splash */}
      {mounted && loading && createPortal(
        <div
          ref={rootRef}
          role="status"
          aria-label="Loading application"
          className="fixed inset-0 z-50 grid place-items-center bg-white"
          style={{ perspective: 1000 }}
        >
          {/* Top Panel */}
          <div className="absolute top-0 left-0 right-0 h-1/2 overflow-hidden">
            <div ref={topRef} className="relative h-full w-full bg-white" />
          </div>

          {/* Bottom Panel */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden">
            <div ref={bottomRef} className="relative h-full w-full bg-white" />
          </div>

          {/* Center Logo */}
          <div ref={logoRef} className="relative z-10">
            <div className="relative w-[180px] h-[180px]">
              <Image
                src={logo}
                alt="App Logo"
                fill
                priority
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Main Content */}
      <div ref={siteWrapperRef} className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
