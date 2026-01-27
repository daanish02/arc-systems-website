import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export interface ProjectMetadata {
  title: string;
  client: string;
  timeline: string;
  budget: string;
  projectType: string;
  technologies: string[];
  featured: boolean;
  status: string;
  slug: string;
  featuredImage?: string;
  gallery?: string[];
}

export interface Project extends ProjectMetadata {
  content: string;
}

export function getAllProjects(): ProjectMetadata[] {
  // Get all MDX files from the projects directory
  const fileNames = fs.readdirSync(projectsDirectory);

  const projects = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      // Remove ".mdx" from file name to get slug
      const slug = fileName.replace(/\.mdx$/, "");

      // Read markdown file as string
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const { data } = matter(fileContents);

      return {
        slug,
        ...(data as Omit<ProjectMetadata, "slug">),
      };
    });

  // Sort projects by featured status, then by title
  return projects.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return a.title.localeCompare(b.title);
  });
}

export function getProjectBySlug(slug: string): Project | null {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      ...(data as Omit<ProjectMetadata, "slug">),
    };
  } catch (error) {
    return null;
  }
}

export function getAllProjectSlugs(): string[] {
  const fileNames = fs.readdirSync(projectsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => fileName.replace(/\.mdx$/, ""));
}
