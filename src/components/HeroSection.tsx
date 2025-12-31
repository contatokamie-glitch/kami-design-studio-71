import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-kamie.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/40 via-stone-900/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-section text-center max-w-4xl">
        <div className="opacity-0 animate-fade-up">
          <h1 className="heading-display text-stone-50 mb-6 drop-shadow-lg">
            Essência Natural, Elegância Atemporal
          </h1>
        </div>
        
        <div className="opacity-0 animate-fade-up stagger-2">
          <p className="body-large text-stone-100 mb-10 max-w-2xl mx-auto drop-shadow-md">
            Descubra a nova coleção da Kamiê, feita para quem veste conforto sem abrir mão do estilo.
          </p>
        </div>
        
        <div className="opacity-0 animate-fade-up stagger-3">
          <Button variant="hero" size="xl">
            Ver Nova Coleção
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in stagger-4">
        <div className="w-6 h-10 border-2 border-stone-50/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-stone-50/70 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
