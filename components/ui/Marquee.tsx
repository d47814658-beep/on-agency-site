import React from 'react';
import { cn } from '../../lib/utils';

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
}

export const Marquee: React.FC<MarqueeProps> = ({ 
  children, 
  className, 
  reverse = false, 
  pauseOnHover = false 
}) => {
  return (
    <div className={cn("flex w-full overflow-hidden", className)}>
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-4 py-4 animate-scroll",
          reverse && "direction-reverse",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {children}
        {children} 
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-4 py-4 animate-scroll",
          reverse && "direction-reverse",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
};