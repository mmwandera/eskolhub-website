// src/components/pricing/pricingcard.tsx
interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
}

export default function PricingCard({ title, price, features }: PricingCardProps) {
  return (
    <div className="flex flex-col justify-between bg-white rounded-2xl shadow-md border border-[#E2E8F0] p-8 text-center">
      <div>
        <h3 className="text-[20px] font-semibold text-[#0F1932] mb-2">{title}</h3>
        <p className="text-[32px] font-bold text-[#0F1932] mb-1">{price}</p>
        <p className="text-[#475569] text-sm mb-6">Per month</p>
        <button className="w-full py-3 bg-[#E5FE70] text-[#0F1932] font-semibold rounded-lg hover:bg-[#d8f864] transition">
          Contact Sales
        </button>
      </div>

      <ul className="text-left text-[#0F1932] mt-8 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <i className="ri-check-line text-[#0F1932] mt-[2px]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
