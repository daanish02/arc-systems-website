import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/projects";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import ImageGallery from "@/components/ui/ImageGallery";
import TableOfContents from "@/components/ui/TableOfContents";
import { mdxComponents } from "@/components/ui/MDXComponents";

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Header */}
      <Section className="pt-32">
        <Link href="/projects">
          <Button variant="outline" className="mb-8">
            ← Back to Projects
          </Button>
        </Link>

        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm text-accent-red font-semibold uppercase tracking-wider">
              {project.projectType}
            </span>
            {project.featured && (
              <span className="text-xs bg-accent-red/20 text-accent-red px-2 py-1 rounded">
                Featured Project
              </span>
            )}
          </div>

          <h1 className="mb-6">{project.title}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <p className="text-sm text-white/60 mb-1">Client</p>
              <p className="text-lg font-semibold">{project.client}</p>
            </div>
            <div>
              <p className="text-sm text-white/60 mb-1">Timeline</p>
              <p className="text-lg font-semibold">{project.timeline}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Hero Image */}
      {project.featuredImage && (
        <Section>
          <div className="max-w-6xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10">
              <Image
                src={project.featuredImage}
                alt={project.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>
          </div>
        </Section>
      )}

      {/* Main Content */}
      <Section divider>
        <div className="flex flex-col xl:flex-row gap-12">
          {/* TOC - Mobile/Tablet (top) */}
          <div className="xl:hidden">
            <TableOfContents content={project.content} />
          </div>

          {/* Main Content Card */}
          <div className="flex-1 max-w-4xl mx-auto xl:mx-0">
            <Card className="prose-wrapper">
              <MDXRemote source={project.content} components={mdxComponents} />
            </Card>
            
            {/* Image Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="mt-12">
                <h2
                  id="project-gallery"
                  className="text-3xl font-bold mb-6 scroll-mt-24"
                >
                  Project Gallery
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-video bg-white/5 rounded-lg overflow-hidden border border-white/10 hover:border-accent-red/50 transition-colors"
                    >
                      <Image
                        src={image}
                        alt={`Project screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* TOC - Desktop (right side) */}
          <div className="hidden xl:block flex-shrink-0 w-64">
            <TableOfContents content={project.content} />
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section divider>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="mb-4">Interested in Similar Results?</h2>
          <p className="text-xl text-white/70 mb-8">
            Let&apos;s discuss how we can craft a custom solution for your
            business challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg">Start a Conversation</Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline" size="lg">
                View More Projects
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
