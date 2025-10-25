import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-[#0F1932] px-6 py-6 flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="max-w-3xl mx-auto z-10">
        <h1 className="text-white text-5xl font-bold leading-tight mb-6">
          Everything Your School Needs. All in One Place.
        </h1>
        <p className="text-[#E0E0E0] text-lg mb-8">
          E-Skolhub is an online school management system software that simplifies
          the institute&apos;s academic and administrative process effortlessly.
        </p>
        <button className="bg-[#E5FE70] text-[#0F1932] font-semibold text-lg px-8 py-3 rounded-xl hover:opacity-90 transition-all">
          Request Live Demo
        </button>
      </div>

      {/* Hero image positioned 326px from bottom */}
      <div className="absolute bottom-[-326px] left-1/2 transform -translate-x-1/2">
        <Image
          src="/hero-illustration.png"
          alt="E-Skolhub dashboard"
          width={987}
          height={658}
          priority
        />
      </div>
    </section>
  );
}
