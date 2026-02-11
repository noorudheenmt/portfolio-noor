'use client';
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavBody,
  NavItems,
  NavbarLogo,
  Navbar as NavbarWrapper,
} from "@/components/ui/resizable-navbar";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/hooks/use-toogle";
import {
  FaBlog,
  FaFile,
  FaBriefcase,
  FaCode,
  FaEnvelope,
  FaProjectDiagram,
  FaUser,
  FaGraduationCap,
  FaCertificate
} from "react-icons/fa";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const navItems = [
    { name: "About", link: "#about", icon: <FaUser /> },
    { name: "Skills", link: "#skills", icon: <FaCode /> },
    { name: "Resume", link: "#resume", icon: <FaFile /> },
    { name: "Experience", link: "#experience", icon: <FaBriefcase /> },
    { name: "Projects", link: "#projects", icon: <FaProjectDiagram /> },
    { name: "Education", link: "#education", icon: <FaGraduationCap /> },
    { name: "Certificates", link: "#certificates", icon: <FaCertificate /> },
    { name: "Blogs", link: "#blogs", icon: <FaBlog /> },
  ];

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <NavbarWrapper className="flex flex-col items-center justify-between gap-4 px-4 py-2">

        {/* Desktop Navbar */}
        <NavBody className="hidden md:flex">
          <NavbarLogo isScrolled={isScrolled} />
          <NavItems items={navItems} isScrolled={isScrolled} />

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="default"
              className="rounded-full z-50"
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <FaEnvelope />
            </Button>
          </div>
        </NavBody>

        {/* Mobile Navbar */}
        <MobileNav className="md:hidden">
          <MobileNavHeader>
            <NavbarLogo isScrolled={isScrolled} />

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          {/* Wrapped with ref div for outside click detection */}
          <div ref={menuRef}>
            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item) => (
                <Link
                  key={`mobile-link-${item.name}`}
                  href={item.link}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    document
                      .getElementById(item.link.slice(1))
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="relative text-neutral-600 dark:text-neutral-300 flex gap-2 items-center"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}

              <div className="flex w-full flex-col gap-4 mt-4">
                <Button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  variant="default"
                  className="w-full rounded-full"
                >
                  <FaEnvelope />
                </Button>
              </div>
            </MobileNavMenu>
          </div>
        </MobileNav>
      </NavbarWrapper>

      {/* Bottom Divider */}
      <div className="flex items-center justify-center">
        {!isScrolled && (
          <hr className="h-1/2 w-[90vw] rounded-full border-gray-500 bg-gradient-to-r from-primary-600 to-primary-800 shadow-md" />
        )}
      </div>
    </div>
  );
}
