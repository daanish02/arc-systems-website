/**
 * Service Definitions
 * 
 * Contains all service offerings with detailed descriptions.
 * Used across: Services page, Homepage services overview, Contact form options
 * 
 * To update services:
 * 1. Modify service details here
 * 2. Ensure 'id' matches values in other data files if referenced
 * 3. Keep descriptions uniform in length for UI consistency
 */

export interface Service {
  id: string;
  title: string;
  shortDescription: string; // For homepage cards
  overview: string; // For services page intro
  whatWeBuild: string[];
  idealFor: string[];
}

export const services: Service[] = [
  {
    id: "ai-chatbots-automation",
    title: "AI Chatbots & Intelligent Automation",
    shortDescription:
      "Smart chatbots, AI agents, workflow automations, LLM integration, and RAG systems for customer support and business processes.",
    overview:
      "Build intelligent conversational systems and automate workflows with AI. From customer support chatbots to agentic workflow automations.",
    whatWeBuild: [
      "AI-powered chatbots and virtual assistants",
      "LLM integration (ChatGPT, Claude, custom GPTs)",
      "RAG systems and knowledge bases",
      "Intelligent AI agents and multi-agent systems",
      "Workflow automations with and without agentic AI",
      "Natural language processing (NLP) solutions",
      "Conversational interfaces for apps",
      "Document Q&A and semantic search",
      "AIOps and LLMOps",
    ],
    idealFor: [
      "Customer support automation",
      "Internal knowledge management",
      "Automating repetitive business processes",
      "Building conversational AI products",
      "Enhancing existing apps with AI",
    ],
  },
  {
    id: "machine-learning-predictions",
    title: "Machine Learning & Predictive Models",
    shortDescription:
      "Custom ML models, predictions, classifications, recommendation systems, and forecasting trained on your business data.",
    overview:
      "Build custom machine learning models that predict outcomes, classify data, and provide personalized recommendations based on your unique business needs.",
    whatWeBuild: [
      "Custom ML models and training pipelines",
      "Predictive analytics and forecasting",
      "Classification models (fraud detection, sentiment analysis)",
      "Regression analysis and trend prediction",
      "Recommendation and personalization systems",
      "Anomaly detection systems",
      "Time series forecasting",
      "Feature engineering for ML models",
      "MLOps and model deployment",
    ],
    idealFor: [
      "Forecasting sales, demand, or trends",
      "Personalized product recommendations",
      "Risk assessment and fraud detection",
      "Customer churn prediction",
      "Optimizing business operations",
    ],
  },
  {
    id: "computer-vision",
    title: "Computer Vision & Image Recognition",
    shortDescription:
      "Object detection, image classification, facial recognition, and visual quality control systems for automation and security.",
    overview:
      "Enable your systems to see and understand visual content. From security cameras to quality control, we build computer vision solutions that automate visual tasks.",
    whatWeBuild: [
      "Object detection and tracking",
      "Image classification and recognition",
      "Facial recognition systems",
      "Visual quality control and defect detection",
      "OCR (Optical Character Recognition)",
      "Video analysis and processing",
      "Real-time camera feed analysis",
      "Medical image analysis",
      "License plate recognition",
    ],
    idealFor: [
      "Manufacturing quality control",
      "Security and surveillance systems",
      "Retail and inventory management",
      "Healthcare and medical imaging",
      "Automating visual inspection tasks",
    ],
  },
  {
    id: "data-analytics",
    title: "Data Analytics & Business Intelligence",
    shortDescription:
      "Transform raw data into insights with custom dashboards, reports, statistical analysis, A/B testing, and data visualization.",
    overview:
      "Unlock the value in your data. We help you understand what happened, why it happened, and what to do next through advanced analytics and visualization.",
    whatWeBuild: [
      "Custom analytics dashboards and reports",
      "Business intelligence solutions",
      "Exploratory data analysis (EDA)",
      "Statistical modeling and hypothesis testing",
      "A/B testing and experimentation frameworks",
      "Data visualization and insights",
      "KPI tracking and monitoring",
      "Data mining and pattern discovery",
      "Executive reporting and metrics",
    ],
    idealFor: [
      "Understanding customer behavior",
      "Data-driven decision making",
      "Marketing and sales analytics",
      "Operational efficiency insights",
      "Performance tracking and reporting",
    ],
  },
  // Temporarily hidden services - can be enabled when capacity allows
  /*
  {
    id: "data-engineering",
    title: "Data Engineering & Intelligence",
    shortDescription:
      "Data pipeline architecture, ETL/ELT processing, data warehouses, statistical modeling, analytics dashboards, and database optimization.",
    overview:
      "Transform raw data into actionable insights. Engineer robust data infrastructure and unlock intelligence through advanced analytics and data science.",
    whatWeBuild: [
      "Data pipeline architecture and ETL/ELT",
      "Data warehouse design and implementation",
      "Real-time data processing systems",
      "Exploratory data analysis and statistical modeling",
      "Data mining and pattern discovery",
      "A/B testing and experimentation frameworks",
      "Feature engineering for ML models",
      "Analytics dashboards and reporting",
      "Database design and optimization",
      "Business intelligence solutions",
    ],
    idealFor: [
      "Businesses with complex data needs",
      "Building data-driven products",
      "Analytics and reporting requirements",
      "Data consolidation from multiple sources",
      "Scaling data infrastructure",
    ],
  },
  {
    id: "full-stack",
    title: "Full-Stack Development",
    shortDescription:
      "Modern web and mobile applications, REST and GraphQL APIs, real-time systems, database architecture, cloud deployment, DevOps, and third-party integrations.",
    overview:
      "Develop modern web and mobile applications with clean code, responsive design, and scalable architecture.",
    whatWeBuild: [
      "Web application development (SaaS, dashboards, portals)",
      "REST and GraphQL API development",
      "Database architecture and backend systems",
      "Cloud deployment and DevOps",
      "Mobile applications (iOS/Android/both)",
      "E-commerce platforms",
      "Admin panels and internal tools",
      "Real-time applications",
      "Third-party API integrations",
    ],
    idealFor: [
      "Building new web/mobile applications",
      "SaaS product development",
      "Internal business tools",
      "API development and integration",
      "E-commerce and marketplace platforms",
    ],
  },
  {
    id: "mvp",
    title: "MVP & Prototype Development",
    shortDescription:
      "Rapid prototyping (2-6 weeks), technical feasibility analysis, system architecture design, and production-ready proof of concepts.",
    overview:
      "Validate your idea quickly with a production-ready MVP. Accelerated development without compromising quality.",
    whatWeBuild: [
      "Technical feasibility analysis",
      "System architecture and design",
      "Proof of concept development",
      "Minimum viable product (MVP)",
      "Rapid prototyping (2-6 weeks)",
      "User testing and iteration",
      "Scalability planning",
      "Technology stack recommendations",
    ],
    idealFor: [
      "Startups validating ideas",
      "Testing market fit before major investment",
      "Proof of concept for stakeholders",
      "Rapid experimentation",
      "Time-sensitive launches",
    ],
  },
  */
];

/**
 * Get service by ID
 */
export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id);
}

/**
 * Get all service IDs (useful for forms, routing, etc.)
 */
export function getServiceIds(): string[] {
  return services.map((service) => service.id);
}
