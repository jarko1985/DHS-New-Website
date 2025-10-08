'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';

export default function Disclaimer() {
  const t = useTranslations('MarketExplorer.disclaimer');

  return (
    <Card className="bg-[var(--color-blue)]/40 border border-white/10 backdrop-blur-md text-[var(--color-mercury)] shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset]">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-[var(--color-elf-green)]" />
          {t('title')}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm leading-relaxed text-[var(--color-mercury)]/90">
        <p>{t('content1')}</p>
        <p>{t('content2')}</p>
      </CardContent>
    </Card>
  );
}
