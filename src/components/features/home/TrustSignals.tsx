import Section from "@/components/ui/Section";
import { trustSignals } from "@/data/trust-signals";

export default function TrustSignals() {
  return (
    <Section divider>
      <div className="text-center mb-16">
        <h2 className="mb-4">Why Businesses Trust Us</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {trustSignals.map((signal, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent-red mb-2">
              {signal.stat}
            </div>
            <div className="text-lg font-semibold mb-1">{signal.label}</div>
            <p className="text-sm text-white/70">{signal.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
