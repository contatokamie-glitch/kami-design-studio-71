import { Button } from "@/components/ui/button";
import highlightImage from "@/assets/highlight-bag.jpg";

const HighlightSection = () => {
  return (
    <section className="py-0 bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        {/* Image Column */}
        <div className="relative overflow-hidden opacity-0 animate-fade-up">
          <img 
            src={highlightImage} 
            alt="Peça da Estação - Bolsa Kamiê"
            className="w-full h-full object-cover min-h-[500px] lg:min-h-full"
          />
        </div>

        {/* Content Column */}
        <div className="flex items-center justify-center p-12 lg:p-20 bg-stone-100 opacity-0 animate-fade-up stagger-2">
          <div className="max-w-md">
            <span className="font-body text-xs uppercase tracking-widest text-terracotta mb-4 block">
              Exclusivo
            </span>
            <h2 className="heading-section text-foreground mb-6">
              A Peça da Estação
            </h2>
            <p className="body-base text-muted-foreground mb-8 leading-relaxed">
              Conheça o lançamento exclusivo que vai transformar o seu guarda-roupa. 
              Versatilidade do trabalho ao happy hour.
            </p>
            <Button variant="terracotta" size="lg">
              Comprar Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightSection;
