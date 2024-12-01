import React from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle,
  MessageSquare,
  Clock,
  CheckCircle,
  Search,
  FileText
} from 'lucide-react';
import * as Tabs from '@radix-ui/react-tabs';

export default function Grievances() {
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
            Public Grievance Portal
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Submit and track grievances with government departments
          </p>
        </motion.div>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <Tabs.Root defaultValue="file">
            <Tabs.List className="flex space-x-4 border-b border-gray-200 mb-8">
              <Tabs.Trigger
                value="file"
                className="px-4 py-2 text-gray-600 hover:text-orange-600 border-b-2 border-transparent data-[state=active]:border-orange-600 data-[state=active]:text-orange-600"
              >
                File Grievance
              </Tabs.Trigger>
              <Tabs.Trigger
                value="track"
                className="px-4 py-2 text-gray-600 hover:text-orange-600 border-b-2 border-transparent data-[state=active]:border-orange-600 data-[state=active]:text-orange-600"
              >
                Track Status
              </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="file">
              <div className="max-w-2xl">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Department
                    </label>
                    <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200">
                      <option>Select Department</option>
                      <option>Ministry of External Affairs</option>
                      <option>Ministry of Railways</option>
                      <option>Ministry of Education</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Grievance Category
                    </label>
                    <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200">
                      <option>Select Category</option>
                      <option>Service Delivery</option>
                      <option>Infrastructure</option>
                      <option>Personnel</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Description
                    </label>
                    <textarea
                      rows={4}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200"
                      placeholder="Describe your grievance in detail"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors"
                  >
                    Submit Grievance
                  </button>
                </form>
              </div>
            </Tabs.Content>

            <Tabs.Content value="track">
              <div className="max-w-2xl mb-8">
                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="Enter Grievance ID"
                    className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200"
                  />
                  <button className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition-colors">
                    Track
                  </button>
                </div>
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
    </div>
  );
}