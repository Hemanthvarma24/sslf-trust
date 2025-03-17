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
          <div className="flex mt-4 space-x-2">
            <span className="w-8 h-8 bg-red-500 flex items-center justify-center rounded-full">F</span>
            <span className="w-8 h-8 bg-gray-300 flex items-center justify-center rounded-full">G</span>
            <span className="w-8 h-8 bg-gray-300 flex items-center justify-center rounded-full">T</span>
            <span className="w-8 h-8 bg-gray-300 flex items-center justify-center rounded-full">I</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">QUICK LINKS</h3>
          <ul className="space-y-2 text-sm">
            <li>● Support Forums</li>
            <li>● FAQ & Help Center</li>
            <li>● About Us</li>
            <li>● Register and Account</li>
            <li>● Service and Help</li>
          </ul>
        </div>

        {/* Business Hours */}
        <div>
          <h3 className="font-semibold mb-4">BUSINESS HOUR</h3>
          <p className="text-sm">Monday to Friday <br /> 10:00 am to 07:00 pm</p>
          <p className="text-sm mt-2">Closed</p>
          <p className="text-red-500 text-sm">All Sunday</p>
          <p className="text-sm">All branch of company</p>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="font-semibold mb-4">GIVE US ADVICE</h3>
          <p className="text-sm mb-4">Sign up for our mailing list to get latest updates and offers</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="px-4 py-2 rounded-l w-full bg-white text-black"
            />
            <button className="bg-red-500 px-4 py-2 rounded-r">GO</button>
          </div>
          <p className="text-sm mt-2">We respect your advice</p>
        </div>
      </div>
      <div className="border-t border-gray-50 text-center mt-4 pt-4 text-sm">
  COPYRIGHT © {new Date().getFullYear()}. ALL RIGHTS RESERVED
</div>

    </footer>
  );
}
