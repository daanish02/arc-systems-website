import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { processSteps } from "@/data/process";

export default function ProcessOverview() {
  return (
    <Section divider>
      <div className="text-center mb-16">
        <h2 className="mb-4">How We Work</h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          A structured process that ensures quality, transparency, and timely
          delivery.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {processSteps.map((step, index) => (
          <div key={index} className="text-center">
            <div className="text-6xl font-bold text-accent-red mb-4 opacity-100">
              {step.number}
            </div>
            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
            <p className="text-white/70">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button variant="primary" size="lg" href="/contact">
          Start Your Project →
        </Button>
      </div>
    </Section>
  );
}
