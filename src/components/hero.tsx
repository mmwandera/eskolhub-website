// src/components/hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative my-6 mx-6 bg-[#0F1932] rounded-2xl flex flex-col items-center justify-center text-center px-8 py-24 text-white overflow-visible">
      <h1 className="text-[72px] font-semibold leading-tight">
        Everything Your School <br />
        <span className="text-[#E5FE70]">Needs</span>. All in{" "}
        <span className="text-[#E5FE70]">One Place.</span>
      </h1>

      <p className="text-[18px] font-semibold max-w-3xl mt-6">
        E-Skolhub is an online school management system software that simplifies
        the institute&apos;s academic & administrative process effortlessly.
      </p>

      <button
        className="mt-10 w-[247px] h-[52px] bg-[#E5FE70] text-[#0F1932] font-semibold rounded-lg hover:opacity-90 transition"
      >
        Request Live Demo
      </button>

      {/* Hero Illustration */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-25%]">
        <Image
          src="/hero-illustration.png"
          alt="E-Skolhub Illustration"
          width={1200}
          height={600}
          className="object-contain"
        />
      </div>

      {/* Spacer to push footer down */}
      <div className="h-[300px]" />
    </section>
  );
}
