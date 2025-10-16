# KYC Verification Components

This directory contains all components for the multi-step KYC (Know Your Customer) verification process.

## Components Overview

### 1. ProgressSidebar
- **Location**: `ProgressSidebar.tsx`
- **Purpose**: Displays circular progress bar and step list
- **Features**:
  - Circular progress indicator using `react-circular-progressbar`
  - Visual step tracking with completion status
  - Active step highlighting
  - Responsive design (30% width on desktop, full width on mobile)

### 2. PersonalInfoForm
- **Location**: `PersonalInfoForm.tsx`
- **Purpose**: Collects user's personal information
- **Features**:
  - Form validation using `react-hook-form` and `zod`
  - Date picker using ShadCN Calendar component
  - Phone number input with country code (react-phone-number-input)
  - Nationality selection with flags (react-flags-select)
  - Real-time validation and error messages
  - Previous/Next navigation buttons

### 3. DocumentsForm
- **Location**: `DocumentsForm.tsx`
- **Purpose**: Document upload functionality
- **Features**:
  - Country selection for document issuance
  - Drag-and-drop file upload areas
  - Support for passport and national ID uploads
  - File preview with size display
  - File removal functionality
  - Accepts: PNG, JPG, PDF (up to 10MB)

### 4. LivenessCheck
- **Location**: `LivenessCheck.tsx`
- **Purpose**: Face verification using camera
- **Features**:
  - Camera access request
  - Live webcam feed
  - Face overlay guide
  - Photo capture functionality
  - Simulated face verification (2-second delay)
  - Retake photo option
  - Verification status indicators

### 5. Summary
- **Location**: `Summary.tsx`
- **Purpose**: Review and submit all collected data
- **Features**:
  - Displays all collected information
  - Organized sections for each step
  - Loading state during submission (5 seconds)
  - Success animation with checkmarks
  - Terms and conditions acknowledgment

## Color Scheme

- **Background**: `#0d1635` (Dark blue)
- **Primary**: `#117f60` (Teal green)
- **Secondary**: `#6f7273` (Gray)
- **Accent**: `#e47a5a` (Coral)
- **Gradient**: `linear-gradient(90deg, #b22f26, #e47a5a, #b22f26)`

## Data Flow

1. **Personal Info** → Stored in `verificationData.personalInfo`
2. **Documents** → Stored in `verificationData.documents`
3. **Liveness** → Stored in `verificationData.liveness`
4. **Summary** → Reviews all data and submits

## Validation Schema

Located in: `src/lib/verification-schema.ts`

### PersonalInfo Schema
- firstName: min 2 characters
- lastName: min 2 characters
- dateOfBirth: required Date
- phoneNumber: min 10 characters
- email: valid email format
- nationality: min 2 characters (country code)

### Documents Schema
- country: min 2 characters (country code)
- passport: file required
- nationalId: file required

### Liveness Schema
- faceVerified: boolean (must be true)

## Dependencies

- `react-circular-progressbar` - Progress visualization
- `react-hook-form` - Form management
- `zod` - Schema validation
- `@hookform/resolvers` - Zod integration
- `react-phone-number-input` - Phone input
- `react-flags-select` - Country/nationality selection
- `react-webcam` - Camera access
- `date-fns` - Date formatting
- `lucide-react` - Icons

## Usage Example

```tsx
import VerifyPage from '@/app/[locale]/verify/page';

// The page handles all state management internally
// Navigate to /verify to access the KYC flow
```

## Styling

Custom styles are defined in `src/app/[locale]/globals.css`:
- `.phone-input-custom` - Phone input styling
- `.nationality-select` - Flags select styling
- Custom animations for progress and completion

## Future Enhancements

1. Backend API integration for data submission
2. Real face detection/OCR implementation
3. Document OCR for auto-filling personal info
4. Multi-language support
5. Email verification
6. SMS verification
7. Progress persistence (save and resume later)

