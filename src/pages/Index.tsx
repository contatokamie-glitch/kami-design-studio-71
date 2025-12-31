import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
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
        <CategoriesSection />
        <ValuePropsSection />
        <HighlightSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
