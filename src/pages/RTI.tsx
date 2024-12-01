import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Search, 
  Download, 
  Upload,
  Clock,
  CheckCircle,
  HelpCircle,
  AlertCircle
} from 'lucide-react';
import * as Tabs from '@radix-ui/react-tabs';

export default function RTI() {
  const steps = [
    {
      title: "Fill RTI Application",
      description: "Complete the online RTI application form with your request details",
      icon: FileText
    },
    {
      title: "Pay Fee",
      description: "Pay the RTI application fee of ₹10 through online payment",
      icon: Upload
    },
    {
      title: "Track Status",
      description: "Monitor your application status using the registration number",
      icon: Search
    },
    {
      title: "Receive Response",
      description: "Get response within 30 days as per RTI Act guidelines",
      icon: Download
    }
  ];

  const recentRTIs = [
    {
      id: "RTI2024/02/1234",
      subject: "Infrastructure Development Budget Allocation",
      department: "Ministry of Road Transport",
      status: "Completed",
      date: "15 Feb 2024"
    },
    {
      id: "RTI2024/02/1235",
      subject: "Public Health Facility Statistics",
      department: "Ministry of Health",
      status: "In Progress",
      date: "14 Feb 2024"
    },
    {
      id: "RTI2024/02/1236",
      subject: "Education Policy Implementation",
      department: "Ministry of Education",
      status: "Under Review",
      date: "13 Feb 2024"
    }
  ];

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
            Right to Information (RTI)
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access information under the RTI Act, 2005 and promote transparency in governance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <div className="p-3 bg-orange-100 rounded-lg w-fit mb-4">
                <step.icon className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <Tabs.Root defaultValue="file">
            <Tabs.List className="flex space-x-4 border-b border-gray-200 mb-8">
              <Tabs.Trigger
                value="file"
                className="px-4 py-2 text-gray-600 hover:text-orange-600 border-b-2 border-transparent data-[state=active]:border-orange-600 data-[state=active]:text-orange-600"
              >
                File New RTI
              </Tabs.Trigger>
              <Tabs.Trigger
                value="track"
                className="px-4 py-2 text-gray-600 hover:text-orange-600 border-b-2 border-transparent data-[state=active]:border-orange-600 data-[state=active]:text-orange-600"
              >
                Track RTI Status
              </Tabs.Trigger>
              <Tabs.Trigger
                value="faq"
                className="px-4 py-2 text-gray-600 hover:text-orange-600 border-b-2 border-transparent data-[state=active]:border-orange-600 data-[state=active]:text-orange-600"
              >
                RTI FAQ
              </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="file" className="space-y-6">
              <div className="max-w-2xl">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Select Department
                    </label>
                    <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200">
                      <option>Ministry of External Affairs</option>
                      <option>Ministry of Home Affairs</option>
                      <option>Ministry of Defence</option>
                      <option>Ministry of Finance</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200"
                      placeholder="Enter the subject of your RTI request"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Information Requested
                    </label>
                    <textarea
                      rows={4}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200"
                      placeholder="Describe the information you are seeking"
                    />
                  </div>
                  <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors">
                    Submit RTI Request
                  </button>
                </div>
              </div>
            </Tabs.Content>

            <Tabs.Content value="track">
              <div className="space-y-6">
                <div className="max-w-2xl mb-8">
                  <div className="flex space-x-4">
                    <input
                      type="text"
                      placeholder="Enter RTI Registration Number"
                      className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200"
                    />
                    <button className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition-colors">
                      Track
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent RTI Requests</h3>
                  <div className="space-y-4">
                    {recentRTIs.map((rti, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="text-sm text-gray-500">{rti.id}</span>
                            <h4 className="font-medium text-gray-900">{rti.subject}</h4>
                            <p className="text-sm text-gray-600">{rti.department}</p>
                          </div>
                          <div className="text-right">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              rti.status === 'Completed' ? 'bg-green-100 text-green-800' :
                              rti.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {rti.status}
                            </span>
                            <p className="text-sm text-gray-500 mt-1">{rti.date}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Tabs.Content>

            <Tabs.Content value="faq">
              <div className="max-w-3xl space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="flex items-center text-lg font-semibold text-gray-900 mb-2">
                    <HelpCircle className="h-5 w-5 mr-2 text-orange-600" />
                    What is RTI?
                  </h3>
                  <p className="text-gray-600">
                    The Right to Information Act (RTI) is a law enacted by the Parliament of India which mandates timely response to citizen requests for government information.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="flex items-center text-lg font-semibold text-gray-900 mb-2">
                    <Clock className="h-5 w-5 mr-2 text-orange-600" />
                    What is the time limit for getting the information?
                  </h3>
                  <p className="text-gray-600">
                    As per the RTI Act, information should be provided within 30 days of receiving the request. For matters concerning life and liberty, information should be provided within 48 hours.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="flex items-center text-lg font-semibold text-gray-900 mb-2">
                    <AlertCircle className="h-5 w-5 mr-2 text-orange-600" />
                    What is the application fee?
                  </h3>
                  <p className="text-gray-600">
                    The application fee is ₹10 for all requests. Additional charges may apply for providing information in printed or electronic format.
                  </p>
                </div>
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
    </div>
  );
}