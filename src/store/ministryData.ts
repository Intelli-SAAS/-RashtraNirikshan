import { 
  Globe2, 
  Shield, 
  Train, 
  Home, 
  Briefcase, 
  GraduationCap, 
  Heart, 
  Leaf, 
  Factory, 
  Wifi,
  Phone,
  Mail,
  IndianRupee,
  Building2,
  Users,
  FileText,
  Plane,
  Truck,
  Hammer,
  Wheat,
  Droplets,
  Zap,
  Microscope,
  Scale
} from 'lucide-react';

export interface NewsUpdate {
  date: string;
  title: string;
  category: string;
  description?: string;
}

export interface Service {
  icon: any;
  title: string;
  description: string;
  link: string;
}

export interface Contact {
  type: string;
  value: string;
  icon: any;
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

export const ministryData: Record<string, MinistryData> = {
  'external-affairs': {
    id: 'external-affairs',
    name: 'Ministry of External Affairs',
    description: 'Representing India\'s diplomatic interests and serving Indian citizens worldwide',
    minister: 'Dr. S. Jaishankar',
    budget: '₹22,154 crore',
    activeProjects: 156,
    employees: 4500,
    services: [
      {
        icon: Globe2,
        title: 'Passport Services',
        description: 'Apply for or renew your passport',
        link: '/services/passport'
      },
      {
        icon: Plane,
        title: 'Visa Information',
        description: 'Visa requirements and applications',
        link: '/services/visa'
      },
      {
        icon: Shield,
        title: 'Overseas Citizens',
        description: 'OCI card and related services',
        link: '/services/oci'
      }
    ],
    newsUpdates: [
      {
        date: '2024-02-15',
        title: 'India-UAE Strategic Partnership Meeting',
        category: 'Bilateral Relations',
        description: 'Strengthening economic and strategic ties with UAE'
      },
      {
        date: '2024-02-14',
        title: 'New Visa Processing Centers Opened',
        category: 'Announcements',
        description: 'Five new centers established in key countries'
      },
      {
        date: '2024-02-13',
        title: 'India-EU Strategic Partnership',
        category: 'International Relations',
        description: 'Joint declaration on trade and technology'
      }
    ],
    keyInitiatives: [
      'Vaccine Maitri Initiative',
      'Act East Policy',
      'Neighborhood First Policy',
      'Indian Technical & Economic Cooperation'
    ],
    contacts: [
      {
        type: 'Emergency Helpline',
        value: '1800-11-3090',
        icon: Phone
      },
      {
        type: 'Email',
        value: 'help@mea.gov.in',
        icon: Mail
      }
    ],
    socialMedia: {
      twitter: 'https://twitter.com/MEAIndia',
      facebook: 'https://facebook.com/MEAIndia',
      instagram: 'https://instagram.com/meaindia'
    }
  },
  'finance': {
    id: 'finance',
    name: 'Ministry of Finance',
    description: 'Managing India\'s economy, financial policies, and public resources',
    minister: 'Smt. Nirmala Sitharaman',
    budget: '₹11.11 lakh crore',
    activeProjects: 198,
    employees: 6200,
    services: [
      {
        icon: IndianRupee,
        title: 'Direct Tax Services',
        description: 'Income tax filing and management',
        link: '/services/tax'
      },
      {
        icon: Briefcase,
        title: 'GST Portal',
        description: 'GST registration and returns',
        link: '/services/gst'
      },
      {
        icon: Building2,
        title: 'Public Finance',
        description: 'Government schemes and funding',
        link: '/services/finance'
      }
    ],
    newsUpdates: [
      {
        date: '2024-02-15',
        title: 'Union Budget 2024-25 Highlights',
        category: 'Budget',
        description: 'Key announcements and allocations'
      },
      {
        date: '2024-02-14',
        title: 'GST Council Meeting Decisions',
        category: 'Taxation',
        description: 'New tax rates and policy changes'
      }
    ],
    keyInitiatives: [
      'Digital India Financial Services',
      'Direct Benefit Transfer',
      'Jan Dhan Yojana',
      'National Monetisation Pipeline'
    ],
    contacts: [
      {
        type: 'Helpline',
        value: '1800-11-5000',
        icon: Phone
      },
      {
        type: 'Email',
        value: 'support@finmin.gov.in',
        icon: Mail
      }
    ],
    socialMedia: {
      twitter: 'https://twitter.com/FinMinIndia'
    }
  },
  'railways': {
    id: 'railways',
    name: 'Ministry of Railways',
    description: 'Managing India\'s railway network and infrastructure development',
    minister: 'Shri Ashwini Vaishnaw',
    budget: '₹2.40 lakh crore',
    activeProjects: 486,
    employees: 12500,
    services: [
      {
        icon: Train,
        title: 'Passenger Reservations',
        description: 'Book train tickets and passes',
        link: '/services/booking'
      },
      {
        icon: Truck,
        title: 'Freight Services',
        description: 'Cargo and goods transport',
        link: '/services/freight'
      },
      {
        icon: FileText,
        title: 'Railway Recruitment',
        description: 'Career opportunities in railways',
        link: '/services/careers'
      }
    ],
    newsUpdates: [
      {
        date: '2024-02-15',
        title: 'New Vande Bharat Express Routes',
        category: 'Infrastructure',
        description: 'Launch of additional premium routes'
      },
      {
        date: '2024-02-14',
        title: 'Railway Station Modernization',
        category: 'Development',
        description: 'Smart upgrades for 50 stations'
      }
    ],
    keyInitiatives: [
      'National Rail Plan Vision 2024',
      'Station Redevelopment Program',
      'High-Speed Rail Projects',
      'Green Railways Initiative'
    ],
    contacts: [
      {
        type: 'Rail Madad',
        value: '139',
        icon: Phone
      },
      {
        type: 'Email',
        value: 'contact@indianrail.gov.in',
        icon: Mail
      }
    ],
    socialMedia: {
      twitter: 'https://twitter.com/RailMinIndia'
    }
  },
  'agriculture': {
    id: 'agriculture',
    name: 'Ministry of Agriculture & Farmers Welfare',
    description: 'Promoting agricultural growth and farmers\' welfare',
    minister: 'Shri Narendra Singh Tomar',
    budget: '₹1.25 lakh crore',
    activeProjects: 324,
    employees: 3800,
    services: [
      {
        icon: Wheat,
        title: 'PM-KISAN',
        description: 'Direct benefit transfers for farmers',
        link: '/services/pmkisan'
      },
      {
        icon: Droplets,
        title: 'Irrigation Schemes',
        description: 'Water management programs',
        link: '/services/irrigation'
      },
      {
        icon: Shield,
        title: 'Crop Insurance',
        description: 'Pradhan Mantri Fasal Bima Yojana',
        link: '/services/insurance'
      }
    ],
    newsUpdates: [
      {
        date: '2024-02-15',
        title: 'PM-KISAN 15th Installment Released',
        category: 'Welfare',
        description: 'Benefits transferred to 11.5 crore farmers'
      },
      {
        date: '2024-02-14',
        title: 'New Agricultural Technologies',
        category: 'Innovation',
        description: 'Digital farming initiatives launched'
      }
    ],
    keyInitiatives: [
      'PM-KISAN Scheme',
      'Soil Health Card Scheme',
      'e-NAM Platform',
      'Kisan Credit Card'
    ],
    contacts: [
      {
        type: 'Kisan Call Centre',
        value: '1800-180-1551',
        icon: Phone
      },
      {
        type: 'Email',
        value: 'feedback@agri.gov.in',
        icon: Mail
      }
    ],
    socialMedia: {
      twitter: 'https://twitter.com/AgriGoI'
    }
  },
  'health': {
    id: 'health',
    name: 'Ministry of Health & Family Welfare',
    description: 'Ensuring public health and medical excellence',
    minister: 'Dr. Mansukh Mandaviya',
    budget: '₹89,155 crore',
    activeProjects: 276,
    employees: 4200,
    services: [
      {
        icon: Heart,
        title: 'Ayushman Bharat',
        description: 'Healthcare coverage scheme',
        link: '/services/ayushman'
      },
      {
        icon: Microscope,
        title: 'COVID-19 Updates',
        description: 'Latest guidelines and statistics',
        link: '/services/covid'
      },
      {
        icon: Users,
        title: 'Health Programs',
        description: 'National health missions',
        link: '/services/programs'
      }
    ],
    newsUpdates: [
      {
        date: '2024-02-15',
        title: 'New AIIMS Institutes Announced',
        category: 'Infrastructure',
        description: 'Expansion of medical education'
      },
      {
        date: '2024-02-14',
        title: 'Health Technology Assessment',
        category: 'Innovation',
        description: 'Digital health initiatives'
      }
    ],
    keyInitiatives: [
      'Ayushman Bharat Digital Mission',
      'PM Jan Arogya Yojana',
      'National Digital Health Mission',
      'e-Sanjeevani Telemedicine'
    ],
    contacts: [
      {
        type: 'Health Helpline',
        value: '1800-11-6666',
        icon: Phone
      },
      {
        type: 'Email',
        value: 'helpdesk@nhp.gov.in',
        icon: Mail
      }
    ],
    socialMedia: {
      twitter: 'https://twitter.com/MoHFW_INDIA'
    }
  }
};

export const getMinistryData = (id: string): MinistryData | undefined => {
  return ministryData[id];
};