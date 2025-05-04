
import { Phone, Mail, Instagram, Facebook, Whatsapp } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Footer = () => {
  return (
    <footer className="bg-brand-dark py-16 px-4" id="contato">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <ScrollReveal>
            <div>
              <h3 className="text-2xl font-bold mb-6">
                <span className="text-white">Ajudo Seu</span>
                <span className="neon-text"> Negócio</span>
              </h3>
              <p className="text-gray-300 mb-6">
                Especialistas em listas de contatos segmentadas para sua prospecção eficiente.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Contato</h4>
              <div className="space-y-4">
                <a 
                  href="https://wa.me/5500000000000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-brand-purple transition-colors"
                >
                  <Whatsapp className="h-5 w-5 text-green-500" />
                  <span>(00) 00000-0000</span>
                </a>
                <a 
                  href="mailto:contato@ajudoseunegocio.com.br" 
                  className="flex items-center gap-3 text-gray-300 hover:text-brand-purple transition-colors"
                >
                  <Mail className="h-5 w-5 text-brand-blue" />
                  <span>contato@ajudoseunegocio.com.br</span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Horário de Atendimento</h4>
              <div className="space-y-2 text-gray-300">
                <p>Segunda a Sexta: 09h às 18h</p>
                <p>Sábados: 09h às 13h</p>
                <p>Domingos e Feriados: Fechado</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Siga-nos</h4>
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com/ajudoseunegocio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-brand-purple/20 flex items-center justify-center hover:bg-brand-purple/40 transition-colors"
                >
                  <Instagram className="h-5 w-5 text-white" />
                </a>
                <a 
                  href="https://facebook.com/ajudoseunegocio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-brand-purple/20 flex items-center justify-center hover:bg-brand-purple/40 transition-colors"
                >
                  <Facebook className="h-5 w-5 text-white" />
                </a>
                <a 
                  href="https://wa.me/5500000000000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center hover:bg-green-500/40 transition-colors"
                >
                  <Whatsapp className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="border-t border-brand-purple/20 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Ajudo Seu Negócio. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
