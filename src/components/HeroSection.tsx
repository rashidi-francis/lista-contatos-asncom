
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ScrollReveal from './ScrollReveal';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-brand-dark py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
      {/* Neon effect elements */}
      <div className="absolute top-40 left-20 w-64 h-64 bg-brand-purple/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-brand-blue/20 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto relative z-10 flex flex-col items-center">
        <ScrollReveal className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Ajudo Seu</span>
            <span className="neon-text"> Negócio</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10">
            Você precisa vender mais, fechar mais negócios, prospectar mais? Você está no lugar certo! Somos Especialistas na entrega rápida de listas de contatos segmentadas para empresas, vendedores e profissionais b2b que precisam encontrar o público alvo certo.
          </p>
          <Button
            className="neon-button animate-pulse-neon group text-lg"
            onClick={() => window.open("https://api.whatsapp.com/send/?phone=5511930500397&text=Olá%21+Vim+pelo+site+e+gostaria+adquirir+uma+lista+de+contatos+segmentada.", "_blank")}
          >
            Falar no WhatsApp
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;
