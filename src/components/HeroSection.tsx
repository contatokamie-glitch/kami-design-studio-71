import { Button } from "@/components/ui/button";
import laEleReference from "@/assets/la-ele-reference.png";
import { Search, Mic } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
      {/* Reference Image as Background with Wash */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${laEleReference})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-section text-center max-w-4xl">
        <div className="opacity-0 animate-fade-up flex flex-col items-center">
          {/* Colorful Brand Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 flex gap-1 tracking-tighter drop-shadow-2xl">
            <span className="text-[#4285F4]">L</span>
            <span className="text-[#EA4335]">á</span>
            <span className="text-[#FBBC05]">E</span>
            <span className="text-[#4285F4]">l</span>
            <span className="text-[#34A853]">e</span>
          </h1>
          
          {/* Search Bar Style Brand Element */}
          <div className="w-full max-w-2xl bg-black rounded-full px-6 py-3 flex items-center gap-4 mb-6 border border-stone-800 shadow-2xl">
            <Search className="text-[#4285F4] w-5 h-5" />
            <span className="text-white text-sm md:text-base font-medium flex-1 text-left">
              O Escudo Protetor Contra o Duplo Sentido
            </span>
            <Mic className="text-[#4285F4] w-5 h-5" />
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-1 mb-10 border border-white/20">
             <span className="text-stone-300 text-sm italic">Digall:</span>
          </div>
        </div>
        
        <div className="opacity-0 animate-fade-up stagger-2">
          <p className="body-large text-stone-100 mb-10 max-w-2xl mx-auto drop-shadow-md">
            Vista a essência, proteja seu estilo. A estampa que fala por você.
          </p>
        </div>
        
        <div className="opacity-0 animate-fade-up stagger-3">
          <Button variant="hero" size="xl" className="rounded-full px-12 bg-white text-black hover:bg-stone-200">
            Garantir a Minha
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
