"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (href: string) => {
    setIsOpen(false);
    router.push(href);
  };

  const toggleSubmenu = (name: string) => {
    if (openSubmenu === name) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(name);
    }
  };


  const navigationItems = [
    { name: "HOME", href: "/", submenu: null },
    {
      name: "ABOUT US",
      submenu: [
        { name: "ABOUT SSLF", href: "/aboutus" },
        { name: "VISION", href: "/aboutus" },
        { name: "MISSION", href: "/aboutus" },
      ],
    },
    {
      name: "WHAT WE DO",
      submenu: [
        { name: "SCHOLARSHIP", href: "/whatwedo" },
        { name: "MEDICAL CAMP", href: "/whatwedo" },
        { name: "AWARENESS PROGRAM", href: "/whatwedo" },
        { name: "TRAINING PROGRAM", href: "/whatwedo" },
        { name: "DONATE PROGRAM", href: "/whatwedo" },
      ],
    },
    {
      name: "BE A PART WITH US",
      submenu: [
        { name: "DONATE", href: "/donate" },
        { name: "BE A VOLUNTEER", href: "/volunteer" },
        { name: "CORPORATE", href: "/corporate" },
        { name: "EDUCATION", href: "/education" },
      ],
    },
    { name: "NEWS & EVENTS", href: "/news", submenu: null },
    { name: "GALLERY", href: "/gallery", submenu: null },
    { name: "CONTACT US", href: "/contact", submenu: null },
  ];

  return (
    <header className="w-full fixed top-0 left-0 bg-white shadow-md z-50 h-20 flex items-center">
      <nav className="container mx-auto px-6 flex items-center justify-between w-full">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="font-bold text-xl text-[#0b0a45]">
            LOGO
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navigationItems.map((item) =>
            item.submenu ? (
              <NavItemWithDropdown
                key={item.name}
                name={item.name}
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
          <span className="bg-[#0b0a45] text-white px-4 py-2 rounded-md">
            +91 98801 06799
          </span>
          <a
            href="mailto:sslf@gmail.com"
            className="bg-[#0b0a45] text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
          >
            sslf@gmail.com
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 w-full bg-[#0b0a45] text-white p-4 z-50 shadow-lg max-h-screen overflow-y-auto"
          >
            {navigationItems.map((item) =>
              item.submenu ? (
                <div key={item.name} className="mb-2">
                  <button
                    onClick={() => toggleSubmenu(item.name)}
                    className="w-full text-left py-2 flex justify-between items-center font-medium"
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
                  {openSubmenu === item.name && (
                    <div className="ml-4 mt-1 border-l-2 border-gray-600 pl-2">
                      {item.submenu.map((subItem) => (
                        <button
                          key={subItem.name}
                          onClick={() => handleNavigation(subItem.href)}
                          className="block py-2 text-sm hover:text-orange-400 transition-colors"
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
                  className="block w-full text-left py-2 font-medium hover:text-orange-400 transition-colors"
                >
                  {item.name}
                </button>
              )
            )}
            <div className="mt-6 pt-4 border-t border-gray-600 text-sm">
              <p className="flex items-center py-1">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a href="mailto:sslf@gmail.com" className="text-orange-400">
                  sslf@gmail.com
                </a>
              </p>
              <p className="flex items-center py-1">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+91 98801 06799</span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavItem({ name, href, pathname }: { name: string; href: string; pathname: string }) {
  const isActive = pathname === href || pathname.startsWith(href + "/");
  
  return (
    <Link
      href={href}
      className={`text-sm text-[#0b0a45] hover:text-gray-500 font-bold transition-colors duration-200 ${
        isActive ? "font-bold" : ""
      }`}
    >
      {name}
    </Link>
  );
}

function NavItemWithDropdown({
  name,
  submenu,
  pathname,
}: {
  name: string;
  submenu: { name: string; href: string }[];
  pathname: string;
}) {
  // Check if any submenu item is active
  const isActive = submenu.some(item => 
    pathname === item.href || pathname.startsWith(item.href.split('#')[0])
  );
  
  return (
    <div className="relative group">
      <button className={`text-sm font-bold hover:text-gray-500 transition-colors duration-200 ${
        isActive ? "font-bold" : "text-[#0b0a45]"
      }`}>
        {name}
      </button>
      <div className="absolute left-0 hidden group-hover:block bg-white shadow-md rounded-md py-2 w-48">
        {submenu.map((item) => {
          const isItemActive = pathname === item.href || 
                              (pathname.includes(item.href.split('#')[0]) && 
                               item.href.includes('#') && 
                               pathname.includes(item.href.split('#')[1]));
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200 ${
                isItemActive ? "font-bold bg-gray-50" : "text-[#0b0a45]"
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