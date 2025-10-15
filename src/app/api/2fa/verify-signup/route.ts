import { NextRequest, NextResponse } from 'next/server';
import speakeasy from 'speakeasy';

export async function POST(request: NextRequest) {
  try {
    const { token, secret } = await request.json();

    if (!token || !secret) {
      return NextResponse.json({ error: 'Token and secret are required' }, { status: 400 });
    }

    // Verify the token against the provided secret
    const verified = speakeasy.totp.verify({
      secret: secret,
      encoding: 'base32',
      token: token,
      window: 2, // Allow 2 time steps in case of slight time differences
    });

    if (!verified) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 400 });
    }

    return NextResponse.json({ success: true, verified: true });
  } catch (error) {
    console.error('2FA signup verification error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

