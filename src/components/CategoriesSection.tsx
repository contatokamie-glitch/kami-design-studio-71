import categoryDresses from "@/assets/category-dresses.jpg";
import categoryTops from "@/assets/category-tops.jpg";
import categoryBottoms from "@/assets/category-bottoms.jpg";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  image: string;
  title: string;
  link: string;
  delay: string;
}

const CategoryCard = ({ image, title, link, delay }: CategoryCardProps) => {
  return (
    <div className={`group cursor-pointer opacity-0 animate-fade-up ${delay}`}>
      <div className="relative overflow-hidden aspect-[3/4] mb-4">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-300" />
      </div>
      <h3 className="heading-card text-foreground mb-2">{title}</h3>
      <a 
        href="#" 
        className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide group/link"
      >
        {link}
        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
      </a>
    </div>
  );
};

const CategoriesSection = () => {
  const categories = [
    { image: categoryDresses, title: "Vestidos", link: "Shop Dresses" },
    { image: categoryTops, title: "Blusas & Tops", link: "Shop Tops" },
    { image: categoryBottoms, title: "Calças & Saias", link: "Shop Bottoms" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container-section">
        <h2 className="heading-section text-center text-foreground mb-16 opacity-0 animate-fade-up">
          Navegue por Categorias
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {categories.map((category, index) => (
            <CategoryCard 
              key={category.title}
              {...category}
              delay={`stagger-${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
