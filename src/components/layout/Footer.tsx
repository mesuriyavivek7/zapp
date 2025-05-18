import Link from 'next/link';
import { Instagram, Twitter, Facebook, Linkedin, Youtube } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <li className="mb-2">
    <Link 
      href={href} 
      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
    >
      {children}
    </Link>
  </li>
);

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Instagram className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-bold text-white font-heading">Zapp</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6 font-body">
              Automate your Instagram interactions and grow your audience effortlessly.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
              <FooterLink href="/support">Support Center</FooterLink>
              <FooterLink href="/pricing">Pricing Plans</FooterLink>
              <FooterLink href="/faq">FAQs</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wider">Follow Us</h3>
            <ul>
              <FooterLink href="https://instagram.com">Instagram</FooterLink>
              <FooterLink href="https://twitter.com">Twitter</FooterLink>
              <FooterLink href="https://facebook.com">Facebook</FooterLink>
              <FooterLink href="https://linkedin.com">LinkedIn</FooterLink>
              <FooterLink href="https://youtube.com">YouTube</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wider">Stay Updated</h3>
            <ul>
              <FooterLink href="/newsletter">Newsletter</FooterLink>
              <FooterLink href="/blog">Blog Articles</FooterLink>
              <FooterLink href="/updates">Product Updates</FooterLink>
              <FooterLink href="/webinars">Webinars</FooterLink>
              <FooterLink href="/news">Press News</FooterLink>
            </ul>
          </div>
          
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wider">Join</h3>
            <p className="text-gray-400 text-sm mb-4 font-body">
              Join our newsletter for the latest features and updates straight to your inbox.
            </p>
            <form className="space-y-2">
              <Input 
                type="email" 
                placeholder="Your Email Address" 
                className="bg-gray-800 border-gray-700 focus:ring-blue-500 text-white"
              />
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Subscribe</Button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm font-body">
            © 2024 Automation. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/privacy" className="text-gray-500 hover:text-gray-400 text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-gray-400 text-sm">
              Terms of Service
            </Link>
            <Link href="/cookie" className="text-gray-500 hover:text-gray-400 text-sm">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}