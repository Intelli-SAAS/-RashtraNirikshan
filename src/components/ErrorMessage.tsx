import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-red-50 text-red-700 px-6 py-4 rounded-lg flex items-center">
        <AlertCircle className="h-6 w-6 mr-2" />
        <span>{message}</span>
      </div>
    </div>
  );
}