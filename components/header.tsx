'use client';

import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Header() {
   const [open, setOpen] = useState<boolean>(false);
   const [sticky, setSticky] = useState('');
   const pathname = usePathname();

   // on render, set listener
   useEffect(() => {
      window.addEventListener('scroll', isSticky);
      return () => {
         window.removeEventListener('scroll', isSticky);
      };
   }, []);

   const isSticky = () => {
      const scrollTop = window.scrollY;
      const stickyClass = scrollTop <= 100 ? 'is-sticky' : '';
      setSticky(stickyClass);
   };
   useEffect(() => {
      window.addEventListener('scroll', isSticky);
      return () => {
         window.removeEventListener('scroll', isSticky);
      };
   });

   return (
      <aside>
         <header
            className={cn(
               'inset-x-0 z-50 py-8 px-10 flex items-center justify-between transition-opacity duration-300 ease-in-out',
               sticky === 'is-sticky' ? 'fixed top-0' : 'absolute top-0',
               pathname === '/portfolio' && 'sticky top-0 bg-gray-900'
            )}
         >
            {/* pathname === '/portfolio' && 'sticky top-0 bg-gray-900' */}
            <div className="hidden md:flex items-center gap-x-4">
               <Logo />
               {pathname === '/portfolio' && (
                  <ul className="flex ml-5 items-center gap-x-6 text-white">
                     <li>
                        <Link href="#videoProduction">Video Production</Link>
                     </li>
                     <li>
                        <Link href="#branding">Branding</Link>
                     </li>
                     <li>
                        <Link href="#creatives">Creatives</Link>
                     </li>
                     <li>
                        <Link href="#productPackaging">Product Packaging</Link>
                     </li>
                     <li>
                        <Link href="#printables">Printables</Link>
                     </li>
                  </ul>
               )}
            </div>

            <span className="md:hidden">
               <Logo />
            </span>

            <Button
               variant="ghost"
               className="hover:bg-transparent relative ml-auto w-8 h-5 md:w-10 md:h-7"
               onClick={() => setOpen(!open)}
            >
               {pathname === '/' || pathname === '/portfolio' ? (
                  <Image fill src="/nav_btn.png" alt="Nav Icon" />
               ) : (
                  <Image fill src="/nav_btn_black.png" alt="Nav Black  Icon" />
               )}
            </Button>
         </header>
         <div
            className={cn(
               'fixed inset-0 bg-gray-900 z-50 h-full w-full transition-all duration-700 ease-in-out',
               open ? 'translate-x-0' : '-translate-x-full'
            )}
         >
            <header className="px-10 pt-6 flex items-center justify-between">
               <Logo />

               <Button
                  variant="ghost"
                  className="bg-transparent font-normal text-gray-400 hover:text-gray-500 text-[42px] hover:bg-transparent"
                  onClick={() => setOpen(!open)}
               >
                  ×
               </Button>
            </header>
            <div className="container mt-5 flex flex-col items-end">
               <div className="max-w-sm w-full flex flex-col gap-y-4 lg:gap-y-8 leading-none">
                  <Link
                     href="/"
                     className={cn(
                        'text-2xl lg:text-[58px] font-light hover:text-primary py-2 text-gray-200 transition-colors duration-300 ease-in-out',
                        pathname === '/' && 'text-primary'
                     )}
                     onClick={() => setOpen(false)}
                  >
                     Home
                  </Link>
                  <Link
                     href={'/about-us'}
                     className={cn(
                        'text-2xl lg:text-[58px] font-light hover:text-primary py-2 text-gray-200 transition-colors duration-300 ease-in-out',
                        pathname === '/about-us' && 'text-primary'
                     )}
                     onClick={() => setOpen(false)}
                  >
                     About Us
                  </Link>
                  <Link
                     href={'/services'}
                     className={cn(
                        'text-2xl lg:text-[58px] font-light hover:text-primary py-2 text-gray-200 transition-colors duration-300 ease-in-out',
                        pathname === '/services' && 'text-primary'
                     )}
                     onClick={() => setOpen(false)}
                  >
                     Service
                  </Link>
                  <Link
                     href={'/portfolio'}
                     className={cn(
                        'text-2xl lg:text-[58px] font-light hover:text-primary py-2 text-gray-200 transition-colors duration-300 ease-in-out',
                        pathname === '/portfolio' && 'text-primary'
                     )}
                     onClick={() => setOpen(false)}
                  >
                     Portfolio
                  </Link>

                  <Link
                     href={'/blog'}
                     className={cn(
                        'text-2xl lg:text-[58px] font-light hover:text-primary py-2 text-gray-200 transition-colors duration-300 ease-in-out',
                        pathname === '/blog' && 'text-primary'
                     )}
                     onClick={() => setOpen(false)}
                  >
                     Blog
                  </Link>
                  <Link
                     href={'/career'}
                     className={cn(
                        'text-2xl lg:text-[58px] font-light hover:text-primary py-2 text-gray-200 transition-colors duration-300 ease-in-out',
                        pathname === '/career' && 'text-primary'
                     )}
                     onClick={() => setOpen(false)}
                  >
                     Career
                  </Link>

                  <Link
                     href={'/contact'}
                     className={cn(
                        'text-2xl lg:text-[58px] font-light hover:text-primary py-2 text-gray-200 transition-colors duration-300 ease-in-out',
                        pathname === '/contact' && 'text-primary'
                     )}
                     onClick={() => setOpen(false)}
                  >
                     Contact
                  </Link>
               </div>
            </div>
         </div>
      </aside>
   );
}
