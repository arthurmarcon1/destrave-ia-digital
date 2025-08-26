import { HeroSection } from "@/components/HeroSection";
import { ProductsSection } from "@/components/ProductsSection";
import { PricingSection } from "@/components/PricingSection";
import { CertificateSection } from "@/components/CertificateSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductsSection />
      <PricingSection />
      <CertificateSection />
      <Footer />
    </div>
  );
};

export default Index;
