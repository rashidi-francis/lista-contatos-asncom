
import { Info } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from './ScrollReveal';

const features = [
  {
    title: "Dados Completos",
    description: "Você recebe: Nome + Celular + Email + região",
  },
  {
    title: "Cobertura WhatsApp",
    description: "90% dos contatos celular possuem WhatsApp",
  },
  {
    title: "Base Atualizada",
    description: "Base sempre atualizada diariamente",
  },
  {
    title: "Filtros Disponíveis",
    description: "Segmento, região e renda mínima",
  },
];

const additionalInfo = [
  "Não é possível filtrar por gênero ou idade. Caso queira pessoas mais velhas por exemplo, tente segmentar por renda alta",
  "Segmentamos também por região, profissão, nicho setor de trabalho, indústria etc tipo de atividade (ex: donas de salão de beleza, enfermagem, confeitaria, etc  → maior chance/probablidade de vir contato de mulheres)",
  "Serviços pesados, eletricidade, mecânica, construção etc - maior chance/probablidade de vir contatos de homens",
  "Exemplo: cliente quer pessoas de 40 anos para cima - filtramos por renda maior, que tem mais chance de pessoas mais velhas"
];

const testimonials = [
  {
    name: "João Silva",
    company: "Imobiliária Capital",
    testimonial: "As listas segmentadas por região e renda foram fundamentais para nosso crescimento. Conseguimos fechar 3 vendas de imóveis no primeiro mês de uso.",
    image: <img src="/img-testimonials/joao.webp" alt="Depoimento1" className="w-10 h-10 rounded-full" /> />
  },
  {
    name: "Mariana Costa",
    company: "Consultoria Financeira MC",
    testimonial: "A qualidade dos contatos é impressionante. Economizamos tempo e recursos significativos na prospecção de clientes.",
    image: <img src="/img-testimonials/mariana.webp" alt="Depoimento2" className="w-10 h-10 rounded-full" /> />
  },
  {
    name: "Carlos Mendes",
    company: "Supply Tech",
    testimonial: "Utilizamos para encontrar fornecedores em regiões específicas. O retorno foi muito acima do esperado com contatos realmente úteis.",
    image: <img src="/img-testimonials/carlos.webp" alt="Depoimento3" className="w-10 h-10 rounded-full" /> />
  }
];

const ImportantInfo = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-brand-dark to-[#1f2437]" id="importante">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Info className="h-6 w-6 text-brand-red" />
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              <span className="text-white">Importante </span>
              <span className="neon-text">Saber</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <ScrollReveal key={index}>
              <Card className="border border-brand-purple/20 bg-brand-dark/50 backdrop-blur-sm hover:border-brand-purple/40 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <Card className="border border-brand-red/30 bg-brand-dark/50 backdrop-blur-sm mb-16">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Informações adicionais importantes:</h3>
              <ul className="space-y-3">
                {additionalInfo.map((info, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <span className="text-brand-red text-lg">•</span>
                    <span>{info}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </ScrollReveal>

        <ScrollReveal>
          <h3 className="text-2xl font-bold text-center mb-10">
            <span className="text-white">O que nossos </span>
            <span className="neon-text">clientes dizem</span>
          </h3>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index}>
              <Card className="border border-brand-purple/20 bg-brand-dark/50 backdrop-blur-sm hover:border-brand-purple/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-brand-purple/20 overflow-hidden">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">&ldquo;{testimonial.testimonial}&rdquo;</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImportantInfo;
