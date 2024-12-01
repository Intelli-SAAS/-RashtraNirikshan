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

export const ministryData = {
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
        title: 'Passport Services',
        description: 'Apply for or renew your passport',
        link: '/services/passport'
      },
      {
        title: 'Visa Information',
        description: 'Visa requirements and applications',
        link: '/services/visa'
      },
      {
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
        value: '1800-11-3090'
      },
      {
        type: 'Email',
        value: 'help@mea.gov.in'
      }
    ],
    socialMedia: {
      twitter: 'https://twitter.com/MEAIndia',
      facebook: 'https://facebook.com/MEAIndia'
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
        title: 'Direct Tax Services',
        description: 'Income tax filing and management',
        link: '/services/tax'
      },
      {
        title: 'GST Portal',
        description: 'GST registration and returns',
        link: '/services/gst'
      }
    ],
    newsUpdates: [
      {
        date: '2024-02-15',
        title: 'Union Budget 2024-25 Highlights',
        category: 'Budget',
        description: 'Key announcements and allocations'
      }
    ],
    keyInitiatives: [
      'Digital India Financial Services',
      'Direct Benefit Transfer',
      'Jan Dhan Yojana'
    ],
    contacts: [
      {
        type: 'Helpline',
        value: '1800-11-5000'
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
        title: 'Passenger Reservations',
        description: 'Book train tickets and passes',
        link: '/services/booking'
      },
      {
        title: 'Freight Services',
        description: 'Cargo and goods transport',
        link: '/services/freight'
      }
    ],
    newsUpdates: [
      {
        date: '2024-02-15',
        title: 'New Vande Bharat Express Routes',
        category: 'Infrastructure',
        description: 'Launch of additional premium routes'
      }
    ],
    keyInitiatives: [
      'National Rail Plan Vision 2024',
      'Station Redevelopment Program',
      'High-Speed Rail Projects'
    ],
    contacts: [
      {
        type: 'Rail Madad',
        value: '139'
      }
    ],
    socialMedia: {
      twitter: 'https://twitter.com/RailMinIndia'
    }
  }
};