import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-100 py-16">
      <div className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-heading text-2xl mb-4">Kamiê</h3>
            <p className="font-body text-stone-400 text-sm leading-relaxed max-w-sm">
              Moda consciente para mulheres que valorizam qualidade, conforto e elegância atemporal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-xs uppercase tracking-widest text-stone-400 mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {["Sobre Nós", "Coleções", "Sustentabilidade", "Contato"].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="font-body text-sm text-stone-300 hover:text-stone-50 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-body text-xs uppercase tracking-widest text-stone-400 mb-4">
              Ajuda
            </h4>
            <ul className="space-y-3">
              {["FAQ", "Trocas & Devoluções", "Envio", "Guia de Tamanhos"].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="font-body text-sm text-stone-300 hover:text-stone-50 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-stone-500">
            © 2024 Kamiê. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="#" className="text-stone-400 hover:text-stone-50 transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-stone-400 hover:text-stone-50 transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-stone-400 hover:text-stone-50 transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
