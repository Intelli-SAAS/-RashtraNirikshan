import { useState, useEffect } from 'react';
import { collection, query, where, getDocs, DocumentData } from 'firebase/firestore';
import { db } from '../lib/firebase';

export function useFirestore<T = DocumentData>(
  collectionName: string,
  conditions?: { field: string; operator: string; value: any }[]
) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        let q = collection(db, collectionName);
        
        if (conditions) {
          q = query(q, ...conditions.map(c => 
            where(c.field, c.operator as any, c.value)
          ));
        }

        const querySnapshot = await getDocs(q);
        const documents = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as T[];

        setData(documents);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [collectionName, JSON.stringify(conditions)]);

  return { data, loading, error };
}