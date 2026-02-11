"use client";
import { motion } from "framer-motion";
import { config } from "../../../config";
import { RxGithubLogo } from "react-icons/rx";
import { FC, useEffect, useState } from "react";
import { FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer: FC = () => {
  const socialLinks = [
    {
      href: config.frontend.githubUrl,
      icon: <RxGithubLogo className="w-5 h-5" />,
      label: "GitHub",
    },
    {
      href: config.frontend.linkedinUrl,
      icon: <FaLinkedin className="w-5 h-5" />,
      label: "LinkedIn",
    },
    {
      href: config.frontend.twitterUrl,
      icon: <FaTwitter className="w-5 h-5" />,
      label: "Twitter",
    },
    {
      href: config.frontend.instagramUrl,
      icon: <FaInstagram className="w-5 h-5" />,
      label: "Instagram",
    },
    {
      href: config.frontend.whatsappUrl,
      icon: <FaWhatsapp className="w-5 h-5" />,
      label: "WhatsApp",
    },
  ];

  return (
    <footer className="w-full px-6 py-8 bg-background text-foreground border-t border-border flex flex-col items-center gap-4">
      {/* Social Links */}
      <div className="flex items-center justify-center gap-4">
        {socialLinks.map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 bg-muted rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.2, rotate: 5 }}
            aria-label={`Visit my ${link.label} profile`}
          >
            {link.icon}
          </motion.a>
        ))}
      </div>
      {/* Powered by */}
      <p className="text-xs text-muted-foreground mt-2">
        © {new Date().getFullYear()} Powered by Noor
      </p>
    </footer>
  );
};

export default Footer;
