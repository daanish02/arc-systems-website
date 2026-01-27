import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { coreValues, whatWeBring, idealClientTraits } from "@/data/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Dubai-based software agency specializing in AI/ML and full-stack development. Expert-led development, transparent processes, production-ready solutions.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="min-h-[90vh] flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6">About Arc Systems</h1>
          <p className="text-2xl text-white/70 mb-8">
            Engineering Intelligent Systems
          </p>
          <p className="text-xl text-white/70">
            We build production-ready AI, machine learning, and data systems for teams that value reliability, clarity, and long-term impact.
          </p>
        </div>
      </Section>

      <Section divider>
        <h2 className="mb-12 text-center">Our Approach</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreValues.map((value, i) => (
            <Card key={i}>
              <h3 className="text-xl font-semibold mb-3 text-accent-red">{value.title}</h3>
              <p className="text-white/70">{value.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Full-width divider */}
      <div className="w-full border-t border-border-grey"></div>

      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8">What We Bring</h2>

          <div className="space-y-6 text-lg text-white/70">
            {whatWeBring.map((paragraph, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </div>
        </div>
      </Section>

      {/* Work With Us Section - Commented Out */}
      {/*
      <Section divider>
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8">Work With Us</h2>

          <p className="text-xl text-white/70 mb-8">
            We work best with clients who:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {idealClientTraits.map((item, i) => (
              <div key={i} className="flex items-center">
                <span className="text-power-red text-xl mr-3">•</span>
                <span className="text-white/70">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>
      */}

      <Section divider>
        <div className="text-center">
          <h2 className="mb-6">Ready to discuss your project?</h2>
          <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
            Schedule a <span className="text-accent-red">complimentary discovery session</span> to explore if Arc Systems is the right technical partner for your intelligent application or software system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href="/contact">
              Schedule a Discovery Call
            </Button>
            <Button variant="outline" size="lg" href="/services">
              Explore Our Services
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
