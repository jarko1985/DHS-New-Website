"use client";

import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Check } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  completed: boolean;
}

interface ProgressSidebarProps {
  currentStep: number;
  steps: Step[];
}

export default function ProgressSidebar({ currentStep, steps }: ProgressSidebarProps) {
  const progress = ((currentStep) / steps.length) * 100;

  return (
    <div 
      className="w-full lg:w-[20%] min-h-screen p-8 flex flex-col items-center justify-start"
      style={{ backgroundColor: '#0d1635' }}
    >
      {/* Circular Progress Bar */}
      <div className="w-48 h-48 mb-12">
        <CircularProgressbar
          value={progress}
          text={`${Math.round(progress)}%`}
          styles={buildStyles({
            textSize: '16px',
            pathColor: '#117f60',
            textColor: '#ffffff',
            trailColor: '#6f7273',
            backgroundColor: '#0d1635',
          })}
        />
      </div>

      {/* Steps List */}
      <div className="w-full space-y-4">
        <h3 className="text-white text-lg font-semibold mb-6 text-center">
          Verification Steps
        </h3>
        
        {steps.map((step, index) => {
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id;
          
          return (
            <div
              key={step.id}
              className={`flex items-center p-4 rounded-lg transition-all duration-300 ${
                isActive
                  ? 'bg-[#117f60] shadow-lg'
                  : isCompleted
                  ? 'bg-[#117f60]/30'
                  : 'bg-[#6f7273]/20'
              }`}
            >
              {/* Step Number or Check Icon */}
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full mr-4 ${
                  isCompleted
                    ? 'bg-[#117f60] text-white'
                    : isActive
                    ? 'bg-white text-[#117f60]'
                    : 'bg-[#6f7273] text-white'
                }`}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span className="font-bold">{step.id}</span>
                )}
              </div>

              {/* Step Title */}
              <div className="flex-1">
                <p
                  className={`font-medium ${
                    isActive || isCompleted ? 'text-white' : 'text-white/60'
                  }`}
                >
                  {step.title}
                </p>
              </div>

              {/* Active Indicator */}
              {isActive && (
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Info */}
      <div className="mt-auto pt-8 text-center">
        <p className="text-white/50 text-sm">
          Step {currentStep} of {steps.length}
        </p>
      </div>
    </div>
  );
}

