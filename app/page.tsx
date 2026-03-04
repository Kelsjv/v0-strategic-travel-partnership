import { HeroSection } from "@/components/hero-section"
import { StrategicContextSection } from "@/components/strategic-context-section"
import { TravelerBehaviorSection } from "@/components/traveler-behavior-section"
import { AspirationalSection } from "@/components/aspirational-section"
import { IntegrationSection } from "@/components/integration-section"
import { PartnershipModelSection } from "@/components/partnership-model-section"
import { EcosystemSection } from "@/components/ecosystem-section"
import { MetricsSection } from "@/components/metrics-section"
import { InfrastructureSection } from "@/components/infrastructure-section"
import { PartnershipTiersSection } from "@/components/partnership-tiers-section"
import { ClosingSection } from "@/components/closing-section"

export default function Page() {
  return (
    <main>
      <HeroSection />
      <StrategicContextSection />
      <TravelerBehaviorSection />
      <AspirationalSection />
      <IntegrationSection />
      <PartnershipModelSection />
      <EcosystemSection />
      <MetricsSection />
      <InfrastructureSection />
      <PartnershipTiersSection />
      <ClosingSection />
    </main>
  )
}
