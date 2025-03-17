
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from 'lucide-react';

const CTASection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-20 container-padding">
      <div className="max-w-5xl mx-auto">
        <div className="glass-card p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent z-0"></div>
          <div className="relative z-10">
            <h2 className="heading-2 mb-4">Ready to Create Your Professional CV?</h2>
            <p className="paragraph mb-8 max-w-lg">
              Join thousands of job seekers who have successfully landed interviews with CVs created using our platform.
            </p>
            <Button 
              size="lg" 
              onClick={() => navigate('/create-cv')}
            >
              Get Started Now
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
