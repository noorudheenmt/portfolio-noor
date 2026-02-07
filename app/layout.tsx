import './globals.css';
import type { Metadata } from 'next';
import { Toaster } from "react-hot-toast";
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/ui/theme-provider';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mohammed Noorudheen MT | Full-Stack Developer',
  description: 'Portfolio of Mohammed Noorudheen MT, Full-Stack Developer',
  icons: {
    icon: '/assets/images/icons/portfolio.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster
            position="top-center"
            toastOptions={{
              style: { zIndex: 999999 },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
