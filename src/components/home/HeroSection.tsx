
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon, SparklesIcon } from 'lucide-react';

const HeroSection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent z-[-1]"></div>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-in">
            <SparklesIcon className="h-4 w-4 mr-2" />
            <span>Craft the perfect CV with AI assistance</span>
          </div>
          <h1 className="heading-1 mb-6 animate-slide-in-up">
            Create a Professional CV 
            <span className="text-primary"> That Stands Out</span>
          </h1>
          <p className="paragraph max-w-2xl mb-8 animate-slide-in-up" style={{ animationDelay: '100ms' }}>
            Our intuitive platform helps you build a professional CV that catches employers' attention.
            Choose from multiple templates, customize every section, and download in various formats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-up" style={{ animationDelay: '200ms' }}>
            <Button 
              size="lg" 
              onClick={() => navigate('/create-cv')}
              className="min-w-[200px]"
            >
              Create Your CV
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/templates')}
              className="min-w-[200px]"
            >
              Browse Templates
            </Button>
          </div>
        </div>
        
        {/* Preview Image */}
        <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 animate-slide-in-up" style={{ animationDelay: '300ms' }}>
          <img 
            src="https://placehold.co/1200x800/f8fafc/a3b3c2?text=CV+Preview" 
            alt="CV Forge Preview" 
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
