import { Heart, Fingerprint, MapPin } from "lucide-react";

const BrandStorySection = () => {
  return (
    <section className="py-20 md:py-28 bg-foreground text-stone-50">
      <div className="container-section">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-body text-xs uppercase tracking-widest text-terracotta mb-6 block opacity-0 animate-fade-up">
            Sobre a Kamiê
          </span>
          
          <h2 className="heading-section text-stone-50 mb-8 opacity-0 animate-fade-up stagger-1">
            Vestir Kamiê é carregar pertencimento, memória e orgulho.
          </h2>
          
          <p className="body-large text-stone-300 mb-12 opacity-0 animate-fade-up stagger-2">
            Criamos moda autoral que foge do óbvio, respeita a tradição e conversa com o presente. 
            É levar o calor do Nordeste para o mundo.
          </p>

          {/* Brand Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center opacity-0 animate-fade-up stagger-2">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-terracotta/20 flex items-center justify-center">
                <Fingerprint className="w-7 h-7 text-terracotta" />
              </div>
              <h4 className="font-heading text-lg mb-3 text-stone-50">Identidade Cultural</h4>
              <p className="text-sm text-stone-400">
                Estampas que traduzem o cordel, o sertão e o ritmo nordestino.
              </p>
            </div>
            
            <div className="text-center opacity-0 animate-fade-up stagger-3">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-terracotta/20 flex items-center justify-center">
                <Heart className="w-7 h-7 text-terracotta" />
              </div>
              <h4 className="font-heading text-lg mb-3 text-stone-50">Feito com Afeto</h4>
              <p className="text-sm text-stone-400">
                Cada peça carrega o cuidado de quem valoriza suas raízes.
              </p>
            </div>
            
            <div className="text-center opacity-0 animate-fade-up stagger-4">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-terracotta/20 flex items-center justify-center">
                <MapPin className="w-7 h-7 text-terracotta" />
              </div>
              <h4 className="font-heading text-lg mb-3 text-stone-50">Do Nordeste pro Mundo</h4>
              <p className="text-sm text-stone-400">
                Levamos o orgulho nordestino para onde você estiver.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStorySection;
