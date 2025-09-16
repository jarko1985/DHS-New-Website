import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import dbConnect from "@/lib/mongoose";
import { User } from "@/lib/models/User";

export async function PUT(request: NextRequest) {
  try {
    // Get the session
    const session = await auth();
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Parse the request body
    const body = await request.json();
    const { firstName, lastName, email, username, image } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !username) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await dbConnect();

    // First, find the current user
    const currentUser = await User.findOne({ email: session.user.email });
    
    if (!currentUser) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // Check if email is already taken by another user
    const existingUserWithEmail = await User.findOne({ 
      email: email,
      _id: { $ne: currentUser._id } // Exclude current user
    });

    if (existingUserWithEmail) {
      return NextResponse.json(
        { error: "Email already in use" },
        { status: 409 }
      );
    }

    // Check if username is already taken by another user
    const existingUserWithUsername = await User.findOne({ 
      username: username,
      _id: { $ne: currentUser._id } // Exclude current user
    });

    if (existingUserWithUsername) {
      return NextResponse.json(
        { error: "Username already in use" },
        { status: 409 }
      );
    }

    // Update the user in MongoDB
    const updatedUser = await User.findByIdAndUpdate(
      currentUser._id,
      {
        firstName,
        lastName,
        email,
        username,
        image: image || '', // Update the image field
        name: `${firstName} ${lastName}`, // Update the full name
        updatedAt: new Date(),
      },
      { 
        new: true, // Return the updated document
        runValidators: true // Run schema validators
      }
    );

    if (!updatedUser) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // Return the updated user data (excluding sensitive fields)
    const userResponse = {
      id: updatedUser._id,
      name: updatedUser.name,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      email: updatedUser.email,
      username: updatedUser.username,
      image: updatedUser.image,
      emailVerified: updatedUser.emailVerified,
      createdAt: updatedUser.createdAt,
      updatedAt: updatedUser.updatedAt,
    };

    return NextResponse.json({
      message: "Profile updated successfully",
      user: userResponse,
    });

  } catch (error) {
    console.error("Profile update error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // Get the session
    const session = await auth();
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Parse the request body
    const body = await request.json();
    const { firstName, lastName, email, username } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !username) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await dbConnect();

    // Check if user already exists
    const existingUser = await User.findOne({ email: session.user.email });
    
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 }
      );
    }

    // Check if email is already taken
    const existingUserWithEmail = await User.findOne({ email: email });
    if (existingUserWithEmail) {
      return NextResponse.json(
        { error: "Email already in use" },
        { status: 409 }
      );
    }

    // Check if username is already taken
    const existingUserWithUsername = await User.findOne({ username: username });
    if (existingUserWithUsername) {
      return NextResponse.json(
        { error: "Username already in use" },
        { status: 409 }
      );
    }

    // Create new user
    const newUser = new User({
      firstName,
      lastName,
      email: session.user.email, // Use session email for consistency
      username,
      name: `${firstName} ${lastName}`,
      image: '', // Initialize as empty string
    });

    await newUser.save();

    // Return the created user data
    const userResponse = {
      id: newUser._id,
      name: newUser.name,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      username: newUser.username,
      image: newUser.image,
      emailVerified: newUser.emailVerified,
      createdAt: newUser.createdAt,
      updatedAt: newUser.updatedAt,
    };

    return NextResponse.json({
      message: "Profile created successfully",
      user: userResponse,
    });

  } catch (error) {
    console.error("Profile creation error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    // Get the session
    const session = await auth();
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Connect to MongoDB
    await dbConnect();

    // Get the user from MongoDB by email (since session.user.id is the email)
    const user = await User.findOne({ email: session.user.email }).select(
      "-password -twoFactorSecret -twoFactorEnabled"
    );

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // Return the user data
    const userResponse = {
      id: user._id,
      name: user.name,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      username: user.username,
      image: user.image,
      emailVerified: user.emailVerified,
      twoFactorEnabled: user.twoFactorEnabled,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };

    return NextResponse.json({ user: userResponse });

  } catch (error) {
    console.error("Profile fetch error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
