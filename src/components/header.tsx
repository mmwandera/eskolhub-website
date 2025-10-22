import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <div className="border-black/10 border-b h-[40px] flex items-center justify-between px-5">
        <div>
          <Image
            src="/Eskolhub Full Lockup Primary Color.png"
            alt="Eskolhub Logo"
            width={100}
            height={20}
          />
        </div>
        <div>
          <ul className="flex items-center gap-3">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/faqs">FAQs</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/features">Features</Link></li>
            <li><Link href="/contact-us">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <button className="bg-blue-500 text-white px-3 py-1 rounded-md">Sign In</button>
        </div>
    </div>
  );
}