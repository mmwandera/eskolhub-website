import Hero from "@/components/hero";
import About from "@/components/about";
import FeatureTour from "@/components/featuretour";
import PricingSection from "@/components/pricingsection";
import PartnersSection from "@/components/partnerssection";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeatureTour />
      <PricingSection />
      <PartnersSection />
    </>
  );
}
