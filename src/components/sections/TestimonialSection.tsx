import Image from 'next/image';
import { Star } from 'lucide-react';

export default function TestimonialSection() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden">
              <Image 
                src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Happy customer" 
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
          
          <div className="order-1 md:order-2 p-6 md:p-12">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            
            <blockquote className="text-2xl font-medium mb-6 font-heading leading-relaxed">
              "I truly automated and transformed our Instagram engagement! We saw a 50% increase in responses within weeks!"
            </blockquote>
            
            <div className="flex items-center">
              <div>
                <p className="font-bold font-heading">Jane Doe</p>
                <p className="text-gray-400 text-sm font-body">Marketing Director, XYZ Corp</p>
              </div>
              
              <div className="ml-auto">
                <Image 
                  src="https://images.pexels.com/photos/7666136/pexels-photo-7666136.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="WebFlow logo" 
                  width={100}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}