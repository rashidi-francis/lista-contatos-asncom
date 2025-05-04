
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import PricingTable from "@/components/PricingTable";
import ImportantInfo from "@/components/ImportantInfo";
import FAQ from "@/components/FAQ";
import ConsultingSection from "@/components/ConsultingSection";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80, // Offset for fixed header
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <PricingTable />
      <ImportantInfo />
      <FAQ />
      <ConsultingSection />
      <Footer />
      <WhatsappButton />
    </div>
  );
};

export default Index;
