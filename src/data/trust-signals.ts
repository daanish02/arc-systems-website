/**
 * Trust Signals (Why Businesses Trust Us)
 * 
 * Displayed on homepage as trust-building elements.
 * Keep descriptions brief and impactful.
 */

export interface TrustSignal {
  stat: string;
  label: string;
  description: string;
}

export const trustSignals: TrustSignal[] = [
  {
    stat: "Production",
    label: "Ready Systems",
    description: "Scalable, reliable AI solutions built for real-world deployment",
  },
  {
    stat: "Full-Stack",
    label: "AI Expertise",
    description: "End-to-end capabilities from data to deployment",
  },
  {
    stat: "Technical",
    label: "Excellence",
    description: "Deep expertise in machine learning and software engineering",
  },
  {
    stat: "Clear",
    label: "Communication",
    description: "Transparent processes and honest technical discussions",
  },
];
