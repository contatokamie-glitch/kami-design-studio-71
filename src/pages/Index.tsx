import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BrandStorySection from "@/components/BrandStorySection";
import CategoriesSection from "@/components/CategoriesSection";
import ValuePropsSection from "@/components/ValuePropsSection";
import HighlightSection from "@/components/HighlightSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <BrandStorySection />
        <HighlightSection />
        <CategoriesSection />
        <ValuePropsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
