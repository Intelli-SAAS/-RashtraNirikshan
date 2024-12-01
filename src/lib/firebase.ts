import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDSuzmHQq1k4JauleWGEeLBirrp2gn6wqs",
  authDomain: "doge-80d6d.firebaseapp.com",
  projectId: "doge-80d6d",
  storageBucket: "doge-80d6d.appspot.com",
  messagingSenderId: "12497123574",
  appId: "1:12497123574:web:862487f4a3ed53c1e414d7",
  measurementId: "G-F2E0WWV2HE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);