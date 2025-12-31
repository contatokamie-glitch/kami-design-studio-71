import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import logoKamie from "@/assets/logo-kamie.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "bg-background/95 backdrop-blur-sm shadow-soft py-4" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container-section">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 -ml-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={cn("w-5 h-5", isScrolled ? "text-foreground" : "text-stone-50")} />
            ) : (
              <Menu className={cn("w-5 h-5", isScrolled ? "text-foreground" : "text-stone-50")} />
            )}
          </button>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {["Novidades", "Vestidos", "Tops", "Acessórios"].map((item) => (
              <a 
                key={item}
                href="#" 
                className={cn(
                  "font-body text-sm uppercase tracking-wide transition-colors",
                  isScrolled 
                    ? "text-foreground hover:text-terracotta" 
                    : "text-stone-50 hover:text-stone-200"
                )}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Logo */}
          <a 
            href="/" 
            className="absolute left-1/2 -translate-x-1/2"
          >
            <img 
              src={logoKamie} 
              alt="Kamiê" 
              className={cn(
                "h-8 md:h-10 w-auto transition-all duration-300",
                isScrolled ? "brightness-0" : "brightness-100"
              )}
            />
          </a>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button 
              className={cn(
                "p-2 transition-colors",
                isScrolled ? "text-foreground hover:text-terracotta" : "text-stone-50 hover:text-stone-200"
              )}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button 
              className={cn(
                "p-2 transition-colors",
                isScrolled ? "text-foreground hover:text-terracotta" : "text-stone-50 hover:text-stone-200"
              )}
              aria-label="Shopping bag"
            >
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-6 pb-4 border-t border-border/20 pt-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              {["Novidades", "Vestidos", "Tops", "Acessórios"].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className={cn(
                    "font-body text-sm uppercase tracking-wide",
                    isScrolled ? "text-foreground" : "text-stone-50"
                  )}
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
