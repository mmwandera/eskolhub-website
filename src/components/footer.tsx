import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <div className="mt-auto border-black/10 border-t h-[200px] px-20 py-5">
            <div className="flex justify-between items-center">
                <div className="flex">
                    <div className="mr-5">
                        <Image
                        src="/Eskolhub Full Lockup Primary Color.png"
                        alt="Eskolhub Logo"
                        width={100}
                        height={20}
                        />
                    </div>
                    <div>
                        <ul>
                            <Link href="/"><i className="ri-instagram-fill"></i></Link>
                            <Link href="/"><i className="ri-facebook-box-fill"></i></Link>
                            <Link href="/"><i className="ri-linkedin-box-fill"></i></Link>
                        </ul>
                    </div>
                
                </div>
                <div className="flex">
                    <div>
                        <h4>Product</h4>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/pricing">Pricing</Link></li>
                            <li><Link href="/faqs">FAQs</Link></li>
                            <li><Link href="/features">Features</Link></li>
                            <li><Link href="/contact-us">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4>CMS</h4>
                        <ul>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/admin">Admin</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Utility</h4>
                        <ul>
                            <li><Link href="/contact-us">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <br className="border-black/10 border-t"/>
            <div className="">
                <p>© 2023 Eskolhub. All rights reserved.</p>
            </div>
            
        </div>
    );
}