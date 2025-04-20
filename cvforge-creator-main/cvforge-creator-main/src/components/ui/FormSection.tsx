
import React from 'react';
import { cn } from '@/lib/utils';

interface FormSectionProps {
  title: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
}

const FormSection = ({ 
  title, 
  description, 
  className, 
  children 
}: FormSectionProps) => {
  return (
    <div className={cn(
      'w-full animate-fade-in',
      className
    )}>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
        {description && (
          <p className="text-muted-foreground text-sm">{description}</p>
        )}
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
};

export default FormSection;
