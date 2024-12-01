import React from 'react';
import { motion } from 'framer-motion';
import { 
  Scale,
  FileBarChart,
  IndianRupee,
  Building2,
  Users,
  AlertTriangle,
  Eye,
  FileText,
  MessageSquare
} from 'lucide-react';

const features = [
  {
    icon: Scale,
    title: "RTI Portal",
    description: "File and track Right to Information requests online",
    stats: "12.5L+ requests processed"
  },
  {
    icon: FileBarChart,
    title: "Performance Metrics",
    description: "Real-time department performance and project status",
    stats: "89 departments monitored"
  },
  {
    icon: IndianRupee,
    title: "Budget Tracker",
    description: "Track allocation and utilization of public funds",
    stats: "₹18.78L Cr tracked"
  },
  {
    icon: Building2,
    title: "Ministry Dashboard",
    description: "Comprehensive overview of ministry activities",
    stats: "45+ ministries"
  },
  {
    icon: Users,
    title: "Public Grievances",
    description: "Submit and track grievances with departments",
    stats: "8.2L+ resolved"
  },
  {
    icon: AlertTriangle,
    title: "Vigilance Reports",
    description: "Access vigilance and audit reports",
    stats: "Monthly updates"
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Transparency & Accountability Tools
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Empowering citizens with tools to monitor and engage with governance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <feature.icon className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="text-sm font-medium text-orange-600">{feature.stats}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}