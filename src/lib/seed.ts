import { collection, doc, setDoc, writeBatch } from 'firebase/firestore';
import { db } from './firebase';
import { ministryData } from '../data/ministryData';

async function seedDatabase() {
  try {
    console.log('Starting database seeding...');

    // Use batch writes for better performance
    const batch = writeBatch(db);

    // Seed ministries
    console.log('Seeding ministries...');
    Object.entries(ministryData).forEach(([id, ministry]) => {
      const docRef = doc(collection(db, 'ministries'), id);
      batch.set(docRef, {
        ...ministry,
        createdAt: new Date().toISOString()
      });
    });

    // Seed RTI requests
    const rtiRequests = [
      {
        id: 'rti-1',
        subject: 'Infrastructure Development Budget',
        department: 'Ministry of Road Transport',
        status: 'Completed',
        requestDate: '2024-02-15',
        responseDate: '2024-02-25',
        description: 'Request for information about highway development projects'
      },
      {
        id: 'rti-2',
        subject: 'Railway Station Modernization',
        department: 'Ministry of Railways',
        status: 'In Progress',
        requestDate: '2024-02-18',
        description: 'Details about station modernization program'
      }
    ];

    rtiRequests.forEach(rti => {
      const docRef = doc(collection(db, 'rti_requests'), rti.id);
      batch.set(docRef, rti);
    });

    // Seed budget data
    const budgetData = {
      id: 'fy-2024-25',
      year: '2024-25',
      totalBudget: 4503100000000,
      capitalExpenditure: 1111000000000,
      revenueExpenditure: 3392100000000,
      fiscalDeficitGdp: 5.1,
      sectorAllocation: {
        defence: 621000000000,
        infrastructure: 1111000000000,
        education: 112000000000,
        healthcare: 89155000000
      }
    };

    const budgetRef = doc(collection(db, 'budget_data'), budgetData.id);
    batch.set(budgetRef, budgetData);

    // Seed performance metrics
    const metricsData = {
      id: 'current',
      overallScore: 88.5,
      activeProjects: 1440,
      responseTime: 2.5,
      citizenSatisfaction: 4.2,
      ministryScores: {
        'external-affairs': 92,
        'railways': 88,
        'finance': 85,
        'agriculture': 87,
        'health': 89
      }
    };

    const metricsRef = doc(collection(db, 'performance_metrics'), metricsData.id);
    batch.set(metricsRef, metricsData);

    // Commit all the batch operations
    await batch.commit();
    console.log('Database seeding completed successfully');
    return true;
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  }
}

// Run seeding if this file is executed directly
if (import.meta.url === import.meta.resolve('./seed.ts')) {
  seedDatabase()
    .then(() => {
      console.log('Seeding completed successfully');
      process.exit(0);
    })
    .catch(error => {
      console.error('Seeding failed:', error);
      process.exit(1);
    });
}

export { seedDatabase };