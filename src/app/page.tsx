import Hero from "@/components/hero";
import About from "@/components/about";
import FeatureTour from "@/components/featuretour";
import PricingSection from "@/components/pricingsection";
import PartnersSection from "@/components/partnerssection";
import TestimonialSection from "@/components/testimonials/testimonialsection";
import VideoSection from "@/components/videosection";
import FAQSection from "@/components/faqsection";
import CTASection from "@/components/ctasection";


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeatureTour />
      <PricingSection />
      <PartnersSection />
      <TestimonialSection />
      <VideoSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
