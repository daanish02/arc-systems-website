import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

const useCases = [
  {
    title: "AI Chatbots & Automation",
    description:
      "Build intelligent conversational systems with LLMs, RAG, and custom knowledge bases. Automate workflows with agentic AI.",
  },
  {
    title: "ML & Predictive Analytics",
    description:
      "Custom machine learning models for predictions, classifications, recommendations, and forecasting trained on your data.",
  },
  {
    title: "MVP & Prototyping",
    description:
      "Rapid prototyping and MVP development to validate ideas quickly. Production-ready systems built in 4-8 weeks for startups.",
  },
  {
    title: "Data Mining & BI",
    description:
      "Transform raw data into actionable insights with custom dashboards, reports, statistical analysis, and data visualization.",
  },
];

export default function UseCases() {
  return (
    <Section divider>
      <div className="text-center mb-16">
        <h2 className="mb-4">What We Build</h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Real-world AI and data science solutions that drive measurable business outcomes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {useCases.map((useCase, index) => (
          <Card key={index}>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-power-red/20 border border-power-red rounded-lg flex items-center justify-center text-power-red font-bold text-lg">
                {index + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                <p className="text-white/70">{useCase.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
