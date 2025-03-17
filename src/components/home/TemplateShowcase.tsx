
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from 'lucide-react';

const templates = [
  {
    name: 'Modern',
    description: 'Clean and contemporary design',
    image: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?q=80&w=300&auto=format&fit=crop',
  },
  {
    name: 'Classic',
    description: 'Traditional and elegant layout',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=300&auto=format&fit=crop',
  },
  {
    name: 'Creative',
    description: 'Unique design for creative fields',
    image: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=300&auto=format&fit=crop',
  },
];

const TemplateShowcase = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30 container-padding">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Professional Templates</h2>
          <p className="paragraph max-w-2xl mx-auto">
            Choose from a variety of professionally designed templates for every industry and career stage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <div 
              key={index} 
              className="rounded-xl overflow-hidden shadow-md border border-border transition-all hover:shadow-lg hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img 
                src={template.image} 
                alt={template.name} 
                className="w-full aspect-[3/4] object-cover"
              />
              <div className="p-4 bg-card">
                <h3 className="font-semibold">{template.name}</h3>
                <p className="text-sm text-muted-foreground">{template.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            onClick={() => navigate('/templates')}
            className="min-w-[200px]"
          >
            View All Templates
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TemplateShowcase;
