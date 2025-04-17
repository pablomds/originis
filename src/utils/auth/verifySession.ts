// utils/auth/verifySession.ts

import { auth } from './firebase-admin';
import { cookies } from 'next/headers';

export const verifySession = async () => {
  const cookiesStore = await cookies()
  const sessionCookie = cookiesStore.get('session')?.value;

  if (!sessionCookie) return null;

  try {
    const authInstance = await auth
    const decodedClaims = await authInstance.verifySessionCookie(sessionCookie, true);
    return decodedClaims;
  } catch (e) {
    return null;
  }
};
