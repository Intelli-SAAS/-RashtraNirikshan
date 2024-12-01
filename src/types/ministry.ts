import { LucideIcon } from 'lucide-react';

export interface NewsUpdate {
  date: string;
  title: string;
  category: string;
  description?: string;
}

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

export interface Contact {
  type: string;
  value: string;
  icon: LucideIcon;
}

export interface MinistryData {
  id: string;
  name: string;
  description: string;
  minister: string;
  budget: string;
  activeProjects: number;
  employees: number;
  services: Service[];
  newsUpdates: NewsUpdate[];
  keyInitiatives: string[];
  contacts: Contact[];
  socialMedia: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
}