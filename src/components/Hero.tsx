import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search,
  Building2,
  Scale,
  IndianRupee,
  FileBarChart,
  Megaphone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import NationalEmblem from './NationalEmblem';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-orange-700 via-orange-600 to-red-600">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-32 h-32">
              <NationalEmblem />
            </div>
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="block">जन सेवा, जन निगरानी</span>
            <span className="block text-yellow-300 mt-2">Public Service, Public Oversight</span>
          </h1>
          
          <p className="mt-4 text-xl text-orange-100 max-w-3xl mx-auto">
            Empowering citizens with transparency in governance and accountability in public service
          </p>

          <div className="mt-8 max-w-3xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search ministries, schemes, or services..."
                className="w-full px-6 py-4 rounded-full text-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {[
              { icon: Building2, label: 'Ministries', href: '/ministries' },
              { icon: Scale, label: 'RTI', href: '/rti' },
              { icon: IndianRupee, label: 'Budget', href: '/budget' },
              { icon: FileBarChart, label: 'Performance', href: '/performance' },
              { icon: Megaphone, label: 'Grievances', href: '/grievances' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  to={item.href}
                  className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-md rounded-lg hover:bg-white/20 transition-all"
                >
                  <item.icon className="h-8 w-8 text-yellow-300 mb-2" />
                  <span className="text-sm text-white text-center">{item.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}