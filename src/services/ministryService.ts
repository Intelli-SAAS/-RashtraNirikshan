import { 
  getCollection, 
  getDocument, 
  queryDocuments 
} from '../lib/firebase/db';

export async function getMinistries() {
  return getCollection('ministries');
}

export async function getMinistryById(id: string) {
  return getDocument('ministries', id);
}

export async function getMinistryUpdates(ministryId: string) {
  return queryDocuments('ministry_updates', 'ministryId', '==', ministryId);
}

export async function getBudgetData() {
  return getDocument('budget_data', 'fy-2024-25');
}

export async function getPerformanceMetrics() {
  return getDocument('performance_metrics', 'current');
}

export async function getRTIRequests() {
  return getCollection('rti_requests');
}

export async function getRTIRequestById(id: string) {
  return getDocument('rti_requests', id);
}