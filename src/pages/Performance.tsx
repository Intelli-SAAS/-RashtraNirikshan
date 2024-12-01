import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart2, 
  TrendingUp, 
  Users, 
  Clock,
  CheckCircle,
  AlertTriangle,
  FileBarChart,
  Building2,
  Target,
  Award,
  ThumbsUp,
  Calendar
} from 'lucide-react';
import * as Tabs from '@radix-ui/react-tabs';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const ministryPerformance = [
  { ministry: "External Affairs", score: 92, projects: 156, satisfaction: 4.5 },
  { ministry: "Railways", score: 88, projects: 486, satisfaction: 4.2 },
  { ministry: "Finance", score: 85, projects: 198, satisfaction: 4.0 },
  { ministry: "Agriculture", score: 87, projects: 324, satisfaction: 4.3 },
  { ministry: "Health", score: 89, projects: 276, satisfaction: 4.4 }
];

const monthlyTrends = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Project Completion Rate',
      data: [65, 70, 75, 78, 82, 85],
      borderColor: 'rgb(234, 88, 12)',
      tension: 0.3
    },
    {
      label: 'Public Satisfaction',
      data: [3.8, 4.0, 4.1, 4.2, 4.3, 4.4],
      borderColor: 'rgb(22, 163, 74)',
      tension: 0.3
    }
  ]
};

const projectStatus = {
  labels: ['On Track', 'Delayed', 'Critical', 'Completed'],
  datasets: [{
    data: [45, 25, 10, 20],
    backgroundColor: [
      'rgb(34, 197, 94)',
      'rgb(234, 179, 8)',
      'rgb(239, 68, 68)',
      'rgb(99, 102, 241)'
    ]
  }]
};

export default function Performance() {
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
            Government Performance Dashboard
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time analytics and insights into government efficiency and public service delivery
          </p>
        </motion.div>

        <Tabs.Root defaultValue="overview" className="space-y-8">
          <Tabs.List className="flex space-x-4 border-b border-gray-200">
            <Tabs.Trigger
              value="overview"
              className="px-4 py-2 text-gray-600 hover:text-orange-600 border-b-2 border-transparent data-[state=active]:border-orange-600 data-[state=active]:text-orange-600"
            >
              Overview
            </Tabs.Trigger>
            <Tabs.Trigger
              value="ministry"
              className="px-4 py-2 text-gray-600 hover:text-orange-600 border-b-2 border-transparent data-[state=active]:border-orange-600 data-[state=active]:text-orange-600"
            >
              Ministry-wise Performance
            </Tabs.Trigger>
            <Tabs.Trigger
              value="trends"
              className="px-4 py-2 text-gray-600 hover:text-orange-600 border-b-2 border-transparent data-[state=active]:border-orange-600 data-[state=active]:text-orange-600"
            >
              Performance Trends
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="overview" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Target className="h-6 w-6 text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-green-600">+5.2%</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Overall Performance Score
                </h3>
                <p className="text-3xl font-bold text-gray-700">88.5%</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-blue-600">1,440</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Active Projects
                </h3>
                <p className="text-3xl font-bold text-gray-700">85% On Track</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-orange-100 rounded-lg">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <span className="text-sm font-medium text-orange-600">-12%</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Average Response Time
                </h3>
                <p className="text-3xl font-bold text-gray-700">2.5 Days</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <ThumbsUp className="h-6 w-6 text-purple-600" />
                  </div>
                  <span className="text-sm font-medium text-purple-600">+0.3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Citizen Satisfaction
                </h3>
                <p className="text-3xl font-bold text-gray-700">4.2/5.0</p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Trends</h3>
                <Line 
                  data={monthlyTrends}
                  options={{
                    responsive: true,
                    scales: {
                      y: {
                        beginAtZero: true
                      }
                    }
                  }}
                />
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Status Distribution</h3>
                <Doughnut 
                  data={projectStatus}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: {
                        position: 'bottom'
                      }
                    }
                  }}
                />
              </div>
            </div>
          </Tabs.Content>

          <Tabs.Content value="ministry" className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Ministry Performance Comparison</h3>
              <div className="space-y-6">
                {ministryPerformance.map((ministry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center justify-between"
                  >
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900">{ministry.ministry}</span>
                        <span className="text-sm text-gray-500">
                          Score: {ministry.score}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-orange-600 h-2 rounded-full"
                          style={{ width: `${ministry.score}%` }}
                        />
                      </div>
                      <div className="flex justify-between mt-1 text-sm text-gray-500">
                        <span>{ministry.projects} Active Projects</span>
                        <span>Satisfaction: {ministry.satisfaction}/5.0</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Tabs.Content>

          <Tabs.Content value="trends" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Completion Trends</h3>
                <Bar
                  data={{
                    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                    datasets: [{
                      label: 'Projects Completed',
                      data: [65, 78, 82, 95],
                      backgroundColor: 'rgba(234, 88, 12, 0.5)',
                      borderColor: 'rgb(234, 88, 12)',
                      borderWidth: 1
                    }]
                  }}
                  options={{
                    responsive: true,
                    scales: {
                      y: {
                        beginAtZero: true
                      }
                    }
                  }}
                />
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Satisfaction Trends</h3>
                <Line
                  data={{
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                      label: 'Citizen Satisfaction',
                      data: [4.0, 4.1, 4.2, 4.3, 4.4, 4.5],
                      borderColor: 'rgb(22, 163, 74)',
                      tension: 0.3
                    }]
                  }}
                  options={{
                    responsive: true,
                    scales: {
                      y: {
                        beginAtZero: true,
                        max: 5
                      }
                    }
                  }}
                />
              </div>
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  );
}