'use client';
import { useState } from 'react';
import { BlogTile } from './BlogTile';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const blogs = [
  {
    id: 1,
    title: '⚛️ My Thoughts on React',
    excerpt:
      'Why I enjoy building user interfaces using React and component-based architecture.',
    content: `React makes UI development simple and structured through reusable components.
I enjoy how React encourages clean code, separation of concerns, and efficient state management.
Building interactive and responsive interfaces feels natural with React, especially for modern web applications.`,
  },
  {
    id: 2,
    title: '🚀 Why I Prefer Next.js',
    excerpt:
      'How Next.js improves performance, SEO, and developer experience in React apps.',
    content: `Next.js enhances React by providing features like file-based routing, server-side rendering,
and built-in API routes. I like how it improves performance and SEO without adding complexity.
Next.js helps me build scalable, production-ready applications faster and more efficiently.`,
  },
  {
    id: 3,
    title: '🗄️ My Approach to Databases',
    excerpt:
      'Thoughts on designing reliable and efficient databases for web applications.',
    content: `I believe a well-designed database is the backbone of any application.
I focus on proper data structure, relationships, and efficient queries to ensure performance and reliability.
Whether SQL or NoSQL, maintaining clean and scalable data models is always a priority for me.`,
  },
];


export default function BlogsSection() {
  const [selectedBlog, setSelectedBlog] = useState<null | (typeof blogs)[0]>(null)

  return (
    <section id="blogs" className="w-full py-12 dark:bg-neutral-950">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
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
  )
}
