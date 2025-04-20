
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { CheckIcon } from 'lucide-react';

export type CVTemplateType = 'modern' | 'classic' | 'minimalist' | 'creative' | 'professional';

interface CVTemplateOption {
  id: CVTemplateType;
  name: string;
  description: string;
}

interface CVTemplatesProps {
  selectedTemplate: CVTemplateType;
  onSelectTemplate: (template: CVTemplateType) => void;
}

const templates: CVTemplateOption[] = [
  {
    id: 'modern',
    name: 'Modern',
    description: 'Clean and contemporary design with a focus on skills and experience.',
  },
  {
    id: 'classic',
    name: 'Classic',
    description: 'Traditional layout that works well for conservative industries.',
  },
  {
    id: 'minimalist',
    name: 'Minimalist',
    description: 'Simple and elegant design with plenty of white space.',
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Unique layout perfect for design and creative professionals.',
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Polished design ideal for executive and managerial positions.',
  },
];

// Sample data for template previews
const sampleCVData = {
  personalInfo: {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "(555) 123-4567",
    jobTitle: "Senior Developer",
    address: "123 Main St",
    city: "San Francisco",
    state: "CA",
    zipCode: "94105",
    country: "USA"
  }
};

const CVTemplates = ({ selectedTemplate, onSelectTemplate }: CVTemplatesProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
      {templates.map((template) => (
        <TemplateCard
          key={template.id}
          template={template}
          isSelected={selectedTemplate === template.id}
          onSelect={() => onSelectTemplate(template.id)}
        />
      ))}
    </div>
  );
};

interface TemplateCardProps {
  template: CVTemplateOption;
  isSelected: boolean;
  onSelect: () => void;
}

