import Hero from '@/components/sections/Hero/Hero';


export default function Home() {
  return (
    <div className="min-h-screen min-w-screen">
      <div className="flex flex-col gap-20">
        <Hero />
        {/* <Skills />
        <ResumeSection />
        <Projects />
        <BlogsSection />
        <ContactUs />
        <Toaster position="bottom-right" /> */}
      </div>
    </div>
  )
}
