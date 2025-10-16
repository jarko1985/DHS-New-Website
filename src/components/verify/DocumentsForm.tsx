"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { documentsSchema, Documents } from '@/lib/verification-schema';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { ChevronLeft, ChevronRight, Upload, X, FileText } from 'lucide-react';
import ReactFlagsSelect from 'react-flags-select';

interface DocumentsFormProps {
  defaultValues?: Documents;
  onNext: (data: Documents) => void;
  onPrevious: () => void;
}

export default function DocumentsForm({ defaultValues, onNext, onPrevious }: DocumentsFormProps) {
  const [selectedCountry, setSelectedCountry] = useState<string>(defaultValues?.country || '');
  const [passportFile, setPassportFile] = useState<File | null>(null);
  const [nationalIdFile, setNationalIdFile] = useState<File | null>(null);

  const {
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
  } = useForm<Documents>({
    resolver: zodResolver(documentsSchema),
    defaultValues,
  });

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: 'passport' | 'nationalId'
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      if (type === 'passport') {
        setPassportFile(file);
        setValue('passport', file);
      } else {
        setNationalIdFile(file);
        setValue('nationalId', file);
      }
      trigger(type);
    }
  };

  const removeFile = (type: 'passport' | 'nationalId') => {
    if (type === 'passport') {
      setPassportFile(null);
      setValue('passport', null);
    } else {
      setNationalIdFile(null);
      setValue('nationalId', null);
    }
  };

  const onSubmit = (data: Documents) => {
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-6">
        {/* Country Select */}
        <div className="space-y-2">
          <Label className="text-white font-medium">
            Country of Document Issuance <span className="text-[#e47a5a]">*</span>
          </Label>
          <ReactFlagsSelect
            selected={selectedCountry}
            onSelect={(code) => {
              setSelectedCountry(code);
              setValue('country', code);
              trigger('country');
            }}
            searchable
            searchPlaceholder="Search countries"
            className="nationality-select"
          />
          {errors.country && (
            <p className="text-[#e47a5a] text-sm">{errors.country.message}</p>
          )}
        </div>

        {/* Upload Passport */}
        <div className="space-y-2">
          <Label className="text-white font-medium">
            Upload Passport <span className="text-[#e47a5a]">*</span>
          </Label>
          <div className="border-2 border-dashed border-[#6f7273] rounded-lg p-6 hover:border-[#117f60] transition-colors">
            {!passportFile ? (
              <label className="cursor-pointer flex flex-col items-center justify-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#117f60]/20 flex items-center justify-center">
                  <Upload className="w-8 h-8 text-[#117f60]" />
                </div>
                <div className="text-center">
                  <p className="text-white font-medium">Click to upload passport</p>
                  <p className="text-white/50 text-sm mt-1">
                    PNG, JPG, PDF up to 10MB
                  </p>
                </div>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*,.pdf"
                  onChange={(e) => handleFileChange(e, 'passport')}
                />
              </label>
            ) : (
              <div className="flex items-center justify-between bg-white/10 p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <FileText className="w-8 h-8 text-[#117f60]" />
                  <div>
                    <p className="text-white font-medium">{passportFile.name}</p>
                    <p className="text-white/50 text-sm">
                      {(passportFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile('passport')}
                  className="text-[#e47a5a] hover:text-[#e47a5a]/80"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
          {errors.passport && (
            <p className="text-[#e47a5a] text-sm">{errors.passport.message as string}</p>
          )}
        </div>

        {/* Upload National ID */}
        <div className="space-y-2">
          <Label className="text-white font-medium">
            Upload National ID <span className="text-[#e47a5a]">*</span>
          </Label>
          <div className="border-2 border-dashed border-[#6f7273] rounded-lg p-6 hover:border-[#117f60] transition-colors">
            {!nationalIdFile ? (
              <label className="cursor-pointer flex flex-col items-center justify-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#117f60]/20 flex items-center justify-center">
                  <Upload className="w-8 h-8 text-[#117f60]" />
                </div>
                <div className="text-center">
                  <p className="text-white font-medium">Click to upload national ID</p>
                  <p className="text-white/50 text-sm mt-1">
                    PNG, JPG, PDF up to 10MB
                  </p>
                </div>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*,.pdf"
                  onChange={(e) => handleFileChange(e, 'nationalId')}
                />
              </label>
            ) : (
              <div className="flex items-center justify-between bg-white/10 p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <FileText className="w-8 h-8 text-[#117f60]" />
                  <div>
                    <p className="text-white font-medium">{nationalIdFile.name}</p>
                    <p className="text-white/50 text-sm">
                      {(nationalIdFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile('nationalId')}
                  className="text-[#e47a5a] hover:text-[#e47a5a]/80"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
          {errors.nationalId && (
            <p className="text-[#e47a5a] text-sm">{errors.nationalId.message as string}</p>
          )}
        </div>
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
          type="submit"
          className="bg-[#117f60] hover:bg-[#117f60]/80 text-white px-8 py-2 rounded-lg flex items-center gap-2"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </form>
  );
}

