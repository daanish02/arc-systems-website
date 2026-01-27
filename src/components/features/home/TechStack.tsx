import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

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

export default function TechStack() {
  return (
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
  );
}
