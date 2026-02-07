"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaDownload, FaCertificate } from "react-icons/fa";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";

const certificatesData = [
  {
    id: "nptel-cloud",
    title: "Cloud Computing",
    issuer: "NPTEL - IIT Kharagpur",
    duration: "Jan - Apr 2023",
    description:
      "Completed a 12-week NPTEL certification covering cloud service models, virtualization, distributed systems, and cloud security.",
    universityLogo: "/assets/images/iit-kharagpur.png",
    certificateLogo: "/assets/images/nptel.png",
    certificate: "/assets/pdf/Certificate-CC.pdf",
  },
  {
    id: "nptel-iot",
    title: "Introduction to Internet of Things",
    issuer: "NPTEL - IIT Kharagpur",
    duration: "Jul - Oct 2023",
    description:
      "Completed a 12-week NPTEL certification covering IoT architecture, sensors, communication protocols, and embedded systems.",
    universityLogo: "/assets/images/iit-kharagpur.png",
    certificateLogo: "/assets/images/nptel.png",
    certificate: "/assets/pdf/Certificate-IOT.pdf",
  },
];

const CertificateLogos = ({
  universityLogo,
  certificateLogo,
}: {
  universityLogo: string;
  certificateLogo: string;
}) => (
  <div className="flex items-center justify-between">
    {[universityLogo, certificateLogo].map((logo, i) => (
      <div key={i} className="flex h-10 w-10 items-center justify-center">
        <Image
          src={logo}
          alt="Certificate Logo"
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

const Certificates = () => {
  const isTwoCards = certificatesData.length === 2;

  return (
    <section id="certificates" className="bg-background py-20">
      {/* Header */}
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">Certifications</h1>
          <p className="mx-auto mt-4 max-w-3xl text-base font-semibold italic text-muted-foreground">
            Professional certifications that validate my skills and continuous
            learning.
          </p>
        </motion.div>
      </div>

      {/* Grid */}
      <BentoGrid
        className={cn(
          "mx-auto grid-cols-1 sm:grid-cols-2",
          isTwoCards ? "max-w-3xl md:grid-cols-2" : "max-w-6xl md:grid-cols-3",
        )}
      >
        {certificatesData.map((cert) => (
          <BentoGridItem
            key={cert.id}
            className="h-full"
            header={
              <div className="space-y-2">
                <CertificateLogos
                  universityLogo={cert.universityLogo}
                  certificateLogo={cert.certificateLogo}
                />
                <p className="text-xs font-semibold text-center">
                  {cert.issuer}
                </p>
                <p className="text-[0.75rem] italic text-center text-muted-foreground">
                  {cert.duration}
                </p>
              </div>
            }
            title={
              <div className="flex items-center justify-center gap-2">
                <FaCertificate className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{cert.title}</span>
              </div>
            }
            description={
              <div className="flex h-full flex-col justify-between">
                <p className="text-sm text-muted-foreground text-justify">
                  {cert.description}
                </p>
                <DownloadButton href={cert.certificate} />
              </div>
            }
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Certificates;
