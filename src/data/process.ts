/**
 * Development Process Steps
 * 
 * Four-step process displayed on homepage.
 * Keep descriptions uniform in length (approx 20-22 words).
 */

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery Session",
    description:
      "Complimentary consultation to understand your needs and technical requirements.",
  },
  {
    number: "02",
    title: "Proposal & Planning",
    description:
      "Detailed proposal with scope, timeline, pricing, and technical approach.",
  },
  {
    number: "03",
    title: "Development & Updates",
    description:
      "Structured development with regular updates, code reviews, and quality assurance.",
  },
  {
    number: "04",
    title: "Delivery & Support",
    description:
      "Professional handoff with documentation, training, and post-launch support.",
  },
];
