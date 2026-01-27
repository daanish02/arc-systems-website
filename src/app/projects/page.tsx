import Link from "next/link";
import { redirect } from "next/navigation";
import { getAllProjects } from "@/lib/projects";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function ProjectsPage() {
  // Temporarily redirect to homepage - projects page hidden until we have real projects to showcase
  redirect("/");
  
  const projects = getAllProjects();

  return (
    <>
      <Section className="min-h-[90vh] flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6">Our Projects</h1>
          <p className="text-xl text-white/70">
            Explore how we&apos;ve helped businesses transform their operations
            with custom AI solutions and robust software platforms. Each project
            showcases our commitment to delivering measurable results and
            scalable systems.
          </p>
        </div>
      </Section>

      <Section divider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.slug} className="flex flex-col">
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  {project.featured && (
                    <span className="text-xs bg-accent-red/20 text-accent-red px-2 py-1 rounded">
                      Featured
                    </span>
                  )}
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-white/60 text-sm">
                    <span className="font-semibold min-w-[80px]">Client:</span>
                    <span>{project.client}</span>
                  </div>
                  <div className="flex items-center text-white/60 text-sm">
                    <span className="font-semibold min-w-[80px]">Timeline:</span>
                    <span>{project.timeline}</span>
                  </div>
                  <div className="flex items-center text-white/60 text-sm">
                    <span className="font-semibold min-w-[80px]">Type:</span>
                    <span>{project.projectType}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white/80 mb-2">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 6).map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-white/5 text-white/70 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 6 && (
                      <span className="text-xs text-white/50 px-2 py-1">
                        +{project.technologies.length - 6} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <Link href={`/projects/${project.slug}`}>
                <Button variant="outline" className="w-full">
                  View Case Study
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      <Section divider>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-white/70 mb-8">
            Let&apos;s discuss how we can help you achieve similar results with
            a custom solution tailored to your needs.
          </p>
          <Link href="/contact">
            <Button size="lg">Get in Touch</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
