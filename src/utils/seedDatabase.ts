import { setDocument } from '../lib/firebase/utils';
import { ministryData } from '../data/ministryData';

async function seedDatabase() {
  try {
    console.log('Starting database seeding...');

    // Seed ministries
    for (const [id, ministry] of Object.entries(ministryData)) {
      console.log(`Seeding ministry: ${ministry.name}`);
      await setDocument('ministries', {
        ...ministry,
        id,
        createdAt: new Date().toISOString()
      });
    }

    // Seed RTI data
    const rtiData = [
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

    for (const rti of rtiData) {
      console.log(`Seeding RTI request: ${rti.id}`);
      await setDocument('rti_requests', rti);
    }

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

    console.log('Seeding budget data');
    await setDocument('budget_data', budgetData);

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

    console.log('Seeding performance metrics');
    await setDocument('performance_metrics', metricsData);

    console.log('Database seeding completed successfully');
    return true;
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  }
}

// Run seeding if this file is executed directly
if (import.meta.url === import.meta.resolve('./seedDatabase.ts')) {
  seedDatabase()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error('Seeding failed:', error);
      process.exit(1);
    });
}

export { seedDatabase };