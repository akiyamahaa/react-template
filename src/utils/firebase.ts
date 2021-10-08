import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyBS8dpXV0ZYZl1GPu-qRBb4pzrxgR9rwKM',
  authDomain: 'react-template-firebase-aad4f.firebaseapp.com',
  projectId: 'react-template-firebase-aad4f',
  storageBucket: 'react-template-firebase-aad4f.appspot.com',
  messagingSenderId: '269576808832',
  appId: '1:269576808832:web:37ce03e4415ffb9804b965',
  measurementId: 'G-Y2R82C0F1V',
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
