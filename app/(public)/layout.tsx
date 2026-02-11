'use client';
import Footer from '@/components/sections/footer/Footer';
import { Navbar } from '@/components/sections/navbar/Navbar';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  )
}