
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { DownloadIcon, EyeIcon } from 'lucide-react';
import type { CVTemplateType } from './CVTemplates';

interface CVData {
  personalInfo?: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    jobTitle: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  // We'll add more sections later as needed
}

interface CVPreviewProps {
  data: CVData;
  template: CVTemplateType;
  className?: string;
}

const CVPreview = ({ data, template, className }: CVPreviewProps) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };
  
  const downloadCV = () => {
    // This would be implemented with a real PDF generation library
    console.log('Downloading CV...');
    alert('CV download functionality will be implemented soon!');
  };

  return (
    <div className={cn(
      'relative',
      isFullScreen ? 'fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-8' : '',
      className
    )}>
      {/* Preview controls */}
      <div className={cn(
        'absolute z-10 top-4 right-4 flex space-x-2',
        isFullScreen ? 'top-8 right-8' : ''
      )}>
        <Button
          variant="outline"
          size="icon"
          onClick={toggleFullScreen}
          className="bg-background/90 backdrop-blur-sm"
        >
          <EyeIcon className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={downloadCV}
          className="bg-background/90 backdrop-blur-sm"
        >
          <DownloadIcon className="w-4 h-4" />
        </Button>
      </div>
      
      {/* Loading state */}
      {isLoading ? (
        <div className="w-full h-[600px] bg-muted/30 rounded-lg flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-24 w-24 bg-muted-foreground/20 rounded-lg mb-4"></div>
            <div className="h-3 w-32 bg-muted-foreground/20 rounded"></div>
          </div>
        </div>
      ) : (
        <div 
          className={cn(
            'bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300',
            isFullScreen ? 'w-full max-w-3xl h-[calc(100%-100px)]' : 'w-full h-[600px]'
          )}
        >
          {/* CV Content for different templates */}
          {renderCVTemplate(data, template)}
          
          {/* Close button in fullscreen mode */}
          {isFullScreen && (
            <Button
              variant="outline"
              className="absolute top-4 right-4"
              onClick={toggleFullScreen}
            >
              Close Preview
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

// Render different templates based on selected type
const renderCVTemplate = (data: CVData, template: CVTemplateType) => {
  const { personalInfo } = data;
  
  // Common elements that would be used across templates
  const name = personalInfo ? `${personalInfo.firstName} ${personalInfo.lastName}` : 'Your Name';
  const jobTitle = personalInfo?.jobTitle || 'Professional Title';
  const contact = personalInfo ? (
    <>
      <p>{personalInfo.email}</p>
      <p>{personalInfo.phone}</p>
      <p>
        {personalInfo.city}, {personalInfo.state} {personalInfo.country}
      </p>
    </>
  ) : (
    <>
      <p>email@example.com</p>
      <p>(555) 123-4567</p>
      <p>City, State Country</p>
    </>
  );

  // Placeholder sections (these would be filled with real data later)
  const placeholderSections = (
    <>
      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-3 border-b pb-1">Professional Summary</h2>
        <p className="text-sm">
          Versatile and results-driven professional with a proven track record of success. 
          Skilled in problem-solving and collaboration across diverse teams.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-3 border-b pb-1">Work Experience</h2>
        <div className="mb-3">
          <div className="flex justify-between">
            <h3 className="font-medium">Senior Position</h3>
            <span className="text-sm">2020 - Present</span>
          </div>
          <p className="text-sm font-medium">Company Name</p>
          <ul className="text-sm list-disc pl-5 mt-1">
            <li>Led cross-functional teams in delivering key projects</li>
            <li>Improved operational efficiency by 20% through process optimization</li>
            <li>Managed key client relationships resulting in contract renewals</li>
          </ul>
        </div>
        <div>
          <div className="flex justify-between">
            <h3 className="font-medium">Previous Role</h3>
            <span className="text-sm">2017 - 2020</span>
          </div>
          <p className="text-sm font-medium">Previous Company</p>
          <ul className="text-sm list-disc pl-5 mt-1">
            <li>Developed and implemented strategies that increased revenue</li>
            <li>Collaborated with stakeholders to ensure project success</li>
          </ul>
        </div>
      </section>
      
      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-3 border-b pb-1">Education</h2>
        <div className="flex justify-between">
          <h3 className="font-medium">Bachelor's Degree in Field</h3>
          <span className="text-sm">2013 - 2017</span>
        </div>
        <p className="text-sm">University Name</p>
      </section>
      
      <section>
        <h2 className="text-lg font-semibold mb-3 border-b pb-1">Skills</h2>
        <div className="flex flex-wrap gap-2">
          <span className="bg-secondary text-xs px-2 py-1 rounded">Skill 1</span>
          <span className="bg-secondary text-xs px-2 py-1 rounded">Skill 2</span>
          <span className="bg-secondary text-xs px-2 py-1 rounded">Skill 3</span>
          <span className="bg-secondary text-xs px-2 py-1 rounded">Skill 4</span>
          <span className="bg-secondary text-xs px-2 py-1 rounded">Skill 5</span>
          <span className="bg-secondary text-xs px-2 py-1 rounded">Skill 6</span>
        </div>
      </section>
    </>
  );

  // Render template based on selection
  switch (template) {
    case 'modern':
      return (
        <div className="h-full overflow-auto p-8">
          <header className="mb-6">
            <h1 className="text-3xl font-bold text-primary">{name}</h1>
            <p className="text-xl text-muted-foreground">{jobTitle}</p>
            <div className="mt-4 text-sm text-muted-foreground">
              {contact}
            </div>
          </header>
          {placeholderSections}
        </div>
      );
      
    case 'classic':
      return (
        <div className="h-full overflow-auto p-8">
          <header className="text-center mb-8 pb-4 border-b-2 border-primary">
            <h1 className="text-3xl font-bold uppercase tracking-wider">{name}</h1>
            <p className="text-lg text-muted-foreground mt-1">{jobTitle}</p>
            <div className="mt-4 text-sm text-muted-foreground">
              {contact}
            </div>
          </header>
          {placeholderSections}
        </div>
      );
      
    case 'minimalist':
      return (
        <div className="h-full overflow-auto p-8">
          <header className="mb-8 flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-light">{name}</h1>
              <p className="text-lg text-muted-foreground">{jobTitle}</p>
            </div>
            <div className="text-right text-sm text-muted-foreground">
              {contact}
            </div>
          </header>
          {placeholderSections}
        </div>
      );
      
    case 'creative':
      return (
        <div className="h-full overflow-auto relative">
          <div className="h-24 bg-primary"></div>
          <div className="p-8 -mt-12">
            <header className="mb-8 bg-white p-6 rounded-lg shadow-md">
              <h1 className="text-3xl font-bold mb-1">{name}</h1>
              <p className="text-lg text-primary">{jobTitle}</p>
              <div className="mt-4 flex gap-4 text-sm text-muted-foreground">
                {contact}
              </div>
            </header>
            {placeholderSections}
          </div>
        </div>
      );
      
    case 'professional':
      return (
        <div className="h-full overflow-auto flex">
          <div className="w-1/3 bg-primary/10 p-6">
            <header className="mb-8">
              <h1 className="text-2xl font-bold text-primary">{name}</h1>
              <p className="text-base font-medium">{jobTitle}</p>
              <div className="mt-4 text-sm">
                {contact}
              </div>
            </header>
            <section className="mb-6">
              <h2 className="text-base font-semibold mb-3">Skills</h2>
              <div className="space-y-2">
                <div className="text-sm">Skill 1</div>
                <div className="text-sm">Skill 2</div>
                <div className="text-sm">Skill 3</div>
                <div className="text-sm">Skill 4</div>
                <div className="text-sm">Skill 5</div>
              </div>
            </section>
            <section>
              <h2 className="text-base font-semibold mb-3">Languages</h2>
              <div className="space-y-2">
                <div className="text-sm">Language 1 - Fluent</div>
                <div className="text-sm">Language 2 - Intermediate</div>
              </div>
            </section>
          </div>
          <div className="w-2/3 p-6">
            <section className="mb-6">
              <h2 className="text-lg font-semibold mb-3 text-primary">Professional Summary</h2>
              <p className="text-sm">
                Versatile and results-driven professional with a proven track record of success. 
                Skilled in problem-solving and collaboration across diverse teams.
              </p>
            </section>
            <section className="mb-6">
              <h2 className="text-lg font-semibold mb-3 text-primary">Work Experience</h2>
              <div className="mb-3">
                <div className="flex justify-between">
                  <h3 className="font-medium">Senior Position</h3>
                  <span className="text-sm">2020 - Present</span>
                </div>
                <p className="text-sm font-medium">Company Name</p>
                <ul className="text-sm list-disc pl-5 mt-1">
                  <li>Led cross-functional teams in delivering key projects</li>
                  <li>Improved operational efficiency by 20% through process optimization</li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between">
                  <h3 className="font-medium">Previous Role</h3>
                  <span className="text-sm">2017 - 2020</span>
                </div>
                <p className="text-sm font-medium">Previous Company</p>
                <ul className="text-sm list-disc pl-5 mt-1">
                  <li>Developed and implemented strategies that increased revenue</li>
                  <li>Collaborated with stakeholders to ensure project success</li>
                </ul>
              </div>
            </section>
            <section>
              <h2 className="text-lg font-semibold mb-3 text-primary">Education</h2>
              <div className="flex justify-between">
                <h3 className="font-medium">Bachelor's Degree in Field</h3>
                <span className="text-sm">2013 - 2017</span>
              </div>
              <p className="text-sm">University Name</p>
            </section>
          </div>
        </div>
      );
      
    default:
      return (
        <div className="h-full overflow-auto p-8">
          <header className="mb-6">
            <h1 className="text-3xl font-bold">{name}</h1>
            <p className="text-xl text-muted-foreground">{jobTitle}</p>
            <div className="mt-4 text-sm text-muted-foreground">
              {contact}
            </div>
          </header>
          {placeholderSections}
        </div>
      );
  }
};

export default CVPreview;
