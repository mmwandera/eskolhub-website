// src/components/testimonials/testimonialsection.tsx
"use client";

import Slider from "react-slick";
import TestimonialCard from "./testimonialcard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const testimonials = [
    {
      name: "Jane Wirmu",
      role: "Head Teacher Nairobi School",
      image: "/testimonials/jane.png",
      text: "Implementing E-Skolhub completely changed how we manage our school. Administrative work is faster, reports are clearer, and communication has never been easier. It’s a true game-changer for modern institutions.",
    },
    {
      name: "Jacob Muchiri",
      role: "Deputy Head Teacher Makini School",
      image: "/testimonials/jacob.png",
      text: "E-Skolhub has completely transformed how we manage our school. Tasks that once took hours are now done in minutes. The platform keeps everyone from teachers, parents, and administrators perfectly connected.",
    },
    {
      name: "Jane Wirmu",
      role: "Head Teacher Nairobi School",
      image: "/testimonials/jane.png",
      text: "Implementing E-Skolhub completely changed how we manage our school. Administrative work is faster, reports are clearer, and communication has never been easier. It’s a true game-changer for modern institutions.",
    },
    {
      name: "Jacob Muchiri",
      role: "Deputy Head Teacher Makini School",
      image: "/testimonials/jacob.png",
      text: "E-Skolhub has completely transformed how we manage our school. Tasks that once took hours are now done in minutes. The platform keeps everyone from teachers, parents, and administrators perfectly connected.",
    },
  ];

  return (
    <section className="my-24 mx-6 bg-[#0F1932] text-white rounded-2xl py-20 px-6">
      {/* Heading */}
      <div className="text-center mb-16">
        <div className="flex justify-center items-center gap-3 mb-3">
          <i className="ri-star-smile-line text-[18px] text-[#E5FE70]" />
          <p className="uppercase text-[#E5FE70] text-[14px] font-medium tracking-wide">
            Trusted by Leading Institutions
          </p>
        </div>

        <h2 className="text-[48px] font-semibold leading-tight">
          Praised by <span className="text-[#E5FE70]">educators</span> and{" "}
          <span className="text-[#E5FE70]">institutions</span>
        </h2>
        <p className="text-[#CBD5E1] text-[16px] mt-4">
          Trusted by schools and institutions to drive progress and performance
        </p>
      </div>

      {/* Carousel */}
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index} className="px-3"> {/* 12px each side → 24px total gap */}
            <TestimonialCard
              name={item.name}
              role={item.role}
              image={item.image}
              text={item.text}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}
