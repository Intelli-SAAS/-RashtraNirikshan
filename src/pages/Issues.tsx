import React from 'react';
import { useForm } from 'react-hook-form';
import { AlertTriangle, MapPin, Camera } from 'lucide-react';
import { useStore } from '../store/store';

interface IssueFormData {
  title: string;
  description: string;
  department: string;
  location: string;
  priority: 'low' | 'medium' | 'high';
}

export default function Issues() {
  const { register, handleSubmit, reset } = useForm<IssueFormData>();
  const { addIssue, issues } = useStore();

  const onSubmit = (data: IssueFormData) => {
    addIssue(data);
    reset();
  };

  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Report an Issue</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  {...register('title', { required: true })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Department</label>
                <select
                  {...register('department', { required: true })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  <option value="PWD">PWD</option>
                  <option value="Water Department">Water Department</option>
                  <option value="Electricity Board">Electricity Board</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Priority</label>
                <select
                  {...register('priority', { required: true })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    {...register('location', { required: true })}
                    className="flex-1 block w-full rounded-l-md border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  <button
                    type="button"
                    className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 hover:text-gray-600"
                  >
                    <MapPin className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  {...register('description', { required: true })}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>

              <div>
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  <Camera className="h-5 w-5 mr-2" />
                  Attach Photo
                </button>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit Issue
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Issues</h2>
            <div className="space-y-4">
              {issues.map((issue) => (
                <div key={issue.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center">
                      <AlertTriangle className={`h-5 w-5 ${
                        issue.priority === 'high' ? 'text-red-500' :
                        issue.priority === 'medium' ? 'text-yellow-500' :
                        'text-green-500'
                      }`} />
                      <h3 className="ml-2 text-lg font-medium text-gray-900">{issue.title}</h3>
                    </div>
                    <span className="text-sm text-gray-500">{issue.department}</span>
                  </div>
                  <p className="mt-2 text-gray-600">{issue.description}</p>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    {issue.location}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}