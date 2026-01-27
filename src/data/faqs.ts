/**
 * Frequently Asked Questions
 * 
 * Displayed on contact page.
 * Keep answers concise and helpful.
 */

export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "What's the typical timeline for a project?",
    answer:
      "Small projects: 2-6 weeks. Medium projects: 2-4 months. Large projects: 4-8 months. We provide accurate estimates after understanding requirements.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes! While based in Dubai, we serve clients globally. GST timezone works well for European and Asian clients.",
  },
  {
    question: "What's included in a discovery session?",
    answer:
      "Technical discussion, feasibility assessment, approach recommendations, Q&A. No cost, no obligation.",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Absolutely. We are happy to sign NDAs before discussing sensitive projects.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes. Support options include retainer agreements, hourly support, or fixed maintenance packages.",
  },
];
