// src/components/testimonials/testimonialcard.tsx
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  text: string;
}

export default function TestimonialCard({ name, role, image, text }: TestimonialCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white w-[480px] h-full">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={image}
          alt={name}
          width={48}
          height={48}
          className="rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-[16px]">{name}</h4>
          <p className="text-sm text-gray-300">{role}</p>
        </div>
      </div>

      {/* Body */}
      <p className="text-[14px] leading-relaxed text-gray-200">{text}</p>
    </div>
  );
}
