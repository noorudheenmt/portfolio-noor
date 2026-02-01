"use client";
import Image from "next/image";
import { FC, JSX } from "react";
import { motion } from "framer-motion";
import { Timeline as TimelineComponent } from "@/components/ui/timeline";
import { FaBriefcase, FaBuilding, FaCode, FaLaptopCode } from "react-icons/fa";

export interface TimelineItem {
  id: number;
  type: "work" | "project";
  title: string;
  company: string;
  location: string;
  date: string;
  imageURL: string;
  description: string;
  achievements: string[];
}
export const timelineData: TimelineItem[] = [
  {
    id: 1,
    type: "work",
    title: "Software Engineer",
    company: "Squad Technologies Pvt. Ltd",
    location: "Ahmedabad, Gujarat, India",
    date: "Aug 2024 - Present",
    imageURL: "/assets/images/squad.png",
    description:
      "Product: MoonStride - Developed scalable APIs and backend services for a SaaS application.",
    achievements: [
      "Designed and delivered 50+ RESTful APIs with high scalability, performance consistency, and long-term maintainability.",
      "Integrated financial platforms including Xero, Zoho Books, Zoho Creator, and QuickBooks for automated workflows.",
      "Architected modular backend systems using Node.js, Next.js, and microservices for optimized business logic.",
      "Managed relational and NoSQL databases using MySQL, MongoDB, and Redis for fast and reliable data access.",
      "Implemented secure authentication flows using OAuth 2.0 and JWT across multiple SaaS integrations.",
      "Optimized system performance through caching strategies, query tuning, and asynchronous processing.",
      "Built and maintained CI/CD pipelines using GitLab and Docker to ensure smooth and reliable deployments.",
      "Collaborated closely with frontend, QA, and product teams to deliver features aligned with business goals.",
      "Ensured application security, error handling, and logging standards across all backend services.",
      "Actively contributed to code reviews, refactoring, and documentation to improve team productivity.",
    ],
  },
  {
    id: 2,
    type: "work",
    title: "Software Engineer Trainee",
    company: "Squad Technologies Pvt. Ltd",
    location: "Thrissur, Kerala, India",
    date: "May 2024 - Jul 2024",
    imageURL: "/assets/images/squad.png",
    description:
      "Training Program - Completed an intensive 3-month backend and full-stack training with hands-on project experience.",
    achievements: [
      "Learned Node.js, Next.js, React.js, and microservices architecture through structured training projects.",
      "Developed RESTful APIs with efficient database handling using MySQL, MongoDB, and Redis.",
      "Understood product architecture, data flow, and core entities for backend–frontend integration.",
      "Built mini projects implementing CRUD operations, authentication, and third-party API usage.",
      "Followed clean coding standards, best practices, and real-world enterprise development workflows.",
      "Gained hands-on experience with Git version control, branching strategies, and team collaboration.",
      "Practiced debugging, error handling, and performance optimization in backend applications.",
      "Assisted in deployments and learned CI/CD fundamentals used in production environments.",
    ],
  },
];

export const TimelineElement: FC<{ item: TimelineItem; index: number }> = ({
  item,
  index,
}) => (
  <div className="space-y-6" key={index}>
    <div className="flex items-center gap-4">
      {item.type === "work" && (
        <Image
          src={item.imageURL}
          alt={`${item.company} Logo`}
          width={48}
          height={48}
          className="rounded-md shadow bg-muted p-1"
        />
      )}
      <div>
        <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
        <p className="text-sm text-muted-foreground">
          {item.company} • {item.location}
        </p>
        <p className="text-sm text-muted-foreground">{item.date}</p>
      </div>
    </div>

    <p className="text-sm text-muted-foreground">{item.description}</p>

    <ul className="list-disc pl-5 space-y-1 text-sm text-foreground">
      {item.achievements.map((ach) => (
        <li key={ach}>{ach}</li>
      ))}
    </ul>

    {item.type === "project" && (
      <div className="w-full mt-4">
        <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-md bg-background">
          <Image
            src={item.imageURL}
            alt={`${item.title} Architecture`}
            className="object-contain"
            loading="lazy"
            fill
          />
        </div>
      </div>
    )}
  </div>
);

const Timeline: FC = () => {
  const timelineContent = timelineData.map((item) => ({
    title: item.date,
    content: <TimelineElement key={item.id} item={item} index={item.id} />,
  }));

  return (
    <section
      id="experience"
      className="py-20 bg-background text-foreground transition-colors"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold tracking-tight text-primary">
            Professional Experience & Projects
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base">
            Highlights of my career and key projects showcasing my skills &
            impact.
          </p>
        </motion.div>

        <div className="relative w-full">
          <TimelineComponent data={timelineContent} />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
