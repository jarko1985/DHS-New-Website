// app/whistleblowing-policy/page.tsx
"use client";

import { motion } from "framer-motion";
import {
  ChevronRight,
  ShieldAlert,
  FileText,
  User,
  Mail,
  Lock,
  Gavel,
  Scale,
  AlertTriangle,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const WhistleblowingPolicyPage = () => {
  return (
    <div className="min-h-screen bg-blue-whale text-mercury">
      {/* Gradient header */}
      <div className="w-full h-2" style={{ background: "var(--color-ramp)" }} />

      <div className="mx-auto px-4 xl:px-0 py-16 xl:max-w-[70%]">
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
                WHISTLEBLOWING POLICY
              </h2>
              <p className="text-lg opacity-90 mt-1 pl-6">
                Direct Honest Safe International Exchange FZE
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
          {/* Section 1 - Introduction */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              <span>1. Introduction</span>
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-4">1.1 Background</h3>
                <p className="mb-4">
                  The Company shall be committed towards adhering to the highest
                  standards of governance, openness, transparency, honesty,
                  integrity, accountability and ethical, moral & legal conduct
                  of business operations. The Company shall create an open,
                  transparent and a safe working environment where its staff
                  shall be encouraged to report any irregularities within the
                  Company, in good faith.
                </p>
                <p className="mb-4">
                  The Whistleblowing right is granted to a staff to speak out
                  when he or she believes that there are good reasons to believe
                  that an instruction received, an operation being studied or,
                  more generally, a situation has arisen that is not compliant
                  with the rules governing the Company.
                </p>
                <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
                  <p className="font-medium">
                    All Company staff may exercise their right to whistleblowing
                    in relation to actions they become aware of, either directly
                    or indirectly, in the course of their professional duties.
                    This right must be exercised responsibly and not be misused
                    for purposes of defamation, denigration, or vilification.
                    Any reports received will be investigated confidentially by
                    the designated recipient.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-4">1.2 Objective</h3>
                <p className="mb-4">
                  a) The Whistleblowing Policy ("Policy") aims to enable the
                  Company's staff to report the following incidents:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Accounting irregularities</li>
                    <li>Violations of regulations/breach of statutory laws</li>
                    <li>Harassment</li>
                    <li>Conflicts of interest</li>
                    <li>Corruption</li>
                    <li>Falsification/destruction of company records</li>
                    <li>Workplace violence</li>
                    <li>Discrimination</li>
                    <li>Release of proprietary information</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Covering up deficiencies in internal controls</li>
                    <li>Embezzlement and frauds</li>
                    <li>Client privacy violations</li>
                    <li>Unacceptable practices</li>
                    <li>Market Misconduct</li>
                    <li>Misrepresentation of facts</li>
                    <li>Health and safety risk</li>
                    <li>Abuse of power or authority</li>
                    <li>Misuse of Company's assets</li>
                  </ul>
                </div>
                <p className="mb-4">b) This Policy provides for:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>
                    An independent and secure avenue for Whistle-blowers to
                    raise concerns
                  </li>
                  <li>
                    Safeguarding and protecting the Whistle-blowers from
                    possible retaliation
                  </li>
                  <li>Proper management and reporting</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-4">
                  1.3 Functional Scope and Applicability
                </h3>
                <p className="mb-4">
                  a) This Policy is applicable to the Company's Board, Senior
                  Management team, and all its staff (including contractual and
                  seconded staff).
                </p>
                <p className="mb-4">
                  b) This Policy applies exclusively to events and individuals
                  that may cause harm to the Company's staff, the Company
                  itself, or its reputation, and does not extend protections to
                  the Whistleblower personally. Accordingly, any complaints or
                  grievances falling outside this scope shall not be addressed
                  under this Policy.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-4">
                  1.4 Policy Governance
                </h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>The Policy shall be owned by the Compliance Officer</li>
                  <li>The Policy shall be approved and issued by the Board</li>
                  <li>
                    The Policy shall be reviewed at least annually or as
                    directed by the Board
                  </li>
                  <li>
                    Any exceptions to this Policy shall be approved by the Board
                  </li>
                  <li>
                    Staff shall be notified of material changes to the Policy
                  </li>
                  <li>
                    Any breaches to this Policy shall be escalated to the
                    Compliance Function
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-4">1.5 Disclaimer</h3>
                <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
                  <p className="font-medium">
                    This Policy was prepared for the purpose of license
                    application. The content of this Policy may be updated to
                    address the business and regulatory requirements as and when
                    they become available, during the implementation phase of
                    the Company, prior to the launch of the business.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 2 - Key Principles */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5" />
              <span>2. Key Principles</span>
            </h2>
            <p className="mb-6">
              The Whistleblowing Policy of the Company shall be based on the
              following principles:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-elf-green/20 p-2 rounded-full">
                    <User className="w-4 h-4 text-elf-green" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Ethical Behavior</h4>
                    <p>
                      All staff shall demonstrate honesty, transparency,
                      integrity, and due care in fulfilling their
                      responsibilities
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-elf-green/20 p-2 rounded-full">
                    <ShieldAlert className="w-4 h-4 text-elf-green" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Good Faith Reporting</h4>
                    <p>
                      The Company encourages staff to report suspected or actual
                      wrongful conduct in good faith
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-elf-green/20 p-2 rounded-full">
                    <Lock className="w-4 h-4 text-elf-green" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Confidentiality</h4>
                    <p>
                      Sensitivity, discretion, and confidentiality will be given
                      to whistleblowing reports
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-elf-green/20 p-2 rounded-full">
                    <Gavel className="w-4 h-4 text-elf-green" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">No Retaliation</h4>
                    <p>
                      Any form of retaliation against Whistleblowers is strictly
                      prohibited
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 3 - Reporting an Incident */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              <span>3. Reporting an Incident</span>
            </h2>
            <div className="space-y-6">
              <p className="mb-4">
                a) A 'Whistle-blower' shall report any reasonable concern,
                including but not limited to the events captured in Section 1 of
                this Policy.
              </p>
              <p className="mb-4">
                b) The Company shall set up a dedicated email account to enable
                the reporting of whistleblowing cases.
              </p>
              <p className="mb-4">
                c) The Compliance Function shall undertake the responsibility of
                managing the account as well as communicating the use of this
                account to all stakeholders of the Company.
              </p>
              <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6 mb-6">
                <h4 className="font-medium mb-3">Required Report Details:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Reporting date of the activity</li>
                  <li>Name of the activity</li>
                  <li>Details of the involved parties</li>
                  <li>Details of the suspected allegation</li>
                  <li>How the issues were detected</li>
                  <li>Other relevant information</li>
                </ul>
              </div>
              <p className="mb-4">
                e) In case the concern is against a Compliance staff,
                Whistle-blower shall directly send an email to the Chief
                Internal Audit Officer.
              </p>
              <p className="mb-4">
                f) The report shall contain sufficient information to
                substantiate the concern and to enable a smooth investigation
                process.
              </p>
              <p className="mb-4">
                g) The Compliance Function shall perform an initial review and
                route the concerns to the relevant stakeholders (Case Manager).
              </p>
              <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
                <p className="font-medium">
                  h) In all cases, a Whistle-blower has the full freedom to
                  report any incident to VARA directly.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 4 - Investigation */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Gavel className="w-5 h-5" />
              <span>4. Investigation</span>
            </h2>

            <div className="space-y-6">
              <p className="mb-4">
                a) Whistleblowing investigations shall be managed by the
                stakeholders, also called Case Manager, mentioned in Section 3
                of this Policy.
              </p>

              <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6 mb-6">
                <h4 className="font-medium mb-3">Working Group Composition:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Workplace Misconduct</strong> - Human Resources
                    Department
                  </li>
                  <li>
                    <strong>Fraud including financial Misconduct</strong> - Risk
                    Function
                  </li>
                  <li>
                    <strong>Bribery/Corruption</strong> - Compliance Function
                  </li>
                  <li>
                    <strong>Regulatory Misconduct</strong> - Compliance Function
                  </li>
                  <li>
                    <strong>Data and Security</strong> - Technology Department
                  </li>
                </ul>
              </div>

              <p className="mb-4">
                c) In dealing with suspected misconduct, reasonable care will be
                taken to avoid baseless allegations, premature notice to persons
                suspected of misconduct, and disclosure of suspected misconduct
                to persons not involved with the investigation.
              </p>

              <p className="mb-4">
                d) Staff are required to cooperate fully in any official
                investigation, audit, or similar request.
              </p>

              <p className="mb-4">
                e) The investigation process may include meetings with the staff
                member to discuss the reported concerns. While absolute proof of
                wrongdoing is not required, the staff member must present
                reasonable grounds supporting their concerns.
              </p>

              <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6 mb-6">
                <p className="font-medium">
                  f) The Case Manager will keep the Whistleblower informed about
                  the status of the reported concern and the approach taken to
                  address it. However, a balance will be maintained between the
                  Whistleblower's legitimate interest in receiving updates and
                  the need to preserve the confidentiality of the investigation
                  process.
                </p>
              </div>

              <p className="mb-4">
                g) If the allegation does not have sufficient evidence or merit,
                the allegation shall be dismissed. The Whistleblower shall be
                informed in cases of dismissal and the rationale for dismissal
                shall be documented for data retention and audit trail.
              </p>

              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <AlertTriangle className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Investigation Timeline</h4>
                  <p>
                    h) The investigations shall be conducted within (10) working
                    days from the date of the concern being raised. The timeline
                    may vary depending on the nature of the case being
                    considered.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 5 - Management Information */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              <span>5. Management Information</span>
            </h2>

            <div className="space-y-6">
              <p className="mb-4">
                a) The Compliance Officer shall oversee the management of all
                Whistleblowing cases.
              </p>

              <p className="mb-4">
                b) The Compliance Officer shall be responsible for providing all
                investigation recommendations, unless the concern raised is
                against a Compliance staff, in which case, the Chief Internal
                Audit Officer shall be responsible for providing the
                recommendations.
              </p>

              <p className="mb-4">
                c) The Human Resources representative shall undertake
                disciplinary actions against the person being investigated if
                the allegation is found to be true and valid.
              </p>

              <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6 mb-6">
                <p className="font-medium">
                  d) The Compliance Function shall maintain a record of all
                  Whistleblowing cases including those that were dismissed for
                  reporting purposes. They shall exercise due diligence to
                  ensure the accuracy of the reporting by providing all
                  necessary details related to the case reported and attaching
                  all documents evidencing the whistleblowing case.
                </p>
              </div>

              <p className="mb-4">
                e) The Compliance Officer shall be responsible for the reporting
                of whistleblowing cases (including dismissed cases) to the CEO
                on a periodical basis.
              </p>

              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <BookOpen className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Data Retention</h4>
                  <p>
                    f) Summary details and statistical information and data
                    relating to the types of reports received and corrective
                    measures taken shall be maintained for a minimum of 5 years
                    from the closing of the investigation, except stated
                    otherwise by the local law.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 6 - Safeguards */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5" />
              <span>6. Safeguards</span>
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-4">
                  a) Whistle-blower protection
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    A staff who acts as a Whistle-blower is protected against
                    unfair termination and unfair prejudicial employment
                    practices.
                  </li>
                  <li>
                    No adverse action shall be taken against any Whistle-blower
                    in good faith.
                  </li>
                  <li>
                    A staff who has filed a report under this Policy shall be
                    appropriately protected from any negative impact.
                  </li>
                  <li>
                    Appropriate measures shall be taken against anyone under
                    control of the Company, who victimizes (or attempts to) a
                    Whistle-blower.
                  </li>
                  <li>
                    In case a Whistle-blower suspects retaliation, they may
                    raise their concern to the Head of Human Resources.
                  </li>
                </ul>
                <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6 mt-4">
                  <p className="font-medium">
                    Any retaliation, including but not limited to threat of
                    physical harm, loss of job, punitive work assignments, or
                    reduced salary or wages, will be promptly investigated by
                    the 'Working Group'.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-4">b) Confidentiality</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Protected disclosures and investigatory records shall be
                    kept confidential to the extent possible.
                  </li>
                  <li>
                    All reports received shall be verified in an appropriate
                    manner and acted upon in confidence.
                  </li>
                </ul>
                <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6 mt-4">
                  <p className="font-medium">
                    The Company will do its best to protect the identity of the
                    whistle-blower. It must be appreciated that the
                    investigation process may reveal the source of the
                    information.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-4">
                  c) False Allegations
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    If a Whistle-blower makes a genuine allegation in good faith
                    which is confirmed as untrue, no action shall be taken
                    against them.
                  </li>
                  <li>
                    If a Whistle-blower intentionally and knowingly makes false
                    accusations, he/she shall be subject to disciplinary
                    measures or legal action.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-4">
                  d) Anonymous Allegations
                </h3>
                <p className="mb-4">
                  The Company encourages a Whistle-blower to disclose his/ her
                  name in reporting the allegation. Concerns expressed
                  anonymously are much less powerful but will nevertheless be
                  considered.
                </p>
                <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
                  <h4 className="font-medium mb-2">
                    Factors for considering anonymous reports:
                  </h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>The seriousness of the issues raised</li>
                    <li>The credibility of the concern</li>
                    <li>
                      The likelihood of confirming the allegation from other
                      sources
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 7 - Training and Awareness */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              <span>7. Training and Awareness</span>
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <User className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <p>
                    a) The Company's staff shall receive training with respect
                    to Whistleblowing as part of the annual mandatory learning
                    modules.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <Mail className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <p>
                    b) A culture of awareness shall be established across the
                    Company, through periodic communications to all staff via
                    email or verbal communications, flyers/posters, screen
                    displays, and other means, as deemed appropriate by the
                    Company.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Contact Information */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12"
          >
            <h2 className="text-2xl font-semibold mb-6">Reporting Contact</h2>
            <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <Mail className="w-5 h-5 text-elf-green" />
                <span>Email: [whistleblowing@dhscrypto.com]</span>
              </div>
              <p className="text-sm opacity-80">
                All reports will be treated with strict confidentiality
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
            className="border-elf-green text-elf-green hover:bg-elf-green/10"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to Top <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default WhistleblowingPolicyPage;
