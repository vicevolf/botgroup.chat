import React, { useState } from 'react';
import { cn } from '../lib/utils';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface AdSectionProps {
  isOpen: boolean;
  closeAd?: () => void;
}

interface AdBannerProps {
  show: boolean;
  closeAd: () => void;
}

const AdSection: React.FC<AdSectionProps> = ({ isOpen}) => {
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return (
    <div>
      
    </div>
  );
};

const AdBanner: React.FC<AdBannerProps> = ({ show, closeAd }) => {
  if (!show) return null;
  
  return (
      <div>       
        
    </div>
  );
};

const AdBannerMobile: React.FC<AdBannerProps> = ({ show, closeAd }) => {
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  if (!show) return null;

  return (
    <div>
      
    </div>
  );
};

export { AdSection, AdBanner, AdBannerMobile }; 