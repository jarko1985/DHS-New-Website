"use client";

import React, { useState, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Camera, Check, AlertCircle } from 'lucide-react';
import Webcam from 'react-webcam';

interface LivenessCheckProps {
  onNext: (verified: boolean) => void;
  onPrevious: () => void;
}

export default function LivenessCheck({ onNext, onPrevious }: LivenessCheckProps) {
  const [cameraGranted, setCameraGranted] = useState(false);
  const [isCapturing, setIsCapturing] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const webcamRef = useRef<Webcam>(null);

  const handleGrantCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      stream.getTracks().forEach(track => track.stop());
      setCameraGranted(true);
      setError(null);
    } catch (err) {
      setError('Camera access denied. Please allow camera access to continue.');
      console.error('Camera access error:', err);
    }
  };

  const capturePhoto = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setCapturedImage(imageSrc);
      setIsCapturing(false);
      
      // Simulate face detection/verification
      setIsVerifying(true);
      setTimeout(() => {
        setIsVerifying(false);
        setIsVerified(true);
      }, 2000);
    }
  }, [webcamRef]);

  const retakePhoto = () => {
    setCapturedImage(null);
    setIsVerified(false);
    setIsCapturing(true);
  };

  const handleNext = () => {
    if (isVerified) {
      onNext(true);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-white">Liveness Verification</h2>
        <p className="text-white/70">
          Please position your face within the frame and capture a clear photo
        </p>
      </div>

      {/* Camera Section */}
      <div className="flex flex-col items-center space-y-6">
        {!cameraGranted ? (
          <div className="w-full max-w-md space-y-6">
            <div className="bg-white/10 rounded-lg p-8 text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#117f60]/20 flex items-center justify-center">
                <Camera className="w-10 h-10 text-[#117f60]" />
              </div>
              <h3 className="text-white font-semibold text-lg">Camera Access Required</h3>
              <p className="text-white/70">
                We need access to your camera to verify your identity. Your privacy is important to us.
              </p>
              <Button
                onClick={handleGrantCamera}
                className="w-full bg-[#117f60] hover:bg-[#117f60]/80 text-white py-3"
              >
                <Camera className="w-5 h-5 mr-2" />
                Grant Camera Access
              </Button>
            </div>
            {error && (
              <div className="flex items-center gap-2 text-[#e47a5a] bg-[#e47a5a]/10 p-4 rounded-lg">
                <AlertCircle className="w-5 h-5" />
                <p className="text-sm">{error}</p>
              </div>
            )}
          </div>
        ) : (
          <div className="w-full max-w-2xl space-y-6">
            {/* Camera/Photo Display */}
            <div className="relative bg-black rounded-lg overflow-hidden aspect-video">
              {!capturedImage ? (
                <>
                  <Webcam
                    ref={webcamRef}
                    audio={false}
                    screenshotFormat="image/jpeg"
                    className="w-full h-full object-cover"
                    videoConstraints={{
                      width: 1280,
                      height: 720,
                      facingMode: 'user',
                    }}
                  />
                  {/* Face Overlay Guide */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-64 h-80 border-4 border-[#117f60] rounded-full opacity-50"></div>
                  </div>
                </>
              ) : (
                <img
                  src={capturedImage}
                  alt="Captured"
                  className="w-full h-full object-cover"
                />
              )}

              {/* Verification Status Overlay */}
              {isVerifying && (
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto border-4 border-[#117f60] border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-white font-medium">Verifying your identity...</p>
                  </div>
                </div>
              )}

              {isVerified && (
                <div className="absolute top-4 right-4 bg-[#117f60] text-white px-4 py-2 rounded-full flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <span className="font-medium">Verified</span>
                </div>
              )}
            </div>

            {/* Camera Controls */}
            <div className="flex justify-center gap-4">
              {!capturedImage ? (
                <Button
                  onClick={capturePhoto}
                  className="bg-[#117f60] hover:bg-[#117f60]/80 text-white px-8 py-3 rounded-lg"
                >
                  <Camera className="w-5 h-5 mr-2" />
                  Capture Photo
                </Button>
              ) : !isVerified ? (
                <Button
                  onClick={retakePhoto}
                  className="bg-[#6f7273] hover:bg-[#6f7273]/80 text-white px-8 py-3 rounded-lg"
                >
                  Retake Photo
                </Button>
              ) : (
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center gap-2 text-[#117f60]">
                    <Check className="w-6 h-6" />
                    <span className="font-semibold">Face verified successfully!</span>
                  </div>
                  <Button
                    onClick={retakePhoto}
                    variant="outline"
                    className="text-white border-white/20 hover:bg-white/10"
                  >
                    Retake Photo
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
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
          onClick={handleNext}
          disabled={!isVerified}
          className="bg-[#117f60] hover:bg-[#117f60]/80 text-white px-8 py-2 rounded-lg flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

