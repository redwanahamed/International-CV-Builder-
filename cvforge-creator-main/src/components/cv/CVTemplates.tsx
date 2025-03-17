import { useState } from 'react';
import { cn } from '@/lib/utils';
import { CheckIcon } from 'lucide-react';

export type CVTemplateType = 'modern' | 'classic' | 'minimalist' | 'creative' | 'professional';

interface CVTemplateOption {
  id: CVTemplateType;
  name: string;
  description: string;
  imageSrc: string;
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
    imageSrc: '/images/templates/modern-template.jpg',
  },
  {
    id: 'classic',
    name: 'Classic',
    description: 'Traditional layout that works well for conservative industries.',
    imageSrc: '/images/templates/classic-template.jpg',
  },
  {
    id: 'minimalist',
    name: 'Minimalist',
    description: 'Simple and elegant design with plenty of white space.',
    imageSrc: '/images/templates/minimalist-template.jpg',
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Unique layout perfect for design and creative professionals.',
    imageSrc: '/images/templates/creative-template.jpg',
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Polished design ideal for executive and managerial positions.',
    imageSrc: '/images/templates/professional-template.jpg',
  },
];

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
  
  // Fallback image URLs to use if the specified images don't exist in the public folder
  const fallbackImages = {
    modern: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?q=80&w=300&auto=format&fit=crop',
    classic: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=300&auto=format&fit=crop',
    minimalist: 'https://images.unsplash.com/photo-1586282391129-76a6df230234?q=80&w=300&auto=format&fit=crop',
    creative: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=300&auto=format&fit=crop',
    professional: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=300&auto=format&fit=crop'
  };
  
  // Use fallback image when local file isn't available
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.currentTarget;
    img.src = fallbackImages[template.id as keyof typeof fallbackImages];
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
        <div className="absolute top-3 right-3 bg-primary text-primary-foreground rounded-full p-1">
          <CheckIcon className="w-4 h-4" />
        </div>
      )}
      
      {/* Template preview image */}
      <div className="aspect-[3/4] bg-muted">
        <img
          src={template.imageSrc}
          alt={`${template.name} template preview`}
          className="w-full h-full object-cover"
          onError={handleImageError}
        />
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
