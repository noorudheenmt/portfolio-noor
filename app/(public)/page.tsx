import Hero from '@/components/sections/Hero/Hero';
import Skills from '@/components/sections/skills/Skills';
import ResumeSection from '@/components/sections/resume/Resume';
import Timeline from '@/components/sections/Timeline/Timeline';

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <ResumeSection />
        <Timeline />
        {/*<Projects />
        <BlogsSection />
        <ContactUs />
        <Toaster position="bottom-right" /> */}
      </div>
    </div>
  )
}
