
import { Link } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ScrollReveal from './ScrollReveal';

const ConsultingSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-brand-dark to-[#1f2437]" id="consultoria">
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">Quer uma </span>
              <span className="neon-text">consultoria de marketing digital</span>
              <span className="text-white"> focada no seu negócio?</span>
            </h2>
            <p className="text-gray-300 text-xl">
              Acesse agora mesmo: <a href="https://www.ajudoseunegocio.com.br" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">www.ajudoseunegocio.com.br</a>
            </p>
          </div>

          <div className="text-center mb-8">
            <p className="text-gray-200 text-lg">
              Fazer consultoria de marketing digital com foco crescimento do seu negócio agora, clique no botão abaixo
            </p>
          </div>

          <div className="flex justify-center">
            <Button 
              className="neon-button group text-lg"
              onClick={() => window.open("https://www.ajudoseunegocio.com.br", "_blank")}
            >
              <Link className="mr-2 h-5 w-5" />
              Consultoria Digital Agora
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ConsultingSection;
