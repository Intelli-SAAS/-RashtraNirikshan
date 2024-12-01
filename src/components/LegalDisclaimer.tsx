import React from 'react';
import { AlertTriangle } from 'lucide-react';

export default function LegalDisclaimer() {
  return (
    <div className="bg-amber-50 border-t border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-amber-700">
              <strong>Legal Disclaimer:</strong> This is a demo application created for educational purposes only. 
              This website is not affiliated with, endorsed by, or connected to any government entity or ministry. 
              All data presented is simulated and should not be considered official information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}