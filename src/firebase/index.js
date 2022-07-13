import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDny3uYWZKNUdipq7xTuRCxnScZ_mj6Bs8',
  authDomain: 'shopping-85009.firebaseapp.com',
  projectId: 'shopping-85009',
  storageBucket: 'shopping-85009.appspot.com',
  messagingSenderId: '11644231374',
  appId: '1:11644231374:web:fd6ceaf8d3da33fb5f3a9f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);

export default app;
