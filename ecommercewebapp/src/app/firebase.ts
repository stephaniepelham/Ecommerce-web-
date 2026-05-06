import { FirebaseApp, initializeApp, getApps, getApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAEYM9Vi0NkhtMjKlwxCPUEVWUKBw8Haus',
  authDomain: 'ecommerce-web-applicatio-253ff.firebaseapp.com',
  projectId: 'ecommerce-web-applicatio-253ff',
  storageBucket: 'ecommerce-web-applicatio-253ff.firebasestorage.app',
  messagingSenderId: '702384790083',
  appId: '1:702384790083:web:489fdf33e18459794992f6',
  measurementId: 'G-0PDK2KGQJM'
};

const app: FirebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const firebaseApp: FirebaseApp = app;
export const firebaseAuth: Auth | null = typeof window !== 'undefined' ? getAuth(app) : null;
export const firebaseFirestore: Firestore | null = typeof window !== 'undefined' ? getFirestore(app) : null;
