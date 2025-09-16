"use client";

import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, Calendar, Shield, ArrowLeft, Camera, Save, X, Trash2, Key, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import toast from "react-hot-toast";

interface ProfileFormData {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  image: string;
}

export default function ProfilePage() {
  const { data: session, status, update } = useSession();
  const t = useTranslations("Profile");
  const router = useRouter();
  const locale = useLocale();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [twoFAEnabled, setTwoFAEnabled] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<ProfileFormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      image: '',
    },
  });

  // Load user data from API
  const loadUserData = async () => {
    try {
      const response = await fetch('/api/profile');
      
      if (response.ok) {
        const result = await response.json();
        const user = result.user;
        
        // Use name field from DB if available, otherwise split firstName/lastName
        let firstName = user.firstName || '';
        let lastName = user.lastName || '';
        let username = user.username || '';
        
        // If we have a name field but no firstName/lastName, split the name
        if (user.name && (!user.firstName || !user.lastName)) {
          const nameParts = user.name.split(' ');
          firstName = nameParts[0] || '';
          lastName = nameParts.slice(1).join(' ') || '';
        }
        
        // If no username exists, generate one from name
        if (!username && user.name) {
          username = user.name.toLowerCase().replace(/\s+/g, '');
        }
        
        const userData = {
          firstName: firstName,
          lastName: lastName,
          email: user.email || '',
          username: username,
          image: user.image || '',
        };
        
        setValue('firstName', userData.firstName);
        setValue('lastName', userData.lastName);
        setValue('email', userData.email);
        setValue('username', userData.username);
        setValue('image', userData.image);
        
        // Update original data for change detection
        setOriginalData(userData);
      } else if (response.status === 404) {
        // User not found in MongoDB, create profile from session data
        console.log('User not found in MongoDB, creating profile from session data');
        if (session?.user) {
          const nameParts = session.user.name?.split(' ') || ['', ''];
          const userData = {
            firstName: nameParts[0] || '',
            lastName: nameParts.slice(1).join(' ') || '', // Handle multiple last names
            email: session.user.email || '',
            username: session.user.name?.toLowerCase().replace(/\s+/g, '') || '',
            image: session.user.image || '',
          };
          
          // Create user profile in MongoDB
          try {
            const createResponse = await fetch('/api/profile', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(userData),
            });
            
            if (createResponse.ok) {
              console.log('Profile created successfully');
              // Profile created, now load it
              const createResult = await createResponse.json();
              const createdUser = createResult.user;
              
              // Use name field from DB if available, otherwise split firstName/lastName
              let createdFirstName = createdUser.firstName || '';
              let createdLastName = createdUser.lastName || '';
              let createdUsername = createdUser.username || '';
              
              // If we have a name field but no firstName/lastName, split the name
              if (createdUser.name && (!createdUser.firstName || !createdUser.lastName)) {
                const nameParts = createdUser.name.split(' ');
                createdFirstName = nameParts[0] || '';
                createdLastName = nameParts.slice(1).join(' ') || '';
              }
              
              // If no username exists, generate one from name
              if (!createdUsername && createdUser.name) {
                createdUsername = createdUser.name.toLowerCase().replace(/\s+/g, '');
              }
              
              const createdUserData = {
                firstName: createdFirstName,
                lastName: createdLastName,
                email: createdUser.email || '',
                username: createdUsername,
                image: createdUser.image || '',
              };
              
              setValue('firstName', createdUserData.firstName);
              setValue('lastName', createdUserData.lastName);
              setValue('email', createdUserData.email);
              setValue('username', createdUserData.username);
              setValue('image', createdUserData.image);
              
              setOriginalData(createdUserData);
            } else {
              // If creation fails, use session data as fallback
              setValue('firstName', userData.firstName);
              setValue('lastName', userData.lastName);
              setValue('email', userData.email);
              setValue('username', userData.username);
              setValue('image', userData.image);
              
              setOriginalData(userData);
            }
          } catch (createError) {
            console.error('Failed to create profile:', createError);
            // Use session data as fallback
            setValue('firstName', userData.firstName);
            setValue('lastName', userData.lastName);
            setValue('email', userData.email);
            setValue('username', userData.username);
            setValue('image', userData.image);
            
            setOriginalData(userData);
          }
        }
      } else {
        throw new Error(`API error: ${response.status}`);
      }
    } catch (error) {
      console.error('Failed to load user data:', error);
      // Fallback to session data
      if (session?.user) {
        const nameParts = session.user.name?.split(' ') || ['', ''];
        const fallbackData = {
          firstName: nameParts[0] || '',
          lastName: nameParts.slice(1).join(' ') || '', // Handle multiple last names
          email: session.user.email || '',
          username: session.user.name?.toLowerCase().replace(/\s+/g, '') || '',
          image: session.user.image || '',
        };
        
        setValue('firstName', fallbackData.firstName);
        setValue('lastName', fallbackData.lastName);
        setValue('email', fallbackData.email);
        setValue('username', fallbackData.username);
        setValue('image', fallbackData.image);
        
        setOriginalData(fallbackData);
      }
    }
  };

  // Load user data when component mounts or session changes
  useEffect(() => {
    if (session?.user) {
      loadUserData();
    }
  }, [session, setValue]);

  const watchedFields = watch();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push(`/${locale}/login`);
    }
  }, [status, router, locale]);

  const [originalData, setOriginalData] = useState<ProfileFormData>({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    image: '',
  });

  // Update original data when user data is loaded
  useEffect(() => {
    if (session?.user) {
      const nameParts = session.user.name?.split(' ') || ['', ''];
      const newOriginalData = {
        firstName: nameParts[0] || '',
        lastName: nameParts.slice(1).join(' ') || '', // Handle multiple last names
        email: session.user.email || '',
        username: session.user.name?.toLowerCase().replace(/\s+/g, '') || '',
        image: session.user.image || '',
      };
      setOriginalData(newOriginalData);
    }
  }, [session]);

  useEffect(() => {
    // Check if form has changes compared to original data
    const hasFormChanges = 
      watchedFields.firstName !== originalData.firstName ||
      watchedFields.lastName !== originalData.lastName ||
      watchedFields.email !== originalData.email ||
      watchedFields.username !== originalData.username ||
      watchedFields.image !== originalData.image;
    
    setHasChanges(hasFormChanges);
  }, [watchedFields, originalData]);

  const handleSave = async (data: ProfileFormData) => {
    setIsLoading(true);
    try {
      // Make API call to update the user profile
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          username: data.username,
          image: data.image,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to update profile');
      }

      // Update the session with new data
      await update({
        ...session,
        user: {
          ...session?.user,
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          image: data.image,
        }
      });

      // Update original data to reflect the saved changes
      setOriginalData({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        username: data.username,
        image: data.image,
      });

      toast.success(t("profileUpdated"));
      setIsEditing(false);
      setHasChanges(false);
    } catch (error) {
      console.error("Profile update error:", error);
      const errorMessage = error instanceof Error ? error.message : t("updateError");
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    // Reset form to original data
    setValue('firstName', originalData.firstName);
    setValue('lastName', originalData.lastName);
    setValue('email', originalData.email);
    setValue('username', originalData.username);
    setValue('image', originalData.image);
    
    setIsEditing(false);
    setHasChanges(false);
  };

  const handleDeleteAccount = () => {
    if (confirm(t("confirmDelete"))) {
      // Here you would implement account deletion logic
      toast.success(t("accountDeleted"));
      router.push(`/${locale}`);
    }
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast.error('Please select an image file');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('File size must be less than 5MB');
      return;
    }

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        // Update the image URL in the form
        setValue('image', data.imageUrl);
        toast.success('Photo uploaded successfully!');
      } else {
        toast.error(data.error || 'Upload failed');
      }
    } catch (error) {
      console.error('Upload error:', error);
      toast.error('Upload failed');
    } finally {
      setIsUploading(false);
    }
  };

  const handleChangePassword = () => {
    router.push(`/${locale}/forgot-password`);
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-blue-whale flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-mercury text-center py-10"
        >
          Loading...
        </motion.div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-blue-whale text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 xl:px-0 px-4 max-w-7xl mx-auto"
        >
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 text-mercury hover:text-white transition-colors duration-200 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("backToHome")}
          </Link>
          <h1 className="text-3xl font-bold text-white">{t("title")}</h1>
          <p className="text-mercury mt-2">{t("subtitle")}</p>
        </motion.div>

        {/* Profile Cards Container */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto xl:px-0 px-4">
          {/* Left Box - Profile Information */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-[#1A0A2E] to-[#2A1A4A] rounded-xl p-8 shadow-2xl border border-white/10 min-h-[600px] flex flex-col"
          >
            <form onSubmit={handleSubmit(handleSave)} className="space-y-6 flex-1 flex flex-col">
              {/* Profile Photo Section */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="text-center mb-8"
              >
                <div className="relative inline-block">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-elf-green to-[#e47a5a] flex items-center justify-center shadow-lg overflow-hidden">
                    {watch('image') ? (
                      <img
                        src={watch('image')}
                        alt="Profile"
                        className="w-32 h-32 rounded-full object-cover"
                      />
                    ) : (
                      <User className="w-16 h-16 text-white" />
                    )}
                  </div>
                  
                  {/* Camera Icon Overlay */}
                  <label className="absolute bottom-0 right-0 transform bg-elf-green hover:bg-elf-green/80 text-white p-2 rounded-full shadow-lg transition-colors duration-200 cursor-pointer">
                    <Camera className="w-4 h-4" />
                    <input
                      type="file"
                      accept="image/*"
                      capture="environment"
                      onChange={handleImageUpload}
                      className="hidden"
                      disabled={isUploading}
                    />
                  </label>
                </div>
                <p className="text-sm text-mercury">
                  {isUploading ? 'Uploading...' : t("clickToReplace")}
                </p>
              </motion.div>

              {/* Form Fields */}
              <div className="space-y-4">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="grid grid-cols-2 gap-4"
                >
                  <div>
                    <label className="block text-sm font-medium text-mercury mb-2">
                      {t("firstName")}
                    </label>
                    <Input
                      {...register("firstName", { required: t("firstNameRequired") })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-mercury focus:border-elf-green"
                      placeholder={t("firstNamePlaceholder")}
                    />
                    {errors.firstName && (
                      <p className="text-red-[#e47a5a] text-xs mt-1">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-mercury mb-2">
                      {t("lastName")}
                    </label>
                    <Input
                      {...register("lastName", { required: t("lastNameRequired") })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-mercury focus:border-elf-green"
                      placeholder={t("lastNamePlaceholder")}
                    />
                    {errors.lastName && (
                      <p className="text-red-[#e47a5a] text-xs mt-1">{errors.lastName.message}</p>
                    )}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <label className="block text-sm font-medium text-mercury mb-2">
                    {t("email")}
                  </label>
                  <Input
                    {...register("email", { 
                      required: t("emailRequired"),
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: t("emailInvalid")
                      }
                    })}
                    type="email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-mercury focus:border-elf-green"
                    placeholder={t("emailPlaceholder")}
                  />
                  {errors.email && (
                    <p className="text-[#e47a5a] text-xs mt-1">{errors.email.message}</p>
                  )}
                </motion.div>

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  <label className="block text-sm font-medium text-mercury mb-2">
                    {t("username")}
                  </label>
                  <Input
                    {...register("username", { required: t("usernameRequired") })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-mercury focus:border-elf-green"
                    placeholder={t("usernamePlaceholder")}
                  />
                  {errors.username && (
                    <p className="text-[#e47a5a] text-xs mt-1">{errors.username.message}</p>
                  )}
                </motion.div>
              </div>

              {/* Action Buttons */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-3 pt-6"
              >
                <Button
                  type="button"
                  onClick={handleDeleteAccount}
                  variant="destructive"
                  className="flex-1 bg-[#e47a5a] hover:-translate-y-1 hover:scale-105 text-white"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  {t("deleteAccount")}
                </Button>
                
                <Button
                  type="button"
                  onClick={handleCancel}
                  variant="outline"
                  className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:-translate-y-1 hover:scale-105"
                >
                  <X className="w-4 h-4 mr-2" />
                  {t("cancel")}
                </Button>
                
                <Button
                  type="submit"
                  disabled={!hasChanges || isLoading}
                  className="flex-1 bg-gradient-to-r from-elf-green to-[#e47a5a] hover:opacity-90 hover:-translate-y-1 hover:scale-105 text-white"
                >
                  {isLoading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Save className="w-4 h-4 mr-2" />
                    </motion.div>
                  ) : (
                    <Save className="w-4 h-4 mr-2" />
                  )}
                  {t("saveChanges")}
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Right Box - Security Controls */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-[#1A0A2E] to-[#2A1A4A] rounded-xl p-8 shadow-2xl border border-white/10 min-h-[600px] flex flex-col"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="space-y-6 flex-1 flex flex-col"
            >
              <div className="text-center mb-8">
                <ShieldCheck className="w-16 h-16 text-elf-green mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-white">{t("securityTitle")}</h2>
                <p className="text-mercury">{t("securitySubtitle")}</p>
              </div>

              {/* 2FA Toggle */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10"
              >
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-elf-green" />
                  <div>
                    <p className="text-white font-medium">{t("twoFactorAuth")}</p>
                    <p className="text-sm text-mercury">{t("twoFactorDesc")}</p>
                  </div>
                </div>
                <Switch
                  checked={twoFAEnabled}
                  onCheckedChange={setTwoFAEnabled}
                  className="data-[state=checked]:bg-elf-green"
                />
              </motion.div>

              {/* Change Password */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10"
              >
                <div className="flex items-center gap-3">
                  <Key className="w-5 h-5 text-elf-green" />
                  <div>
                    <p className="text-white font-medium">{t("changePassword")}</p>
                    <p className="text-sm text-mercury">{t("changePasswordDesc")}</p>
                  </div>
                </div>
                <Button
                  onClick={handleChangePassword}
                  variant="outline"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                >
                  {t("change")}
                </Button>
              </motion.div>

              {/* Security Status */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                className="p-4 bg-gradient-to-r from-elf-green/10 to-[#e47a5a]/10 rounded-lg border border-elf-green/20"
              >
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-5 h-5 text-elf-green" />
                  <p className="text-white font-medium">{t("securityStatus")}</p>
                </div>
                <p className="text-sm text-mercury">{t("securityStatusDesc")}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
