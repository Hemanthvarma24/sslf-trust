"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-[#0b0a46] py-4 px-6 flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="text-white text-2xl font-bold">
        Logo
      </Link>

      {/* Navigation Links - Moved to the right */}
      <div className="hidden md:flex space-x-6 ml-auto">
        <NavLinks pathname={pathname} />
      </div>

      {/* Donate Button */}
      <Link
        href="/donate"
        className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition ml-6"
      >
        DONATE
      </Link>
    </nav>
  );
}

function NavLinks({ pathname }: { pathname: string }) {
  const links = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/aboutus" },
    { name: "WHAT WE DO", href: "/whatwedo" },
    { name: "NEWS & EVENTS", href: "/news" },
    { name: "GALLERY", href: "/gallery" },
    { name: "CONTACT US", href: "/contact" },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`text-sm font-bold transition ${
            pathname === link.href ? "text-red-500 font-semibold" : "text-white hover:text-gray-300"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}
