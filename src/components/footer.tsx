import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0b0a46] text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo and description */}
        <div>
          <Link href="/" className="font-bold text-2xl">Logo</Link>
          <p className="mt-4 text-sm">
            Lorem ipsum dolor sit amet, nulla fermentum, mollis ac lectus nulla, vel neque.
          </p>
          <div className="flex mt-4 space-x-3">
            <button className="w-8 h-8 bg-red-500 flex items-center justify-center rounded-full hover:bg-red-600" aria-label="Facebook">F</button>
            <button className="w-8 h-8 bg-gray-300 flex items-center justify-center rounded-full hover:bg-gray-400" aria-label="Google">G</button>
            <button className="w-8 h-8 bg-gray-300 flex items-center justify-center rounded-full hover:bg-gray-400" aria-label="Twitter">T</button>
            <button className="w-8 h-8 bg-gray-300 flex items-center justify-center rounded-full hover:bg-gray-400" aria-label="Instagram">I</button>
          </div>
        </div>

        {/* Business Hours */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Business Hours</h3>
          <p className="text-sm">Monday to Friday <br /> 10:00 AM - 07:00 PM</p>
          <p className="text-sm mt-2 text-gray-400">Closed</p>
          <p className="text-red-500 text-sm font-semibold">All Sundays</p>
          <p className="text-sm text-gray-400">All branches of the company</p>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
          <p className="text-sm"><strong>Phone:</strong> +123 456 7890</p>
          <p className="text-sm"><strong>Email:</strong> support@example.com</p>
          <p className="text-sm"><strong>Address:</strong> 123 Street, City, Country</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-red-400">About Us</Link></li>
            <li><Link href="/services" className="hover:text-red-400">Services</Link></li>
            <li><Link href="/contact" className="hover:text-red-400">Contact</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-red-400">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 text-center mt-8 pt-4 text-sm text-gray-300">
        COPYRIGHT © {new Date().getFullYear()}. ALL RIGHTS RESERVED.
      </div>
      
    </footer>
  );
}
