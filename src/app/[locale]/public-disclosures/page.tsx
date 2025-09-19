
import DisclosureAccordion from "@/components/public-disclosures/DisclosureAccordion";
import DisclosureNotes from "@/components/public-disclosures/DisclosureNotes";
import Hero from "@/components/public-disclosures/Hero";

export default function PublicDisclosuresPage() {
    return <>
        <Hero />
       <DisclosureAccordion />
       <DisclosureNotes />
  </>;
}