import React from 'react';
 import { cookies } from 'next/headers';
import { auth as adminAuth } from '@/utils/auth/firebase-admin';
import { redirect } from 'next/navigation';
import NavbarPrivate from '@/components/Header/NavbarPrivate';
import FooterPrivate from '@/components/Footer/FooterPrivate';

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const session = cookieStore.get('session');

  if (!session) {
    redirect('/login'); 
  }
  
  try {
    const decoded = await (await adminAuth).verifySessionCookie(session.value, true);
    return (
      <>
        <NavbarPrivate />
        <main className="min-h-screen">{children}</main>
        <FooterPrivate />
      </>
    );
  } catch (error) {
    console.error('Invalid session:', error);
    redirect('/login');
  }
}