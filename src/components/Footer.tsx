
import { Phone, Mail, Instagram, Facebook, MessageCircle } from 'lucide-react';
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
                  href="https://api.whatsapp.com/send/?phone=5511930500397&text=Olá%21+Vim+pelo+site+e+gostaria+de+mais+informações+sobre+as+listas+de+contatos." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-brand-purple transition-colors"
                >
                  <MessageCircle className="h-5 w-5 text-green-500" />
                  <span>(11) 93050-0397</span>
                </a>
                <a 
                  href="mailto:b2b@ajudoseunegocio.com" 
                  className="flex items-center gap-3 text-gray-300 hover:text-brand-purple transition-colors"
                >
                  <Mail className="h-5 w-5 text-brand-blue" />
                  <span>b2b@ajudoseunegocio.com</span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Horário de Atendimento</h4>
              <div className="space-y-2 text-gray-300">
                <p>Segunda a Domingo</p>
                <p>atendimento 24 horas</p>                
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Siga-nos</h4>
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com/ajudo_seu_negocio" 
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
                  href="https://api.whatsapp.com/send/?phone=5511930500397&text=Olá%21+Vim+pelo+site+e+gostaria+de+mais+informações+sobre+as+listas+de+contatos." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center hover:bg-green-500/40 transition-colors"
                >
                  <MessageCircle className="h-5 w-5 text-white" />
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
