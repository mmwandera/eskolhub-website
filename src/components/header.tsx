import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <div className="flex items-center justify-between px-[40px] h-[80px] border-b border-black/10">
      {/* Logo */}
      <div>
        <Image
          src="/Eskolhub Full Lockup Primary Color.png"
          alt="Eskolhub Logo"
          width={120}
          height={60}
        />
      </div>

      {/* Navigation */}
      <div>
        <ul className="flex items-center gap-2">
          {[
            { href: '/', label: 'Home' },
            { href: '/pricing', label: 'Pricing' },
            { href: '/faqs', label: 'FAQs' },
            { href: '/blog', label: 'Blog' },
            { href: '/features', label: 'Features' },
            { href: '/contact-us', label: 'Contact Us' },
          ].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="font-bold text-[16px] text-[#0F1932] px-4 py-2 rounded-md hover:bg-[#E5FE70] transition-colors duration-300"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <div>
        <button className="bg-[#0F1932] text-white px-[16px] h-[48px] rounded-[8px] font-bold w-[201px] hover:bg-[#1a2750] transition-colors duration-300">
          Request Live Demo
        </button>
      </div>
    </div>
  );
}
