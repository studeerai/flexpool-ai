import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { ForBusinessSection, ForSpecialistsSection } from "@/components/sections/AudienceSections";
import { WhySection } from "@/components/sections/WhySection";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <ProjectsSection />
      <WorkflowSection />
      <ForBusinessSection />
      <ForSpecialistsSection />
      <WhySection />
      <CTASection />
      <FAQSection />
    </>
  );
}
