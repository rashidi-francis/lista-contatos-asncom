
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ScrollReveal from './ScrollReveal';

const plans = [
  { contacts: "100", segments: "1 segmento", price: "100" },
  { contacts: "200", segments: "1 segmento", price: "160" },
  { contacts: "500", segments: "até 2 segmentos", price: "350" },
  { contacts: "1.000", segments: "até 3 segmentos", price: "550" },
  { contacts: "5.000", segments: "até 5 segmentos", price: "950" },
  { contacts: "10.000", segments: "múltiplos", price: "1.500" },
  { contacts: "25.000", segments: "múltiplos", price: "2.000" },
  { contacts: "50.000", segments: "múltiplos", price: "4.000" },
  { contacts: "100.000", segments: "múltiplos", price: "7.000" },
  { contacts: "150.000", segments: "múltiplos", price: "8.500" },
  { contacts: "200.000", segments: "múltiplos", price: "10.000" },
  { contacts: "500.000", segments: "múltiplos", price: "14.000" },
  { contacts: "1.000.000", segments: "múltiplos", price: "18.000" },
];

const PricingTable = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#1f2437] to-brand-dark" id="precos">
      <div className="container mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-white">Tabela de </span>
            <span className="neon-text">Preços</span>
          </h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Escolha a quantidade de contatos segmentados que vamos enviar para você ainda hoje em seu email. Veja qual melhor se adapta às suas necessidades de prospecção
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <ScrollReveal key={index}>
              <div className="price-card flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-2">{plan.contacts} contatos</h3>
                <p className="text-gray-400 mb-4">{plan.segments}</p>
                <div className="text-3xl font-bold text-white mb-8 mt-auto flex items-end gap-1">
                  <span className="text-lg text-gray-400">R$</span> 
                  {plan.price}
                </div>
                <Button 
                  className="whatsapp-button w-full flex items-center justify-center gap-2" 
                  onClick={() => window.open(`https://api.whatsapp.com/send/?phone=5511930500397&text=Olá! Quero comprar essa quantidade de ${plan.contacts} contatos por R$${plan.price}.`, "_blank")}
                >
                  <span>Comprar no WhatsApp</span>
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
