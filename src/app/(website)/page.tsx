import Image from "next/image";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import CTASections from '@/components/sections/CTASections';
import { Toaster } from '@/components/ui/sonner';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Toaster />
      <Header />
      <HeroSection />
      <FeaturesSection />
      <TestimonialSection />
      <CTASections />
      <Footer />
    </main>
  );
}
