"use client";
import React from "react";
import { motion, cubicBezier } from "framer-motion";
import type { Variants } from "framer-motion";
import { ShieldCheck, LockKeyhole, Wallet, Banknote, FileCheck2, Eye, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";



const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: cubicBezier(0.25, 0.8, 0.25, 1) },
  },
};

const bullet = (text: string) => (
  <li className="group flex items-start gap-3 text-[15px] leading-relaxed text-white transition-transform duration-200 hover:translate-x-1">
    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 transition-colors group-hover:bg-white/15">
      <CheckCircle2 className="h-3.5 w-3.5 text-[color:var(--color-elf-green)]" />
    </span>
    <span className="transition-colors group-hover:text-white">{text}</span>
  </li>
);

export default function Page() {
  return (
    <main className="min-h-screen bg-[color:var(--color-blue-whale)] text-[color:var(--color-mercury)]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* <div className="absolute inset-0 opacity-30 [mask-image:radial-gradient(60%_60%_at_80%_20%,#000_30%,transparent_70%)] ramp-bg" /> */}
        <div className="container mx-auto px-6 py-20 lg:py-28">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="text-center md:text-left">
              <Badge className="mb-4 border-0 bg-white/10 text-[color:var(--color-mercury)] backdrop-blur transition-colors hover:bg-white/15">Direct • Honest • Safe</Badge>
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                <span className="ramp-text">Custody & Safeguarding of Assets</span>
              </h1>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-[color:var(--color-mercury)]/85 md:mx-0">
                At DHS Exchange, the safety of client assets is our highest priority. We follow a Direct, Honest, Safe approach to custody — ensuring client funds are always secure, segregated, and protected under UAE and VARA standards.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
                <Badge className="border-0 bg-[color:var(--color-elf-green)] text-white transition-colors hover:opacity-90">VARA-aligned</Badge>
                <Badge variant="outline" className="border-[color:var(--color-elf-green)] text-[color:var(--color-elf-green)] transition-colors hover:bg-[color:var(--color-elf-green)]/10">Proof‑of‑Reserves</Badge>
                <Badge variant="outline" className="border-white/20 text-white/80 transition-colors hover:bg-white/10">Independent Audits</Badge>
              </div>
            </div>

          
            <div className="relative">
             
              <Card className="relative overflow-hidden border-white/10 bg-white/5 backdrop-blur md:rounded-3xl transition-transform duration-200 hover:-translate-y-0.5">
                <CardContent className="p-6 sm:p-8">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="flex flex-col items-center gap-2 transition-transform duration-200 hover:-translate-y-0.5">
                      <div className="rounded-2xl bg-white/10 p-4 transition-colors hover:bg-white/15"><ShieldCheck className="h-8 w-8 text-[color:var(--color-elf-green)]" /></div>
                      <span className="text-sm text-white/80">Segregation</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 transition-transform duration-200 hover:-translate-y-0.5">
                      <div className="rounded-2xl bg-white/10 p-4 transition-colors hover:bg-white/15"><LockKeyhole className="h-8 w-8 text-[color:var(--color-elf-green)]" /></div>
                      <span className="text-sm text-white/80">Multi‑Sig</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 transition-transform duration-200 hover:-translate-y-0.5">
                      <div className="rounded-2xl bg-white/10 p-4 transition-colors hover:bg-white/15"><Wallet className="h-8 w-8 text-[#e47a5a]" /></div>
                      <span className="text-sm text-white/80">Cold/Hot</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

   
      <motion.section variants={sectionFade} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="container mx-auto grid gap-5 px-6 pb-10 sm:grid-cols-2 lg:grid-cols-3 lg:pb-16">
        <Card className="border-white/10 bg-white/5 backdrop-blur transition-transform duration-200 hover:-translate-y-0.5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white"><ShieldCheck className="h-5 w-5 text-[color:var(--color-elf-green)]" /> Asset Segregation</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              {bullet("Client assets are fully segregated from DHS Exchange’s own operating funds.")}
              {bullet("Segregation ensures client holdings remain legally and operationally separate, protecting clients in the event of insolvency or operational disruption.")}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-white/10 bg-white/5 backdrop-blur transition-transform duration-200 hover:-translate-y-0.5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white"><Wallet className="h-5 w-5 text-[#e47a5a]" /> Custody Model</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              {bullet("Institutional-Grade Custodian Partnership: DHS Exchange partners with Hextrust, a licensed digital asset custodian regulated in the region, to safeguard client crypto assets.")}
              {bullet("Cold Wallets: Majority of assets stored in Hextrust’s multi‑signature cold wallets, offline and secure.")}
              {bullet("Hot Wallets: Limited portion held for liquidity and fast withdrawals, monitored continuously.")}
              {bullet("AED Custody: Fiat deposits safeguarded through regulated banking partners in the UAE.")}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-white/10 bg-white/5 backdrop-blur transition-transform duration-200 hover:-translate-y-0.5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white"><LockKeyhole className="h-5 w-5 text-[color:var(--color-elf-green)]" /> Security Framework</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              {bullet("Multi‑Signature Authorization: Withdrawals require multiple approvals.")}
              {bullet("End‑to‑End Encryption: All custody operations use strong encryption.")}
              {bullet("24/7 Monitoring: Infrastructure monitored for fraud, anomalies, and cyber threats.")}
              {bullet("Independent Audits: Periodic third‑party audits for assurance.")}
            </ul>
          </CardContent>
        </Card>
      </motion.section>

     
      <section className="ramp-bg">
        <div className="container mx-auto px-6 py-8 text-center">
          <h2 className="text-lg font-semibold tracking-wide text-white">Direct. Honest. Safe.</h2>
        </div>
      </section>

     
      <motion.section variants={sectionFade} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="container mx-auto px-6 py-12 lg:py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Insurance & Risk Management */}
          <Card className="group relative overflow-hidden border-white/10 bg-white/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--color-elf-green)]/30 hover:shadow-lg hover:shadow-[color:var(--color-elf-green)]/10">
            <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-elf-green)]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <CardHeader className="relative">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-[color:var(--color-elf-green)]/20">
                <ShieldCheck className="h-6 w-6 text-[color:var(--color-elf-green)]" />
              </div>
              <CardTitle className="text-lg font-semibold text-white">Insurance & Risk Management</CardTitle>
              <p className="text-sm text-white/70">Coverage and contingency planning to protect custodial assets.</p>
            </CardHeader>
            <CardContent className="relative">
              <ul className="space-y-2 text-sm">
                {bullet("DHS Exchange, together with Hextrust, is establishing insurance coverage for custodial assets, protecting clients against theft or cyber breaches.")}
                {bullet("Risk management processes include stress‑testing and disaster recovery planning.")}
              </ul>
            </CardContent>
          </Card>

          {/* Client Rights */}
          <Card className="group relative overflow-hidden border-white/10 bg-white/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--color-elf-green)]/30 hover:shadow-lg hover:shadow-[color:var(--color-elf-green)]/10">
            <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-elf-green)]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <CardHeader className="relative">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-[color:var(--color-elf-green)]/20">
                <FileCheck2 className="h-6 w-6 text-[color:var(--color-elf-green)]" />
              </div>
              <CardTitle className="text-lg font-semibold text-white">Client Rights</CardTitle>
              <p className="text-sm text-white/70">Ownership, access, and proper use of funds.</p>
            </CardHeader>
            <CardContent className="relative">
              <ul className="space-y-2 text-sm">
                {bullet("Clients retain full ownership of their assets at all times.")}
                {bullet("Withdrawal requests are honoured in accordance with AML/KYC requirements and VARA regulations.")}
                {bullet("DHS Exchange does not use client funds for lending, investment, or operational purposes.")}
              </ul>
            </CardContent>
          </Card>

          {/* Commitment to Transparency */}
          <Card className="group relative overflow-hidden border-white/10 bg-white/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--color-elf-green)]/30 hover:shadow-lg hover:shadow-[color:var(--color-elf-green)]/10 md:col-span-2 lg:col-span-1">
            <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-elf-green)]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <CardHeader className="relative">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-[color:var(--color-elf-green)]/20">
                <Eye className="h-6 w-6 text-[color:var(--color-elf-green)]" />
              </div>
              <CardTitle className="text-lg font-semibold text-white">Commitment to Transparency</CardTitle>
              <p className="text-sm text-white/70">Public disclosures and attestations.</p>
            </CardHeader>
            <CardContent className="relative">
              <ul className="space-y-2 text-sm">
                {bullet("DHS Exchange will publish regular proof‑of‑reserves reports and independent attestations as part of our transparency initiative.")}
                {bullet("Updates will be made available in the Public Disclosures section of the website.")}
              </ul>
              <div className="mt-5 flex items-center gap-2 rounded-lg bg-white/5 p-3 text-sm text-white/70 transition-colors group-hover:bg-white/10">
                <FileCheck2 className="h-4 w-4 text-[color:var(--color-elf-green)]" />
                <span>Next disclosure cycle: Quarterly</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* CALLOUT */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <Card className="overflow-hidden border-white/10 bg-white/5 backdrop-blur">
            <div className="ramp-bg h-1 w-full" />
            <CardContent className="flex flex-col items-center gap-4 p-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
              <div className="flex flex-col items-center gap-3 md:flex-row">
                <Eye className="h-5 w-5 text-white/80" />
                <p className="text-sm text-white/80">Have questions about our custody framework? Explore our Public Disclosures.</p>
              </div>
              <a href="/disclosures" className="rounded-md bg-[color:var(--color-elf-green)] px-4 py-2 text-sm font-medium text-white shadow transition-transform duration-200 hover:-translate-y-0.5 hover:opacity-90">View Disclosures</a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FOOTER LINE */}
      <footer className="ramp-bg h-0.5 w-full" />
    </main>
  );
}
