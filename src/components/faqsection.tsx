"use client";

import { useState } from "react";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is E-Skolhub?",
      answer:
        "E-Skolhub is an online school management software that streamlines academic and administrative processes, enabling schools to operate more efficiently.",
    },
    {
      question: "Can E-Skolhub integrate with existing systems?",
      answer:
        "Yes. E-Skolhub supports integrations with existing tools such as learning management systems, accounting software, and communication platforms.",
    },
    {
      question: "Is training provided for staff and teachers?",
      answer:
        "Absolutely. Our onboarding includes comprehensive training to ensure all users can maximize the system’s capabilities.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="my-24 mx-6">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex justify-center items-center gap-3 mb-3">
          <i className="ri-lightbulb-flash-line text-[18px] text-[#0F1932]" />
          <p className="uppercase text-[#0F1932] text-[14px] font-medium tracking-wide">
            Find Your Answers
          </p>
        </div>

        <h2 className="text-[48px] font-semibold text-[#0F1932]">
          Frequently Asked Questions
        </h2>
        <p className="text-[#475569] text-[16px] mt-4">
          Have a question? Browse our FAQ section for detailed explanations and
          solutions.
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto divide-y divide-[#E2E8F0]">
        {faqs.map((faq, index) => (
          <div key={index} className="py-6 cursor-pointer" onClick={() => toggleFAQ(index)}>
            <div className="flex items-center gap-6">
              <i
                className={`ri-add-line text-[20px] text-[#0F1932] transition-transform duration-200 ${
                  activeIndex === index ? "rotate-45" : ""
                }`}
              />
              <h3 className="text-[18px] font-semibold text-[#0F1932]">
                {faq.question}
              </h3>
            </div>

            {activeIndex === index && (
              <p className="mt-4 ml-[44px] text-[#475569] text-[16px] leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
