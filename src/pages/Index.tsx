import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CategoryHighlights from "@/components/home/CategoryHighlights";

const Index = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <CategoryHighlights />
      <FeaturedProducts />
    </div>
  );
};

export default Index;
