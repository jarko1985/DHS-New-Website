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
import { useLocale } from "next-intl";

export default function ConflictOfInterestPage() {
  const t = useTranslations("conflictOfInterest");
  const locale = useLocale();
  const isArabic = locale === "ar";
  return (
    <section className="bg-blue-whale">
      <div className="xl:max-w-[70%] mx-auto px-4 xl:px-0 py-8 text-mercury ">
        {/* Hero Section */}
        <section className="mb-12">
          <h2
            className={`md:text-3xl text-xl font-bold text-white mb-8 ${
              isArabic ? "pr-6" : "pl-6"
            }  relative`}
          >
            <span
              className={`absolute ${
                isArabic ? "right-0" : "left-0"
              }  top-1/2 -translate-y-1/2 w-1 h-8 bg-elf-green rounded-sm`}
            ></span>
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
                {t("introductionTitle")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold mb-4 mt-6">
                {t("manualPurposeTitle")}
              </h3>
              <p className="mb-4">{t("manualPurpose1")}</p>
              <p className="mb-6">{t("manualPurpose2")}</p>

              <h4 className="text-lg font-semibold mb-3">
                {t("manualApplicationTitle")}
              </h4>
              <ol className="list-decimal pl-6 space-y-3 mb-6">
                <li>
                  {t("manualApplication1")}
                  <ol className="list-[lower-roman] pl-6 mt-2 space-y-1">
                    <li>{t("manualApplication2")}</li>
                    <li>{t("manualApplication3")}</li>
                    <li>{t("manualApplication4")}</li>
                    <li>{t("manualApplication5")}</li>
                    <li>{t("manualApplication6")}</li>
                    <li>{t("manualApplication7")}</li>
                  </ol>
                </li>
                <li>{t("manualApplication8")}</li>
                <li>{t("manualApplication9")}</li>
                <li>{t("manualApplication10")}</li>
                <li>{t("manualApplication11")}</li>
              </ol>

              <h3 className="text-xl font-semibold mb-4 mt-6">
                {t("manualUnderstandingTitle")}
              </h3>
              <p className="mb-6">{t("manualUnderstanding")}</p>

              <h3 className="text-xl font-semibold mb-4 mt-6">
                {t("manualReviewTitle")}
              </h3>
              <ol className="list-decimal pl-6 space-y-3 mb-6">
                <li>{t("manualReview1")}</li>
                <li>{t("manualReview2")}</li>
              </ol>

              <h3 className="text-xl font-semibold mb-4 mt-6">
                {t("manualOwnerTitle")}
              </h3>
              <ol className="list-decimal pl-6 space-y-3 mb-6">
                <li>{t("manualOwner1")}</li>
                <li>{t("manualOwner2")}</li>
                <li>{t("manualOwner3")}</li>
              </ol>

              <h3 className="text-xl font-semibold mb-4 mt-6">
                {t("manualDisclaimerTitle")}
              </h3>
              <p className="mb-6">{t("manualDisclaimer")}</p>
            </CardContent>
          </Card>
        </section>

        {/* Guiding Principles Section */}
        <section className="mb-16">
          <Card className="bg-blue-whale/80 text-mercury border-elf-green">
            <CardHeader>
              <CardTitle className="text-2xl text-elf-green">
                {t("guidingPrinciplesTitle")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold mb-4 mt-6">
                {t("generalPrinciplesTitle")}
              </h3>
              <p className="mb-4">{t("generalPrinciples1")}</p>
              <ol className="list-decimal pl-6 space-y-1 mb-4">
                <li>{t("generalPrinciples2")}</li>
                <li>{t("generalPrinciples3")}</li>
                <li>{t("generalPrinciples4")}</li>
                <li>{t("generalPrinciples5")}</li>
                <li>{t("generalPrinciples6")}</li>
                <li>{t("generalPrinciples7")}</li>
              </ol>
              <p className="mb-4">{t("generalPrinciples8")}</p>
              <p className="mb-4">{t("generalPrinciples9")}</p>
              <p className="mb-4">{t("generalPrinciples10")}</p>
              <p className="mb-4">{t("generalPrinciples11")}</p>
              <p className="mb-4">{t("generalPrinciples12")}</p>
              <p className="mb-4">{t("generalPrinciples13")}</p>
              <p className="mb-6">{t("generalPrinciples14")}</p>

              <h3 className="text-xl font-semibold mb-4 mt-6">
                {t("staffPrinciplesTitle")}
              </h3>
              <ol className="list-decimal pl-6 space-y-3 mb-6">
                <li>{t("staffPrinciples1")}</li>
                <li>{t("staffPrinciples2")}</li>
                <li>{t("staffPrinciples3")}</li>
                <li>{t("staffPrinciples4")}</li>
                <li>{t("staffPrinciples5")}</li>
                <li>{t("staffPrinciples6")}</li>
              </ol>
            </CardContent>
          </Card>
        </section>

        {/* Conflict of Interest Management Section */}
        <section className="mb-16">
          <Card className="bg-blue-whale/80 text-mercury border-elf-green">
            <CardHeader>
              <CardTitle className="text-2xl text-elf-green">
                {t("managementTitle")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* 5.1 Identification */}
              <h3 className="text-xl font-semibold mb-4 mt-6">
                {t("identificationTitle")}
              </h3>
              <p className="mb-4">{t("identification1")}</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>{t("identificationList1")}</li>
                <li>{t("identificationList2")}</li>
                <li>{t("identificationList3")}</li>
                <li>{t("identificationList4")}</li>
                <li>{t("identificationList5")}</li>
                <li>{t("identificationList6")}</li>
                <li>{t("identificationList7")}</li>
              </ul>
              <p className="mb-6">{t("identification2")}</p>

              {/* 5.2 Escalation */}
              <h3 className="text-xl font-semibold mb-4 mt-6">
                {t("escalationTitle")}
              </h3>
              <p className="mb-4">{t("escalation1")}</p>
              <ol className="list-decimal pl-6 space-y-3 mb-6">
                <li>{t("escalationList1")}</li>
                <li>{t("escalationList2")}</li>
                <li>{t("escalationList3")}</li>
                <li>{t("escalationList4")}</li>
                <li>{t("escalationList5")}</li>
                <li>{t("escalationList6")}</li>
                <li>{t("escalationList7")}</li>
                <li>{t("escalationList8")}</li>
              </ol>

              {/* 5.3 Conflicts of Interest Register */}
              <h3 className="text-xl font-semibold mb-4 mt-6">
                {t("registerTitle")}
              </h3>
              <ol className="list-decimal pl-6 space-y-3 mb-6">
                <li>{t("register1")}</li>
                <li>{t("register2")}</li>
              </ol>

              {/* 5.4 Management and Control */}
              <h3 className="text-xl font-semibold mb-4 mt-6">
                {t("managementControlTitle")}
              </h3>
              <p className="mb-6">{t("managementControl1")}</p>

              {/* 5.4.1 Conflict Checks */}
              <h4 className="text-lg font-semibold mb-3">
                {t("conflictChecksTitle")}
              </h4>
              <ol className="list-decimal pl-6 space-y-3 mb-6">
                <li>
                  {t("conflictChecks1")}
                  <ol className="list-[lower-roman] pl-6 mt-2 space-y-1">
                    <li>{t("conflictChecksList1")}</li>
                    <li>{t("conflictChecksList2")}</li>
                  </ol>
                </li>
                <li>
                  {t("conflictChecks2")}
                  <ol className="list-[lower-roman] pl-6 mt-2 space-y-1">
                    <li>{t("conflictChecksList3")}</li>
                    <li>{t("conflictChecksList4")}</li>
                    <li>{t("conflictChecksList5")}</li>
                  </ol>
                </li>
              </ol>

              {/* 5.4.2 Disclosures */}
              <h4 className="text-lg font-semibold mb-3">
                {t("disclosuresTitle")}
              </h4>
              <ol className="list-decimal pl-6 space-y-3 mb-6">
                <li>
                  {t("disclosures1")}
                  <ol className="list-[lower-roman] pl-6 mt-2 space-y-1">
                    <li>{t("disclosuresList1")}</li>
                    <li>{t("disclosuresList2")}</li>
                    <li>{t("disclosuresList3")}</li>
                    <li>{t("disclosuresList4")}</li>
                    <li>{t("disclosuresList5")}</li>
                  </ol>
                </li>
                <li>{t("disclosures2")}</li>
                <li>{t("disclosures3")}</li>
              </ol>

              {/* 5.4.3 Personal Gifts and Entertainment */}
              <h4 className="text-lg font-semibold mb-3">{t("giftsTitle")}</h4>
              <p className="mb-6">{t("gifts1")}</p>

              {/* 5.4.4 Outside Business Interest */}
              <h4 className="text-lg font-semibold mb-3">
                {t("outsideBusinessTitle")}
              </h4>
              <p className="mb-6">{t("outsideBusiness1")}</p>

              {/* 5.4.5 Segregation of Duties */}
              <h4 className="text-lg font-semibold mb-3">
                {t("segregationTitle")}
              </h4>
              <p className="mb-6">{t("segregation1")}</p>

              {/* 5.4.6 Vendors and Third-Party Representatives */}
              <h4 className="text-lg font-semibold mb-3">
                {t("vendorsTitle")}
              </h4>
              <ol className="list-decimal pl-6 space-y-3 mb-6">
                <li>{t("vendors1")}</li>
                <li>{t("vendors2")}</li>
                <li>{t("vendors3")}</li>
                <li>{t("vendors4")}</li>
              </ol>

              {/* 5.4.7 Escalation */}
              <h4 className="text-lg font-semibold mb-3">
                {t("escalation2Title")}
              </h4>
              <p className="mb-6">{t("escalation2_1")}</p>

              {/* 5.4.8 Whistleblowing */}
              <h4 className="text-lg font-semibold mb-3">
                {t("whistleblowingTitle")}
              </h4>
              <p className="mb-6">{t("whistleblowing1")}</p>
            </CardContent>
          </Card>
        </section>

        {/* Breaches Section */}
        <section className="mb-16">
          <Card className="bg-blue-whale/80 text-mercury border-elf-green">
            <CardHeader>
              <CardTitle className="text-2xl text-elf-green">
                {t("breachesTitle")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal pl-6 space-y-3 mb-6">
                <li>{t("breachesList1")}</li>
                <li>
                  {t("breachesList2")}
                  <ol className="list-[lower-roman] pl-6 mt-2 space-y-1">
                    <li>{t("breachesList3")}</li>
                    <li>{t("breachesList4")}</li>
                    <li>{t("breachesList5")}</li>
                    <li>{t("breachesList6")}</li>
                  </ol>
                </li>
                <li>{t("breachesList7")}</li>
              </ol>
            </CardContent>
          </Card>
        </section>

        {/* Training Section */}
        <section className="mb-16">
          <Card className="bg-blue-whale/80 text-mercury border-elf-green">
            <CardHeader>
              <CardTitle className="text-2xl text-elf-green">
                {t("trainingTitle")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal pl-6 space-y-3 mb-6">
                <li>{t("trainingList1")}</li>
                <li>{t("trainingList2")}</li>
                <li>{t("trainingList3")}</li>
              </ol>
            </CardContent>
          </Card>
        </section>

        {/* Annexure Section */}
        <section className="mb-16">
          <Card className="bg-blue-whale/80 text-mercury border-elf-green">
            <CardHeader>
              <CardTitle className="text-2xl text-elf-green">
                {t("annexureTitle")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6">{t("annexureDesc")}</p>
              <Table className="border border-elf-green/50">
                <TableHeader>
                  <TableRow>
                    <TableHead className="border border-elf-green/50">
                      {t("annexureTableHeaderCategory")}
                    </TableHead>
                    <TableHead className="border border-elf-green/50">
                      {t("annexureTableHeaderType")}
                    </TableHead>
                    <TableHead className="border border-elf-green/50">
                      {t("annexureTableHeaderDescription")}
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="border border-elf-green/50">
                      {t("annexureTableRow1Category")}
                    </TableCell>
                    <TableCell className="border border-elf-green/50">
                      {t("annexureTableRow1Type")}
                    </TableCell>
                    <TableCell className="border border-elf-green/50">
                      {t("annexureTableRow1Description")}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border border-elf-green/50">
                      {t("annexureTableRow2Category")}
                    </TableCell>
                    <TableCell className="border border-elf-green/50">
                      {t("annexureTableRow2Type")}
                    </TableCell>
                    <TableCell className="border border-elf-green/50">
                      {t("annexureTableRow2Description")}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border border-elf-green/50">
                      {t("annexureTableRow3Category")}
                    </TableCell>
                    <TableCell className="border border-elf-green/50">
                      {t("annexureTableRow3Type")}
                    </TableCell>
                    <TableCell className="border border-elf-green/50">
                      {t("annexureTableRow3Description")}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border border-elf-green/50">
                      {t("annexureTableRow4Category")}
                    </TableCell>
                    <TableCell className="border border-elf-green/50">
                      {t("annexureTableRow4Type")}
                    </TableCell>
                    <TableCell className="border border-elf-green/50">
                      {t("annexureTableRow4Description")}
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
