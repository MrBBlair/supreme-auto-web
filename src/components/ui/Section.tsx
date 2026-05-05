import { type HTMLAttributes, forwardRef } from 'react';
import { cn } from './Button'; // Reusing the cn utility

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  containerClass?: string;
  dark?: boolean;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, containerClass, dark = false, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          'py-16 md:py-24',
          dark ? 'bg-brand-black' : 'bg-brand-charcoal',
          className
        )}
        {...props}
      >
        <div className={cn('mx-auto max-w-7xl px-4 md:px-8', containerClass)}>
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = 'Section';
