import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <div className="flex items-center justify-between px-40 h-[80px] border-b border-black/10">
        <div>
          <Image
            src="/Eskolhub Full Lockup Primary Color.png"
            alt="Eskolhub Logo"
            width={120}
            height={60}
          />
        </div>
        <div>
          <ul className="flex items-center gap-8">
            <li><Link href="/" className="font-bold size-[20px] text-[#0F1932]">Home</Link></li>
            <li><Link href="/pricing" className="font-bold size-[20px] text-[#0F1932]">Pricing</Link></li>
            <li><Link href="/faqs" className="font-bold size-[20px] text-[#0F1932]">FAQs</Link></li>
            <li><Link href="/blog" className="font-bold size-[20px] text-[#0F1932]">Blog</Link></li>
            <li><Link href="/features" className="font-bold size-[20px] text-[#0F1932]">Features</Link></li>
            <li><Link href="/contact-us" className="font-bold size-[20px] text-[#0F1932]">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <button className="bg-[#0F1932] text-white px-[16px] h-[48px] rounded-[8px] font-bold w-[201px]">Request Live Demo</button>
        </div>
    </div>
  );
}