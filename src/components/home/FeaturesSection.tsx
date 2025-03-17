
import { SparklesIcon, FileTextIcon, LayoutTemplateIcon } from 'lucide-react';

const features = [
  {
    title: 'AI-Powered Suggestions',
    description: 'Get intelligent recommendations to improve your CV content and formatting.',
    icon: SparklesIcon,
  },
  {
    title: 'Multiple Export Formats',
    description: 'Download your CV in PDF, DOCX, or HTML formats for different submission requirements.',
    icon: FileTextIcon,
  },
  {
    title: 'Professional Templates',
    description: 'Choose from a variety of professionally designed templates for any industry.',
    icon: LayoutTemplateIcon,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 container-padding">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Why Choose CV Forge?</h2>
          <p className="paragraph max-w-2xl mx-auto">
            Our platform offers everything you need to create a professional CV that gets you noticed.
          </p>
        </div>
        
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
    </section>
  );
};

export default FeaturesSection;
