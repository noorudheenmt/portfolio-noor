import Hero from '@/components/sections/hero/Hero';
import Skills from '@/components/sections/skills/Skills';
import ResumeSection from '@/components/sections/resume/Resume';
import Timeline from '@/components/sections/timeline/Timeline';
import Projects from '@/components/sections/projects/Projects';
import Education from '@/components/sections/education/Education';
import Certificate from '@/components/sections/certificates/Certificate';
import BlogsSection from '@/components/sections/blogs/Blogs';
import ContactUs from '@/components/sections/contact/ContactUs';

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <ResumeSection />
        <Timeline />
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
