import { NextRequest, NextResponse } from 'next/server';
import speakeasy from 'speakeasy';
import QRCode from 'qrcode';

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Generate a new secret for the user
    const secret = speakeasy.generateSecret({
      name: `DHS (${email})`,
      issuer: 'DHS Exchange',
      length: 20,
    });

    // Generate QR code
    const qrCodeUrl = await QRCode.toDataURL(secret.otpauth_url!);

    // Return the secret and QR code (we'll save it to DB after verification)
    return NextResponse.json({
      secret: secret.base32,
      qrCode: qrCodeUrl,
      otpauthUrl: secret.otpauth_url,
    });
  } catch (error) {
    console.error('2FA signup setup error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

