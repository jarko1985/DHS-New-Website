"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";

const DisclosureAccordion = () => {
  const t = useTranslations("PublicDisclosures.accordion");
  
  return (
    <section className="px-4 py-10 bg-[color:var(--color-blue-whale)] text-[color:var(--color-mercury)]">
      <div className="xl:max-w-[70%] mx-auto px-4 xl:px-0">
      <Accordion type="single" collapsible className="space-y-4 disclosure-accordion">
  
        {/* 1. Company Info */}
        <AccordionItem value="company-info" className="border border-[#117f60]/20 bg-gradient-to-br from-[#272c2d] to-[#4b4f51] rounded-lg overflow-hidden group">
          <AccordionTrigger className="text-[color:var(--color-mercury)] hover:text-[color:var(--color-elf-green)] px-6 py-4 border-b border-[#117f60]/10">{t("companyInfo.title")}</AccordionTrigger>
          <AccordionContent className="border-t border-[#117f60]/10">
            <Card className="bg-gradient-to-br from-[#0d1635]/50 to-[#272c2d]/30 border-2 border-[#117f60]/30 shadow-lg m-4 backdrop-blur-sm">
              <CardContent className="space-y-2 mt-4 text-sm text-[color:var(--color-mercury)]">
                <p><strong>{t("companyInfo.entityName")}</strong> {t("companyInfo.entityNameValue")}</p>
                <p><strong>{t("companyInfo.incorporatedIn")}</strong> {t("companyInfo.incorporatedInValue")}</p>
                <p><strong>{t("companyInfo.regulator")}</strong> {t("companyInfo.regulatorValue")}</p>
                <div><strong>{t("companyInfo.licenseNumber")}</strong> <Badge variant="secondary" className="bg-[color:var(--color-elf-green)] text-[color:var(--color-blue-whale)]">{t("companyInfo.licenseNumberValue")}</Badge></div>
                <p><strong>{t("companyInfo.registeredOffice")}</strong> {t("companyInfo.registeredOfficeValue")}</p>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>
  
        {/* 2. Business Activities */}
        <AccordionItem value="business-activities" className="border border-[#117f60]/20 bg-gradient-to-br from-[#272c2d] to-[#4b4f51] rounded-lg overflow-hidden">
          <AccordionTrigger className="text-[color:var(--color-mercury)] hover:text-[color:var(--color-elf-green)] px-6 py-4 border-b border-[#117f60]/10">{t("businessActivities.title")}</AccordionTrigger>
          <AccordionContent className="border-t border-[#117f60]/10">
            <Card className="bg-gradient-to-br from-[#0d1635]/50 to-[#272c2d]/30 border-2 border-[#117f60]/30 shadow-lg m-4 backdrop-blur-sm">
              <CardContent className="space-y-2 mt-4 text-sm text-[color:var(--color-mercury)]">
                <p><strong>{t("businessActivities.primaryService")}</strong> {t("businessActivities.primaryServiceValue")}</p>
                <p><strong>{t("businessActivities.prohibited")}</strong> {t("businessActivities.prohibitedValue")}</p>
                <div><strong>{t("businessActivities.custodyPartner")}</strong> <Badge className="bg-[color:var(--color-elf-green)] text-[color:var(--color-blue-whale)]">{t("businessActivities.custodyPartnerValue")}</Badge></div>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>
  
        {/* 3. Conflicts of Interest */}
        <AccordionItem value="conflict" className="border border-[#117f60]/20 bg-gradient-to-br from-[#272c2d] to-[#4b4f51] rounded-lg overflow-hidden">
          <AccordionTrigger className="text-[color:var(--color-mercury)] hover:text-[color:var(--color-elf-green)] px-6 py-4 border-b border-[#117f60]/10">{t("conflictOfInterest.title")}</AccordionTrigger>
          <AccordionContent className="border-t border-[#117f60]/10">
            <Card className="bg-gradient-to-br from-[#0d1635]/50 to-[#272c2d]/30 border-2 border-[#117f60]/30 shadow-lg m-4 backdrop-blur-sm">
              <CardContent className="space-y-2 mt-4 text-sm text-[color:var(--color-mercury)]">
                <p>{t("conflictOfInterest.description1")}</p>
                <p>{t("conflictOfInterest.description2")}</p>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>
  
        {/* 4. Fees */}
        <AccordionItem value="fees" className="border border-[#117f60]/20 bg-gradient-to-br from-[#272c2d] to-[#4b4f51] rounded-lg overflow-hidden">
          <AccordionTrigger className="text-[color:var(--color-mercury)] hover:text-[color:var(--color-elf-green)] px-6 py-4 border-b border-[#117f60]/10">{t("fees.title")}</AccordionTrigger>
          <AccordionContent className="border-t border-[#117f60]/10">
            <Card className="bg-gradient-to-br from-[#0d1635]/50 to-[#272c2d]/30 border-2 border-[#117f60]/30 shadow-lg m-4 backdrop-blur-sm">
              <CardContent className="mt-4 text-sm text-[color:var(--color-mercury)]">
                <p>{t("fees.description")} <Link href="/fees" className="underline text-[color:var(--color-elf-green)] hover:text-[color:var(--color-mercury)]">{t("fees.feesLink")}</Link> {t("fees.descriptionEnd")}</p>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>
  
        {/* 5. Asset Information */}
        <AccordionItem value="assets" className="border border-[#117f60]/20 bg-gradient-to-br from-[#272c2d] to-[#4b4f51] rounded-lg overflow-hidden">
          <AccordionTrigger className="text-[color:var(--color-mercury)] hover:text-[color:var(--color-elf-green)] px-6 py-4 border-b border-[#117f60]/10">{t("assetInformation.title")}</AccordionTrigger>
          <AccordionContent className="border-t border-[#117f60]/10">
            <Card className="bg-gradient-to-br from-[#0d1635]/50 to-[#272c2d]/30 border-2 border-[#117f60]/30 shadow-lg m-4 backdrop-blur-sm">
              <CardContent className="space-y-2 mt-4 text-sm text-[color:var(--color-mercury)]">
                <div>
                  <ul className="list-disc list-inside space-y-1">
                    <li>{t("assetInformation.tokenName")}</li>
                    <li>{t("assetInformation.issuanceDate")}</li>
                    <li>{t("assetInformation.marketCap")}</li>
                    <li>{t("assetInformation.supply")}</li>
                    <li>{t("assetInformation.auditStatus")}</li>
                    <li>{t("assetInformation.priceHistory")}</li>
                  </ul>
                  <p className="mt-2 text-xs italic text-[color:var(--color-mercury)]/70">{t("assetInformation.liquidityNote")}</p>
                </div>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>

        {/* 6. Custody & Safeguarding */}
        <AccordionItem value="custody" className="border border-[#117f60]/20 bg-gradient-to-br from-[#272c2d] to-[#4b4f51] rounded-lg overflow-hidden">
          <AccordionTrigger className="text-[color:var(--color-mercury)] hover:text-[color:var(--color-elf-green)] px-6 py-4 border-b border-[#117f60]/10">{t("custodySafeguarding.title")}</AccordionTrigger>
          <AccordionContent className="border-t border-[#117f60]/10">
            <Card className="bg-gradient-to-br from-[#0d1635]/50 to-[#272c2d]/30 border-2 border-[#117f60]/30 shadow-lg m-4 backdrop-blur-sm">
              <CardContent className="space-y-2 mt-4 text-sm text-[color:var(--color-mercury)]">
                <p>{t("custodySafeguarding.description1")}</p>
                <p>{t("custodySafeguarding.description2")}</p>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>

        {/* 7. Complaints & Dispute Resolution */}
        <AccordionItem value="complaints" className="border border-[#117f60]/20 bg-gradient-to-br from-[#272c2d] to-[#4b4f51] rounded-lg overflow-hidden">
          <AccordionTrigger className="text-[color:var(--color-mercury)] hover:text-[color:var(--color-elf-green)] px-6 py-4 border-b border-[#117f60]/10">{t("complaintsDispute.title")}</AccordionTrigger>
          <AccordionContent className="border-t border-[#117f60]/10">
            <Card className="bg-gradient-to-br from-[#0d1635]/50 to-[#272c2d]/30 border-2 border-[#117f60]/30 shadow-lg m-4 backdrop-blur-sm">
              <CardContent className="space-y-2 mt-4 text-sm text-[color:var(--color-mercury)]">
                <p>{t("complaintsDispute.description1")}</p>
                <p>{t("complaintsDispute.description2")}</p>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>

        {/* 8. Governance & Management */}
        <AccordionItem value="governance" className="border border-[#117f60]/20 bg-gradient-to-br from-[#272c2d] to-[#4b4f51] rounded-lg overflow-hidden">
          <AccordionTrigger className="text-[color:var(--color-mercury)] hover:text-[color:var(--color-elf-green)] px-6 py-4 border-b border-[#117f60]/10">{t("governanceManagement.title")}</AccordionTrigger>
          <AccordionContent className="border-t border-[#117f60]/10">
            <Card className="bg-gradient-to-br from-[#0d1635]/50 to-[#272c2d]/30 border-2 border-[#117f60]/30 shadow-lg m-4 backdrop-blur-sm">
              <CardContent className="space-y-2 mt-4 text-sm text-[color:var(--color-mercury)]">
                <p>{t("governanceManagement.description1")}</p>
                <p>{t("governanceManagement.description2")}</p>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>

        {/* 9. Regulatory Reporting & Updates */}
        <AccordionItem value="regulatory" className="border border-[#117f60]/20 bg-gradient-to-br from-[#272c2d] to-[#4b4f51] rounded-lg overflow-hidden">
          <AccordionTrigger className="text-[color:var(--color-mercury)] hover:text-[color:var(--color-elf-green)] px-6 py-4 border-b border-[#117f60]/10">{t("regulatoryReporting.title")}</AccordionTrigger>
          <AccordionContent className="border-t border-[#117f60]/10">
            <Card className="bg-gradient-to-br from-[#0d1635]/50 to-[#272c2d]/30 border-2 border-[#117f60]/30 shadow-lg m-4 backdrop-blur-sm">
              <CardContent className="space-y-2 mt-4 text-sm text-[color:var(--color-mercury)]">
                <p>{t("regulatoryReporting.description")}</p>
                <div>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>{t("regulatoryReporting.item1")}</li>
                    <li>{t("regulatoryReporting.item2")}</li>
                    <li>{t("regulatoryReporting.item3")}</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>
  
      </Accordion>
      </div>
      
      {/* Custom Styles for Smooth Accordion Transitions */}
      <style jsx global>{`
        .disclosure-accordion [data-state="open"] > div[data-content] {
          animation: slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1);
        }
        
        .disclosure-accordion [data-state="closed"] > div[data-content] {
          animation: slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1);
        }
        
        .disclosure-accordion [data-radix-accordion-trigger] {
          transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .disclosure-accordion [data-radix-accordion-trigger][data-state="open"] {
          transform: rotate(180deg);
        }
        
        .disclosure-accordion [data-radix-accordion-content] {
          overflow: hidden;
          transition: all 300ms cubic-bezier(0.87, 0, 0.13, 1);
        }
        
        .disclosure-accordion [data-radix-accordion-content][data-state="open"] {
          animation: slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1);
        }
        
        .disclosure-accordion [data-radix-accordion-content][data-state="closed"] {
          animation: slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1);
        }
        
        @keyframes slideDown {
          from {
            height: 0;
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            height: var(--radix-accordion-content-height);
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            height: var(--radix-accordion-content-height);
            opacity: 1;
            transform: translateY(0);
          }
          to {
            height: 0;
            opacity: 0;
            transform: translateY(-10px);
          }
        }
        
        /* Enhanced Card Transitions */
        .disclosure-accordion .card {
          transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateY(0);
        }
        
        .disclosure-accordion [data-state="open"] .card {
          animation: cardSlideIn 400ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        @keyframes cardSlideIn {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        /* Trigger Icon Rotation */
        .disclosure-accordion [data-radix-accordion-trigger] svg {
          transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .disclosure-accordion [data-radix-accordion-trigger][data-state="open"] svg {
          transform: rotate(180deg);
        }src\components\public-disclosures\DisclosureAccordion.tsx
      `}</style>
    </section>
  );
};
  
export default DisclosureAccordion;