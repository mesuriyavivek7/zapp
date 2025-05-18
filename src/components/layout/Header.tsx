"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Instagram } from 'lucide-react';
import { cn } from '@/lib/utils';

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link 
    href={href} 
    className="text-gray-300 hover:text-white transition-colors duration-200"
  >
    {children}
  </Link>
);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-4 px-4 md:px-8 bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto max-w-7xl">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Instagram className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-bold text-white font-heading">Zapp</span>
            </Link>
            
            <div className="hidden md:flex ml-10 space-x-8">
              <NavLink href="/">Home</NavLink>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-1">
                    Features <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-96 bg-gray-900 border-gray-800 text-white">
                  <div className="grid grid-cols-2 gap-1 p-2">
                    <div className="col-span-2 p-2 text-sm text-gray-400">Featured from Blog</div>
                    
                    <DropdownMenuItem className="flex flex-col items-start p-2 focus:bg-gray-800 cursor-pointer">
                      <div className="h-12 w-full bg-gray-800 rounded-md mb-2"></div>
                      <div className="text-sm font-medium">Article Title</div>
                      <div className="text-xs text-gray-400">Lorem ipsum dolor sit amet consectetur elit</div>
                      <div className="text-xs text-blue-500 mt-1">Read more</div>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem className="flex flex-col items-start p-2 focus:bg-gray-800 cursor-pointer">
                      <div className="h-12 w-full bg-gray-800 rounded-md mb-2"></div>
                      <div className="text-sm font-medium">Article Title</div>
                      <div className="text-xs text-gray-400">Lorem ipsum dolor sit amet consectetur elit</div>
                      <div className="text-xs text-blue-500 mt-1">Read more</div>
                    </DropdownMenuItem>
                    
                    <div className="col-span-2 p-2 mt-2">
                      <div className="grid grid-cols-2 gap-2">
                        <Link href="/page-one" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-800 transition-colors">
                          <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center text-blue-500">1</div>
                          <div>
                            <div className="text-sm font-medium">Page One</div>
                            <div className="text-xs text-gray-400">Lorem ipsum dolor sit amet consectetur elit</div>
                          </div>
                        </Link>
                        
                        <Link href="/page-two" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-800 transition-colors">
                          <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center text-blue-500">2</div>
                          <div>
                            <div className="text-sm font-medium">Page Two</div>
                            <div className="text-xs text-gray-400">Lorem ipsum dolor sit amet consectetur elit</div>
                          </div>
                        </Link>
                        
                        <Link href="/page-three" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-800 transition-colors">
                          <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center text-blue-500">3</div>
                          <div>
                            <div className="text-sm font-medium">Page Three</div>
                            <div className="text-xs text-gray-400">Lorem ipsum dolor sit amet consectetur elit</div>
                          </div>
                        </Link>
                        
                        <Link href="/page-four" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-800 transition-colors">
                          <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center text-blue-500">4</div>
                          <div>
                            <div className="text-sm font-medium">Page Four</div>
                            <div className="text-xs text-gray-400">Lorem ipsum dolor sit amet consectetur elit</div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <NavLink href="/pricing">Pricing</NavLink>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-1">
                    Use Cases <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-gray-900 border-gray-800 text-white">
                  <DropdownMenuItem className="focus:bg-gray-800 focus:text-white">For Creators</DropdownMenuItem>
                  <DropdownMenuItem className="focus:bg-gray-800 focus:text-white">For Businesses</DropdownMenuItem>
                  <DropdownMenuItem className="focus:bg-gray-800 focus:text-white">For Agencies</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-transparent"><Link href={'/sign-in'}>Log In</Link></Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Sign Up</Button>
          </div>
          
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={cn("w-6 h-0.5 bg-white mb-1.5 transition-all", isOpen && "rotate-45 translate-y-2")}></div>
            <div className={cn("w-6 h-0.5 bg-white mb-1.5 transition-all", isOpen && "opacity-0")}></div>
            <div className={cn("w-6 h-0.5 bg-white transition-all", isOpen && "-rotate-45 -translate-y-2")}></div>
          </button>
        </nav>
        
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-gray-800 mt-4 animate-fade-in-down">
            <div className="flex flex-col space-y-4">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/features">Features</NavLink>
              <NavLink href="/pricing">Pricing</NavLink>
              <NavLink href="/use-cases">Use Cases</NavLink>
              <div className="pt-4 flex flex-col space-y-3">
                <Button variant="ghost" className="justify-start text-gray-300 hover:text-white hover:bg-transparent">Log In</Button>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">Sign Up</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}