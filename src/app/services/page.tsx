import React from "react";
import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";

const techCategories = [
  {
    category: "AI & Machine Learning",
    technologies: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "OpenAI API",
      "Anthropic Claude",
      "LangChain",
      "LangGraph",
      "Hugging Face",
    ],
  },
  {
    category: "Data Science & Analytics",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Jupyter",
      "Matplotlib/Seaborn",
      "SQL",
      "Tableau/Power BI",
      "Statistical Modeling",
    ],
  },
  {
    category: "Computer Vision & NLP",
    technologies: [
      "OpenCV",
      "YOLO",
      "spaCy",
      "NLTK",
      "Transformers",
      "Object Detection",
      "Image Recognition",
      "Text Analysis",
    ],
  },
  {
    category: "MLOps & Infrastructure",
    technologies: [
      "AWS SageMaker",
      "Google Cloud AI",
      "Azure ML",
      "Docker",
      "MLflow",
      "Vector Databases",
      "PostgreSQL",
      "MongoDB",
    ],
  },
];

export const metadata: Metadata = {
  title: "Services",
  description:
    "Expert AI/ML development, data science, analytics, and intelligent automation services in Dubai.",
};

export default function ServicesPage() {
  return (
    <>
      <Section className="min-h-[90vh] flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6">Our Services</h1>
          <p className="text-2xl text-white/70 mb-8">
            AI, Machine Learning, and Data Systems. Built for Production.
          </p>
          <p className="text-xl text-white/70">
            We design and deploy AI models, automation workflows, and analytics systems that deliver real business value.
          </p>
        </div>
      </Section>

      {services.map((service, index) => (
        <React.Fragment key={service.id}>
          <Section
            id={service.id}
            divider={index % 1 === 0}
          >
            <div className="mb-8">
              <h2 className="mb-4">{service.title}</h2>
              <p className="text-xl text-white/70">{service.overview}</p>
            </div>

            <Card className="mb-8">
              <h3 className="text-xl font-semibold mb-4">What We Build</h3>
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-2">
                {service.whatWeBuild.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-accent-red mr-2">•</span>
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold mb-4">Ideal For</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {service.idealFor.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-accent-red mr-2">✓</span>
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Section>

          {/* Add divider after AI Chatbots and ML sections */}
          {(index === 0 || index === 1) && (
            <div className="border-t border-border-grey"></div>
          )}
        </React.Fragment>
      ))}

      {/* Technologies We Use Section - Commented Out */}
      {/*
      <Section divider>
        <div className="text-center mb-16">
          <h2 className="mb-4">Technologies We Use</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Modern tools and frameworks to build robust, scalable AI/ML solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techCategories.map((item, index) => (
            <Card key={index}>
              <h3 className="text-xl font-semibold mb-4 text-accent-red">
                {item.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-white/70 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <p className="text-center text-white/60 text-sm mt-8">
          We choose the right tools for your specific needs, not what's trendy.
        </p>
      </Section>
      */}

      <Section divider>
        <div className="text-center">
          <h2 className="mb-6">Ready to get started?</h2>
          <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
            Book a discovery call to discuss your AI, data, or automation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href="/contact">
              Book a Discovery Call
            </Button>
            <Button variant="outline" size="lg" href="/about">
              Learn More About Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
