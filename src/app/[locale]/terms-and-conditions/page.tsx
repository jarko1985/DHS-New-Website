// app/terms-and-conditions/page.tsx
"use client";

import { motion } from "framer-motion";
import {
  ChevronRight,
  FileText,
  Scale,
  Shield,
  Lock,
  User,
  AlertTriangle,
  Gavel,
  Percent,
  X,
  BookOpen,
  Handshake,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const TermsAndConditionsPage = () => {
  return (
    <div className="min-h-screen bg-blue-whale text-mercury">
      {/* Gradient header */}
      <div className="w-full h-2" style={{ background: "var(--color-ramp)" }} />

      <div className="xl:max-w-[70%] mx-auto px-4 xl:px-0 py-16">
        {/* Animated header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 pl-6 relative">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-elf-green rounded-sm"></span>
                Terms and Conditions
              </h2>

              <p className="text-lg opacity-90 mt-1">
                for Direct Honest Safe International Exchange FZE
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-invert max-w-none"
        >
          {/* Section 1 */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12 hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5" />
              <span>1. Acceptance of Terms</span>
            </h2>
            <p className="mb-6">
              By accessing or using the Direct Honest Safe International
              Exchange FZE Cryptocurrency Exchange platform ("Direct Honest Safe
              International Exchange FZE" or "the Platform"), you agree to
              comply with and be bound by these Terms and Conditions ("Terms").
              If you do not agree to these Terms, please refrain from using the
              Platform.
            </p>
          </motion.section>

          {/* Section 2 */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12 hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>2. User Eligibility</span>
            </h2>
            <p className="mb-6">
              To use the Platform, you must be of legal age in your jurisdiction
              and comply with all applicable laws and regulations. By accessing
              the Platform, you represent and warrant that you meet these
              eligibility criteria.
            </p>
          </motion.section>

          {/* Section 3 */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12 hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              <span>3. Account Registration</span>
            </h2>
            <p className="mb-6">
              Certain features of the Platform require user registration. You
              agree to provide accurate, current, and complete information
              during the registration process and to promptly update such
              information to maintain its accuracy.
            </p>
          </motion.section>

          {/* Section 4 */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12 hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Lock className="w-5 h-5" />
              <span>4. Security and Confidentiality</span>
            </h2>
            <p className="mb-6">
              You are solely responsible for maintaining the confidentiality of
              your account credentials, including your password and any
              two-factor authentication (2FA) information. You agree to promptly
              notify Direct Honest Safe International Exchange FZE of any
              unauthorized access to your account or any security breach.
            </p>
          </motion.section>

          {/* Section 5 */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12 hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              <span>5. Trading Risks</span>
            </h2>
            <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
              <p className="font-medium">
                Cryptocurrency trading involves risks, and prices can be highly
                volatile. Direct Honest Safe International Exchange FZE does not
                guarantee profits, and users are advised to conduct their own
                research and seek financial advice before making any trading
                decisions.
              </p>
            </div>
          </motion.section>

          {/* Section 6 */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12 hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Gavel className="w-5 h-5" />
              <span>6. Compliance with Laws</span>
            </h2>
            <p className="mb-6">
              Users are responsible for complying with all local and
              international laws and regulations applicable to their use of the
              Direct Honest Safe International Exchange FZE platform. Direct
              Honest Safe International Exchange FZE reserves the right to
              refuse service to anyone at its discretion.
            </p>
          </motion.section>

          {/* Section 7 */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12 hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>7. User Conduct</span>
            </h2>
            <p className="mb-6">
              Users agree not to engage in any activity that may disrupt the
              operation of the platform or compromise its security. Prohibited
              activities include, but are not limited to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Hacking or unauthorized access</li>
              <li>Fraudulent activities</li>
              <li>Market manipulation</li>
              <li>Any other illegal or unethical conduct</li>
            </ul>
          </motion.section>

          {/* Section 8 */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12 hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>8. KYC Verification</span>
            </h2>
            <p className="mb-6">
              Direct Honest Safe International Exchange FZE may require users to
              undergo Know Your Customer (KYC) verification for security and
              regulatory compliance. Users agree to provide accurate and
              complete information during the verification process.
            </p>
          </motion.section>

          {/* Section 9 */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12 hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Percent className="w-5 h-5" />
              <span>9. Fees and Charges</span>
            </h2>
            <p className="mb-6">
              Users are responsible for understanding and paying any fees
              associated with their use of the platform. Direct Honest Safe
              International Exchange FZE reserves the right to modify fee
              structures and introduce new fees with prior notice.
            </p>
          </motion.section>

          {/* Section 10 */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12 hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <X className="w-5 h-5" />
              <span>10. Termination of Services</span>
            </h2>
            <p className="mb-6">
              Direct Honest Safe International Exchange FZE reserves the right
              to terminate or suspend your account and access to the platform at
              its discretion, with or without cause, and with or without notice.
            </p>
          </motion.section>

          {/* Section 11 */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12 hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              <span>11. Intellectual Property</span>
            </h2>
            <p className="mb-6">
              All intellectual property rights related to the Direct Honest Safe
              International Exchange FZE platform, including but not limited to
              trademarks, logos, and software, are the property of Direct Honest
              Safe International Exchange FZE. Users agree not to use,
              reproduce, or distribute any intellectual property without the
              express written consent of Direct Honest Safe International
              Exchange FZE.
            </p>
          </motion.section>

          {/* Section 12 */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12 hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              <span>12. Limitation of Liability</span>
            </h2>
            <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
              <p className="font-medium">
                Direct Honest Safe International Exchange FZE is not liable for
                any direct, indirect, incidental, special, or consequential
                damage arising out of or in any way connected with the use of
                the platform.
              </p>
            </div>
          </motion.section>

          {/* Section 13 */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12 hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              <span>13. Amendments to Terms</span>
            </h2>
            <p className="mb-6">
              Direct Honest Safe International Exchange FZE reserves the right
              to modify these Terms at any time. Users will be notified of any
              changes and continued use of the platform after such modifications
              constitutes acceptance of the updated Terms.
            </p>
          </motion.section>

          {/* Section 14 */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12 hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5" />
              <span>14. Governing Law and Dispute Resolution</span>
            </h2>
            <p className="mb-6">
              These Terms are governed by and construed in accordance with the
              laws of Dubai, UAE. Any dispute arising out of or in connection
              with these Terms will be resolved through arbitration in
              accordance with the rules of Dubai Courts.
            </p>
          </motion.section>

          {/* Section 15 */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12 hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>15. Contact Information</span>
            </h2>
            <p className="mb-6">
              For any inquiries regarding these Terms and Conditions, please
              contact Direct Honest Safe International Exchange FZE at{" "}
              <span className="text-elf-green">info@dhscrypto.com</span>.
            </p>
            <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
              <p className="font-medium">
                By using the Direct Honest Safe International Exchange FZE
                platform, you acknowledge that you have read, understood, and
                agreed to these Terms and Conditions.
              </p>
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
            className="border-elf-green text-elf-green hover:bg-elf-green/10 hover:text-white cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to Top <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
