// src/components/trusted/partnerssection.tsx
"use client";

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PartnersSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  const partners = [
    "/partners/partner1.png",
    "/partners/partner2.png",
    "/partners/partner3.png",
    "/partners/partner3.png",
    "/partners/partner2.png",
    "/partners/partner1.png",
  ];

  return (
    <section className="my-24 mx-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h4 className="uppercase text-[14px] text-[#0F1932] font-medium tracking-wide">
          Some Trusted Partners
        </h4>
        <h2 className="text-[48px] font-semibold text-[#0F1932] mt-6">
          Trusted by leading institutions.
        </h2>
      </div>

      {/* Carousel */}
      <Slider {...settings}>
        {partners.map((src, index) => (
          <div key={index} className="px-4">
            <div className="flex justify-center items-center">
              <Image
                src={src}
                alt={`Partner ${index + 1}`}
                width={160}
                height={80}
                className="object-contain transition duration-300"
              />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
