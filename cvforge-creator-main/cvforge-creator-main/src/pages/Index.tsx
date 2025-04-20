
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import TemplateShowcase from '@/components/home/TemplateShowcase';
import CTASection from '@/components/home/CTASection';
import ChatButton from '@/components/chat/ChatButton';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <TemplateShowcase />
        <CTASection />
      </main>
      <Footer />
      <ChatButton />
    </div>
  );
};

export default Index;
