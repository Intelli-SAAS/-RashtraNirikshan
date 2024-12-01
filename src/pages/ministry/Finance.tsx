import React from 'react';
import { motion } from 'framer-motion';
import { 
  IndianRupee,
  Users,
  Building2,
  FileText,
  ChevronRight,
  AlertCircle,
  Calendar,
  Briefcase,
  Calculator,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import * as Tabs from '@radix-ui/react-tabs';
import { getMinistryData } from '@/store/ministryData';
import BackButton from '@/components/BackButton';

export default function Finance() {
  const ministry = getMinistryData('finance');

  if (!ministry) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <BackButton />
      <div className="bg-gradient-to-r from-orange-700 via-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {ministry.name}
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl">
              {ministry.description}
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {ministry.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all"
              >
                <service.icon className="h-8 w-8 text-yellow-300 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-orange-100 mb-4">{service.description}</p>
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-yellow-300 hover:text-yellow-200"
                >
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Tabs.Root defaultValue="updates" className="space-y-8">
          <Tabs.List className="flex space-x-4 border-b border-gray-200">
            <Tabs.Trigger 
              value="updates"
              className="px-4 py-2 text-gray-600 hover:text-orange-600 border-b-2 border-transparent data-[state=active]:border-orange-600 data-[state=active]:text-orange-600"
            >
              Latest Updates
            </Tabs.Trigger>
            <Tabs.Trigger 
              value="initiatives"
              className="px-4 py-2 text-gray-600 hover:text-orange-600 border-b-2 border-transparent data-[state=active]:border-orange-600 data-[state=active]:text-orange-600"
            >
              Key Initiatives
            </Tabs.Trigger>
            <Tabs.Trigger 
              value="contact"
              className="px-4 py-2 text-gray-600 hover:text-orange-600 border-b-2 border-transparent data-[state=active]:border-orange-600 data-[state=active]:text-orange-600"
            >
              Contact & Support
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="updates" className="space-y-6">
            <div className="grid gap-6">
              {ministry.newsUpdates.map((news, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-sm text-orange-600 font-medium">
                        {news.category}
                      </span>
                      <h3 className="mt-1 text-lg font-semibold text-gray-900">
                        {news.title}
                      </h3>
                      {news.description && (
                        <p className="mt-2 text-gray-600">{news.description}</p>
                      )}
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{new Date(news.date).toLocaleDateString('en-IN', { 
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Tabs.Content>

          <Tabs.Content value="initiatives" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {ministry.keyInitiatives.map((initiative, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {initiative}
                  </h3>
                  <button className="mt-4 text-orange-600 hover:text-orange-700 text-sm font-medium">
                    Learn More →
                  </button>
                </motion.div>
              ))}
            </div>
          </Tabs.Content>

          <Tabs.Content value="contact" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {ministry.contacts.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {contact.type}
                  </h3>
                  <div className="flex items-center text-gray-600">
                    <contact.icon className="h-5 w-5 mr-3 text-orange-600" />
                    <span>{contact.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </Tabs.Content>
        </Tabs.Root>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <button className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-left">
              <div className="flex items-center text-orange-600 mb-3">
                <Calculator className="h-6 w-6 mr-2" />
                <span className="font-semibold">Tax Calculator</span>
              </div>
              <p className="text-gray-600">Calculate your income tax</p>
            </button>

            <button className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-left">
              <div className="flex items-center text-orange-600 mb-3">
                <Building2 className="h-6 w-6 mr-2" />
                <span className="font-semibold">GST Portal</span>
              </div>
              <p className="text-gray-600">Access GST services</p>
            </button>

            <button className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-left">
              <div className="flex items-center text-orange-600 mb-3">
                <TrendingUp className="h-6 w-6 mr-2" />
                <span className="font-semibold">Economic Updates</span>
              </div>
              <p className="text-gray-600">Latest economic indicators</p>
            </button>

            <button className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-left">
              <div className="flex items-center text-orange-600 mb-3">
                <FileText className="h-6 w-6 mr-2" />
                <span className="font-semibold">Budget Documents</span>
              </div>
              <p className="text-gray-600">Access budget publications</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}