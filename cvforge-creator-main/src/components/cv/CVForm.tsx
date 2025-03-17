
import { useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import StepIndicator from '@/components/ui/StepIndicator';
import PersonalInfoForm from './PersonalInfoForm';
import CVTemplates, { CVTemplateType } from './CVTemplates';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeftIcon, 
  ArrowRightIcon, 
  CheckIcon,
  SparklesIcon,
  DownloadIcon
} from 'lucide-react';

const steps = [
  'Personal Info',
  'Education',
  'Experience',
  'Skills',
  'Template',
  'Finalize'
];

interface CVFormData {
  personalInfo?: any;
  education?: any[];
  experience?: any[];
  skills?: string[];
  selectedTemplate?: CVTemplateType;
}

interface CVFormProps {
  onUpdateCV: (data: CVFormData) => void;
  initialTemplate?: CVTemplateType;
}

const CVForm = ({ onUpdateCV, initialTemplate = 'modern' }: CVFormProps) => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<CVFormData>({
    education: [],
    experience: [],
    skills: [],
    selectedTemplate: initialTemplate
  });
  
  // Update formData when initialTemplate changes
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      selectedTemplate: initialTemplate
    }));
  }, [initialTemplate]);
  
  // This effect updates the parent component with the latest CV data
  useEffect(() => {
    onUpdateCV(formData);
  }, [formData, onUpdateCV]);

  const handlePersonalInfoComplete = (data: any) => {
    setFormData(prev => ({ ...prev, personalInfo: data }));
    goToNextStep();
    
    toast({
      title: "Personal information saved",
      description: "We've saved your personal information.",
      duration: 3000,
    });
  };
  
  const handleSelectTemplate = (template: CVTemplateType) => {
    setFormData(prev => ({ ...prev, selectedTemplate: template }));
  };
  
  const goToNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(current => current + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(current => current - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  // For AI optimization feature (placeholder for now)
  const optimizeWithAI = () => {
    toast({
      title: "AI Optimization",
      description: "AI is analyzing your CV to suggest improvements...",
      duration: 3000,
    });
    
    // Simulate AI processing
    setTimeout(() => {
      toast({
        title: "AI Suggestions Ready",
        description: "We've analyzed your CV and have some suggestions to improve it!",
        duration: 5000,
      });
    }, 3000);
  };
  
  // For download feature (placeholder for now)
  const downloadCV = () => {
    toast({
      title: "Preparing Download",
      description: "Generating your CV for download...",
      duration: 3000,
    });
    
    // Would implement actual PDF generation here
    setTimeout(() => {
      toast({
        title: "CV Ready",
        description: "Your CV has been generated and is ready to download!",
        duration: 5000,
      });
    }, 2000);
  };

  // Render form step based on current step
  const renderStep = () => {
    switch (currentStep) {
      case 0: // Personal Info
        return (
          <PersonalInfoForm 
            onComplete={handlePersonalInfoComplete} 
            defaultValues={formData.personalInfo}
          />
        );
      case 1: // Education (placeholder for now)
      case 2: // Experience (placeholder for now) 
      case 3: // Skills (placeholder for now)
        return (
          <div className="min-h-[400px] flex flex-col items-center justify-center p-8 bg-muted/20 rounded-lg animate-fade-in">
            <p className="text-lg text-muted-foreground mb-4">
              This section will be implemented in the next version.
            </p>
            <Button onClick={goToNextStep}>Continue to Next Step</Button>
          </div>
        );
      case 4: // Template Selection
        return (
          <div className="animate-fade-in">
            <h3 className="text-xl font-semibold mb-4">Choose a Template</h3>
            <p className="text-muted-foreground mb-6">
              Select a template that best represents your professional style.
            </p>
            <CVTemplates
              selectedTemplate={formData.selectedTemplate || initialTemplate}
              onSelectTemplate={handleSelectTemplate}
            />
            <div className="flex justify-end mt-8">
              <Button
                variant="outline"
                className="mr-4"
                onClick={goToPreviousStep}
              >
                <ArrowLeftIcon className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button onClick={goToNextStep}>
                Continue
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        );
      case 5: // Finalize
        return (
          <div className="animate-fade-in">
            <div className="bg-muted/20 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                Your CV is Ready!
              </h3>
              <p className="text-muted-foreground mb-6">
                Congratulations! Your CV is now ready to download. You can also use our AI to optimize it further.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <Button 
                  className="flex-1"
                  onClick={downloadCV}
                >
                  <DownloadIcon className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
                <Button 
                  variant="outline"
                  className="flex-1"
                  onClick={optimizeWithAI}
                >
                  <SparklesIcon className="mr-2 h-4 w-4" />
                  Optimize with AI
                </Button>
              </div>
            </div>
            
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={goToPreviousStep}
              >
                <ArrowLeftIcon className="mr-2 h-4 w-4" />
                Back to Templates
              </Button>
              <Button 
                variant="default"
                onClick={() => setCurrentStep(0)}
              >
                Create Another CV
              </Button>
            </div>
          </div>
        );
      default:
        return <div>Unknown step</div>;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <StepIndicator steps={steps} currentStep={currentStep} className="mb-12" />
      {renderStep()}
    </div>
  );
};

export default CVForm;
