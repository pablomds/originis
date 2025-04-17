import { initializeApp, cert, getApps, getApp } from 'firebase-admin/app';

const firebaseAdminConfig = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n')
};

export const adminApp = getApps().length === 0
  ? initializeApp({ credential: cert(firebaseAdminConfig) })
  : getApp();


export const auth = import('firebase-admin/auth').then((mod) => mod.getAuth(adminApp));