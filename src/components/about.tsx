// src/components/about.tsx
import AboutCard from "./aboutcard";

export default function About() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-16 mt-[360px] mb-24 mx-6">
      {/* Left Side */}
      <div className="flex-1">
        {/* Heading Row */}
        <div className="flex items-center gap-3 mb-6">
          <i className="ri-rocket-line text-[18px] text-[#0F1932]" />
          <h3 className="uppercase text-[16px] font-medium tracking-wide text-[#0F1932]">
            Accelerate your growth
          </h3>
        </div>

        {/* Title & Description */}
        <h2 className="text-[48px] font-semibold text-[#0F1932] leading-tight mb-6">
          Supercharge Your School’s Potential
        </h2>
        <p className="text-[16px] text-[#475569] max-w-xl mb-12 leading-relaxed">
          Discover how E-Skolhub simplifies operations, enhances collaboration,
          and opens new pathways for institutional growth and success.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
          <AboutCard
            icon="ri-speed-up-line"
            title="Efficiency"
            text="Simplify daily operations with a system built to do the heavy lifting. E-Skolhub automates routine administrative and academic tasks, saving hours of manual work."
          />
          <AboutCard
            icon="ri-team-line"
            title="Collaboration"
            text="Connect teachers, students, and parents in one place for seamless communication and teamwork across your school."
          />
          <AboutCard
            icon="ri-bar-chart-line"
            title="Insights"
            text="Make data-driven decisions with real-time analytics and performance tracking for every aspect of your institution."
          />
          <AboutCard
            icon="ri-shield-check-line"
            title="Security"
            text="Keep sensitive information protected with advanced access control and encryption built into the E-Skolhub platform."
          />
        </div>
      </div>

      {/* Right Side Image */}
      <div className="flex-1 flex justify-center">
        <img
          src="/about-illustration.png"
          alt="About E-Skolhub"
          className="object-contain w-[500px] h-auto"
        />
      </div>
    </section>
  );
}
