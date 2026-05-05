import { type HTMLAttributes, forwardRef } from 'react';
import { cn } from './Button';

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl border border-gray-800 bg-brand-black p-6 shadow-sm transition-all hover:border-brand-red hover:shadow-md hover:shadow-brand-red/10',
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';
