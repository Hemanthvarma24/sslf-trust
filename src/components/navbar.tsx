"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

// Define interface for navigation items
interface NavItemType {
  name: string;
  href: string;
  submenu: { name: string; href: string }[] | null;
}

// Define interface for component props
interface NavItemProps {
  name: string;
  href: string;
  pathname: string;
}

interface DropdownProps extends NavItemProps {
  submenu: { name: string; href: string }[];
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname() || "";

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setOpenSubmenu(null);
  }, [pathname]);

  const handleNavigation = (href: string) => {
    setIsOpen(false);
    setOpenSubmenu(null);
    router.push(href);
  };

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  const navigationItems: NavItemType[] = [
    { name: "HOME", href: "/", submenu: null },
    { name: "ABOUT US", href: "/aboutus", submenu: null },
    {
      name: "WHAT WE DO",
      href: "#",
      submenu: [
        { name: "SCHOLARSHIP", href: "/whatwedo/scholarships" },
        { name: "MEDICAL CAMP", href: "/whatwedo/medicalcamps" },
        { name: "AWARENESS PROGRAM", href: "/whatwedo/awarenessprograms" },
        { name: "VOCATIONAL TRAINING CENTER", href: "/whatwedo/training" },
        { name: "DONATE PROGRAM", href: "/whatwedo/blooddonation" },
      ],
    },
    {
      name: "BE PART OF US",
      href: "#",
      submenu: [
        { name: "BE A VOLUNTEER", href: "/volunteer" },
        { name: "DONATE", href: "/donate" },
        { name: "CORPORATE", href: "/corporate" },
        { name: "EDUCATION", href: "/education" },
      ],
    },
    { name: "NEWS & EVENTS", href: "/news", submenu: null },
    { name: "GALLERY", href: "/gallery", submenu: null },
    { name: "CONTACT US", href: "/contact", submenu: null },
  ];

  return (
    <header 
      className={`w-full fixed top-0 left-0 bg-white z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md h-16" : "h-20"
      }`}
    >
      <div className="container mx-auto px-4 h-full">
        <nav className="flex items-center justify-between h-full">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="block">
              <Image
                src={logo}
                alt="Logo"
                width={isScrolled ? 130 : 150}
                height={isScrolled ? 40 : 50}
                className="transition-all duration-300 object-contain"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation - Improved responsive spacing */}
          <div className="hidden lg:flex items-center justify-center flex-grow">
            <div className="flex items-center justify-between w-full lg:justify-center lg:space-x-1 xl:space-x-2 2xl:space-x-4">
              {navigationItems.map((item) =>
                item.submenu ? (
                  <NavItemWithDropdown
                    key={item.name}
                    name={item.name}
                    href={item.href}
                    pathname={pathname}
                    submenu={item.submenu}
                  />
                ) : (
                  <NavItem
                    key={item.name}
                    name={item.name}
                    href={item.href}
                    pathname={pathname}
                  />
                )
              )}
            </div>
          </div>

          {/* Contact Info - Desktop - Fixed to always show numbers and emails */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4 flex-shrink-0">
            <a 
              href="tel:9094099940"
              className="text-gray-700 text-sm font-medium px-1 xl:px-2 py-1 flex items-center gap-1 hover:text-[#0b0a45] transition"
              aria-label="Phone number"
            >
              <Phone size={16} className="text-[#0b0a45] flex-shrink-0" />
              <span className="text-xs lg:text-sm whitespace-nowrap">9094099940</span>
            </a>
            <a
              href="mailto:edu@sslftrust.com"
              className="text-gray-700 text-sm font-medium px-1 xl:px-2 py-1 flex items-center gap-1 hover:text-[#0b0a45] transition"
              aria-label="Email address"
            >
              <Mail size={16} className="text-[#0b0a45] flex-shrink-0" />
              <span className="text-xs lg:text-sm whitespace-nowrap">edu@sslftrust.com</span>
            </a>
          </div>

          {/* Mobile Contact & Menu Controls - Improved alignment and visibility */}
          <div className="flex items-center space-x-3 lg:hidden">
            {/* Mobile Contact Icons - Always visible with number */}
            <a 
              href="tel:9094099940"
              className="text-gray-700 flex items-center"
              aria-label="Call us"
            >
              <Phone size={16} className="text-[#0b0a45]" />
              <span className="ml-1 text-xs sm:text-sm whitespace-nowrap">9094099940</span>
            </a>
            
            {/* Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 focus:outline-none focus:ring-2 focus:ring-gray-200 rounded"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <svg
                className="w-6 h-6 text-[#0b0a45]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu - Improved for smaller screens with better dropdown positioning */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden w-full bg-[#0b0a45] text-white shadow-lg max-h-[80vh] overflow-y-auto"
          >
            <div className="container mx-auto px-4 py-2">
              {/* Mobile Contact Info Banner - Bottom aligned contact info */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 border-b border-gray-700 mb-2 space-y-2 sm:space-y-0">
                <a href="tel:9094099940" className="flex items-center text-xs sm:text-sm hover:text-orange-400 transition-colors">
                  <Phone size={16} className="mr-2 flex-shrink-0" />
                  <span className="whitespace-nowrap">9094099940</span>
                </a>
                <a href="mailto:edu@sslftrust.com" className="flex items-center text-xs sm:text-sm hover:text-orange-400 transition-colors">
                  <Mail size={16} className="mr-2 flex-shrink-0" />
                  <span className="whitespace-nowrap">edu@sslftrust.com</span>
                </a>
              </div>
              
              {/* Navigation Items with Improved Mobile Dropdown Positioning */}
              {navigationItems.map((item) =>
                item.submenu ? (
                  <div key={item.name} className="mb-1 border-b border-gray-700 pb-1">
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className="w-full text-left py-2 sm:py-3 flex justify-between items-center font-medium text-sm sm:text-base"
                      aria-expanded={openSubmenu === item.name}
                    >
                      <span>{item.name}</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          openSubmenu === item.name ? "transform rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openSubmenu === item.name && item.submenu && (
                      <div className="ml-2 sm:ml-4 mt-1 border-l-2 border-gray-600 pl-2 sm:pl-4 py-1">
                        {item.submenu.map((subItem) => (
                          <button
                            key={subItem.name}
                            onClick={() => handleNavigation(subItem.href)}
                            className="block w-full text-left py-1.5 sm:py-2 text-xs sm:text-sm hover:text-orange-400 transition-colors"
                          >
                            {subItem.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    className="block w-full text-left py-2 sm:py-3 text-sm sm:text-base font-medium hover:text-orange-400 transition-colors border-b border-gray-700"
                  >
                    {item.name}
                  </button>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavItem({ name, href, pathname }: NavItemProps) {
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <Link
      href={href}
      className={`text-xs md:text-sm lg:text-xs xl:text-sm hover:text-gray-500 font-bold transition-colors duration-200 py-2 px-1 md:px-2 relative whitespace-nowrap ${
        isActive 
          ? "text-[#0b0a45] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#0b0a45]" 
          : "text-[#0b0a45]"
      }`}
    >
      {name}
    </Link>
  );
}

function NavItemWithDropdown({ name, href, submenu, pathname }: DropdownProps) {
  // Check if any submenu item is active
  const isActive = submenu.some(
    (item) => pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`))
  );

  return (
    <div className="relative group">
      <Link
        href={href}
        className={`text-xs md:text-sm lg:text-xs xl:text-sm font-bold hover:text-gray-500 transition-colors duration-200 py-2 px-1 md:px-2 inline-flex items-center relative whitespace-nowrap ${
          isActive 
            ? "text-[#0b0a45] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#0b0a45]" 
            : "text-[#0b0a45]"
        }`}
      >
        {name}
        <svg 
          className="w-3 h-3 md:w-4 md:h-4 lg:w-3 lg:h-3 xl:w-4 xl:h-4 ml-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 9l-7 7-7-7" 
          />
        </svg>
      </Link>
      <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md py-1 w-48 lg:w-52 xl:w-56 z-20 mt-0">
        {submenu.map((item) => {
          const isItemActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-3 lg:px-4 py-2 text-xs lg:text-sm hover:bg-gray-100 transition-colors duration-200 ${
                isItemActive ? "font-bold bg-gray-50 text-[#0b0a45]" : "text-[#0b0a45]"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}