"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconShoppingCart,
  IconLock,
  IconTableColumn,
} from "@tabler/icons-react";

const projectsData = [
  {
    title: "ecommerce-api-node",
    description:
      "Secure, scalable e-commerce backend REST API supporting authentication, orders, and payments.",
    imageURL: "/assets/images/ecommerce.png",
    github: "https://github.com/noorudheenmt/ecommerce-api-node",
    live: "https://ecommerce-api-node-bv3g.onrender.com/api/ping/v1",
    icon: <IconShoppingCart className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: "authentication-api-node",
    description:
      "A production-ready Node.js authentication API with JWT, email-based OTP password reset, and Winston logging.",
    imageURL: "/assets/images/authentication.png",
    github: "https://github.com/noorudheenmt/authentication-api-node",
    icon: <IconLock className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: "Portfolio",
    description:
      "Modern portfolio built with Next.js, TailwindCSS, and ShadCN, deployed on Cloudflare Pages.",
    imageURL: "/assets/images/portfolio.png",
    github: "https://github.com/noorudheenmt/portfolio-noor",
    icon: <IconTableColumn className="h-4 w-4 text-muted-foreground" />,
  },
];

const LiveIndicator = () => (
  <span className="relative flex h-2 w-2">
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
  </span>
);

const Projects = () => {
  return (
    <section id="projects" className="bg-background py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold md:text-5xl">My Projects</h1>
          <p className="mx-auto mt-4 max-w-3xl text-base font-semibold italic text-muted-foreground md:text-lg">
            A collection of innovative projects showcasing technical expertise &
            creativity.
          </p>
        </motion.div>
      </div>

      <BentoGrid className="mx-auto max-w-5xl">
        {projectsData.map((project, i) => (
          <BentoGridItem
            key={project.title}
            title={project.title}
            description={
              <div className="space-y-2 text-sm text-foreground">
                <p>{project.description}</p>

                <div className="flex gap-3">
                  {/* GitHub Badge */}
                  <Badge asChild variant="secondary" className="rounded-full">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <FaGithub className="size-3" />
                      GitHub
                    </a>
                  </Badge>

                  {/* Live / Not Live */}
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-0.5 text-xs font-medium text-foreground shadow-sm transition-colors hover:bg-muted hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      <LiveIndicator />
                      Live
                    </a>
                  ) : (
                    <Badge
                      variant="outline"
                      className="cursor-not-allowed rounded-full text-xs text-muted-foreground"
                    >
                      Not Live
                    </Badge>
                  )}
                </div>
              </div>
            }
            header={
              <div className="relative h-full min-h-[6rem] w-full overflow-hidden rounded-xl">
                <Image
                  src={project.imageURL}
                  alt={project.title}
                  fill
                  quality={80}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            }
            icon={project.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Projects;
