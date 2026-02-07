import Hero from '@/components/sections/hero/Hero';
import Skills from '@/components/sections/skills/Skills';
import ResumeSection from '@/components/sections/resume/Resume';
import Experience from '@/components/sections/experience/Experience';
import Projects from '@/components/sections/projects/Projects';
import Education from '@/components/sections/education/Education';
import Certificate from '@/components/sections/certificates/Certificate';
import BlogsSection from '@/components/sections/blogs/Blogs';
import ContactUs from '@/components/sections/contact/ContactUs';

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen">
      <div className="flex flex-col gap-10 sm:gap-20">
        <Hero />
        <Skills />
        <ResumeSection />
        <Experience />
        <Projects />
        <Education />
        <Certificate />
        <BlogsSection />
        <ContactUs />
        {/*<Toaster position="bottom-right" /> */}
      </div>
    </div>
  )
}
