import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative pt-16 pb-24 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading leading-tight">
              Engage Your Audience Effortlessly on Instagram
            </h1>
            <p className="text-gray-300 text-lg mb-8 font-body max-w-xl">
              Automate responses to DMs and comments. Experience seamless engagement that turns conversations into opportunities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 h-auto text-lg font-medium transition-all duration-200 transform hover:scale-105">
                Learn More
              </Button>
              <Button variant="outline" className="border-gray-600 text-black hover:text-neutral-200 hover:bg-gray-800 px-6 py-4 h-auto text-lg font-medium transition-all duration-200">
                Sign Up
              </Button>
            </div>
          </div>
          
          <div className="relative h-[300px] sm:h-[400px] md:h-[450px] rounded-xl overflow-hidden">
            <Image 
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="People using Instagram automation tool" 
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}