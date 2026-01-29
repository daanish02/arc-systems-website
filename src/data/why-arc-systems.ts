/**
 * Why Arc Systems Differentiators
 * 
 * Four key differentiators displayed on homepage.
 * Keep descriptions uniform in length (approx 15-20 words).
 */

export interface Differentiator {
  title: string;
  description: string;
}

export const differentiators: Differentiator[] = [
  {
    title: "Production-Grade AI Systems",
    description:
      "We build AI systems designed for real-world deployment. Every solution is architected with production requirements in mind from day one.",
  },
  {
    title: "End-to-End ML Capabilities",
    description:
      "From data engineering and model development to deployment and monitoring, we handle the complete ML lifecycle. Comprehensive expertise across the entire stack.",
  },
  {
    title: "Proven Technical Excellence",
    description:
      "Deep expertise in machine learning, statistical modeling, and software engineering. We deliver solutions backed by rigorous methodology and industry best practices.",
  },
  {
    title: "Business-First Approach",
    description:
      "Technology serves business objectives. We focus on measurable outcomes and ROI, ensuring AI investments deliver tangible value to your organization.",
  },
];
