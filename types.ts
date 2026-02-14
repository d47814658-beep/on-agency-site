import { ReactNode } from 'react';

export interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon?: ReactNode;
}

export interface ServiceItem {
  title: string;
  icon: ReactNode;
}

export interface PricingFeature {
  text: string;
  included: boolean;
}