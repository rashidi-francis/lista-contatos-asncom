
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from './ScrollReveal';

interface FAQItemProps {
  question: string;
  answer: string | React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-brand-purple/20 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-lg text-white">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-brand-purple" />
        ) : (
          <ChevronDown className="h-5 w-5 text-brand-purple" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-gray-300">{answer}</div>
      </div>
    </div>
  );
};

const FAQs = [
  {
    question: "Os contatos são reais?",
    answer: "Sim, todos os contatos são 100% reais e atualizados diariamente. Trabalhamos com bases de dados confiáveis para garantir a qualidade das informações."
  },
  {
    question: "Como recebo minha lista?",
    answer: "Após a confirmação do pagamento, você receberá sua lista de contatos em formato Excel (.xlsx) por e-mail em até 1 hora."
  },
  {
    question: "Quanto tempo leva?",
    answer: "O prazo de entrega é de até 1 hora após a confirmação do pagamento."
  },
  {
    question: "Posso filtrar por pessoas que gostam de X ou querem comprar Y?",
    answer: (
      <div>
        <p className="mb-4">
          Não. Não entregamos listas com base em gostos pessoais ou intenções específicas, como "pessoas que querem comprar apartamento", "gostam de consórcio", etc.
        </p>
        <p className="bg-brand-red/10 border border-brand-red/30 p-4 rounded-lg flex items-start gap-2">
          <span className="text-brand-red font-bold text-lg">⚠️</span>
          <span>
            Importante: Trabalhamos apenas com dados demográficos e geográficos, não com preferências pessoais ou intenções de compra.
          </span>
        </p>
      </div>
    )
  }
];

const FAQ = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#1f2437] to-brand-dark" id="faq">
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="h-6 w-6 text-brand-purple" />
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              <span className="text-white">Dúvidas </span>
              <span className="neon-text">Frequentes</span>
            </h2>
          </div>
          <p className="text-gray-300 text-center mb-12">
            Encontre respostas para as perguntas mais comuns sobre nossos serviços
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <Card className="border border-brand-purple/20 bg-brand-dark/50 backdrop-blur-sm">
            <CardContent className="p-6">
              {FAQs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQ;
