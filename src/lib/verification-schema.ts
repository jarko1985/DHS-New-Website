import { z } from 'zod';

export const personalInfoSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  dateOfBirth: z.date({
    required_error: 'Date of birth is required',
  }),
  phoneNumber: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  nationality: z.string().min(2, 'Please select your nationality'),
});

export const documentsSchema = z.object({
  country: z.string().min(2, 'Please select your country'),
  passport: z.any().refine((file) => file !== null && file !== undefined, {
    message: 'Please upload your passport',
  }),
  nationalId: z.any().refine((file) => file !== null && file !== undefined, {
    message: 'Please upload your national ID',
  }),
});

export const livenessSchema = z.object({
  faceVerified: z.boolean().refine((val) => val === true, {
    message: 'Please complete the liveness check',
  }),
});

export type PersonalInfo = z.infer<typeof personalInfoSchema>;
export type Documents = z.infer<typeof documentsSchema>;
export type Liveness = z.infer<typeof livenessSchema>;

export interface VerificationData {
  personalInfo?: PersonalInfo;
  documents?: Documents;
  liveness?: Liveness;
}

