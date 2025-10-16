"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { personalInfoSchema, PersonalInfo } from '@/lib/verification-schema';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import ReactFlagsSelect from 'react-flags-select';
import { format } from 'date-fns';

interface PersonalInfoFormProps {
  defaultValues?: PersonalInfo;
  onNext: (data: PersonalInfo) => void;
  onPrevious: () => void;
}

export default function PersonalInfoForm({ defaultValues, onNext, onPrevious }: PersonalInfoFormProps) {
  const [phoneValue, setPhoneValue] = useState<string>(defaultValues?.phoneNumber || '');
  const [selectedCountry, setSelectedCountry] = useState<string>(defaultValues?.nationality || '');
  const [date, setDate] = useState<Date | undefined>(defaultValues?.dateOfBirth);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
  } = useForm<PersonalInfo>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues,
  });

  const onSubmit = (data: PersonalInfo) => {
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-6">
        {/* First Name */}
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-white font-medium">
            First Name <span className="text-[#e47a5a]">*</span>
          </Label>
          <Input
            id="firstName"
            placeholder="Enter your first name"
            {...register('firstName')}
            className="bg-white/10 border-[#6f7273] text-white placeholder:text-white/50 focus:border-[#117f60] focus:ring-[#117f60]"
          />
          {errors.firstName && (
            <p className="text-[#e47a5a] text-sm">{errors.firstName.message}</p>
          )}
        </div>

        {/* Last Name */}
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-white font-medium">
            Last Name <span className="text-[#e47a5a]">*</span>
          </Label>
          <Input
            id="lastName"
            placeholder="Enter your last name"
            {...register('lastName')}
            className="bg-white/10 border-[#6f7273] text-white placeholder:text-white/50 focus:border-[#117f60] focus:ring-[#117f60]"
          />
          {errors.lastName && (
            <p className="text-[#e47a5a] text-sm">{errors.lastName.message}</p>
          )}
        </div>

        {/* Date of Birth */}
        <div className="space-y-2">
          <Label className="text-white font-medium">
            Date of Birth <span className="text-[#e47a5a]">*</span>
          </Label>
          <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal bg-white/10 border-[#6f7273] text-white hover:bg-white/20 hover:text-white"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, 'PPP') : <span className="text-white/50">Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-[#1b232e] border-[#6f7273] shadow-xl">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(selectedDate: Date | undefined) => {
                  setDate(selectedDate);
                  setValue('dateOfBirth', selectedDate as Date);
                  trigger('dateOfBirth');
                  setIsCalendarOpen(false); // Close the popover when date is selected
                }}
                disabled={(date: Date) =>
                  date > new Date() || date < new Date('1900-01-01')
                }
                initialFocus
                captionLayout="dropdown-months"
                fromYear={1900}
                toYear={new Date().getFullYear()}
              />
            </PopoverContent>
          </Popover>
          {errors.dateOfBirth && (
            <p className="text-[#e47a5a] text-sm">{errors.dateOfBirth.message}</p>
          )}
        </div>

        {/* Phone Number */}
        <div className="space-y-2">
          <Label className="text-white font-medium">
            Phone Number <span className="text-[#e47a5a]">*</span>
          </Label>
          <PhoneInput
            international
            defaultCountry="AE"
            value={phoneValue}
            onChange={(value) => {
              setPhoneValue(value || '');
              setValue('phoneNumber', value || '');
              trigger('phoneNumber');
            }}
            className="phone-input-custom"
          />
          {errors.phoneNumber && (
            <p className="text-[#e47a5a] text-sm">{errors.phoneNumber.message}</p>
          )}
        </div>

        {/* Email Address */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white font-medium">
            Email Address <span className="text-[#e47a5a]">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email address"
            {...register('email')}
            className="bg-white/10 border-[#6f7273] text-white placeholder:text-white/50 focus:border-[#117f60] focus:ring-[#117f60]"
          />
          {errors.email && (
            <p className="text-[#e47a5a] text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Nationality */}
        <div className="space-y-2">
          <Label className="text-white font-medium">
            Nationality <span className="text-[#e47a5a]">*</span>
          </Label>
          <ReactFlagsSelect
            selected={selectedCountry}
            onSelect={(code) => {
              setSelectedCountry(code);
              setValue('nationality', code);
              trigger('nationality');
            }}
            searchable
            searchPlaceholder="Search countries"
            className="nationality-select"
          />
          {errors.nationality && (
            <p className="text-[#e47a5a] text-sm">{errors.nationality.message}</p>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between pt-6">
        <Button
          type="button"
          onClick={onPrevious}
          disabled
          className="bg-[#6f7273] hover:bg-[#6f7273]/80 text-white px-8 py-2 rounded-lg flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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

