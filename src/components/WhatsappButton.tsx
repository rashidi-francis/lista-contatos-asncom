
import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsappButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    // Show button after scrolling
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add pulsing effect every few seconds
    const pulseInterval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 1000);
    }, 5000);

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(pulseInterval);
    };
  }, []);

  return (
    <a
      href="https://wa.me/5500000000000?text=Olá! Vim pelo site e gostaria de mais informações sobre as listas de contatos."
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-8 right-8 z-50 bg-green-500 h-14 w-14 rounded-full flex items-center justify-center shadow-lg
        transition-all duration-500 hover:scale-110 hover:shadow-green-500/30 hover:shadow-lg
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
        ${isPulsing ? 'animate-pulse-neon' : ''}`}
    >
      <MessageCircle className="h-7 w-7 text-white" />
    </a>
  );
};

export default WhatsappButton;
