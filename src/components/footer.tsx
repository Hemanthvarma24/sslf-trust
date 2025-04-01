"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  Clock,
  Heart,
  MapPin,
  Instagram,
  Facebook,
  Globe,
} from "lucide-react";
import logo from "@/assets/sslf.png";

export default function Footer() {
  return (
    <footer className="bg-[#0b0a46] text-white py-4">
      <div className="container mx-auto px-6">
        {/* Content grid with logo in first column */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Logo and description - consistently left-aligned */}
          <div className="flex flex-col items-start">
            <Link href="/">
              <Image
                src={logo || "/placeholder.svg"}
                alt="Logo"
                width={160}
                height={60}
                className="max-w-[160px]"
              />
            </Link>
            {/* Social Media Links */}
            <div className="ml-6 flex space-x-4">
              <Link
                href="https://www.instagram.com/sslfeducationaltrust?igsh=Mm9vanBmbnExbjU3"
                target="_blank"
              >
                <Instagram
                  size={24}
                  className="hover:text-blue-300 transition-colors"
                />
              </Link>
              <Link
                href="https://www.facebook.com/share/19NmAZjAnB/"
                target="_blank"
              >
                <Facebook
                  size={24}
                  className="hover:text-blue-300 transition-colors"
                />
              </Link>
              <Link href="https://g.co/kgs/QCeJuQ7" target="_blank">
                <Globe
                  size={24}
                  className="hover:text-blue-300 transition-colors"
                />
              </Link>
            </div>
          </div>

          {/* Business Hours */}
          <div className="text-left mt-4 md:mt-0">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <Clock size={18} /> Trust Hours
            </h3>
            <p className="text-sm">
              Monday to Friday <br /> 10:00 AM - 07:00 PM
            </p>
            <p className="text-sm text-gray-400">All branches of the company</p>
          </div>

          {/* Additional Links */}
          <div className="text-left mt-4 md:mt-0">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <Heart size={18} /> Be A Part of Us
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/volunteer"
                  className="text-sm hover:text-blue-300 transition-colors"
                >
                  Be a Volunteer
                </Link>
              </li>
              <li>
                <Link
                  href="/donate"
                  className="text-sm hover:text-blue-300 transition-colors"
                >
                  Donation
                </Link>
              </li>
              <li>
                <Link
                  href="/corporate"
                  className="text-sm hover:text-blue-300 transition-colors"
                >
                  Corporate
                </Link>
              </li>
              <li>
                <Link
                  href="/education"
                  className="text-sm hover:text-blue-300 transition-colors"
                >
                  Education
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="text-left mt-4 md:mt-0">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              Contact Us
            </h3>
            <p className="text-sm flex items-start gap-2 mb-2">
              <Phone size={16} className="flex-shrink-0 mt-0.5" />{" "}
              <span>
                <strong>Phone:</strong> 9094099940
              </span>
            </p>
            <p className="text-sm flex items-start gap-2 mb-2">
              <Mail size={16} className="flex-shrink-0 mt-0.5" />{" "}
              <span>
                <strong>Email:</strong> edu@sslftrust.com
              </span>
            </p>
            <p className="text-sm flex items-start gap-2">
              <MapPin size={16} className="mt-1 flex-shrink-0" />
              <span>
                <strong>Address:</strong> No:1/210, Defence Colony, 15th Cross
                Street,Ekkattuthangal, Chennai-600032,INDIA
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-6 pt-2 text-sm text-gray-300 px-4 text-center">
        COPYRIGHT © {new Date().getFullYear()}. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
