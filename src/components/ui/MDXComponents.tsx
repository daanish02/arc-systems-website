import type { MDXComponents } from "mdx/types";
import Image from "next/image";

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-4xl font-bold mb-6 mt-8 first:mt-0">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2
      id={
        children
          ?.toString()
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "") || ""
      }
      className="text-3xl font-bold mb-4 mt-8 scroll-mt-24"
    >
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-2xl font-semibold mb-3 mt-6">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-xl font-semibold mb-2 mt-4">{children}</h4>
  ),
  p: ({ children }) => <p className="mb-4 text-white/70 leading-relaxed">{children}</p>,
  ul: ({ children }) => <ul className="mb-4 space-y-2">{children}</ul>,
  ol: ({ children }) => <ol className="mb-4 space-y-2 list-decimal">{children}</ol>,
  li: ({ children }) => (
    <li className="text-white/70 leading-relaxed">
      <span className="text-accent-red mr-2">•</span>
      {children}
    </li>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-white">{children}</strong>
  ),
  em: ({ children }) => <em className="italic">{children}</em>,
  code: ({ children }) => (
    <code className="bg-white/5 px-2 py-1 rounded text-sm text-accent-red font-mono">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="bg-white/5 p-4 rounded-lg overflow-x-auto mb-4 border border-white/10">
      {children}
    </pre>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-accent-red pl-4 py-4 my-6 italic text-white/80 bg-white/5 flex items-center">
      <div>{children}</div>
    </blockquote>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-accent-red hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  img: ({ src, alt }) => (
    <span className="block my-8 rounded-lg overflow-hidden border border-white/10">
      <Image
        src={src || ""}
        alt={alt || "Project image"}
        width={1200}
        height={675}
        className="w-full h-auto"
        style={{ objectFit: "cover" }}
      />
    </span>
  ),
  hr: () => <hr className="my-8 border-white/10" />,
};
