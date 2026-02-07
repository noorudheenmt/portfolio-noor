"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { IconSchool } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const educationData = [
  {
    id: "mca",
    college: "St. Joseph's College of Engineering & Technology, Palai",
    university: "APJ Abdul Kalam Technological University",
    year: "2022 - 2024",
    course: "Master of Computer Applications (MCA)",
    description:
      "Completed MCA with a curriculum covering DBMS, data structures, machine learning, full-stack development, and software engineering principles with practical exposure.",
    universityLogo: "/assets/images/ktu.png",
    collegeLogo: "/assets/images/sjcet.png",
    certificate: "/assets/pdf/Certificate-MCA.pdf",
  },
  {
    id: "bca",
    college: "ISS Arts & Science College, Perinthalmanna",
    university: "University of Calicut",
    year: "2019 - 2022",
    course: "Bachelor of Computer Applications (BCA)",
    description:
      "Completed BCA with a curriculum covering programming fundamentals, data structures, databases, web technologies, and core computer science concepts with strong practical exposure.",
    universityLogo: "/assets/images/cu.png",
    collegeLogo: "/assets/images/iss.png",
    certificate: "/assets/pdf/Certificate-BCA.pdf",
  }
];

const EducationLogos = ({ universityLogo, collegeLogo }: any) => (
  <div className="flex items-center justify-between">
    {[universityLogo, collegeLogo].map((logo, i) => (
      <div key={i} className="flex h-10 w-10 items-center justify-center">
        <Image
          src={logo}
          alt="Institution Logo"
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
    ))}
  </div>
);

const DownloadButton = ({ href }: { href: string }) => (
  <div className="flex justify-center mt-4">
    <motion.a
      href={href}
      download
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="
        inline-flex items-center gap-2
        rounded-md bg-foreground text-background
        px-3 py-2 text-sm font-medium
        shadow-md transition-all
        hover:bg-foreground/90 hover:shadow-lg
      "
    >
      <FaDownload />
      Download Certificate
    </motion.a>
  </div>
);

const Education = () => {
  const isTwoCards = educationData.length === 2;

  return (
    <section id="education" className="bg-background py-20">
      {/* Header */}
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">Education</h1>
          <p className="mx-auto mt-4 max-w-3xl text-base font-semibold italic text-muted-foreground">
            Academic journey that laid the foundation of my career.
          </p>
        </motion.div>
      </div>

      {/* Cards */}
      <BentoGrid
        className={cn(
          "mx-auto grid-cols-1 sm:grid-cols-2",
          isTwoCards ? "max-w-3xl md:grid-cols-2" : "max-w-6xl md:grid-cols-3",
        )}
      >
        {educationData.map((edu) => (
          <BentoGridItem
            key={edu.id}
            className="min-h-[350px]"
            header={
              <div className="space-y-2">
                <EducationLogos
                  universityLogo={edu.universityLogo}
                  collegeLogo={edu.collegeLogo}
                />

                <p className="text-[0.8125rem] font-semibold text-center">
                  {edu.college}
                </p>

                <p className="text-[0.8125rem] italic text-center text-muted-foreground">
                  {edu.university}
                </p>

                <p className="text-[0.75rem] text-center text-muted-foreground/80">
                  {edu.year}
                </p>
              </div>
            }
            title={
              <div className="flex items-center justify-center gap-2">
                <IconSchool className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{edu.course}</span>
              </div>
            }
            description={
              <div className="flex h-full flex-col justify-between">
                <p className="text-sm leading-relaxed text-muted-foreground text-justify">
                  {edu.description}
                </p>
                <DownloadButton href={edu.certificate} />
              </div>
            }
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Education;
