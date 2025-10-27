"use client";

import { useState } from "react";

export default function VideoSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="my-24 mx-6 flex flex-col md:flex-row items-center justify-between gap-12">
      {/* LEFT CONTENT */}
      <div className="flex-1">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-3">
          <i className="ri-play-circle-line text-[18px] text-[#0F1932]" />
          <p className="uppercase text-[#0F1932] text-[14px] font-medium tracking-wide">
            E-Skolhub in Action
          </p>
        </div>

        {/* Main title */}
        <h2 className="text-[48px] font-semibold text-[#0F1932] leading-tight mb-8">
          Watch E-Skolhub Transform Learning
        </h2>

        {/* Bullet points */}
        <ul className="space-y-6 text-[16px] text-[#475569] font-medium">
          <li className="flex items-start gap-3">
            <i className="ri-check-fill text-[#0F1932] text-[20px]" />
            <span>Discover how schools simplify their daily operations</span>
          </li>
          <li className="flex items-start gap-3">
            <i className="ri-check-fill text-[#0F1932] text-[20px]" />
            <span>Explore the modules that make management effortless</span>
          </li>
          <li className="flex items-start gap-3">
            <i className="ri-check-fill text-[#0F1932] text-[20px]" />
            <span>Watch how E-Skolhub connects your entire institution</span>
          </li>
        </ul>
      </div>

      {/* RIGHT SIDE: VIDEO PREVIEW */}
      <div className="flex-1 relative group">
        {/* Thumbnail video */}
        <video
          src="/videos/eskolhub-demo.mp4"
          className="w-full rounded-2xl shadow-lg"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Play button overlay */}
        <button
          onClick={() => setIsOpen(true)}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="bg-[#E5FE70] w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-xl transition transform group-hover:scale-110">
            <i className="ri-play-fill text-[#0F1932] text-[24px]" />
          </div>
        </button>

        {/* Expanded modal overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative w-[90%] max-w-4xl">
              <video
                src="/videos/eskolhub-demo.mp4"
                className="w-full rounded-xl"
                autoPlay
                controls
              />
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-white text-[24px]"
              >
                <i className="ri-close-line" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
