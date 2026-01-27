import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export default function Hero() {
  return (
    <Section className="min-h-[90vh] flex items-center justify-center py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="mb-6"> Applied AI & Data Systems </h1>

        <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-3xl mx-auto">
          We design, build, and deploy AI systems. From data to production.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg" href="/contact">
            Start a Conversation
          </Button>
          <Button variant="outline" size="lg" href="/services">
            Explore Our Services
          </Button>
        </div>

        <p className="text-white/70 max-w-3xl mx-auto my-10">
          We specialize in building tailored AI-powered applications, custom machine learning models, data analytics solutions, and intelligent automation systems for businesses that need expertise.
        </p>
      </div>
    </Section>
  );
}
