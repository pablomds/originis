export const runtime = 'nodejs';
import { auth } from '@/utils/auth/firebase-admin';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
  const { idToken } = await req.json();

  const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days

  try {
    const authInstance = await auth;
    const sessionCookie = await authInstance.createSessionCookie(idToken, { expiresIn });
    const cookiesStore = await cookies();
    cookiesStore.set('session', sessionCookie, {
      maxAge: expiresIn / 1000,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      sameSite: 'lax'
    });

    return new Response('OK', {
      status: 200,
      headers: {
        'Set-Cookie': `session=${sessionCookie}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${expiresIn / 1000}`,
      },
    });
  } catch (err) {
    console.log(err)
    return new Response(JSON.stringify({ error: 'Failed to create session' }), { status: 401 });
  }
}