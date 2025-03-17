
import React from 'react';
import { cn } from '@/lib/utils';
import { CheckIcon } from 'lucide-react';

interface StepIndicatorProps {
  steps: string[];
  currentStep: number;
  className?: string;
}

const StepIndicator = ({ 
  steps, 
  currentStep, 
  className 
}: StepIndicatorProps) => {
  return (
    <div className={cn(
      'flex items-center w-full justify-between mb-8',
      className
    )}>
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isCurrent = index === currentStep;
        
        return (
          <React.Fragment key={index}>
            {/* Step circle */}
            <div className="flex flex-col items-center">
              <div 
                className={cn(
                  'flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-500 ease-out',
                  isCompleted ? 'bg-primary border-primary text-primary-foreground' : 
                  isCurrent ? 'border-primary text-primary' : 
                  'border-muted-foreground/30 text-muted-foreground'
                )}
              >
                {isCompleted ? (
                  <CheckIcon className="w-5 h-5" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              <span 
                className={cn(
                  'text-xs mt-2 font-medium transition-colors',
                  isCurrent ? 'text-primary' : 
                  isCompleted ? 'text-foreground' : 
                  'text-muted-foreground/70'
                )}
              >
                {step}
              </span>
            </div>
            
            {/* Connector line */}
            {index < steps.length - 1 && (
              <div 
                className={cn(
                  'flex-1 h-0.5 mx-2',
                  index < currentStep ? 'bg-primary' : 'bg-muted-foreground/30'
                )}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StepIndicator;
