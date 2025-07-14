import { useEffect, useRef, useState } from "react";

interface InViewAnimationProps {
  children: React.ReactNode;
  animation?: string;
  delay?: number;
  className?: string;
}

const InViewAnimation = ({ 
  children, 
  animation = "animate-fade-in-up", 
  delay = 0,
  className = ""
}: InViewAnimationProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div 
      ref={elementRef} 
      className={`${className} ${isVisible ? animation : 'opacity-0'}`}
    >
      {children}
    </div>
  );
};

export default InViewAnimation;