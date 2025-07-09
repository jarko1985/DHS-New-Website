// app/privacy-policy/page.tsx
"use client";

import { motion } from "framer-motion";
import {
  ChevronRight,
  Shield,
  Lock,
  Gavel,
  Mail,
  Phone,
  Globe,
  AlertCircle,
  RefreshCw,
  FileText,
  ShieldOff,
  Activity,
  UserCheck,
  ShieldCheck,
  Cookie,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-blue-whale text-mercury">
      {/* Gradient header */}
      <div className="w-full h-2" style={{ background: "var(--color-ramp)" }} />

      <div className="xl:max-w-[70%] mx-auto px-4 xl:px-0 py-16 max-w-4xl">
        {/* Animated header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div>
              <h2 className="md:text-3xl text-xl font-bold text-white mb-8 pl-6 relative">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-elf-green rounded-sm"></span>
                Privacy Policy
              </h2>

              <p className="text-lg opacity-90 mt-1">
                for Direct Honest Safe International Exchange FZE
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="bg-elf-green/20 px-3 py-1 rounded-full">
              Version 01
            </span>
            <span>Last updated: June 10, 2024</span>
          </div>
        </motion.div>

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-invert max-w-none"
        >
          {/* Introduction */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12 hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="mb-4">
              At <em>Direct Honest Safe International Exchange FZE</em> ("Direct
              Honest Safe International Exchange FZE", "we", "our", or "us"), we
              are committed to respecting your privacy and safeguarding the
              personal data you provide when using our services.
            </p>
            <p className="mb-4">
              This Privacy Policy outlines how we collect, store, process, and
              protect your personal information in compliance with the latest{" "}
              <em>Financial Action Task Force (FATF) recommendations</em>, the{" "}
              <em>UAE Data Protection Law (2021)</em>, and the{" "}
              <em>Virtual Assets Regulatory Authority (VARA)</em> regulations.
            </p>
            <p className="mb-4">
              We are dedicated to maintaining transparency regarding how we
              handle your personal information and ensuring that we adhere to
              global standards for privacy, security, and legal compliance.
            </p>
            <p className="font-medium">
              By using our services, you consent to the practices described in
              this Privacy Policy. If you disagree with any part of this policy,
              we recommend that you refrain from using our services.
            </p>
          </motion.section>

          {/* Section 1 */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12 hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Lock className="w-5 h-5" />
              <span>1. Information We Collect</span>
            </h2>
            <p className="mb-6">
              We collect the following types of personal information to provide
              our services, comply with regulatory obligations, and improve your
              user experience:
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-4">
                  Personal Identification Information:
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Full Name</strong>: First and last name
                  </li>
                  <li>
                    <strong>Date of Birth</strong>: To ensure you meet
                    age-related requirements
                  </li>
                  <li>
                    <strong>Nationality</strong>: For KYC (Know Your Customer)
                    and regulatory compliance
                  </li>
                  <li>
                    <strong>Contact Information</strong>: Email address, phone
                    number, physical address
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-4">
                  Financial Information:
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Bank Details</strong>: Including bank account
                    numbers and payment methods
                  </li>
                  <li>
                    <strong>Payment Information</strong>: Credit card details,
                    payment history, and virtual asset wallet addresses
                  </li>
                  <li>
                    <strong>Transaction History</strong>: Details of virtual
                    asset purchases, sales, transfers, and exchanges
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-4">
                  Identity Verification Information (for KYC/AML compliance):
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Government-Issued IDs</strong>: Passport, national
                    ID card, or driving license
                  </li>
                  <li>
                    <strong>Proof of Address</strong>: Utility bills, bank
                    statements, or official documents
                  </li>
                  <li>
                    <strong>Biometric Data</strong>: If required for identity
                    verification (e.g., facial recognition, fingerprints)
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-4">
                  Device and Usage Data:
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>IP Address</strong>: To detect and prevent fraud,
                    and to improve security
                  </li>
                  <li>
                    <strong>Browser and Device Information</strong>: Including
                    device type, operating system, and web browser
                  </li>
                  <li>
                    <strong>Cookies and Tracking Data</strong>: For analytics,
                    user experience improvement, and personalization
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Section 2 */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12 hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Gavel className="w-5 h-5" />
              <span>2. How We Use Your Information</span>
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-3">
                  A. To Provide Our Services:
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Facilitate your access to and use of our platform</li>
                  <li>
                    Process transactions involving virtual assets and related
                    activities (purchases, transfers, exchanges)
                  </li>
                  <li>Provide account management and customer support</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">
                  B. To Comply with Legal and Regulatory Requirements:
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Know Your Customer (KYC)</strong>: Collect and
                    verify your identity to prevent fraud and comply with AML
                    (Anti-Money Laundering) and CTF (Counter-Terrorism
                    Financing) obligations as per FATF and VARA regulations.
                  </li>
                  <li>
                    <strong>AML & CTF Compliance</strong>: Monitor transactions
                    for signs of suspicious activity and report any unusual or
                    potentially illicit activities to the appropriate regulatory
                    bodies, as required by UAE law and FATF guidelines.
                  </li>
                  <li>
                    <strong>Transaction Monitoring</strong>: Conduct ongoing
                    surveillance of your financial activity to detect and
                    prevent money laundering or terrorist financing.
                  </li>
                  <li>
                    <strong>Regulatory Reporting</strong>: Share your data with
                    regulatory authorities if required by law or under legal
                    processes such as subpoenas or court orders.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">
                  C. To Improve Security:
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Enhance the security of your account by identifying and
                    mitigating potential threats or breaches
                  </li>
                  <li>
                    Use encryption to protect sensitive personal and financial
                    data
                  </li>
                  <li>Implement fraud detection systems</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">
                  D. To Communicate with You:
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Send you essential notifications (e.g., transaction
                    confirmations, account activity, system updates)
                  </li>
                  <li>
                    Provide updates about our services, promotions, or news,
                    only if you have opted in for marketing communications
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Section 3 */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12 hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6">
              3. Data Retention Policy
            </h2>
            <p className="mb-6">
              We retain your personal data only for as long as is necessary to
              fulfill the purposes set out in this Privacy Policy, and to the
              extent required to comply with applicable legal, regulatory, and
              contractual obligations:
            </p>

            <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6 mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-elf-green/20 p-2 rounded-full">
                  <Lock className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">
                    Identity Verification Data
                  </h4>
                  <p>
                    KYC documents and verification data will be retained for a
                    minimum of <strong>five (5) years</strong> after the
                    termination of our relationship with you, in compliance with
                    FATF's recommendation on record-keeping for AML/CTF
                    purposes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div className="bg-elf-green/20 p-2 rounded-full">
                  <Lock className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Transaction Records</h4>
                  <p>
                    We retain data related to virtual asset transactions,
                    including wallet addresses, transaction amounts, and dates,
                    for a minimum of <strong>five (5) years</strong> as required
                    by UAE law and VARA regulations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full">
                  <Lock className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Account Information</h4>
                  <p>
                    Account data may be retained until you request deletion or
                    termination of your account, subject to legal retention
                    requirements.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 4 */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12 hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6">
              4. Sharing and Disclosure of Your Information
            </h2>
            <p className="mb-6">
              We may share your personal data in the following scenarios:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-3">
                  A. Service Providers:
                </h3>
                <p>
                  We may engage third-party service providers to support various
                  aspects of our business operations, including but not limited
                  to payment processing, customer support, fraud prevention, and
                  identity verification. These service providers may be granted
                  access to your personal information strictly on a need-to-know
                  basis and solely for the purpose of performing their
                  designated functions on our behalf, in accordance with
                  applicable data protection laws and contractual safeguards.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">
                  B. Regulatory Authorities and Law Enforcement:
                </h3>
                <p>
                  We may disclose your information to UAE regulatory bodies,
                  including VARA, the UAE Central Bank, or other governmental
                  agencies, if required by law or to comply with legal
                  obligations such as AML/CTF regulations. This may also include
                  disclosures to law enforcement agencies if requested under
                  applicable legal processes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">
                  C. Business Transactions:
                </h3>
                <p>
                  In the event of a merger, acquisition, or sale of assets, your
                  personal information may be transferred as part of the
                  transaction. We will take reasonable steps to ensure that any
                  acquiring or successor entity complies with the terms of this
                  Privacy Policy and applicable data protection laws.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">
                  D. Other Legal Compliance:
                </h3>
                <p>
                  We may disclose your personal data in cases where it is
                  necessary to protect our legal rights, defend against legal
                  claims, or fulfill our obligations under applicable laws or
                  regulations.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 5 - Data Security */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12 hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>5. Security of Your Data</span>
            </h2>

            <p className="mb-6">
              We implement robust security measures to protect your personal
              data:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-elf-green/20 p-2 rounded-full">
                    <Lock className="w-4 h-4 text-elf-green" />
                  </div>
                  <h4 className="font-medium">Encryption</h4>
                </div>
                <p>
                  Sensitive data such as financial and identity information is
                  encrypted both during transmission and while stored.
                </p>
              </div>

              <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-elf-green/20 p-2 rounded-full">
                    <Lock className="w-4 h-4 text-elf-green" />
                  </div>
                  <h4 className="font-medium">Access Control</h4>
                </div>
                <p>
                  Access to your personal data is restricted to authorized
                  personnel only, and we use multi-factor authentication (MFA)
                  to enhance account security.
                </p>
              </div>

              <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-elf-green/20 p-2 rounded-full">
                    <Lock className="w-4 h-4 text-elf-green" />
                  </div>
                  <h4 className="font-medium">Regular Audits</h4>
                </div>
                <p>
                  We perform regular security audits and assessments to identify
                  and mitigate any vulnerabilities.
                </p>
              </div>

              <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-elf-green/20 p-2 rounded-full">
                    <AlertCircle className="w-4 h-4 text-elf-green" />
                  </div>
                  <h4 className="font-medium">Security Notice</h4>
                </div>
                <p>
                  While we take reasonable measures to safeguard your personal
                  information, no security system is 100% secure. We cannot
                  guarantee the absolute security of your data.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 6 - Your Rights */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12 hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Gavel className="w-5 h-5" />
              <span>6. Your Rights Under UAE Data Protection Law</span>
            </h2>

            <p className="mb-6">
              As per the UAE Data Protection Law (2021) and other applicable
              regulations, you have the following rights:
            </p>

            <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6 mb-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                    <Check className="w-4 h-4 text-elf-green" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Right to Access</h4>
                    <p>
                      You may request access to the personal data we hold about
                      you.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                    <Check className="w-4 h-4 text-elf-green" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Right to Rectification</h4>
                    <p>
                      You have the right to correct any inaccurate or incomplete
                      data.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                    <Check className="w-4 h-4 text-elf-green" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Right to Deletion</h4>
                    <p>
                      You may request that we delete your personal data, subject
                      to legal retention obligations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                    <Check className="w-4 h-4 text-elf-green" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">
                      Right to Object or Restrict Processing
                    </h4>
                    <p>
                      You may object to the processing of your personal data or
                      request restrictions on how it is used.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                    <Check className="w-4 h-4 text-elf-green" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">
                      Right to Data Portability
                    </h4>
                    <p>
                      You may request a copy of your data in a structured,
                      commonly used, and machine-readable format.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                    <Check className="w-4 h-4 text-elf-green" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">
                      Right to Withdraw Consent
                    </h4>
                    <p>
                      Where we rely on consent for processing, you can withdraw
                      your consent at any time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="font-medium">
              To exercise any of these rights, please contact us at the contact
              details provided in Section 10.
            </p>
          </motion.section>

          {/* Section 7 - Cookies */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12 hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Cookie className="w-5 h-5" />
              <span>7. Cookies and Tracking Technologies</span>
            </h2>

            <p className="mb-6">
              We use cookies and similar tracking technologies to improve your
              experience on our platform. Cookies enable us to:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Remember your preferences</li>
              <li>Provide personalized services</li>
              <li>Analyze site usage</li>
              <li>Improve our platform's functionality</li>
            </ul>

            <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <AlertCircle className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Cookie Management</h4>
                  <p>
                    By continuing to use our platform, you consent to our use of
                    cookies as outlined in this Privacy Policy. You can manage
                    or disable cookies through your browser settings; however,
                    please be aware that disabling cookies may impact certain
                    features and the overall functionality of the platform.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 8 - Compliance */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12 hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" />
              <span>8. Compliance with FATF, UAE, and VARA Regulations</span>
            </h2>

            <p className="mb-6">
              As a licensed virtual asset service provider,{" "}
              <em>Direct Honest Safe International Exchange FZE</em> adheres to
              the <strong>Financial Action Task Force (FATF)</strong> guidelines
              on <strong>Anti-Money Laundering (AML)</strong> and{" "}
              <strong>Counter-Terrorism Financing (CTF)</strong>. This includes:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-elf-green/20 p-2 rounded-full">
                    <UserCheck className="w-4 h-4 text-elf-green" />
                  </div>
                  <h4 className="font-medium">Know Your Customer (KYC)</h4>
                </div>
                <p>
                  We collect and verify your identity, address, and other
                  relevant details before allowing you to transact on our
                  platform.
                </p>
              </div>

              <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-elf-green/20 p-2 rounded-full">
                    <Activity className="w-4 h-4 text-elf-green" />
                  </div>
                  <h4 className="font-medium">Transaction Monitoring</h4>
                </div>
                <p>
                  We continuously monitor transactions for suspicious activity
                  and comply with FATF's requirements on reporting such
                  activities.
                </p>
              </div>

              <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-elf-green/20 p-2 rounded-full">
                    <ShieldOff className="w-4 h-4 text-elf-green" />
                  </div>
                  <h4 className="font-medium">AML & CTF Procedures</h4>
                </div>
                <p>
                  We use advanced tools and processes to detect and prevent
                  money laundering and financing of terrorism in alignment with
                  FATF's 40 recommendations.
                </p>
              </div>

              <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-elf-green/20 p-2 rounded-full">
                    <FileText className="w-4 h-4 text-elf-green" />
                  </div>
                  <h4 className="font-medium">
                    Compliance with VARA Regulations
                  </h4>
                </div>
                <p>
                  As per VARA's guidelines, we ensure that virtual asset
                  services we provide are compliant with UAE regulations for
                  data protection, financial security, and consumer protection.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 9 - Policy Changes */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12 hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <RefreshCw className="w-5 h-5" />
              <span>9. Changes to This Privacy Policy</span>
            </h2>

            <p className="mb-6">
              We reserve the right to update or amend this Privacy Policy from
              time to time to reflect changes in:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Our business practices</li>
              <li>Legal requirements</li>
              <li>Technological advancements</li>
              <li>Regulatory obligations</li>
            </ul>

            <div className="bg-blue-whale/50 border border-[--color-mercury]/20 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <AlertCircle className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Policy Updates</h4>
                  <p>
                    Any updates will be posted on this page, and the effective
                    date will be revised accordingly. Please check this page
                    periodically for the latest information. Your continued use
                    of our services after any changes constitutes your
                    acceptance of the updated Privacy Policy.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Contact Section */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12 hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6">10. Contact Us</h2>
            <p className="mb-6">
              If you have any questions regarding this Privacy Policy or the
              processing of your personal data, or if you wish to exercise any
              of your rights under this policy, please contact us at:
            </p>

            <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <Mail className="w-5 h-5 text-elf-green" />
                <span>Email: compliance@dhscrypto.com</span>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <Globe className="w-5 h-5 text-elf-green" />
                <span>Website: www.dhs.exchange</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-elf-green" />
                <span>Phone: 0585798074</span>
              </div>
            </div>
          </motion.section>
        </motion.div>

        {/* Back to top button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <Button
            variant="outline"
            className="border-elf-green text-elf-green hover:bg-elf-green/10 hover:text-mercury cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to Top <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
