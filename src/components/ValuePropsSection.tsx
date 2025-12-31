import { Leaf, Truck, ShieldCheck } from "lucide-react";
import { ReactNode } from "react";

interface ValuePropProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay: string;
}

const ValueProp = ({ icon, title, description, delay }: ValuePropProps) => {
  return (
    <div className={`text-center opacity-0 animate-fade-up ${delay}`}>
      <div className="inline-flex items-center justify-center w-14 h-14 mb-4 text-stone-700">
        {icon}
      </div>
      <h4 className="font-heading text-lg font-medium text-foreground mb-2">
        {title}
      </h4>
      <p className="font-body text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
        {description}
      </p>
    </div>
  );
};

const ValuePropsSection = () => {
  const values = [
    {
      icon: <Leaf className="w-8 h-8" strokeWidth={1.5} />,
      title: "Tecidos Sustentáveis",
      description: "Produção consciente com fibras naturais.",
    },
    {
      icon: <Truck className="w-8 h-8" strokeWidth={1.5} />,
      title: "Envio para todo o Brasil",
      description: "Frete grátis em compras acima de R$ 299.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8" strokeWidth={1.5} />,
      title: "Compra Segura",
      description: "Troca fácil e garantia de qualidade.",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {values.map((value, index) => (
            <ValueProp 
              key={value.title}
              {...value}
              delay={`stagger-${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropsSection;
