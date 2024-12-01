import { useState, useEffect } from 'react';
import { getMinistryById, getMinistryUpdates } from '../services/ministryService';
import { MinistryData } from '../types/ministry';

export function useMinistry(id: string) {
  const [ministry, setMinistry] = useState<MinistryData | null>(null);
  const [updates, setUpdates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const [ministryData, updatesData] = await Promise.all([
          getMinistryById(id),
          getMinistryUpdates(id)
        ]);

        if (ministryData) {
          setMinistry(ministryData);
          setUpdates(updatesData);
        } else {
          setError('Ministry not found');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  return { ministry, updates, loading, error };
}