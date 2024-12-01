import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
  Building2
} from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';

const ministries = [
  {
    category: "Infrastructure & Transport",
    items: [
      {
        name: "Ministry of Railways",
        icon: Train,
        link: "/ministry/railways",
        description: "Indian Railways and rail infrastructure development",
        budget: "₹2.40 lakh crore (2024-25)",
        projects: 486
      },
      {
        name: "Ministry of Road Transport & Highways",
        icon: Home,
        link: "/ministry/road-transport",
        description: "National highways and road infrastructure",
        budget: "₹2.78 lakh crore (2024-25)",
        projects: 892
      }
    ]
  },
  {
    category: "External Affairs & Defense",
    items: [
      {
        name: "Ministry of External Affairs",
        icon: Globe2,
        link: "/ministry/external-affairs",
        description: "International relations and diplomatic affairs",
        budget: "₹22,154 crore (2024-25)",
        projects: 156
      },
      {
        name: "Ministry of Defence",
        icon: Shield,
        link: "/ministry/defence",
        description: "National defense and military affairs",
        budget: "₹6.21 lakh crore (2024-25)",
        projects: 243
      }
    ]
  },
  {
    category: "Social Welfare",
    items: [
      {
        name: "Ministry of Education",
        icon: GraduationCap,
        link: "/ministry/education",
        description: "Education policies and academic development",
        budget: "₹1.12 lakh crore (2024-25)",
        projects: 312
      },
      {
        name: "Ministry of Health",
        icon: Heart,
        link: "/ministry/health",
        description: "Public health and medical infrastructure",
        budget: "₹89,155 crore (2024-25)",
        projects: 276
      }
    ]
  },
  {
    category: "Economy & Industry",
    items: [
      {
        name: "Ministry of Finance",
        icon: Briefcase,
        link: "/ministry/finance",
        description: "Economic affairs and financial policies",
        budget: "₹11.11 lakh crore (2024-25)",
        projects: 198
      },
      {
        name: "Ministry of Commerce & Industry",
        icon: Factory,
        link: "/ministry/commerce",
        description: "Trade, commerce, and industrial development",
        budget: "₹12,355 crore (2024-25)",
        projects: 167
      }
    ]
  },
  {
    category: "Environment & Agriculture",
    items: [
      {
        name: "Ministry of Environment & Forests",
        icon: Leaf,
        link: "/ministry/environment",
        description: "Environmental protection and forest conservation",
        budget: "₹3,265 crore (2024-25)",
        projects: 145
      }
    ]
  },
  {
    category: "Technology & Communications",
    items: [
      {
        name: "Ministry of Electronics & IT",
        icon: Wifi,
        link: "/ministry/electronics-it",
        description: "Digital infrastructure and technology",
        budget: "₹16,549 crore (2024-25)",
        projects: 234
      }
    ]
  }
];

export default function Ministries() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Union Ministries of India
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track performance, projects, and initiatives across government ministries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {ministries.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                {category.category}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((ministry, index) => {
                  const Icon = ministry.icon;
                  return (
                    <Link
                      key={index}
                      to={ministry.link}
                      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
                    >
                      <div className="flex items-start">
                        <div className="p-3 bg-orange-100 rounded-lg">
                          <Icon className="h-6 w-6 text-orange-600" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {ministry.name}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {ministry.description}
                          </p>
                          <div className="flex items-center space-x-4 text-sm">
                            <span className="text-orange-600 font-medium">
                              Budget: {ministry.budget}
                            </span>
                            <span className="text-gray-500">
                              {ministry.projects} Active Projects
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}