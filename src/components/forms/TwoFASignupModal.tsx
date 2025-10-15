'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface TwoFASignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (secret: string) => void;
  email: string;
  name: string;
}

export default function TwoFASignupModal({ 
  isOpen, 
  onClose, 
  onSuccess, 
  email, 
  name 
}: TwoFASignupModalProps) {
  const t = useTranslations('twoFactor');
  const [step, setStep] = useState<'setup' | 'verify'>('setup');
  const [qrCode, setQrCode] = useState('');
  const [secret, setSecret] = useState('');
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    if (isOpen && step === 'setup') {
      generateSecret();
    }
  }, [isOpen, step]);

  const generateSecret = async () => {
    setIsGenerating(true);
    try {
      const response = await fetch('/api/2fa/setup-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name }),
      });

      const data = await response.json();

      if (response.ok) {
        setQrCode(data.qrCode);
        setSecret(data.secret);
      } else {
        toast.error(data.error || t('setup_error'));
      }
    } catch (error) {
      toast.error(t('setup_error'));
    } finally {
      setIsGenerating(false);
    }
  };

  const verifyToken = async () => {
    if (!token) {
      toast.error(t('enter_token_error'));
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/2fa/verify-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, secret }),
      });

      const data = await response.json();

      if (response.ok && data.verified) {
        toast.success(t('success_message'));
        onSuccess(secret);
        // Don't close here, let parent handle it
      } else {
        toast.error(data.error || t('invalid_token'));
      }
    } catch (error) {
      toast.error(t('verify_error'));
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    // Prevent closing during setup as 2FA is mandatory
    toast.error(t('mandatory_error'));
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent 
        className="bg-[#0d1635] border-[0.5px] border-[#117f60] text-[#e2dedc] max-w-md"
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle className="text-xl text-[#e2dedc] font-bold">
            {step === 'setup' ? t('setup_title_required') : t('verify_title')}
          </DialogTitle>
        </DialogHeader>

        {step === 'setup' ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
            {isGenerating ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#e47a5a] mx-auto"></div>
                <p className="mt-2 text-[#e2dedc]">{t('generating_qr')}</p>
              </div>
            ) : (
              <>
                <div className="text-center">
                  <p className="text-[#e2dedc] mb-4">
                    {t('scan_instruction')}
                  </p>
                  {qrCode && (
                    <Card className="bg-[#e2dedc] border-[#117f60]">
                      <CardContent className="p-4">
                        <img src={qrCode} alt="QR Code" className="mx-auto" />
                      </CardContent>
                    </Card>
                  )}
                </div>

                <div className="space-y-2">
                  <Label className="text-[#117f60] font-medium">{t('manual_entry_label')}</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      value={secret}
                      readOnly
                      className="bg-[#0f1415] text-[#e2dedc] border-[#117f60] placeholder:text-[#6f7273]"
                    />
                    <Button
                      onClick={() => {
                        navigator.clipboard.writeText(secret);
                        toast.success(t('secret_copied'));
                      }}
                      variant="outline"
                      size="sm"
                      className="border-[#117f60] text-[#117f60] hover:bg-[#117f60] hover:text-[#e2dedc]"
                    >
                      {t('copy_button')}
                    </Button>
                  </div>
                </div>

                <div className="bg-[#e47a5a] bg-opacity-10 border border-[#e47a5a] rounded-md p-3 mt-4">
                  <p className="text-[#e47a5a] text-sm font-medium">
                    {t('mandatory_warning')}
                  </p>
                </div>

                <div className="flex space-x-2 pt-4">
                  <Button
                    onClick={() => setStep('verify')}
                    className="bg-[#e47a5a] hover:bg-[#b22f26] text-white flex-1 font-medium"
                  >
                    {t('next_button')}
                  </Button>
                </div>
              </>
            )}
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
            <div className="text-center">
              <p className="text-[#e2dedc] mb-4">
                {t('enter_code_instruction')}
              </p>
            </div>

            <div className="space-y-2">
              <Label className="text-[#117f60] font-medium">{t('verification_code_label')}</Label>
              <Input
                value={token}
                onChange={e => setToken(e.target.value)}
                placeholder={t('verification_code_placeholder')}
                maxLength={6}
                className="bg-[#0f1415] text-[#e2dedc] border-[#117f60] text-center text-lg tracking-widest placeholder:text-[#6f7273]"
              />
            </div>

            <div className="flex space-x-2 pt-4">
              <Button
                onClick={verifyToken}
                disabled={isLoading}
                className="bg-[#e47a5a] hover:bg-[#b22f26] text-white flex-1 font-medium disabled:opacity-50"
              >
                {isLoading ? t('verifying') : t('verify_complete_button')}
              </Button>
              <Button
                onClick={() => setStep('setup')}
                variant="outline"
                className="border-[#117f60] text-[#117f60] hover:bg-[#117f60] hover:text-[#e2dedc] flex-1"
              >
                {t('back_button')}
              </Button>
            </div>
          </motion.div>
        )}
      </DialogContent>
    </Dialog>
  );
}

