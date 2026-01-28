import Footer from '@/components/sections/Footer/Footer';
import { Navbar } from '@/components/sections/Navbar/Navbar';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  )
}