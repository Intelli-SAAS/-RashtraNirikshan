import { 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  getDocs, 
  query, 
  where, 
  WhereFilterOp,
  writeBatch,
  DocumentData,
  enableIndexedDbPersistence
} from 'firebase/firestore';
import { db } from './index';

// Enable offline persistence
try {
  enableIndexedDbPersistence(db, {
    synchronizeTabs: true
  }).catch((err) => {
    if (err.code === 'failed-precondition') {
      console.warn('Multiple tabs open, persistence can only be enabled in one tab at a time.');
    } else if (err.code === 'unimplemented') {
      console.warn('The current browser doesn\'t support persistence.');
    }
  });
} catch (err) {
  console.warn('Error enabling persistence:', err);
}

export async function setDocument(collectionName: string, data: DocumentData) {
  try {
    const docRef = doc(db, collectionName, data.id);
    await setDoc(docRef, {
      ...data,
      updatedAt: new Date().toISOString()
    }, { merge: true });
    return true;
  } catch (error) {
    console.error(`Error setting document in ${collectionName}:`, error);
    throw error;
  }
}

export async function batchWrite(collectionName: string, documents: DocumentData[]) {
  const batch = writeBatch(db);
  
  try {
    documents.forEach(data => {
      const docRef = doc(db, collectionName, data.id);
      batch.set(docRef, {
        ...data,
        updatedAt: new Date().toISOString()
      }, { merge: true });
    });
    
    await batch.commit();
    return true;
  } catch (error) {
    console.error(`Error batch writing to ${collectionName}:`, error);
    throw error;
  }
}

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

export async function getDocumentsWhere(
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