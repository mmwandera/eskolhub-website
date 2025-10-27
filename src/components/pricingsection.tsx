// src/components/pricing/pricingsection.tsx
import PricingCard from "./pricingcard";

export default function PricingSection() {
  return (
    <section className="my-24 mx-6 bg-[#0F1932] text-white rounded-2xl py-20 px-6">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex justify-center items-center gap-3 mb-4">
          <i className="ri-wallet-3-line text-[18px] text-[#E5FE70]" />
          <p className="text-[#E5FE70] text-[14px] font-medium uppercase tracking-wide">
            Affordable Plans
          </p>
        </div>

        <h2 className="text-[48px] font-semibold leading-tight">
          <span className="text-[#E5FE70]">Affordable</span> Plans for{" "}
          <span className="text-[#E5FE70]">Smart</span> Institutes
        </h2>
        <p className="text-[#CBD5E1] text-[16px] mt-4 max-w-2xl mx-auto">
          Chosen by forward-thinking schools seeking high performance without the high cost.
        </p>

        <div className="mt-6 inline-flex items-center bg-[#E5FE70] text-[#0F1932] px-6 py-2 rounded-full text-sm font-medium">
          <i className="ri-star-fill text-[#0F1932] mr-2" />
          Rated 4.97/5 from over 600 reviews.
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <PricingCard
          title="Starter Plan"
          price="Ksh 25,000"
          features={[
            "Perfect for small or growing institutions.",
            "21 Core Modules",
            "17 Standard Modules",
            "Unlimited Users",
            "One to One Online Training",
            "Automatic Updates",
            "Email and Phone Support",
            "Onboarding data and Configuration",
          ]}
        />
        <PricingCard
          title="Professional Plan"
          price="Ksh 35,000"
          features={[
            "For schools that need deeper control and advanced features.",
            "21 Core Modules",
            "17 Standard Modules",
            "10 Premium Modules",
            "Unlimited Users",
            "One to One Online Training",
            "Automatic Updates",
            "Email and Phone Support",
            "Onboarding data and Configuration",
          ]}
        />
        <PricingCard
          title="Enterprise Plan"
          price="Ksh 50,000"
          features={[
            "Designed for education networks and multi-school organizations.",
            "21 Core Modules",
            "17 Standard Modules",
            "10 Premium Modules",
            "10 Ultimate Modules",
            "Unlimited Users",
            "One to One Online Training",
            "Automatic Updates",
            "Email and Phone Support",
            "Onboarding data and Configuration",
            "Product Source Code",
          ]}
        />
      </div>
    </section>
  );
}
