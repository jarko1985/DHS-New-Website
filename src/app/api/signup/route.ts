import { NextRequest, NextResponse } from 'next/server';
import { User } from '@/lib/models/User';
import mongoose from 'mongoose';
import { hash } from 'bcryptjs';
import { randomBytes, createHash } from 'crypto';
import { sendVerificationEmail } from '@/lib/mail';

export async function POST(req: NextRequest) {
  try {
    const { name, email, password, recaptchaToken } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: 'All fields are required',
        },
        { status: 400 },
      );
    }

    // Validate reCAPTCHA token (optional - you can add reCAPTCHA verification here)
    // if (!recaptchaToken) {
    //   return NextResponse.json(
    //     {
    //       success: false,
    //       message: 'reCAPTCHA verification required',
    //     },
    //     { status: 400 },
    //   );
    // }

    // Connect to MongoDB
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(process.env.MONGODB_URI!);
    }

    // Split name into firstName and lastName
    const nameParts = name.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';
    const baseUsername = name.toLowerCase().replace(/\s+/g, '');

    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: 'An account with this email already exists',
        },
        { status: 409 },
      );
    }

    // Generate unique username if base username exists
    let username = baseUsername;
    let counter = 1;
    while (await User.findOne({ username })) {
      username = `${baseUsername}${counter}`;
      counter++;
    }

    // Generate verification token
    const rawToken = randomBytes(32).toString('hex');
    const hashedToken = createHash('sha256').update(rawToken).digest('hex');
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

    // Hash password
    const hashedPassword = await hash(password, 12);

    // Create user with verification fields
    await User.create({
      name,
      firstName,
      lastName,
      username,
      email: email.toLowerCase(),
      password: hashedPassword,
      image: '', // Initialize as empty string
      verifyToken: hashedToken,
      verifyTokenExpires: expires,
      isVerified: false, // User needs to verify email
    });

    // Send verification email
    try {
      await sendVerificationEmail(email.toLowerCase(), rawToken);
    } catch (emailError) {
      console.error('Error sending verification email:', emailError);
      // Don't fail the signup if email sending fails
    }

    return NextResponse.json({
      success: true,
      message: 'Account created successfully. Please check your email to verify your account.',
      requiresVerification: true,
    });
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error',
      },
      { status: 500 },
    );
  }
}
