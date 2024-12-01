import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where, doc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDSuzmHQq1k4JauleWGEeLBirrp2gn6wqs",
  authDomain: "doge-80d6d.firebaseapp.com",
  projectId: "doge-80d6d",
  storageBucket: "doge-80d6d.appspot.com",
  messagingSenderId: "12497123574",
  appId: "1:12497123574:web:862487f4a3ed53c1e414d7",
  measurementId: "G-F2E0WWV2HE"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Generic fetch functions
export async function fetchCollection(collectionName: string) {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error(`Error fetching ${collectionName}:`, error);
    throw error;
  }
}

export async function fetchDocument(collectionName: string, docId: string) {
  try {
    const docRef = doc(db, collectionName, docId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      };
    }
    return null;
  } catch (error) {
    console.error(`Error fetching document from ${collectionName}:`, error);
    throw error;
  }
}

export async function fetchDocumentsWhere(collectionName: string, field: string, operator: any, value: any) {
  try {
    const q = query(collection(db, collectionName), where(field, operator, value));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error(`Error fetching filtered documents from ${collectionName}:`, error);
    throw error;
  }
}