const TemplateCard = ({ template, isSelected, onSelect }: TemplateCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Generate preview for each template
  const renderTemplatePreview = (templateId: CVTemplateType) => {
    // This is a simplified version of the renderCVTemplate function from CVPreview.tsx
    // to show template preview
    switch (templateId) {
      case 'modern':
        return (
          <div className="bg-white h-full p-4 text-xs">
            <header className="mb-3">
              <h1 className="text-base font-bold text-primary">John Doe</h1>
              <p className="text-sm text-muted-foreground">Senior Developer</p>
              <div className="mt-2 text-[10px] text-muted-foreground">
                <p>john.doe@example.com</p>
                <p>(555) 123-4567</p>
                <p>San Francisco, CA USA</p>
              </div>
            </header>
            <section className="mb-3">
              <h2 className="text-sm font-semibold mb-1 border-b pb-1">Professional Summary</h2>
              <p className="text-[10px]">
                Experienced developer with a focus on web technologies...
              </p>
            </section>
            <section className="mb-3">
              <h2 className="text-sm font-semibold mb-1 border-b pb-1">Work Experience</h2>
              <div className="mb-1">
                <div className="flex justify-between">
                  <h3 className="text-[10px] font-medium">Senior Developer</h3>
                  <span className="text-[10px]">2020 - Present</span>
                </div>
              </div>
            </section>
          </div>
        );
        
      case 'classic':
        return (
          <div className="bg-white h-full p-4 text-xs">
            <header className="text-center mb-3 pb-2 border-b-2 border-primary">
              <h1 className="text-base font-bold uppercase tracking-wider">John Doe</h1>
              <p className="text-sm text-muted-foreground">Senior Developer</p>
              <div className="mt-2 text-[10px] text-muted-foreground">
                <p>john.doe@example.com | (555) 123-4567</p>
                <p>San Francisco, CA USA</p>
              </div>
            </header>
            <section className="mb-3">
              <h2 className="text-sm font-semibold mb-1">PROFESSIONAL SUMMARY</h2>
              <p className="text-[10px]">
                Experienced developer with a focus on web technologies...
              </p>
            </section>
          </div>
        );
        
      case 'minimalist':
        return (
          <div className="bg-white h-full p-4 text-xs">
            <header className="mb-3 flex justify-between items-end">
              <div>
                <h1 className="text-base font-light">John Doe</h1>
                <p className="text-sm text-muted-foreground">Senior Developer</p>
              </div>
              <div className="text-right text-[10px] text-muted-foreground">
                <p>john.doe@example.com</p>
                <p>(555) 123-4567</p>
              </div>
            </header>
            <section className="mb-3">
              <h2 className="text-sm font-semibold mb-1">Experience</h2>
              <p className="text-[10px]">
                Senior Developer | 2020 - Present
              </p>
            </section>
          </div>
        );
        
      case 'creative':
        return (
          <div className="bg-white h-full relative">
            <div className="h-6 bg-primary"></div>
            <div className="p-4 -mt-3">
              <header className="mb-3 bg-white p-2 rounded-lg shadow-sm">
                <h1 className="text-base font-bold mb-1">John Doe</h1>
                <p className="text-xs text-primary">Senior Developer</p>
                <div className="mt-2 flex gap-2 text-[10px] text-muted-foreground">
                  <p>john.doe@example.com</p>
                  <p>(555) 123-4567</p>
                </div>
              </header>
              <section className="mb-3">
                <h2 className="text-sm font-semibold mb-1">Experience</h2>
                <p className="text-[10px]">
                  Senior Developer | 2020 - Present
                </p>
              </section>
            </div>
          </div>
        );
        
      case 'professional':
        return (
          <div className="bg-white h-full flex text-xs">
            <div className="w-1/3 bg-primary/10 p-2">
              <header className="mb-3">
                <h1 className="text-sm font-bold text-primary">John Doe</h1>
                <p className="text-[10px] font-medium">Senior Developer</p>
                <div className="mt-2 text-[8px]">
                  <p>john.doe@example.com</p>
                  <p>(555) 123-4567</p>
                </div>
              </header>
              <section className="mb-2">
                <h2 className="text-[10px] font-semibold mb-1">Skills</h2>
                <div className="text-[8px]">Skill 1</div>
                <div className="text-[8px]">Skill 2</div>
              </section>
            </div>
            <div className="w-2/3 p-2">
              <section className="mb-2">
                <h2 className="text-sm font-semibold mb-1 text-primary">Experience</h2>
                <p className="text-[8px]">
                  Senior Developer | 2020 - Present
                </p>
              </section>
              <section>
                <h2 className="text-sm font-semibold mb-1 text-primary">Education</h2>
                <p className="text-[8px]">
                  Bachelor's Degree in Computer Science
                </p>
              </section>
            </div>
          </div>
        );
        
      default:
        return (
          <div className="bg-white h-full p-4 text-xs">
            <h1 className="text-base font-bold">John Doe</h1>
            <p className="text-sm">Senior Developer</p>
          </div>
        );
    }
  };
  
  return (
    <div
      className={cn(
        'relative rounded-xl overflow-hidden transition-all duration-300 transform',
        isSelected ? 'ring-4 ring-primary/50 scale-[1.02]' : 'ring-1 ring-border hover:ring-primary/30',
        isHovered && !isSelected ? 'scale-[1.01]' : ''
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onSelect}
    >
      {/* Selected badge */}
      {isSelected && (
        <div className="absolute top-3 right-3 bg-primary text-primary-foreground rounded-full p-1 z-10">
          <CheckIcon className="w-4 h-4" />
        </div>
      )}
      
      {/* Template preview with actual template design */}
      <div className="aspect-[3/4] bg-muted">
        <div className="w-full h-full overflow-hidden border border-muted">
          {renderTemplatePreview(template.id)}
        </div>
      </div>
      
      {/* Template info */}
      <div className="p-4 bg-card">
        <h3 className="font-semibold">{template.name}</h3>
        <p className="text-sm text-muted-foreground mt-1">{template.description}</p>
      </div>
      
      {/* Hover overlay */}
      <div
        className={cn(
          'absolute inset-0 bg-primary/10 backdrop-blur-sm flex items-center justify-center opacity-0 transition-opacity duration-300',
          (isHovered || isSelected) && 'opacity-100'
        )}
      >
        <div
          className={cn(
            'bg-background py-2 px-4 rounded-full font-medium text-sm transition-all duration-300',
            isSelected ? 'bg-primary text-primary-foreground' : 'bg-background text-foreground'
          )}
        >
          {isSelected ? 'Selected' : 'Select Template'}
        </div>
      </div>
    </div>
  );
};

export default CVTemplates;
