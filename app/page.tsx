import Navbar from "@/components/layout/navbar";
import HeroSection from "@/components/hero/hero-section";
import TrustedBanks from "@/components/home/trusted-banks";
import CategoryGrid from "@/components/home/category-grid";
import FeaturedProducts from "@/components/home/featured-products";
import WhyChooseUs from "@/components/home/why-choose-us";
import HowItWorks from "@/components/home/how-it-works";
import PlatformStats from "@/components/home/platform-stats";
import FeaturedOffers from "@/components/home/featured-offers";
import EmiCalculator from "@/components/home/emi-calculator";
import EligibilityChecker from "@/components/home/eligibility-checker";
import CompareProducts from "@/components/home/compare-products";
import Testimonials from "@/components/home/testimonials";
import FAQ from "@/components/home/faq";
import MobileApp from "@/components/home/mobile-app";
import FinalCTA from "@/components/home/final-cta";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <HeroSection />
        <TrustedBanks />
        <CategoryGrid />
        <FeaturedProducts />
        <WhyChooseUs />
        <HowItWorks />
        <PlatformStats />
        <FeaturedOffers />
        <EmiCalculator />
        <EligibilityChecker />
        <CompareProducts />
        {/* <Testimonials /> */}
        <MobileApp />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
