import Image from 'next/image';
import { Bot, MessageSquare, Zap } from 'lucide-react';

const FeatureCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string 
}) => (
  <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 transform transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg">
    <div className="mb-4 text-blue-500">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 font-heading">{title}</h3>
    <p className="text-gray-400 text-sm font-body">{description}</p>
  </div>
);

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Transform Your Instagram Engagement Effortlessly
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-body">
            With automation, you can automate responses and streamline your interactions on Instagram. Our platform ensures you never miss an opportunity to engage with your audience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Bot size={40} />}
            title="AI-Driven Responses for Instant Engagement"
            description="Utilize advanced AI technology to respond instantly."
          />
          <FeatureCard 
            icon={<MessageSquare size={40} />}
            title="Custom Messages Tailored to Your Brand Voice"
            description="Craft personalized messages that resonate with your audience."
          />
          <FeatureCard 
            icon={<Zap size={40} />}
            title="Automated Triggers for Seamless Interaction"
            description="Set up automation to engage with comments effortlessly."
          />
        </div>
        
        <div className="mt-16 pt-8">
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 font-heading">
                  Transform Your Instagram Engagement
                </h2>
                <p className="text-gray-300 mb-6 font-body">
                  Sign up for a demo today and discover how to boost your audience interaction effortlessly.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Get Started
                  </button>
                  <button className="border border-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px]">
                <Image 
                  src="https://images.pexels.com/photos/7354/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Instagram engagement dashboard" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}