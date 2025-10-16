"use client";

import React, { useState } from 'react';
import ProgressSidebar from '@/components/verify/ProgressSidebar';
import PersonalInfoForm from '@/components/verify/PersonalInfoForm';
import DocumentsForm from '@/components/verify/DocumentsForm';
import LivenessCheck from '@/components/verify/LivenessCheck';
import Summary from '@/components/verify/Summary';
import { VerificationData, PersonalInfo, Documents } from '@/lib/verification-schema';

const steps = [
  { id: 1, title: 'Personal Information', completed: false },
  { id: 2, title: 'Upload Your Documents', completed: false },
  { id: 3, title: 'Liveness Check', completed: false },
  { id: 4, title: 'Summary', completed: false },
];

export default function VerifyPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [verificationData, setVerificationData] = useState<VerificationData>({});
  const [stepsState, setStepsState] = useState(steps);

  const handleNextStep = () => {
    // Mark current step as completed
    setStepsState((prev) =>
      prev.map((step) =>
        step.id === currentStep ? { ...step, completed: true } : step
      )
    );
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const handlePreviousStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handlePersonalInfoSubmit = (data: PersonalInfo) => {
    setVerificationData((prev) => ({ ...prev, personalInfo: data }));
    handleNextStep();
  };

  const handleDocumentsSubmit = (data: Documents) => {
    setVerificationData((prev) => ({ ...prev, documents: data }));
    handleNextStep();
  };

  const handleLivenessSubmit = (verified: boolean) => {
    setVerificationData((prev) => ({ ...prev, liveness: { faceVerified: verified } }));
    handleNextStep();
  };

  const handleFinalSubmit = () => {
    console.log('Final verification data:', verificationData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row" style={{ backgroundColor: '#0d1635' }}>
      {/* Progress Sidebar */}
      <ProgressSidebar currentStep={currentStep} steps={stepsState} />

      {/* Main Content */}
      <div className="flex-1 p-2 lg:p-2 overflow-y-auto">
        <div className=" ">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
              Identity Verification
            </h1>
            <p className="text-white/70">
              Complete all steps to verify your identity and unlock full platform access
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-white/5 rounded-2xl p-6 lg:p-8 border border-white/10">
            {currentStep === 1 && (
              <PersonalInfoForm
                defaultValues={verificationData.personalInfo}
                onNext={handlePersonalInfoSubmit}
                onPrevious={handlePreviousStep}
              />
            )}

            {currentStep === 2 && (
              <DocumentsForm
                defaultValues={verificationData.documents}
                onNext={handleDocumentsSubmit}
                onPrevious={handlePreviousStep}
              />
            )}

            {currentStep === 3 && (
              <LivenessCheck
                onNext={handleLivenessSubmit}
                onPrevious={handlePreviousStep}
              />
            )}

            {currentStep === 4 && (
              <Summary
                data={verificationData}
                onPrevious={handlePreviousStep}
                onSubmit={handleFinalSubmit}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
