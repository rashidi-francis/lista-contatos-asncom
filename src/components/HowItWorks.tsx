
import { CalendarDays } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from './ScrollReveal';

const features = [
  {
    title: "Segmentação Geográfica",
    description: "Segmentamos por região, estado, cidade ou bairro específico para direcionar suas campanhas com maior precisão.",
    icon: "📍",
  },
  {
    title: "Tipos de Contatos",
    description: "Entregamos listas de Clientes ou empresas de acordo com a necessidade do seu negócio.",
    icon: "👥",
  },
  {
    title: "Filtro de Renda",
    description: "Filtramos por faixa de renda mínima, ajudando a encontrar o público adequado para seu produto ou serviço.",
    icon: "💰",
  },
  {
    title: "Entrega Rápida",
    description: "Dados enviados por email em até 1 hora ou até 5 horas no máximo após a confirmação do pagamento.",
    icon: "⚡",
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-brand-dark to-[#1f2437]" id="como-funciona">
      <div className="container mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="neon-text">Como </span>
            <span className="text-white">Funciona</span>
          </h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Nosso serviço é especializado exclusivamente na venda de listas de contatos segmentadas para sua prospecção de forma rápida e eficiente.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={index} className="h-full">
              <Card className="border border-brand-purple/20 bg-brand-dark/50 backdrop-blur-sm h-full hover:border-brand-purple/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(155,135,245,0.2)]">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-purple/10 border border-brand-purple/30 rounded-full px-6 py-3">
            <CalendarDays className="h-5 w-5 text-brand-purple" />
            <p className="text-white">Dados enviados por email em até <span className="text-brand-purple font-bold">1 hora</span> após o pagamento</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HowItWorks;
