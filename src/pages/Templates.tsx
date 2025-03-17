
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon, ThumbsUpIcon, EyeIcon, DownloadIcon } from 'lucide-react';
import CVTemplates, { CVTemplateType } from '@/components/cv/CVTemplates';

const Templates = () => {
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState<CVTemplateType>('modern');
  
  const handleSelectTemplate = (template: CVTemplateType) => {
    setSelectedTemplate(template);
  };
  
  const handleCreateCV = () => {
    // Navigate to create-cv page with the selected template as a URL parameter
    navigate(`/create-cv?template=${selectedTemplate}`);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">Professional CV Templates</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse our collection of professionally designed CV templates for every industry and career stage. 
              Select a template to start building your perfect CV.
            </p>
          </div>
          
          {/* Template Gallery */}
          <div className="mb-16">
            <CVTemplates 
              selectedTemplate={selectedTemplate}
              onSelectTemplate={handleSelectTemplate}
            />
          </div>
          
          {/* Action button */}
          <div className="text-center">
            <Button 
              size="lg" 
              onClick={handleCreateCV}
            >
              Use This Template
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          {/* Features */}
          <div className="mt-24">
            <h2 className="text-2xl font-semibold text-center mb-12">Why Choose Our Templates?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="glass-card p-6 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="mt-24">
            <h2 className="text-2xl font-semibold text-center mb-12">What Our Users Say</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="p-6 border border-border rounded-xl bg-card animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mr-4">
                      <span className="text-lg font-semibold">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="font-medium">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Final CTA */}
          <div className="mt-24 text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to Create Your Professional CV?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Select a template to begin and start impressing potential employers with a standout CV.
            </p>
            <Button 
              size="lg" 
              onClick={handleCreateCV}
            >
              Start Creating Your CV
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

// Features list
const features = [
  {
    title: 'ATS-Friendly Design',
    description: 'Our templates are designed to pass through Applicant Tracking Systems with ease.',
    icon: ThumbsUpIcon,
  },
  {
    title: 'Professional Appearance',
    description: 'Clean, elegant layouts that showcase your experience in the best possible light.',
    icon: EyeIcon,
  },
  {
    title: 'Easy to Customize',
    description: 'Fully customizable templates that you can tailor to your specific needs and industry.',
    icon: DownloadIcon,
  },
];

// Testimonials
const testimonials = [
  {
    name: 'Sarah Johnson',
    position: 'Marketing Manager',
    quote: 'The templates helped me create a professional CV that landed me interviews at top companies. The clean design really made my experience stand out.',
  },
  {
    name: 'Michael Chen',
    position: 'Software Developer',
    quote: 'I was struggling to showcase my technical skills effectively until I found these templates. The modern layout perfectly highlighted my abilities.',
  },
  {
    name: 'Emily Rodriguez',
    position: 'Healthcare Professional',
    quote: 'The professional template was perfect for the healthcare industry. I received compliments on my CV during interviews and secured my dream job.',
  },
  {
    name: 'James Wilson',
    position: 'Financial Analyst',
    quote: 'The classic template gave my CV the formal appearance needed in the finance sector. The structure made it easy to showcase my qualifications.',
  },
];

export default Templates;
