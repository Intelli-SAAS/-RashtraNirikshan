import { 
  collection,
  doc,
  setDoc,
  getDocs,
  getDoc,
  query,
  where,
  writeBatch,
  DocumentData,
  WhereFilterOp
} from 'firebase/firestore';
import { db } from './index';

// Create or update a document
export async function setDocument(collectionName: string, data: DocumentData) {
  try {
    const docRef = doc(db, collectionName, data.id);
    await setDoc(docRef, {
      ...data,
      updatedAt: new Date().toISOString()
    });
    return true;
  } catch (error) {
    console.error(`Error setting document in ${collectionName}:`, error);
    throw error;
  }
}

// Batch write multiple documents
export async function batchWrite(collectionName: string, documents: DocumentData[]) {
  const batch = writeBatch(db);
  
  try {
    documents.forEach(data => {
      const docRef = doc(db, collectionName, data.id);
      batch.set(docRef, {
        ...data,
        updatedAt: new Date().toISOString()
      });
    });
    
    await batch.commit();
    return true;
  } catch (error) {
    console.error(`Error batch writing to ${collectionName}:`, error);
    throw error;
  }
}

// Get a single document
export async function getDocument(collectionName: string, id: string) {
  try {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
  } catch (error) {
    console.error(`Error getting document from ${collectionName}:`, error);
    throw error;
  }
}

// Get all documents from a collection
export async function getCollection(collectionName: string) {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error(`Error getting collection ${collectionName}:`, error);
    throw error;
  }
}

// Query documents with a where clause
export async function queryDocuments(
  collectionName: string,
  field: string,
  operator: WhereFilterOp,
  value: any
) {
  try {
    const q = query(
      collection(db, collectionName),
      where(field, operator, value)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error(`Error querying documents in ${collectionName}:`, error);
    throw error;
  }
}