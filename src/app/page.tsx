import Hero from "@/components/features/home/Hero";
import WhyArcSystems from "@/components/features/home/WhyArcSystems";
import ServicesOverview from "@/components/features/home/ServicesOverview";
import UseCases from "@/components/features/home/UseCases";
import ProcessOverview from "@/components/features/home/ProcessOverview";
import TrustSignals from "@/components/features/home/TrustSignals";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyArcSystems />
      <ServicesOverview />
      <UseCases />
      <ProcessOverview />
      <TrustSignals />
    </>
  );
}
