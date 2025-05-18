import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
              Transform Your Instagram Engagement
            </h2>
            <p className="text-gray-300 mb-8 font-body">
              Sign up for a demo today and discover how to boost your audience interaction effortlessly.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white group flex items-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-gray-600 text-black hover:text-neutral-200 hover:bg-gray-800">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
              <Image 
                src="https://images.pexels.com/photos/5082567/pexels-photo-5082567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Instagram strategy" 
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}