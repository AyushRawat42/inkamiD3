import type { Metadata } from 'next';
import './globals.css';
import { CustomCursor } from '@/components/custom-cursor';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Inkami Global Services | IP-Driven Tech & BPO',
  description: 'Intellectual Property-driven technology and business process outsourcing (BPO) company.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-deep-space bg-gradient-pulse text-white antialiased selection:bg-hyper-violet selection:text-white" suppressHydrationWarning>
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
