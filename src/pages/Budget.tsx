import React from 'react';
import { motion } from 'framer-motion';
import { 
  IndianRupee, 
  TrendingUp, 
  PieChart,
  BarChart3,
  Download,
  FileText,
  Building2
} from 'lucide-react';
import * as Tabs from '@radix-ui/react-tabs';

const budgetHighlights = [
  {
    title: "Total Budget",
    amount: "₹45.03 Lakh Crore",
    change: "+7.1%",
    trend: "up"
  },
  {
    title: "Capital Expenditure",
    amount: "₹11.11 Lakh Crore",
    change: "+11.1%",
    trend: "up"
  },
  {
    title: "Revenue Expenditure",
    amount: "₹33.92 Lakh Crore",
    change: "+3.2%",
    trend: "up"
  },
  {
    title: "Fiscal Deficit",
    amount: "5.1% of GDP",
    change: "-0.7%",
    trend: "down"
  }
];

const sectorAllocations = [
  {
    sector: "Defence",
    amount: "₹6.21 Lakh Crore",
    percentage: "13.8%",
    change: "+6.2%"
  },
  {
    sector: "Infrastructure",
    amount: "₹11.11 Lakh Crore",
    percentage: "24.7%",
    change: "+11.1%"
  },
  {
    sector: "Education",
    amount: "₹1.12 Lakh Crore",
    percentage: "2.5%",
    change: "+8.2%"
  },
  {
    sector: "Healthcare",
    amount: "₹89,155 Crore",
    percentage: "2.0%",
    change: "+5.9%"
  }
];

export default function Budget() {
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
            Union Budget 2024-25
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive analysis and tracking of India's financial allocations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {budgetHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <IndianRupee className="h-6 w-6 text-orange-600" />
                </div>
                <span className={`text-sm font-medium ${
                  highlight.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {highlight.change}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {highlight.title}
              </h3>
              <p className="text-2xl font-bold text-gray-700">
                {highlight.amount}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <Tabs.Root defaultValue="allocations">
            <Tabs.List className="flex space-x-4 border-b border-gray-200 mb-8">
              <Tabs.Trigger
                value="allocations"
                className="px-4 py-2 text-gray-600 hover:text-orange-600 border-b-2 border-transparent data-[state=active]:border-orange-600 data-[state=active]:text-orange-600"
              >
                Sector-wise Allocations
              </Tabs.Trigger>
              <Tabs.Trigger
                value="analysis"
                className="px-4 py-2 text-gray-600 hover:text-orange-600 border-b-2 border-transparent data-[state=active]:border-orange-600 data-[state=active]:text-orange-600"
              >
                Budget Analysis
              </Tabs.Trigger>
              <Tabs.Trigger
                value="documents"
                className="px-4 py-2 text-gray-600 hover:text-orange-600 border-b-2 border-transparent data-[state=active]:border-orange-600 data-[state=active]:text-orange-600"
              >
                Budget Documents
              </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="allocations">
              <div className="space-y-6">
                {sectorAllocations.map((allocation, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 rounded-lg p-6"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {allocation.sector}
                        </h3>
                        <p className="text-2xl font-bold text-gray-700 mt-2">
                          {allocation.amount}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-gray-500">
                          {allocation.percentage} of total budget
                        </span>
                        <p className="text-sm font-medium text-green-600 mt-1">
                          {allocation.change} YoY
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-orange-600 h-2 rounded-full" 
                        style={{ width: allocation.percentage }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </Tabs.Content>

            <Tabs.Content value="analysis">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <PieChart className="h-6 w-6 text-orange-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      Revenue Analysis
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Detailed analysis of government revenue sources including tax and non-tax revenue.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <BarChart3 className="h-6 w-6 text-orange-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      Expenditure Breakdown
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Comprehensive breakdown of government spending across different sectors.
                  </p>
                </div>
              </div>
            </Tabs.Content>

            <Tabs.Content value="documents">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <FileText className="h-6 w-6 text-orange-600 mr-3" />
                    <span className="font-medium text-gray-900">Budget Speech 2024-25</span>
                  </div>
                  <button className="flex items-center text-orange-600 hover:text-orange-700">
                    <Download className="h-5 w-5 mr-1" />
                    Download PDF
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <FileText className="h-6 w-6 text-orange-600 mr-3" />
                    <span className="font-medium text-gray-900">Annual Financial Statement</span>
                  </div>
                  <button className="flex items-center text-orange-600 hover:text-orange-700">
                    <Download className="h-5 w-5 mr-1" />
                    Download PDF
                  </button>
                </div>
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Initiatives</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <Building2 className="h-5 w-5 text-orange-600 mr-2" />
                Infrastructure Development
              </li>
              <li className="flex items-center text-gray-600">
                <TrendingUp className="h-5 w-5 text-orange-600 mr-2" />
                Digital Economy Push
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Budget Timeline</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Budget Presentation</span>
                <span className="text-gray-900">Feb 1, 2024</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Implementation</span>
                <span className="text-gray-900">Apr 1, 2024</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Resources</h3>
            <div className="space-y-3">
              <a href="#" className="flex items-center text-orange-600 hover:text-orange-700">
                <FileText className="h-5 w-5 mr-2" />
                Budget Highlights
              </a>
              <a href="#" className="flex items-center text-orange-600 hover:text-orange-700">
                <FileText className="h-5 w-5 mr-2" />
                Economic Survey
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}