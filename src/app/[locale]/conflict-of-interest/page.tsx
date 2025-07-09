"use client";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ConflictOfInterestPage() {
  const t = useTranslations("conflictOfInterest");
  return (
    <section className="bg-blue-whale">
      <div className="xl:max-w-[70%] mx-auto px-4 xl:px-0 py-8 text-mercury ">
        {/* Hero Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 pl-6 relative">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-elf-green rounded-sm"></span>
            {t("hero_title")}
          </h2>
          <p className="text-xl text-mercury/80">{t("hero_desc")}</p>
        </section>

        {/* Document Control Section */}
        <section className="mb-16">
          <Card className="bg-blue-whale/80 border-elf-green">
            <CardHeader>
              <CardTitle className="text-2xl text-elf-green">
                {t("document_control")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl text-mercury font-semibold mb-4 mt-6">
                {t("document_information")}
              </h3>
              <Table className="border text-mercury border-elf-green/50">
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium border border-elf-green/50">
                      {t("document_name")}
                    </TableCell>
                    <TableCell className="border border-elf-green/50">
                      {t("document_name_value")}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium border border-elf-green/50">
                      {t("unit")}
                    </TableCell>
                    <TableCell className="border border-elf-green/50">
                      {t("unit_value")}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <h3 className="text-xl text-mercury font-semibold mb-4 mt-8">
                {t("document_approval_history")}
              </h3>
              <Table className="border text-mercury border-elf-green/50">
                <TableHeader>
                  <TableRow>
                    <TableHead className="border text-mercury border-elf-green/50">
                      {t("date")}
                    </TableHead>
                    <TableHead className="border text-mercury border-elf-green/50">
                      {t("name")}
                    </TableHead>
                    <TableHead className="border text-mercury border-elf-green/50">
                      {t("position_title")}
                    </TableHead>
                    <TableHead className="border text-mercury border-elf-green/50">
                      {t("signature")}
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="text-mercury">
                    <TableCell className="border border-elf-green/50"></TableCell>
                    <TableCell className="border border-elf-green/50"></TableCell>
                    <TableCell className="border border-elf-green/50"></TableCell>
                    <TableCell className="border border-elf-green/50"></TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <h3 className="text-xl text-mercury font-semibold mb-4 mt-8">
                {t("document_edit_review_history")}
              </h3>
              <Table className="border border-elf-green/50">
                <TableHeader>
                  <TableRow>
                    <TableHead className="border text-mercury border-elf-green/50">
                      {t("version")}
                    </TableHead>
                    <TableHead className="border text-mercury border-elf-green/50">
                      {t("date")}
                    </TableHead>
                    <TableHead className="border text-mercury border-elf-green/50">
                      {t("comments")}
                    </TableHead>
                    <TableHead className="border text-mercury border-elf-green/50">
                      {t("prepared_revised_by")}
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="border border-elf-green/50"></TableCell>
                    <TableCell className="border border-elf-green/50"></TableCell>
                    <TableCell className="border border-elf-green/50"></TableCell>
                    <TableCell className="border border-elf-green/50"></TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <h3 className="text-xl text-mercury font-semibold mb-4 mt-8">
                {t("distribution_final_updated")}
              </h3>
              <Table className="border  border-elf-green/50">
                <TableHeader>
                  <TableRow>
                    <TableHead className="border text-mercury border-elf-green/50">
                      {t("name")}
                    </TableHead>
                    <TableHead className="border text-mercury border-elf-green/50">
                      {t("position_title")}
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="border border-elf-green/50"></TableCell>
                    <TableCell className="border border-elf-green/50"></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        {/* Glossary Section */}
        <section className="mb-16">
          <Card className="bg-blue-whale/80 border-elf-green">
            <CardHeader>
              <CardTitle className="text-2xl text-elf-green">
                {t("glossary")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-mercury">{t("glossary_desc")}</p>
              <Table className="border border-elf-green/50">
                <TableHeader>
                  <TableRow>
                    <TableHead className="border text-mercury border-elf-green/50">
                      {t("abbreviation")}
                    </TableHead>
                    <TableHead className="border text-mercury border-elf-green/50">
                      {t("definition")}
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium border text-mercury border-elf-green/50">
                      {t("board")}
                    </TableCell>
                    <TableCell className="border text-mercury border-elf-green/50">
                      {t("board_of_directors")}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium border text-mercury border-elf-green/50">
                      {t("vara")}
                    </TableCell>
                    <TableCell className="border text-mercury border-elf-green/50">
                      {t("vara_desc")}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium border text-mercury border-elf-green/50">
                      {t("company")}
                    </TableCell>
                    <TableCell className="border text-mercury border-elf-green/50">
                      {t("company_desc")}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        {/* Introduction Section */}
        <section className="mb-16">
          <Card className="bg-blue-whale/80 text-mercury border-elf-green">
            <CardHeader>
              <CardTitle className="text-2xl text-elf-green">
                3. Introduction
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold mb-4 mt-6">
                3.1 Manual Purpose
              </h3>
              <p className="mb-4">
                This Conflict-of-Interest Manual (the "Manual") Establishes the
                internal policies, procedures, and requirements of Mc. Coin
                Virtual Assets L.L.C ("the Company") with respect to conflicts
                of interest. The Company is committed to treating its clients
                fairly and requires its staff to conduct themselves with the
                highest standards of integrity. Failure to identify and
                appropriately manage conflicts of interest could result in
                inappropriate or adverse consequences for the clients,
                Investors, Company, and staff.
              </p>
              <p className="mb-6">
                Owing to the nature of the Company's business activities,
                circumstances may arise in which competing interests create
                actual or potential conflicts of interest. A conflict of
                interest is deemed to exist when the pursuit of one party's
                interests could reasonably be expected to compromise, impair, or
                place at a disadvantage the interests of another.
              </p>

              <h4 className="text-lg font-semibold mb-3">Manual Application</h4>
              <ol className="list-decimal pl-6 space-y-3 mb-6">
                <li>
                  This Manual provides a set of guidelines for the governance
                  around conflicts of interest and control of the Company. This
                  Manual lays down the flow of authority, responsibility, and
                  accountability of the Board of Directors (the "Board") and
                  Senior Management. In particular, the Company shall use all
                  reasonable efforts to avoid conflicts of interest between any
                  of the following:
                  <ol className="list-[lower-roman] pl-6 mt-2 space-y-1">
                    <li>Their Group.</li>
                    <li>The Company.</li>
                    <li>The Board of the Company.</li>
                    <li>The staff of the Company.</li>
                    <li>The clients of the Company.</li>
                    <li>The Investors of the Company.</li>
                  </ol>
                </li>
                <li>
                  This Manual ensures to manage various conflicts of interest,
                  including perceived conflict and potential conflict.
                </li>
                <li>
                  This Manual outlines the Company's framework for identifying
                  and managing conflicts of interest and sets out the principles
                  in relation to the identification, documentation, management,
                  and escalation of conflicts of interest, including examples of
                  where such conflicts of interest may arise within the Company.
                </li>
                <li>
                  This Manual ensures to minimize the risk of unfair treatment
                  of clients and third parties (any natural or judicial person
                  other than staff, clients and other persons associated with
                  the Company), to prevent inappropriate use of confidential
                  information or the Company's position to gain an advantage.
                </li>
                <li>
                  This Manual aims to protect the Company from any serious
                  sanctions, reputational damage litigation, loss of licenses
                  and financial penalties.
                </li>
              </ol>

              <h3 className="text-xl font-semibold mb-4 mt-6">
                3.2 Manual Understanding
              </h3>
              <p className="mb-6">
                This Manual is applicable to the Company's Board and all its
                staff. All staff must fulfill their roles and responsibilities
                with respect to this Manual.
              </p>

              <h3 className="text-xl font-semibold mb-4 mt-6">
                3.3 Manual Review
              </h3>
              <ol className="list-decimal pl-6 space-y-3 mb-6">
                <li>
                  This Manual shall be reviewed at least annually, or as
                  directed by the Board, to ensure it remains current and
                  compliant with any material changes in the Company's
                  operations or applicable regulatory requirements. All
                  amendments must be properly documented and approved prior to
                  implementation. Staff will be duly notified of any material
                  updates.
                </li>
                <li>
                  Any breaches to this Manual shall be escalated to the
                  Compliance function.
                </li>
              </ol>

              <h3 className="text-xl font-semibold mb-4 mt-6">
                3.4 Manual Owner
              </h3>
              <ol className="list-decimal pl-6 space-y-3 mb-6">
                <li>This Manual shall be owned by the Compliance Officer.</li>
                <li>This Manual shall be approved and issued by the Board.</li>
                <li>
                  Any exceptions to this Manual shall be approved by the Board
                  before their application.
                </li>
              </ol>

              <h3 className="text-xl font-semibold mb-4 mt-6">
                3.5 Disclaimer
              </h3>
              <p className="mb-6">
                This Manual was prepared for the purpose of the VARA license
                application. The content of this Manual may be updated to
                address the business and regulatory requirements as and when
                they become available, during the implementation phase of the
                Company, prior to the launch of the Company.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Guiding Principles Section */}
        <section className="mb-16">
          <Card className="bg-blue-whale/80 text-mercury border-elf-green">
            <CardHeader>
              <CardTitle className="text-2xl text-elf-green">
                4. Guiding Principles around Conflict of Interest
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold mb-4 mt-6">
                4.1 General Principles
              </h3>
              <ol className="list-decimal pl-6 space-y-3 mb-6">
                <li>
                  In the context of this Manual, a conflict of interest is a
                  situation in which the Group, Company, Board, staff, Investor
                  or Client, has a business or personal interest that competes
                  or could potentially compete with the interests of anyone or
                  more Group, Company, Board, staff, Investor or Client. There
                  are many varieties of conflicts of interest that apply to a
                  wide range of behaviors and circumstances. Conflicts of
                  interest relevant to the Company can arise between:
                  <ol className="list-[lower-roman] pl-6 mt-2 space-y-1">
                    <li>Their Group.</li>
                    <li>The Company.</li>
                    <li>The Board of the Company.</li>
                    <li>The staff of the Company.</li>
                    <li>The clients of the Company.</li>
                    <li>The Investors of the Company.</li>
                  </ol>
                </li>
                <li>
                  For the purposes of this Manual, conflicts of interest include
                  actual conflicts (i.e., those that have already arisen),
                  potential conflicts (i.e., those that may arise under specific
                  circumstances), and perceived conflicts (i.e., situations that
                  may reasonably be seen to present a conflict, even if none
                  exists in fact). Some conflicts are ongoing in nature and
                  require continuous management, while others may arise in
                  connection with a specific event (e.g., a payment transaction)
                  and can typically be addressed through one-time mitigation
                  measures.
                </li>
                <li>
                  The Company shall always be committed to ensuring and managing
                  the conflict of interest of the Company, its staff and its
                  clients.
                </li>
                <li>
                  Where the Company cannot reasonably avoid conflicts of
                  interest, it must disclose such conflicts of interests to its
                  affected clients, who must be treated fairly.
                </li>
                <li>
                  Where the company, a member of the Board or any staff have an
                  interest or a relationship that may reasonably impair its
                  objectivity in a transaction or give rise to an actual or
                  potential conflict of interest in relation to the transaction,
                  the Company must disclose the nature of the conflict to its
                  affected client. Furthermore, to the extent that the Company
                  can, it must sufficiently protect, manage and minimize such
                  conflict by adopting appropriate measures to ensure fair
                  treatment to its affected client (i.e. Chinese Walls).
                </li>
                <li>
                  The Company must maintain a special register for conflicts of
                  interest. This register must record, in detail, the conflicts
                  and management and remedial measures taken.
                </li>
                <li>
                  Where the Company is representing itself as being independent
                  when conducting a Virtual Asset activity, it will not receive
                  any third party fees, commissions or benefits. Furthermore,
                  the Company will not have any close links or other legal or
                  economic relationships with third parties in relation to the
                  provision of services related to the Virtual Asset activity.
                </li>
                <li>
                  The Company shall observe all local, regulatory, statutory and
                  fiduciary requirements when identifying and managing conflicts
                  of interest.
                </li>
              </ol>

              <h3 className="text-xl font-semibold mb-4 mt-6">
                4.2 Staff Specific Principles
              </h3>
              <ol className="list-decimal pl-6 space-y-3 mb-6">
                <li>
                  All staff shall ensure that their personal interests do not
                  conflict with the duties of which they owe to the Company, or
                  which the Company owes to their clients and Vendors.
                </li>
                <li>
                  All staff shall ensure that they discharge their role with
                  honesty and integrity, always putting the Company's and its
                  clients interests ahead of their own and avoiding abuse of
                  position for personal gain or benefit.
                </li>
                <li>
                  Staff are required to act with honesty and integrity, avoid
                  actual or potential conflicts of interest in a personal
                  capacity and as part of their Company mandate.
                </li>
                <li>
                  All staff are expected to recognize when they have,
                  potentially have, or could be perceived as having a conflict
                  of interest, and to make the required disclosures to their
                  business line managers and Compliance function.
                </li>
                <li>
                  Staff shall not use their association with the Company to
                  advance their personal interests, act in any way that could
                  harm the Company's reputation or use their positions to
                  provide preferential treatment to anyone seeking to do
                  business or employment with the Company.
                </li>
                <li>
                  Staff shall not misuse information obtained in the course of
                  working and shall apply the Company's "Need-to-know basis"
                  principle and respect duties of confidentiality at all times.
                </li>
              </ol>
            </CardContent>
          </Card>
        </section>

        {/* Conflict of Interest Management Section */}
        <section className="mb-16">
          <Card className="bg-blue-whale/80 text-mercury border-elf-green">
            <CardHeader>
              <CardTitle className="text-2xl text-elf-green">
                5. Conflict of Interest Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold mb-4 mt-6">
                5.1 Identification
              </h3>
              <p className="mb-4">
                Within the Company, conflicts of interest may arise in a range
                of circumstances. Staff are expected to be capable of
                identifying potential conflicts in order to ensure they are
                managed appropriately and in accordance with this Manual. Common
                areas where conflicts of interest may typically arise include,
                but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>
                  <strong>Nepotism:</strong> Favoring relatives or personal
                  friends because of their relationship rather than their
                  abilities.
                </li>
                <li>
                  <strong>Gifts and Entertainment:</strong> The transfer of
                  something with the expectation of receiving something in
                  return. Refer to the Anti-Bribery and Corruption Policy.
                </li>
                <li>
                  <strong>Self-dealing:</strong> It commonly occurs when the
                  fiduciary — the director, officer, or controlling shareholder
                  — acts unfairly within his or her own company for personal
                  gain and leads to a disproportionate benefit.
                </li>
                <li>
                  <strong>Outside employment:</strong> Activities that conflict
                  with a staff's official duties or result in a staff's failure
                  to meet the minimum standards of on-the-job productivity or
                  quality.
                </li>
                <li>
                  <strong>Bribery/kickbacks:</strong> The practice of offering
                  something, usually money, in order to gain an illicit
                  advantage.
                </li>
                <li>
                  <strong>Current or prior relationships:</strong> Strategic
                  partners and High Net Worth Individuals (HNWIs) with positions
                  at, and connections to, public issuers.
                </li>
                <li>
                  <strong>Services:</strong> Interest in the outcome of a
                  service provided to a customer or in the outcome of a
                  transaction carried out on behalf of a customer, which is
                  distinct from that of the customer.
                </li>
              </ul>
              <p className="mb-6">
                Refer to Section 6 for a non-exhaustive list of example
                scenarios where conflicts of interest may arise within the
                Company. All Company stakeholders including Board Members,
                Senior Management and all staff have a personal responsibility
                to disclose any conflicts of interest and abstain, or take
                relevant measures, from a transaction that may involve a
                conflict of interest.
              </p>

              <h3 className="text-xl font-semibold mb-4 mt-6">
                5.2 Escalation
              </h3>
              <p className="mb-4">
                Should a conflict of interest be identified, it shall be managed
                promptly and fairly through the following escalation process:
              </p>
              <ol className="list-decimal pl-6 space-y-3 mb-6">
                <li>
                  The conflict shall be reported to the staff immediate
                  supervisor detailing the existence and nature of the conflict.
                </li>
                <li>
                  Supervisors/Senior Management at the Company shall be
                  responsible for assessing the actual or potential conflicts of
                  interest and determining, after consulting relevant control
                  functions, the best course of action, including further
                  escalation to a higher authority.
                </li>
                <li>
                  Senior Management shall notify the Compliance Officer of the
                  conflict of interest, along with details of the case.
                </li>
                <li>
                  The staff shall have an opportunity to provide justification.
                </li>
                <li>
                  The Compliance Officer shall assess and approve cases of
                  conflicts of interest and shall consult the CEO or other
                  Senior Management, as deemed fit, while taking a decision on
                  the case.
                </li>
                <li>
                  For possible conflict cases involving the Compliance Officer,
                  the cases shall be reported to the CEO.
                </li>
                <li>
                  The Board shall be the approving authority for cases involving
                  the CEO.
                </li>
                <li>
                  Once the matter is resolved, the appropriate course of action
                  shall be taken and all details shall be documented for future
                  reference., including updating the conflicts of interest
                  register.
                </li>
              </ol>

              <h3 className="text-xl font-semibold mb-4 mt-6">
                5.3 Conflicts of Interest Register
              </h3>
              <ol className="list-decimal pl-6 space-y-3 mb-6" start={9}>
                <li>
                  A record of the documentation and course of action shall be
                  maintained by the Compliance function.
                </li>
                <li>
                  The Compliance Officer shall record the details of the
                  conflicts of interest and measures taken to prevent or manage
                  the interest in such a register.
                </li>
              </ol>

              <h3 className="text-xl font-semibold mb-4 mt-6">
                5.4 Management and Control
              </h3>
              <p className="mb-6">
                The Company shall take all reasonable steps to ensure that
                conflicts of interest do not adversely affect the interests of
                its clients, the Company itself, its investors, shareholders, or
                other stakeholders. This shall be achieved through the
                identification, prevention, and effective management of such
                conflicts. To manage conflicts of interest, the Company may
                employ various measures—either individually or in
                combination—including, but not limited to, the following:
              </p>

              <h4 className="text-lg font-semibold mb-3">
                5.4.1 Conflict Checks
              </h4>
              <ol className="list-decimal pl-6 space-y-3 mb-6">
                <li>
                  Conflict checks shall be performed on potential
                  contracts/agreements/partners to identify any conflicts of
                  interest, prior to signing legally binding documentation to
                  offer services to a Client which may have conflicting
                  interests with the Company, or the Company's existing clients.
                  Such conflicts of interest include, but is not limited to:
                  <ol className="list-[lower-roman] pl-6 mt-2 space-y-1">
                    <li>Vendor Selection.</li>
                    <li>Outsourcing.</li>
                  </ol>
                </li>
                <li>
                  Conflict checks shall be performed on staff' personal
                  activities and interests to identify any potential or actual
                  conflict with the Group, the Company, the Board, other staff,
                  clients, or Investors, before joining the Company by the HR.
                  This includes conflict checks on staff's:
                  <ol className="list-[lower-roman] pl-6 mt-2 space-y-1">
                    <li>
                      Direct family members (who are spouses, children, spouses
                      of children, parents).
                    </li>
                    <li>Political affiliations.</li>
                    <li>
                      Gifts and hospitality to be offered or intended to be
                      received.
                    </li>
                  </ol>
                </li>
              </ol>

              <h4 className="text-lg font-semibold mb-3">5.4.2 Disclosures</h4>
              <ol className="list-decimal pl-6 space-y-3 mb-6">
                <li>
                  All staff must disclose any existing/potential conflicts of
                  interest, including:
                  <ol className="list-[lower-roman] pl-6 mt-2 space-y-1">
                    <li>
                      Existing or potential relative working in the Company even
                      if separated or working in a different department.
                    </li>
                    <li>
                      Directorship or significant shareholding in other
                      companies resulting in conflict of interest.
                    </li>
                    <li>Any interest in a partnership, will or trust.</li>
                    <li>Directorship in any corporate arrangement.</li>
                    <li>
                      Any role or position of responsibility which may conflict
                      with the interests of the Company.
                    </li>
                  </ol>
                </li>
                <li>
                  Disclosure shall take place as soon as the staff identifies
                  that there may be a conflict.
                </li>
                <li>
                  Newly hired staff shall disclose to HR all conflicts during
                  the hiring process so that they can be discussed with and
                  approved by the relevant departments.
                </li>
              </ol>

              <h4 className="text-lg font-semibold mb-3">
                5.4.3 Personal Gifts and Entertainment
              </h4>
              <p className="mb-6">
                A conflict of interest may arise where a staff receives or
                offers a gift or entertainment that constitutes an inappropriate
                incentive for the staff, the Company, third party
                representative, a Client or Vendor to act in a certain way. The
                Company shall not permit the offering or acceptance of gifts or
                entertainment by a staff unless it is reasonable, proportionate
                and for a legitimate business purpose. Please refer to the
                Anti-bribery and Corruption Policy.
              </p>

              <h4 className="text-lg font-semibold mb-3">
                5.4.4 Outside Business Interest
              </h4>
              <p className="mb-6">
                staff' interests outside of their role at the Company may
                conflict with the interests of the Company or the Company's
                clients and therefore are required to be managed to maintain the
                integrity of the Company and its staff. Additionally, outside
                business interest may expose staff to confidential information
                of a client or potential client of the Company, resulting in a
                conflict of interest. Please refer to the Anti-bribery and
                Corruption Policy.
              </p>

              <h4 className="text-lg font-semibold mb-3">
                5.4.5 Segregation of Duties
              </h4>
              <p className="mb-6">
                The Company shall maintain a clear structural segregation
                between business functions and infrastructure functions to
                ensure the independent operation of business activities and risk
                management functions. Furthermore, the Company shall implement
                and uphold an internal control environment based on the "Three
                Lines Model" framework. This framework defines and reinforces
                risk management, control, and reporting responsibilities across
                the organization in a consistent and integrated manner. It also
                requires the independence of key control functions, including
                Compliance, Risk, and Internal Audit, to ensure effective
                oversight and accountability.
              </p>

              <h4 className="text-lg font-semibold mb-3">
                5.4.6 Vendors and Third-Party Representatives
              </h4>
              <ol className="list-decimal pl-6 space-y-3 mb-6">
                <li>
                  The Company shall carry out due diligence on vendors and
                  third-party representatives as part of their onboarding
                  process and shall have contractual arrangements in place to
                  protect the interests of the Company and its clients.
                </li>
                <li>
                  Conflicts of interest may arise with regards to vendors and
                  third-party representatives where, for example, a staff
                  involved in the procurement or hiring process has a close
                  relationship with a particular vendor or third-party
                  representative.
                </li>
                <li>
                  Staff shall be expected to identify, escalate and manage
                  potential conflicts of interest accordingly. It shall be the
                  staff' responsibility to report and escalate all matters that
                  might reasonably be expected to impact their independence and
                  objectivity, or otherwise interfere with their respective
                  duties to the Company or its clients or give rise to a
                  perception of a conflict of interest.
                </li>
                <li>
                  Furthermore, the Company shall seek to manage actual or
                  potential Vendor relationships, which are also actual or
                  potential client relationships independently and on an arm's
                  length basis. The rules of engagements between the Company,
                  Vendors and clients must be set out, so as to manage actual or
                  potential conflicts of interest.
                </li>
              </ol>

              <h4 className="text-lg font-semibold mb-3">5.4.7 Escalation</h4>
              <p className="mb-6">
                The Company shall operate escalation and resolution procedures
                for conflicts of interest (Client related or otherwise). staff
                must follow the internal escalation process prescribed as
                described in Section 4.
              </p>

              <h4 className="text-lg font-semibold mb-3">
                5.4.8 Whistleblowing
              </h4>
              <p className="mb-6">
                The Company shall provide appropriate channels for the
                reporting/whistleblowing of conflicts of interest within the
                Company where a staff considers this to be the appropriate
                channel to draw the matter to the attention of the Company. The
                Company's Whistleblowing Policy shall set forth the principles
                for staff to report any concerns or suspicions regarding
                possible violations of laws, rules or regulations or possible
                violations of the Company's policies, standards or procedures,
                including the Company's values & beliefs.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Breaches Section */}
        <section className="mb-16">
          <Card className="bg-blue-whale/80 text-mercury border-elf-green">
            <CardHeader>
              <CardTitle className="text-2xl text-elf-green">
                6. Breaches, Escalations and Sanctions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal pl-6 space-y-3 mb-6">
                <li>
                  Any breach or violation whether advertent or inadvertent, of
                  the Conflict-of-Interest Manual shall be reported without
                  delay to Compliance function.
                </li>
                <li>
                  Breaches of the Manual could lead to the following
                  consequences:
                  <ol className="list-[lower-roman] pl-6 mt-2 space-y-1">
                    <li>Loss of clients.</li>
                    <li>Client litigation.</li>
                    <li>Sanctions from the regulator.</li>
                    <li>
                      Disciplinary action or potential dismissal at the
                      discretion of Human Resources.
                    </li>
                  </ol>
                </li>
                <li>
                  Breaches reported must remain confidential and contained to
                  avoid increasing the severity of the breach.
                </li>
              </ol>
            </CardContent>
          </Card>
        </section>

        {/* Training Section */}
        <section className="mb-16">
          <Card className="bg-blue-whale/80 text-mercury border-elf-green">
            <CardHeader>
              <CardTitle className="text-2xl text-elf-green">
                7. Training and Awareness
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal pl-6 space-y-3 mb-6">
                <li>
                  All staff shall undergo mandatory training relevant to their
                  role, in respect to this Manual.
                </li>
                <li>
                  Attendance of training shall be monitored for performance
                  evaluation purposes.
                </li>
                <li>
                  Non-compliance shall lead to violation of this Manual and
                  shall be escalated to business line manager and Compliance
                  function for consequent disciplinary action, if deemed
                  necessary by Compliance function.
                </li>
              </ol>
            </CardContent>
          </Card>
        </section>

        {/* Annexure Section */}
        <section className="mb-16">
          <Card className="bg-blue-whale/80 text-mercury border-elf-green">
            <CardHeader>
              <CardTitle className="text-2xl text-elf-green">
                8. Annexure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6">
                Examples of conflicts of interest scenarios that may occur in
                the Company:
              </p>
              <Table className="border border-elf-green/50">
                <TableHeader>
                  <TableRow>
                    <TableHead className="border border-elf-green/50">
                      Category
                    </TableHead>
                    <TableHead className="border border-elf-green/50">
                      Type
                    </TableHead>
                    <TableHead className="border border-elf-green/50">
                      Description
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="border border-elf-green/50">
                      Staff vs Client
                    </TableCell>
                    <TableCell className="border border-elf-green/50">
                      Information Dissemination
                    </TableCell>
                    <TableCell className="border border-elf-green/50">
                      Conflicts relating to the use of clients' confidential
                      information.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border border-elf-green/50">
                      Staff vs Client
                    </TableCell>
                    <TableCell className="border border-elf-green/50">
                      Cross-selling products
                    </TableCell>
                    <TableCell className="border border-elf-green/50">
                      Conflicts of interest may arise between the Company, a
                      staff and a client if the staff engages to the detriment
                      of a client in cross-selling activities or providing
                      multiple services/products to the client, which are not in
                      the best interest of the client, principally to generate
                      higher fees or revenue on behalf of the Company.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border border-elf-green/50">
                      The Company vs staff
                    </TableCell>
                    <TableCell className="border border-elf-green/50">
                      Family / Close Personal Relationship
                    </TableCell>
                    <TableCell className="border border-elf-green/50">
                      Conflicts of interest may arise between the Company, a
                      staff, a client, or a vendor if a staff deals with
                      individuals who are family members or close personal
                      relationships in the course of conducting business for, or
                      on behalf of, the Company. These dealings may compromise
                      or call into question the staff's judgment, ability to act
                      objectively or properly discharge their duties and
                      responsibilities owed to the Company and/or clients. This
                      may give rise to the risk of reputational damage to the
                      Company, including the risk of, or appearance of,
                      impropriety.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border border-elf-green/50">
                      Client vs the Company
                    </TableCell>
                    <TableCell className="border border-elf-green/50">
                      Gifts and entertainment received
                    </TableCell>
                    <TableCell className="border border-elf-green/50">
                      A conflict of interest may arise between staff and the
                      Company, a client or a third party if a staff receives
                      gifts and/or entertainment that may inappropriately
                      incentivize the staff to act in a way that may conflict
                      with the interests of the Company, the client and/or the
                      third party.
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>
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
    </section>
  );
}
