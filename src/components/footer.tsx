import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-black/10 px-20 py-8">
      <div className="flex justify-between items-start">
        
        {/* Left side — logo + social icons */}
        <div className="flex-1 flex items-center">
          <div className="mr-12">
            <Image
              src="/Eskolhub Full Lockup Primary Color.png"
              alt="Eskolhub Logo"
              width={120}
              height={32}
            />
          </div>
          <ul className="flex gap-3">
            <li className="h-[44px] w-[68px] border-2 border-[#B8B8B8] rounded-[12px] flex items-center justify-center">
              <i className="ri-instagram-fill text-xl text-[#B8B8B8]"></i>
            </li>
            <li className="h-[44px] w-[68px] border-2 border-[#B8B8B8] rounded-[12px] flex items-center justify-center">
              <i className="ri-facebook-box-fill text-xl text-[#B8B8B8]"></i>
            </li>
            <li className="h-[44px] w-[68px] border-2 border-[#B8B8B8] rounded-[12px] flex items-center justify-center">
              <i className="ri-linkedin-box-fill text-xl text-[#B8B8B8]"></i>
            </li>
          </ul>
        </div>

        {/* Right side — navigation columns */}
        <div className="flex-1 flex justify-around gap-[40px]">
          <div>
            <h4 className="text-xl text-[#0F1932] font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-[#0F1932]/80">
              <li><Link href="/" className="font-semibold size-[18px] text-[#475569]">Home</Link></li>
              <li><Link href="/pricing" className="font-semibold size-[18px] text-[#475569]">Pricing</Link></li>
              <li><Link href="/faqs" className="font-semibold size-[18px] text-[#475569]">FAQs</Link></li>
              <li><Link href="/features" className="font-semibold size-[18px] text-[#475569]">Features</Link></li>
              <li><Link href="/contact-us" className="font-semibold size-[18px] text-[#475569]">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl text-[#0F1932] font-bold mb-6">CMS</h4>
            <ul className="space-y-4 text-[#0F1932]/80">
              <li><Link href="/blog" className="font-semibold size-[18px] text-[#475569]">Blog</Link></li>
              <li><Link href="/admin" >Admin</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl text-[#0F1932] font-bold mb-6">Utility</h4>
            <ul className="space-y-4 text-[#0F1932]/80">
              <li><Link href="/contact-us">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider + copyright */}
      <div className="border-t border-black/10 mt-6 pt-4 text-sm text-[#475569]">
        © 2023 Eskolhub. All rights reserved.
      </div>
    </footer>
  )
}
