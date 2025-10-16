"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Check, Loader2, CheckCircle } from 'lucide-react';
import { VerificationData } from '@/lib/verification-schema';
import { format } from 'date-fns';

interface SummaryProps {
  data: VerificationData;
  onPrevious: () => void;
  onSubmit: () => void;
}

export default function Summary({ data, onPrevious, onSubmit }: SummaryProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsComplete(true);
      
      // Call onSubmit after 2 more seconds
      setTimeout(() => {
        onSubmit();
      }, 2000);
    }, 5000);
  };

  if (isComplete) {
    return (
      <div className="flex flex-col items-center justify-center py-16 space-y-6">
        <div className="w-32 h-32 rounded-full bg-[#117f60]/20 flex items-center justify-center animate-scale-in">
          <CheckCircle className="w-20 h-20 text-[#117f60]" />
        </div>
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-white">Verification Complete!</h2>
          <p className="text-white/70 text-lg">
            Your identity has been successfully verified
          </p>
        </div>
        <div className="w-full max-w-md bg-white/10 rounded-lg p-6 space-y-3">
          <div className="flex items-center gap-3 text-white">
            <Check className="w-5 h-5 text-[#117f60]" />
            <span>Personal Information Verified</span>
          </div>
          <div className="flex items-center gap-3 text-white">
            <Check className="w-5 h-5 text-[#117f60]" />
            <span>Documents Validated</span>
          </div>
          <div className="flex items-center gap-3 text-white">
            <Check className="w-5 h-5 text-[#117f60]" />
            <span>Liveness Check Passed</span>
          </div>
        </div>
      </div>
    );
  }

  if (isSubmitting) {
    return (
      <div className="flex flex-col items-center justify-center py-16 space-y-6">
        <div className="w-32 h-32 rounded-full bg-[#117f60]/20 flex items-center justify-center">
          <Loader2 className="w-20 h-20 text-[#117f60] animate-spin" />
        </div>
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-white">Processing Your Verification...</h2>
          <p className="text-white/70">Please wait while we verify your information</p>
        </div>
        <div className="w-full max-w-md bg-white/10 rounded-lg p-4">
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#b22f26] via-[#e47a5a] to-[#b22f26] animate-progress"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-white">Review Your Information</h2>
        <p className="text-white/70">
          Please review all the information before submitting
        </p>
      </div>

      <div className="space-y-6">
        {/* Personal Information */}
        <div className="bg-white/10 rounded-lg p-6 space-y-4">
          <h3 className="text-xl font-semibold text-white flex items-center gap-2">
            <Check className="w-5 h-5 text-[#117f60]" />
            Personal Information
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-white/50 text-sm">First Name</p>
              <p className="text-white font-medium">{data.personalInfo?.firstName}</p>
            </div>
            <div>
              <p className="text-white/50 text-sm">Last Name</p>
              <p className="text-white font-medium">{data.personalInfo?.lastName}</p>
            </div>
            <div>
              <p className="text-white/50 text-sm">Date of Birth</p>
              <p className="text-white font-medium">
                {data.personalInfo?.dateOfBirth
                  ? format(new Date(data.personalInfo.dateOfBirth), 'PPP')
                  : 'N/A'}
              </p>
            </div>
            <div>
              <p className="text-white/50 text-sm">Phone Number</p>
              <p className="text-white font-medium">{data.personalInfo?.phoneNumber}</p>
            </div>
            <div>
              <p className="text-white/50 text-sm">Email</p>
              <p className="text-white font-medium">{data.personalInfo?.email}</p>
            </div>
            <div>
              <p className="text-white/50 text-sm">Nationality</p>
              <p className="text-white font-medium">{data.personalInfo?.nationality}</p>
            </div>
          </div>
        </div>

        {/* Documents */}
        <div className="bg-white/10 rounded-lg p-6 space-y-4">
          <h3 className="text-xl font-semibold text-white flex items-center gap-2">
            <Check className="w-5 h-5 text-[#117f60]" />
            Documents
          </h3>
          <div className="space-y-3">
            <div>
              <p className="text-white/50 text-sm">Country of Issuance</p>
              <p className="text-white font-medium">{data.documents?.country}</p>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Check className="w-4 h-4 text-[#117f60]" />
              <span>Passport uploaded</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Check className="w-4 h-4 text-[#117f60]" />
              <span>National ID uploaded</span>
            </div>
          </div>
        </div>

        {/* Liveness Check */}
        <div className="bg-white/10 rounded-lg p-6 space-y-4">
          <h3 className="text-xl font-semibold text-white flex items-center gap-2">
            <Check className="w-5 h-5 text-[#117f60]" />
            Liveness Verification
          </h3>
          <div className="flex items-center gap-2 text-white">
            <Check className="w-4 h-4 text-[#117f60]" />
            <span>Face verification completed successfully</span>
          </div>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="bg-white/5 rounded-lg p-4 border border-[#6f7273]">
        <p className="text-white/70 text-sm">
          By submitting this form, you agree to our{' '}
          <a href="#" className="text-[#117f60] hover:underline">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="text-[#117f60] hover:underline">
            Privacy Policy
          </a>
          . All information provided will be securely stored and processed.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between pt-6">
        <Button
          type="button"
          onClick={onPrevious}
          className="bg-[#6f7273] hover:bg-[#6f7273]/80 text-white px-8 py-2 rounded-lg flex items-center gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </Button>
        <Button
          onClick={handleSubmit}
          className="bg-gradient-to-r from-[#b22f26] via-[#e47a5a] to-[#b22f26] hover:opacity-90 text-white px-8 py-2 rounded-lg flex items-center gap-2 font-semibold"
        >
          Submit Verification
          <Check className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

