"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [hasGallery, setHasGallery] = useState<boolean>(false);

  useEffect(() => {
    // Check if gallery exists in the DOM
    const checkGallery = () => {
      const galleryElement = document.getElementById("project-gallery");
      setHasGallery(!!galleryElement);
    };
    
    // Check initially
    checkGallery();
    
    // Check again after a short delay to ensure DOM is fully loaded
    const timer = setTimeout(checkGallery, 100);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Extract headings from markdown content
    const headingRegex = /^##\s+(.+)$/gm;
    const matches = Array.from(content.matchAll(headingRegex));
    
    const extractedHeadings: TOCItem[] = matches.map((match) => {
      const title = match[1].trim();
      const id = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      
      return {
        id,
        title,
        level: 2,
      };
    });

    setHeadings(extractedHeadings);
  }, [content]);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-100px 0px -66%",
        threshold: 0,
      }
    );

    // Observe all heading elements
    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Also observe gallery if it exists
    const galleryElement = document.getElementById("project-gallery");
    if (galleryElement) {
      observer.observe(galleryElement);
    }

    return () => observer.disconnect();
  }, [headings, hasGallery]);

  if (headings.length === 0) {
    return null;
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="sticky top-32 max-w-xs">
      <p className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
        On This Page
      </p>
      <ul className="space-y-3 text-sm">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              onClick={(e) => handleClick(e, heading.id)}
              className={`block transition-colors ${
                activeId === heading.id
                  ? "text-accent-red font-semibold"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {heading.title}
            </a>
          </li>
        ))}
        {hasGallery && (
          <li>
            <a
              href="#project-gallery"
              onClick={(e) => handleClick(e, "project-gallery")}
              className={`block transition-colors ${
                activeId === "project-gallery"
                  ? "text-accent-red font-semibold"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Project Gallery
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}
