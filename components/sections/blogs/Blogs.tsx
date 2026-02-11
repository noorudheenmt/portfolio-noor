"use client";
import { useState } from "react";
import { BlogTile } from "./BlogTile";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const blogs = [
  {
    id: 1,
    title: "📰 Planning to Launch a Newsletter",
    excerpt:
      "Thinking about starting a newsletter to share updates, blogs, and learning insights.",
    content: `I am planning to introduce a newsletter feature on this portfolio website. The idea is to keep visitors updated whenever I publish a new blog, complete a project, or learn something new. Through the newsletter, I want to share insights about web development, real-world project experiences, and my technical growth journey. It will also help me stay consistent in writing and sharing knowledge. This feature will soon be integrated dynamically once I build my CMS system.`,
  },
  {
    id: 2,
    title: "🌐 Building My Personal Portfolio",
    excerpt:
      "Why I built this portfolio and what it represents in my journey as a developer.",
    content: `This portfolio represents my journey as a Software Engineer. I built it using modern technologies like Next.js and Tailwind CSS to showcase my skills, projects, and experience in a clean and professional way. My goal was to create a fast, responsive, and well-structured application that reflects both my technical knowledge and design sense. It is not just a website — it is a reflection of my growth, learning, and passion for development.`,
  },
  {
    id: 3,
    title: "🛠️ Planning to Build a Custom CMS",
    excerpt:
      "My plan to build a dynamic CMS to manage blogs, projects, and content.",
    content: `Currently, I am planning to build a custom CMS for this portfolio. Instead of hardcoding blogs and project details, I want to manage everything dynamically through an admin dashboard. The CMS will allow me to add, edit, and delete blogs, projects, certificates, and other content easily. I am planning to build it using Next.js with a backend and a structured database to make it scalable and production-ready. This will also help me demonstrate my full-stack development skills.`,
  },
];

export default function BlogsSection() {
  const [selectedBlog, setSelectedBlog] = useState<null | (typeof blogs)[0]>(
    null,
  );

  return (
    <section id="blogs" className="w-full py-12 dark:bg-neutral-950">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="mb-8 text-3xl font-bold text-center text-zinc-800 dark:text-zinc-100">
          Blogs
        </h2>

        <div className="grid gap-4">
          {blogs.map((blog) => (
            <BlogTile
              key={blog.id}
              title={blog.title}
              excerpt={blog.excerpt}
              onRead={() => setSelectedBlog(blog)}
            />
          ))}
        </div>
      </div>

      <Dialog open={!!selectedBlog} onOpenChange={() => setSelectedBlog(null)}>
        <DialogContent className="max-w-[95vw] sm:max-w-[90vw] max-h-[90vh] overflow-y-auto p-6 rounded-lg bg-white dark:bg-neutral-900">
          {selectedBlog && (
            <>
              <DialogHeader className="sticky top-0 bg-white dark:bg-neutral-900 z-10x pb-4 border-b border-zinc-200 dark:border-zinc-700">
                <DialogTitle className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
                  {selectedBlog.title}
                </DialogTitle>
              </DialogHeader>
              <div className="mt-6 prose prose-zinc dark:prose-invert max-w-none">
                <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {selectedBlog.content}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
