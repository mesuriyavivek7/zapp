import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { M_PLUS_Rounded_1c, Open_Sans } from 'next/font/google';
import {
  ClerkProvider,
} from '@clerk/nextjs'
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "sonner";


const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
  fallback: ['system-ui', 'arial']
});

const mPlusRounded = M_PLUS_Rounded_1c({
  weight: ['400', '500', '700', '800'],
  subsets: ['latin'],
  variable: '--font-mplusround',
  display: 'swap',
  fallback: ['system-ui', 'arial'],
  preload: true,
  adjustFontFallback: true
});

const openSans = Open_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-opensans',
  display: 'swap',
  fallback: ['system-ui', 'arial'],
  preload: true,
  adjustFontFallback: true
});


export const metadata: Metadata = {
  title: 'Zapp - Instagram Automation Tool',
  description: 'Automate your Instagram engagement and grow your audience effortlessly',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <ClerkProvider>
          <html lang="en" className={`${mPlusRounded.variable} ${openSans.variable}`}>
            <body
             suppressHydrationWarning
             className={inter.className}>
             <ThemeProvider
             attribute="class"
             defaultTheme="system"
             enableSystem
             disableTransitionOnChange
            >
              {children}
              <Toaster></Toaster>
            </ThemeProvider>
          </body>
          </html>
     </ClerkProvider>
  );
}
