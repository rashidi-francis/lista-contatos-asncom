
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Como Funciona", href: "#como-funciona" },
  { name: "Preços", href: "#precos" },
  { name: "Importante Saber", href: "#importante" },
  { name: "FAQ", href: "#faq" },
  { name: "Contato", href: "#contato" }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-dark/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="text-xl md:text-2xl font-bold">
            <span className="text-white">Ajudo Seu</span>
            <span className="neon-text"> Negócio</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-brand-purple transition-colors"
              >
                {item.name}
              </a>
            ))}
            <Button
              className="neon-button text-sm"
              onClick={() => window.open("https://api.whatsapp.com/send/?phone=5511930500397&text=Olá%21+Vim+pelo+site+e+gostaria+adquirir+uma+lista+de+contatos+segmentada.", "_blank")}
            >
              Falar no WhatsApp
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost" 
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:bg-brand-purple/20"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-16 inset-x-0 bg-brand-dark/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 border-b border-brand-purple/20' : 'max-h-0'
        }`}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-brand-purple transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <Button
            className="neon-button w-full mt-4"
            onClick={() => {
              window.open("https://api.whatsapp.com/send/?phone=5511930500397&text=Olá%21+Vim+pelo+site+e+gostaria+adquirir+uma+lista+de+contatos+segmentada.", "_blank");
              setMobileMenuOpen(false);
            }}
          >
            Falar no WhatsApp
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
