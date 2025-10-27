// src/components/aboutcard.tsx

interface AboutCardProps {
  icon: string; // e.g. "ri-rocket-line"
  title: string;
  text: string;
}

export default function AboutCard({ icon, title, text }: AboutCardProps) {
  return (
    <div className="flex items-start gap-6">
      {/* Icon container */}
      <div className="w-14 h-14 bg-[#0F1932] flex items-center justify-center rounded-md shrink-0">
        <i className={`${icon} text-[24px] text-white`} />
      </div>

      {/* Text content */}
      <div>
        <h4 className="text-[20px] font-semibold text-[#0F1932] mb-3">
          {title}
        </h4>
        <p className="text-[#475569] text-[16px] leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
