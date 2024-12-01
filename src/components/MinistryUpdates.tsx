import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { format } from 'date-fns';

interface Update {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
}

interface MinistryUpdatesProps {
  updates: Update[];
}

export default function MinistryUpdates({ updates }: MinistryUpdatesProps) {
  return (
    <div className="space-y-6">
      {updates.map((update, index) => (
        <motion.div
          key={update.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-start justify-between">
            <div>
              <span className="text-sm text-orange-600 font-medium">
                {update.category}
              </span>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                {update.title}
              </h3>
              <p className="mt-2 text-gray-600">{update.description}</p>
            </div>
            <div className="flex items-center text-gray-500">
              <Calendar className="h-4 w-4 mr-2" />
              <span className="text-sm">
                {format(new Date(update.date), 'dd MMM yyyy')}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}