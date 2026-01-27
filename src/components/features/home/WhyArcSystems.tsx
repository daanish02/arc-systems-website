import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { differentiators } from "@/data/why-arc-systems";

export default function WhyArcSystems() {
  return (
    <Section divider>
      <div className="text-center mb-16">
        <h2 className="mb-4">Why Arc Systems</h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Four key differentiators that set us apart in AI, machine learning, and data science.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {differentiators.map((reason, index) => (
          <Card key={index}>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-power-red/20 border border-power-red rounded-lg flex items-center justify-center text-power-red font-bold text-lg">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-white/70">{reason.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
        <Button variant="primary" size="lg" href="/contact">
          Let Us Get Started
        </Button>
        <Button variant="outline" size="lg" href="/about">
          Learn More About Us
        </Button>
      </div>
    </Section>
  );
}
