
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CVForm from '@/components/cv/CVForm';
import CVPreview from '@/components/cv/CVPreview';
import ChatButton from '@/components/chat/ChatButton';
import type { CVTemplateType } from '@/components/cv/CVTemplates';
import { useToast } from '@/components/ui/use-toast';

interface CVData {
  personalInfo?: any;
  education?: any[];
  experience?: any[];
  skills?: string[];
  selectedTemplate?: CVTemplateType;
}

const CreateCV = () => {
  const { toast } = useToast();
  // Get the template parameter from the URL if it exists
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const templateParam = searchParams.get('template') as CVTemplateType | null;
  
  const [cvData, setCvData] = useState<CVData>({
    selectedTemplate: templateParam || 'modern'
  });
  
  // Add an effect to show a toast when the component mounts
  useEffect(() => {
    console.log("CreateCV component mounted");
    toast({
      title: "CV Builder Loaded",
      description: "Start building your professional CV!",
      duration: 3000,
    });
  }, [toast]);
  
  // Update the template when URL parameter changes
  useEffect(() => {
    if (templateParam) {
      setCvData(prev => ({
        ...prev,
        selectedTemplate: templateParam
      }));
    }
  }, [templateParam]);
  
  const handleUpdateCV = (data: CVData) => {
    console.log("CV data updated:", data);
    setCvData(data);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      
      <main className="flex-grow pt-24 md:pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">Create Your CV</h1>
            <p className="text-muted-foreground">
              Follow the steps below to create a professional CV that stands out.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left side: Form */}
            <div>
              <CVForm onUpdateCV={handleUpdateCV} initialTemplate={cvData.selectedTemplate} />
            </div>
            
            {/* Right side: Preview */}
            <div className="sticky top-24">
              <div className="bg-card rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Live Preview</h2>
                <CVPreview 
                  data={cvData} 
                  template={cvData.selectedTemplate || 'modern'} 
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <ChatButton />
      <Footer />
    </div>
  );
};

export default CreateCV;
