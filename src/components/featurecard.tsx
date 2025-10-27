// src/components/featurecard.tsx

interface FeatureCardProps {
  icon: string; // Remix icon class e.g. "ri-book-open-line"
  title: string;
  text: string;
}

export default function FeatureCard({ icon, title, text }: FeatureCardProps) {
  return (
    <div
      className="p-6 rounded-xl border border-[#E2E8F0]
                 shadow-[0_2px_4px_0_rgba(0,0,0,0.08),0_0_2px_0_rgba(0,0,0,0.08)]
                 flex flex-col"
    >
      {/* Icon */}
      <div className="w-14 h-14 bg-[#0F1932] flex items-center justify-center rounded-md mb-6">
        <i className={`${icon} text-white text-[24px]`} />
      </div>

      {/* Title */}
      <h3 className="text-[20px] font-semibold text-[#0F1932] mb-3">
        {title}
      </h3>

      {/* Text */}
      <p className="text-[#475569] text-[16px] leading-relaxed mb-6">
        {text}
      </p>

      {/* Learn more button */}
      <button className="text-[#0F1932] font-semibold flex items-center gap-1 mt-auto hover:underline">
        Learn More <i className="ri-arrow-right-line text-[18px]" />
      </button>
    </div>
  );
}
